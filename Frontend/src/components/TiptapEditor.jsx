import React, { useState, useRef } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import Color from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import FontFamily from "@tiptap/extension-font-family";
import Placeholder from "@tiptap/extension-placeholder";
import History from "@tiptap/extension-history";
import EmojiPicker from "emoji-picker-react";
import Image from "@tiptap/extension-image";
import FontSize from "./FontSize";

// Lucide React icons
import {
  RotateCcw,
  RotateCw,
  Type,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Bold,
  Italic,
  Underline as UnderlineIcon,
  Highlighter,
  Link as LinkIcon,
  Image as ImageIcon,
  Smile,
} from "lucide-react";


const fontFamilies = [
  "Arial",
  "Helvetica",
  "Verdana",
  "Tahoma",
  "Trebuchet MS",
  "Times New Roman",
  "Georgia",
  "Garamond",
  "Courier New",
  "Brush Script MT",
  "Comic Sans MS",
  "Impact",
  "Lucida Sans Unicode",
  "Palatino Linotype",
  "Segoe UI",
  "Sans Serif",
  "Serif",
  "Monospace"
];

const fontSizes = ["12px", "14px", "16px", "18px", "20px", "24px", "28px"];

const TiptapEditor = () => {
  const [fontFamilyIndex, setFontFamilyIndex] = useState(0);
  const [fontSize, setFontSize] = useState("16px");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showLinkInput, setShowLinkInput] = useState(false);
  const [linkUrl, setLinkUrl] = useState("");
  const linkInputRef = useRef(null);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link.configure({ openOnClick: false }),
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Highlight,
      Color,
      TextStyle,
      FontFamily,
      FontSize,
      Image,
      Placeholder.configure({ placeholder: "Compose your message…" }),
    ],
    content: "<p></p>",
  });

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        editor.chain().focus().setImage({ src: reader.result }).run();
      };
      reader.readAsDataURL(file);
    }
  };

  const applyLink = () => {
    editor.chain().focus().extendMarkRange("link").setLink({ href: linkUrl }).run();
    setShowLinkInput(false);
    setLinkUrl("");
  };

  const cancelLink = () => {
    editor.chain().focus().unsetLink().run();
    setShowLinkInput(false);
    setLinkUrl("");
  };

  const addEmoji = (emojiData) => {
    editor.chain().focus().insertContent(emojiData.emoji).run();
    setShowEmojiPicker(false);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl border border-gray-300 shadow-sm overflow-hidden">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-2 px-4 py-2 bg-gray-50 border-b border-gray-200">
        <button
          type="button"
          title="Undo"
          onClick={() => editor.chain().focus().undo().run()}
          className="btn-icon"
          aria-label="Undo"
        >
          <RotateCcw size={20} />
        </button>

        <button
          type="button"
          title="Redo"
          onClick={() => editor.chain().focus().redo().run()}
          className="btn-icon"
          aria-label="Redo"
        >
          <RotateCw size={20} />
        </button>

        <select
          value={fontFamilies[fontFamilyIndex]}
          onChange={(e) => {
            const index = fontFamilies.indexOf(e.target.value);
            setFontFamilyIndex(index);
            editor.chain().focus().setFontFamily(e.target.value).run();
          }}
          className="btn-select"
          title="Font Family"
          aria-label="Font Family"
        >
          {fontFamilies.map((f) => (
            <option key={f} value={f}>
              {f}
            </option>
          ))}
        </select>

        <select
          value={fontSize}
          onChange={(e) => {
            setFontSize(e.target.value);
            editor.chain().focus().setFontSize(e.target.value).run();
          }}
          className="btn-select"
          title="Font Size"
          aria-label="Font Size"
        >
          {fontSizes.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className="btn-icon"
          title="Bold"
          aria-label="Bold"
        >
          <Bold size={20} />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className="btn-icon"
          title="Italic"
          aria-label="Italic"
        >
          <Italic size={20} />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className="btn-icon"
          title="Underline"
          aria-label="Underline"
        >
          <UnderlineIcon size={20} />
        </button>

        <button
  type="button"
  onClick={() => editor.chain().focus().toggleHighlight().run()}
  className="btn-icon"
  title="Highlight"
  aria-label="Highlight"
>
  <Highlighter size={20} />
</button>


        <input
          type="color"
          title="Text Color"
          onChange={(e) => editor.chain().focus().setColor(e.target.value).run()}
          className="w-6 h-6 p-0 bg-transparent border-none cursor-pointer"
          aria-label="Text Color Picker"
        />

        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
          className="btn-icon"
          title="Align Left"
          aria-label="Align Left"
        >
          <AlignLeft size={20} />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
          className="btn-icon"
          title="Align Center"
          aria-label="Align Center"
        >
          <AlignCenter size={20} />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
          className="btn-icon"
          title="Align Right"
          aria-label="Align Right"
        >
          <AlignRight size={20} />
        </button>

        <button
          type="button"
          onClick={() => setShowEmojiPicker((prev) => !prev)}
          className="btn-icon"
          title="Insert Emoji"
          aria-label="Insert Emoji"
        >
          <Smile size={20} />
        </button>

        <button
          type="button"
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
          className="btn-icon"
          title="Insert Link"
          aria-label="Insert Link"
        >
          <LinkIcon size={20} />
        </button>

        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          id="upload-img"
          className="hidden"
        />
        <label
          htmlFor="upload-img"
          className="btn-icon cursor-pointer"
          title="Insert Image"
          aria-label="Insert Image"
        >
          <ImageIcon size={20} />
        </label>
      </div>

      {/* Link Input */}
      {showLinkInput && (
        <div className="flex items-center gap-2 px-4 py-2 bg-white border-b border-gray-200">
          <input
            ref={linkInputRef}
            type="text"
            value={linkUrl}
            onChange={(e) => setLinkUrl(e.target.value)}
            placeholder="Enter URL"
            className="flex-1 px-2 py-1 text-sm border border-gray-300 rounded"
            aria-label="Link URL"
          />
          <button
            type="button"
            onClick={applyLink}
            className="px-3 py-1 bg-[#26BF64] text-white rounded hover:bg-[#22a857]"
          >
            Apply
          </button>
          <button
            type="button"
            onClick={cancelLink}
            className="px-3 py-1 bg-gray-300 text-black rounded hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      )}

      {/* Emoji Picker */}
      {showEmojiPicker && (
        <div className="p-3 border-t border-gray-200">
          <EmojiPicker onEmojiClick={addEmoji} />
        </div>
      )}

      {/* Editor Content */}
      <EditorContent
        editor={editor}
        className="min-h-[300px] px-4 py-3 focus:outline-none prose max-w-full"
      />

      {/* Send Button (Fixed at bottom right like Gmail) */}
      <div className="flex justify-end px-4 py-3 border-t border-gray-200 bg-gray-50">
        <button
          type="button"
          className="bg-[#1C3C6D] text-white px-6 py-2 rounded-full hover:bg-[#163259] transition-all shadow-sm"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default TiptapEditor;
