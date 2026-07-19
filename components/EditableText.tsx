// src/components/EditableText.tsx
"use client";

import { useState, useEffect, useRef } from 'react';
import ContentEditable from 'react-contenteditable';
import { useBlogEditor } from '@/context/BlogEditorContext';

interface EditableTextProps {
  field: string;
  slug: string;
  value: string;
  isAdmin: boolean;
  tag?: string;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
}

export default function EditableText({
  field,
  slug,
  value,
  isAdmin,
  tag = 'div',
  className = '',
  href,
  target = '_self',
  rel = '',
}: EditableTextProps) {
  const [html, setHtml] = useState(value);
  const { setPendingEdit } = useBlogEditor();
  const contentRef = useRef<HTMLElement>(null!);

  useEffect(() => {
    setHtml(value);
  }, [value]);

  const handleChange = (e: any) => {
    const newValue = e.target.value;
    setHtml(newValue);
    // Track changes for manual save
    if (isAdmin) {
      setPendingEdit(field, newValue);
    }
  };

  // ─── No auto‑save on blur ───
  const handleBlur = () => {
    // Only updates local state, no API call
  };

  // ─── Render (same as before) ───
  if (!isAdmin) {
    const Tag = tag as any;
    const linkProps = tag === 'a' && href ? { href, target, rel } : {};
    return <Tag className={className} dangerouslySetInnerHTML={{ __html: html }} {...linkProps} />;
  }

  if (tag === 'a' && href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={className}
        style={{
          outline: '2px dashed #a6238f',
          padding: '4px 6px',
          minHeight: '1em',
          borderRadius: '4px',
          cursor: 'text',
          display: 'inline-block',
          textDecoration: 'underline',
        }}
      >
        <ContentEditable
          html={html}
          onChange={handleChange}
          onBlur={handleBlur}
          tagName="span"
          innerRef={contentRef}
          style={{ outline: 'none', padding: '0', minHeight: '1em', display: 'inline' }}
        />
      </a>
    );
  }

  const Tag = tag as any;
  return (
    <ContentEditable
      html={html}
      onChange={handleChange}
      onBlur={handleBlur}
      tagName={tag}
      className={className}
      innerRef={contentRef}
      style={{
        outline: '2px dashed #a6238f',
        padding: '4px 6px',
        minHeight: '1em',
        borderRadius: '4px',
        cursor: 'text',
      }}
    />
  );
}