// src/app/test-editor/page.tsx
"use client";

import { useState } from 'react';
import ContentEditable from 'react-contenteditable';

export default function TestEditor() {
  const [html, setHtml] = useState('Click me to edit this text');
  const [lastSaved, setLastSaved] = useState(html);

  const handleChange = (e: any) => {
    setHtml(e.target.value);
  };

  const handleBlur = async () => {
    if (html === lastSaved) {
      console.log('No change');
      return;
    }
    console.log('Saving:', html);
    setLastSaved(html);
    // Optionally save to API later
  };

  return (
    <div style={{ maxWidth: 800, margin: '50px auto', padding: '20px' }}>
      <h1>🧪 Test Editor - No dependencies</h1>
      <p>Edit the text below (no external components):</p>
      <div style={{ border: '2px solid #ccc', padding: '16px', borderRadius: '8px' }}>
        <ContentEditable
          html={html}
          onChange={handleChange}
          onBlur={handleBlur}
          tagName="div"
          style={{
            outline: '2px dashed #a6238f',
            padding: '8px',
            minHeight: '40px',
            cursor: 'text',
          }}
        />
      </div>
      <div style={{ marginTop: '20px' }}>
        <p><strong>Current value:</strong> {html}</p>
        <p><strong>Last saved:</strong> {lastSaved}</p>
      </div>
    </div>
  );
}