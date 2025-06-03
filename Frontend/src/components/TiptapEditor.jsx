import React, { useState, useEffect, useRef } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import Color from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import FontFamily from "@tiptap/extension-font-family";
import FontSize from "./FontSize"; // Your custom extension
import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import History from "@tiptap/extension-history";
import EmojiPicker from "emoji-picker-react";
import api from "../api/axios";

const fontFamilies = ["Arial", "Georgia", "Courier New", "Times New Roman"];
const fontSizes = ["12px", "14px", "16px", "18px", "24px", "32px"];

const TiptapEditor = ({ content, onChange }) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showLinkInput, setShowLinkInput] = useState(false);
  const [linkUrl, setLinkUrl] = useState("");
  const [fontFamilyIndex, setFontFamilyIndex] = useState(0);
  const [fontSize, setFontSize] = useState("16px");

  const linkInputRef = useRef(null);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({ history: false }),
      Underline,
      Link.configure({ openOnClick: false, linkOnPaste: false }),
      TextStyle,
      Color,
      FontFamily,
      FontSize,
      Highlight,
      Image,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      History.configure({ depth: 100 }),
      Placeholder.configure({ placeholder: "Start writing here..." }),
    ],
    content,
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
    onKeyDown: (event) => {
      const isMac = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
      const ctrlKey = isMac ? event.metaKey : event.ctrlKey;

      if (ctrlKey && event.key.toLowerCase() === "k") {
        event.preventDefault();
        const hasLink = editor.isActive("link");
        if (hasLink) {
          editor.chain().focus().unsetLink().run();
          setShowLinkInput(false);
          setLinkUrl("");
        } else {
          setShowLinkInput(true);
          const attrs = editor.getAttributes("link");
          setLinkUrl(attrs.href || "");
          setTimeout(() => linkInputRef.current?.focus(), 50);
        }
        return true;
      }

      if (ctrlKey && event.shiftKey && event.key.toLowerCase() === "f") {
        event.preventDefault();
        const nextIndex = (fontFamilyIndex + 1) % fontFamilies.length;
        setFontFamilyIndex(nextIndex);
        editor.chain().focus().setFontFamily(fontFamilies[nextIndex]).run();
        return true;
      }

      return false;
    },
  });

  useEffect(() => {
    if (!editor) return;
    if (!showLinkInput) setLinkUrl("");
  }, [showLinkInput, editor]);

  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content, false);
    }
  }, [content, editor]);

  if (!editor) return null;

  const addEmoji = (emojiData) => {
    editor.chain().focus().insertContent(emojiData.emoji).run();
    setShowEmojiPicker(false);
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    try {
      const formDataImage = new FormData();
      formDataImage.append("image", file);

      const res = await api.post("/upload", formDataImage, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const url = res.data.imageUrl;

      if (url) {
        editor.chain().focus().setImage({ src: url }).run();
      } else {
        alert("Upload failed: no URL returned");
      }
    } catch (err) {
      console.error("Image upload error:", err);
      alert("Image upload failed");
    }
  };

  const applyLink = () => {
    if (!linkUrl) {
      editor.chain().focus().unsetLink().run();
    } else {
      editor.chain().focus().extendMarkRange("link").setLink({ href: linkUrl }).run();
    }
    setShowLinkInput(false);
    setLinkUrl("");
  };

  const cancelLink = () => {
    setShowLinkInput(false);
    setLinkUrl("");
  };

  return (
    <div className="w-full">
      {/* Toolbar */}
      <div className="flex flex-wrap gap-2 mb-4 p-2 border border-gray-300 rounded bg-white shadow-sm">
        <button onClick={() => editor.chain().focus().toggleBold().run()} className="btn">B</button>
        <button onClick={() => editor.chain().focus().toggleItalic().run()} className="btn">I</button>
        <button onClick={() => editor.chain().focus().toggleUnderline().run()} className="btn">U</button>
        <button onClick={() => editor.chain().focus().toggleHighlight().run()} className="btn">H</button>

        <button
  onClick={() => {
    const hasLink = editor.isActive("link");
    if (hasLink) {
      editor.chain().focus().unsetLink().run();
      setShowLinkInput(false);
      setLinkUrl("");
    } else {
      setShowLinkInput(true);
      const attrs = editor.getAttributes("link");
      setLinkUrl(attrs.href || "");
      setTimeout(() => linkInputRef.current?.focus(), 50);
    }
  }}
  className="btn"
>
  🔗
</button>

        <select
          value={fontSize}
          onChange={(e) => {
            setFontSize(e.target.value);
            editor.chain().focus().setFontSize(e.target.value).run();
          }}
          className="text-sm border rounded px-2"
        >
          {fontSizes.map((size) => (
            <option key={size} value={size}>{size}</option>
          ))}
        </select>

        <select
          value={fontFamilies[fontFamilyIndex]}
          onChange={(e) => {
            const index = fontFamilies.indexOf(e.target.value);
            setFontFamilyIndex(index);
            editor.chain().focus().setFontFamily(e.target.value).run();
          }}
          className="text-sm border rounded px-2"
        >
          {fontFamilies.map((family) => (
            <option key={family} value={family}>{family}</option>
          ))}
        </select>

        <input
          type="color"
          onChange={(e) => editor.chain().focus().setColor(e.target.value).run()}
          className="w-8 h-8 border rounded"
        />

        <button onClick={() => editor.chain().focus().setTextAlign("left").run()} className="btn">Left</button>
        <button onClick={() => editor.chain().focus().setTextAlign("center").run()} className="btn">Center</button>
        <button onClick={() => editor.chain().focus().setTextAlign("right").run()} className="btn">Right</button>

        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="text-sm"
        />

        <button onClick={() => setShowEmojiPicker((prev) => !prev)} className="btn">😊</button>

        <button onClick={() => editor.chain().focus().undo().run()} className="btn">↺</button>
        <button onClick={() => editor.chain().focus().redo().run()} className="btn">↻</button>
      </div>

      {/* Link input */}
      {showLinkInput && (
        <div className="flex gap-2 mb-2">
          <input
            ref={linkInputRef}
            type="text"
            value={linkUrl}
            onChange={(e) => setLinkUrl(e.target.value)}
            placeholder="Enter URL"
            className="w-full border px-2 py-1 rounded text-sm"
          />
          <button onClick={applyLink} className="btn bg-green-500 text-white">Apply</button>
          <button onClick={cancelLink} className="btn bg-red-500 text-white">Cancel</button>
        </div>
      )}

      {/* Emoji Picker */}
      {showEmojiPicker && (
        <div className="mb-2">
          <EmojiPicker onEmojiClick={addEmoji} />
        </div>
      )}

      {/* Editor */}
      <EditorContent editor={editor} className="prose max-w-full border p-4 rounded shadow" />
    </div>
  );
};

export default TiptapEditor;
