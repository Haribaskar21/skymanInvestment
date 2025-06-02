// src/components/TiptapEditor.jsx
import React, { useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';

const TiptapEditor = ({ value, onChange }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link.configure({
        openOnClick: false,
      }),
    ],
    content: value || '',
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  // Sync external value changes (e.g. when loading edit data)
  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value || '');
    }
  }, [value, editor]);

  if (!editor) {
    return null;
  }

  return (
    <div className="border rounded-md p-3">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} className="min-h-[200px] prose max-w-none" />
    </div>
  );
};

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  const addLink = () => {
    const url = window.prompt('Enter URL');
    if (url) {
      editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
    }
  };

  const removeLink = () => {
    editor.chain().focus().unsetLink().run();
  };

  return (
    <div className="flex flex-wrap gap-2 mb-3">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'bg-blue-600 text-white px-2 py-1 rounded' : 'px-2 py-1 border rounded'}
        type="button"
      >
        Bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive('italic') ? 'bg-blue-600 text-white px-2 py-1 rounded' : 'px-2 py-1 border rounded'}
        type="button"
      >
        Italic
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={editor.isActive('underline') ? 'bg-blue-600 text-white px-2 py-1 rounded' : 'px-2 py-1 border rounded'}
        type="button"
      >
        Underline
      </button>

      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive('heading', { level: 1 }) ? 'bg-blue-600 text-white px-2 py-1 rounded' : 'px-2 py-1 border rounded'}
        type="button"
      >
        H1
      </button>

      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive('heading', { level: 2 }) ? 'bg-blue-600 text-white px-2 py-1 rounded' : 'px-2 py-1 border rounded'}
        type="button"
      >
        H2
      </button>

      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'bg-blue-600 text-white px-2 py-1 rounded' : 'px-2 py-1 border rounded'}
        type="button"
      >
        UL
      </button>

      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive('orderedList') ? 'bg-blue-600 text-white px-2 py-1 rounded' : 'px-2 py-1 border rounded'}
        type="button"
      >
        OL
      </button>

      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive('blockquote') ? 'bg-blue-600 text-white px-2 py-1 rounded' : 'px-2 py-1 border rounded'}
        type="button"
      >
        Quote
      </button>

      <button
        onClick={addLink}
        className="px-2 py-1 border rounded"
        type="button"
      >
        Add Link
      </button>

      <button
        onClick={removeLink}
        className="px-2 py-1 border rounded"
        type="button"
      >
        Remove Link
      </button>
    </div>
  );
};

export default TiptapEditor;
