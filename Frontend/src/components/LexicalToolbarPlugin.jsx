import React, { useCallback } from 'react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';

import {
  $getSelection,
  $isRangeSelection,
  FORMAT_TEXT_COMMAND,
  $createParagraphNode,
} from 'lexical';

import { TOGGLE_LINK_COMMAND } from '@lexical/link';

import {
  $createHeadingNode,
  $createQuoteNode,
} from '@lexical/rich-text';

import {
  INSERT_ORDERED_LIST_COMMAND,
  INSERT_UNORDERED_LIST_COMMAND,
  REMOVE_LIST_COMMAND,
} from '@lexical/list';

const ToolbarButton = ({ onClick, label }) => (
  <button
    onClick={onClick}
    className="px-2 py-1 border rounded-md hover:bg-gray-100 text-sm"
    type="button"
  >
    {label}
  </button>
);

export const LexicalToolbarPlugin = () => {
  const [editor] = useLexicalComposerContext();

  const format = useCallback(
    (formatType) => {
      editor.dispatchCommand(FORMAT_TEXT_COMMAND, formatType);
    },
    [editor]
  );

  const insertHeading = useCallback(
    (level) => {
      editor.update(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
          const headingNode = $createHeadingNode(level);
          selection.insertNodes([headingNode]);
        }
      });
    },
    [editor]
  );

  const insertParagraph = useCallback(() => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        const paragraphNode = $createParagraphNode();
        selection.insertNodes([paragraphNode]);
      }
    });
  }, [editor]);

  const insertQuote = useCallback(() => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        const quoteNode = $createQuoteNode();
        selection.insertNodes([quoteNode]);
      }
    });
  }, [editor]);

  const insertLink = useCallback(() => {
    const url = window.prompt('Enter a URL');
    if (!url) return;
    editor.dispatchCommand(TOGGLE_LINK_COMMAND, url);
  }, [editor]);

  const removeLink = useCallback(() => {
    editor.dispatchCommand(TOGGLE_LINK_COMMAND, null);
  }, [editor]);

  return (
    <div className="flex gap-2 flex-wrap mb-4">
      <ToolbarButton label="Bold" onClick={() => format('bold')} />
      <ToolbarButton label="Italic" onClick={() => format('italic')} />
      <ToolbarButton label="Underline" onClick={() => format('underline')} />
      <ToolbarButton label="H1" onClick={() => insertHeading(1)} />
      <ToolbarButton label="H2" onClick={() => insertHeading(2)} />
      <ToolbarButton label="Paragraph" onClick={insertParagraph} />
      <ToolbarButton label="Quote" onClick={insertQuote} />
      <ToolbarButton
        label="UL"
        onClick={() => editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND)}
      />
      <ToolbarButton
        label="OL"
        onClick={() => editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND)}
      />
      <ToolbarButton
        label="Remove List"
        onClick={() => editor.dispatchCommand(REMOVE_LIST_COMMAND)}
      />
      <ToolbarButton label="Add Link" onClick={insertLink} />
      <ToolbarButton label="Remove Link" onClick={removeLink} />
    </div>
  );
};
