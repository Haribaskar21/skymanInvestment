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
import FontSize from "./FontSize"; // your custom extension
import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import History from "@tiptap/extension-history";
import EmojiPicker from "emoji-picker-react";
import api from "../api/axios";

const fontFamilies = ["Arial", "Georgia", "Courier New", "Times New Roman"];

const TiptapEditor = ({ content, onChange }) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showLinkInput, setShowLinkInput] = useState(false);
  const [linkUrl, setLinkUrl] = useState("");
  const [fontFamilyIndex, setFontFamilyIndex] = useState(0);

  const linkInputRef = useRef(null);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({ history: false }),
      Underline,
      Link.configure({
        openOnClick: false,
        linkOnPaste: false,
      }),
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
          setTimeout(() => {
            linkInputRef.current?.focus();
          }, 50);
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

    if (!showLinkInput) {
      setLinkUrl("");
    }
  }, [showLinkInput, editor]);

  if (!editor) return null;

  const fontSizes = ["12px", "14px", "16px", "18px", "24px", "32px"];

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
    <div className="border border-gray-300 rounded-md shadow-sm relative">
      {/* Toolbar */}
      <div className="flex flex-wrap gap-2 p-2 border-b bg-gray-100 items-center select-none">
        {/* Bold */}
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`px-3 py-1 rounded-md border transition-colors duration-150 ease-in-out ${
            editor.isActive("bold")
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-700 hover:bg-blue-500 hover:text-white"
          } focus:outline-none focus:ring-2 focus:ring-blue-400`}
          type="button"
          title="Bold (Ctrl+B)"
        >
          B
        </button>

        {/* Italic */}
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`px-3 py-1 rounded-md border transition-colors duration-150 ease-in-out ${
            editor.isActive("italic")
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-700 hover:bg-blue-500 hover:text-white"
          } focus:outline-none focus:ring-2 focus:ring-blue-400`}
          type="button"
          title="Italic (Ctrl+I)"
        >
          I
        </button>

        {/* Underline */}
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`px-3 py-1 rounded-md border transition-colors duration-150 ease-in-out ${
            editor.isActive("underline")
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-700 hover:bg-blue-500 hover:text-white"
          } focus:outline-none focus:ring-2 focus:ring-blue-400`}
          type="button"
          title="Underline (Ctrl+U)"
        >
          U
        </button>

        {/* Highlight */}
        <button
          onClick={() => editor.chain().focus().toggleHighlight().run()}
          className={`px-3 py-1 rounded-md border transition-colors duration-150 ease-in-out ${
            editor.isActive("highlight")
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-700 hover:bg-blue-500 hover:text-white"
          } focus:outline-none focus:ring-2 focus:ring-blue-400`}
          type="button"
          title="Highlight"
        >
          🖍
        </button>

        {/* Text Align */}
        <button
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
          className={`px-3 py-1 rounded-md border transition-colors duration-150 ease-in-out ${
            editor.isActive({ textAlign: "left" })
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-700 hover:bg-blue-500 hover:text-white"
          } focus:outline-none focus:ring-2 focus:ring-blue-400`}
          type="button"
          title="Align Left"
        >
          ⬅
        </button>

        <button
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
          className={`px-3 py-1 rounded-md border transition-colors duration-150 ease-in-out ${
            editor.isActive({ textAlign: "center" })
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-700 hover:bg-blue-500 hover:text-white"
          } focus:outline-none focus:ring-2 focus:ring-blue-400`}
          type="button"
          title="Align Center"
        >
          ⏺
        </button>

        <button
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
          className={`px-3 py-1 rounded-md border transition-colors duration-150 ease-in-out ${
            editor.isActive({ textAlign: "right" })
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-700 hover:bg-blue-500 hover:text-white"
          } focus:outline-none focus:ring-2 focus:ring-blue-400`}
          type="button"
          title="Align Right"
        >
          ➡
        </button>

        {/* Lists */}
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`px-3 py-1 rounded-md border transition-colors duration-150 ease-in-out ${
            editor.isActive("bulletList")
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-700 hover:bg-blue-500 hover:text-white"
          } focus:outline-none focus:ring-2 focus:ring-blue-400`}
          type="button"
          title="Bullet List"
        >
          • List
        </button>

        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`px-3 py-1 rounded-md border transition-colors duration-150 ease-in-out ${
            editor.isActive("orderedList")
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-700 hover:bg-blue-500 hover:text-white"
          } focus:outline-none focus:ring-2 focus:ring-blue-400`}
          type="button"
          title="Ordered List"
        >
          1. List
        </button>

        {/* Blockquote */}
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`px-3 py-1 rounded-md border transition-colors duration-150 ease-in-out ${
            editor.isActive("blockquote")
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-700 hover:bg-blue-500 hover:text-white"
          } focus:outline-none focus:ring-2 focus:ring-blue-400`}
          type="button"
          title="Blockquote"
        >
          ❝ ❞
        </button>

        {/* Code Block */}
        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={`px-3 py-1 rounded-md border transition-colors duration-150 ease-in-out ${
            editor.isActive("codeBlock")
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-700 hover:bg-blue-500 hover:text-white"
          } focus:outline-none focus:ring-2 focus:ring-blue-400`}
          type="button"
          title="Code Block"
        >
          {"</>"}
        </button>

        {/* Emoji Picker */}
        <button
          onClick={() => setShowEmojiPicker((v) => !v)}
          className="px-3 py-1 rounded-md border bg-white text-gray-700 hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="button"
          title="Insert Emoji"
        >
          😊
        </button>

        {/* Insert Image */}
        <label
          htmlFor="upload-image"
          className="px-3 py-1 rounded-md border cursor-pointer bg-white text-gray-700 hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          title="Insert Image"
        >
          🖼
        </label>
        <input
          id="upload-image"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          style={{ display: "none" }}
        />

        {/* Link */}
        <button
          onClick={() => {
            const hasLink = editor.isActive("link");
            if (hasLink) {
              editor.chain().focus().unsetLink().run();
              setShowLinkInput(false);
            } else {
              setShowLinkInput(true);
              const attrs = editor.getAttributes("link");
              setLinkUrl(attrs.href || "");
              setTimeout(() => {
                linkInputRef.current?.focus();
              }, 50);
            }
          }}
          className={`px-3 py-1 rounded-md border transition-colors duration-150 ease-in-out ${
            editor.isActive("link")
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-700 hover:bg-blue-500 hover:text-white"
          } focus:outline-none focus:ring-2 focus:ring-blue-400`}
          type="button"
          title="Insert Link (Ctrl+K)"
        >
          🔗
        </button>

        {/* Undo */}
        <button
          onClick={() => editor.chain().focus().undo().run()}
          className="px-3 py-1 rounded-md border bg-white text-gray-700 hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="button"
          title="Undo (Ctrl+Z)"
          disabled={!editor.can().undo()}
        >
          ↺
        </button>

        {/* Redo */}
        <button
          onClick={() => editor.chain().focus().redo().run()}
          className="px-3 py-1 rounded-md border bg-white text-gray-700 hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="button"
          title="Redo (Ctrl+Y)"
          disabled={!editor.can().redo()}
        >
          ↻
        </button>
      </div>

      {/* Font Size Buttons */}
      <div className="flex gap-1 p-2 border-b bg-gray-50 overflow-x-auto">
        {fontSizes.map((size) => (
          <button
            key={size}
            onClick={() => editor.chain().focus().setFontSize(size).run()}
            className={`px-2 py-1 border rounded-md text-sm whitespace-nowrap ${
              editor.getAttributes("textStyle").fontSize === size
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 hover:bg-blue-500 hover:text-white"
            }`}
            type="button"
            title={`Set font size to ${size}`}
          >
            {size}
          </button>
        ))}
      </div>

      {/* Font Family display */}
      <div className="p-2 bg-gray-50 border-b text-sm text-gray-600 select-none">
        Current font family: <b>{fontFamilies[fontFamilyIndex]}</b> (toggle with Ctrl+Shift+F)
      </div>

      {/* Link input popup */}
      {showLinkInput && (
        <div className="absolute top-12 left-4 bg-white p-3 rounded shadow-md border z-50 flex gap-2 items-center max-w-sm w-full">
          <input
            ref={linkInputRef}
            type="text"
            value={linkUrl}
            onChange={(e) => setLinkUrl(e.target.value)}
            placeholder="Enter URL"
            className="border rounded px-2 py-1 flex-grow focus:outline-none focus:ring-2 focus:ring-blue-400"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                applyLink();
              } else if (e.key === "Escape") {
                e.preventDefault();
                cancelLink();
              }
            }}
          />
          <button
            onClick={applyLink}
            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Apply
          </button>
          <button
            onClick={cancelLink}
            className="bg-gray-300 text-gray-700 px-3 py-1 rounded hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            Cancel
          </button>
        </div>
      )}

      {/* Emoji picker */}
      {showEmojiPicker && (
        <div className="absolute bottom-full mb-2 left-0 z-50">
          <EmojiPicker
            onEmojiClick={addEmoji}
            lazyLoadEmojis={true}
            width={300}
            height={350}
            searchDisabled
          />
        </div>
      )}

      {/* Editor content */}
      <EditorContent
        editor={editor}
        className="p-4 min-h-[300px] focus:outline-none prose max-w-full"
        spellCheck={true}
      />
    </div>
  );
};

export default TiptapEditor;
