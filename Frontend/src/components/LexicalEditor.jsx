import React from 'react';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';

import { theme } from './LexicalTheme';
import { LexicalToolbarPlugin } from './LexicalToolbarPlugin';

import {
  HeadingNode,
  QuoteNode,
} from '@lexical/rich-text';

import {
  ListNode,
  ListItemNode,
} from '@lexical/list';

import { LinkNode } from '@lexical/link';

export const LexicalEditor = ({ value, onChange }) => {
  const initialConfig = {
    namespace: 'MyEditor',
    theme,
    onError(error) {
      console.error(error);
    },
    nodes: [HeadingNode, QuoteNode, ListNode, ListItemNode, LinkNode],
    editorState: value ? JSON.parse(value) : undefined,
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <LexicalToolbarPlugin />
      <RichTextPlugin
        contentEditable={
          <ContentEditable
            className="border p-4 rounded-md min-h-[200px] focus:outline-none"
            spellCheck={true}
          />
        }
        placeholder={<div className="text-gray-400 p-4">Write your content...</div>}
      />
      <HistoryPlugin />
      <ListPlugin />
      <LinkPlugin />
      <AutoFocusPlugin />
      <OnChangePlugin
        onChange={(editorState) => {
          editorState.read(() => {
            onChange(JSON.stringify(editorState.toJSON()));
          });
        }}
      />
    </LexicalComposer>
  );
};
