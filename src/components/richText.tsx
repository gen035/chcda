// components/RichTextComponent.tsx
import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS, INLINES, Document } from '@contentful/rich-text-types';

// Define the type for the rich text document
interface RichTextProps {
  richTextDocument: Document;
}

const renderOptions = {
  renderMark: {
    [MARKS.BOLD]: (text: React.ReactNode) => <strong>{text}</strong>,
  },
  renderNode: {
    [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => (
      <a href={node.data.uri} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
    [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => <p>{children}</p>,
  },
};

const RichText: React.FC<RichTextProps> = ({ richTextDocument }) => {
  return (documentToReactComponents(richTextDocument, renderOptions))
};

export default RichText;
