// src/components/SaveControls.tsx
"use client";

import { useBlogEditor } from '@/context/BlogEditorContext';
import SaveNotification from './SaveNotification';

export default function SaveControls({ slug }: { slug: string }) {
  const { pendingEdits, saveAll } = useBlogEditor();
  const pendingCount = Object.keys(pendingEdits).length;

  const handleSave = async () => {
    await saveAll(slug);
  };

  return (
    <div className="blog-save-wrapper">
      <button className="blog-save-btn" onClick={handleSave}>
        💾 Save All Changes {pendingCount > 0 && `(${pendingCount} pending)`}
      </button>
      <SaveNotification />
    </div>
  );
}