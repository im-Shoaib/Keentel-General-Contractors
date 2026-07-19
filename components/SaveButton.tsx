// src/components/SaveButton.tsx
"use client";

export default function SaveButton() {
  const handleSave = () => {
    document.querySelectorAll('[contenteditable="true"]').forEach((el) => {
      (el as HTMLElement).blur();
    });
  };

  return (
    <button
      onClick={handleSave}
      style={{
        padding: '12px 32px',
        background: '#a6238f',
        color: '#fff',
        border: 'none',
        borderRadius: '50px',
        fontSize: '1rem',
        fontWeight: '600',
        cursor: 'pointer',
        boxShadow: '0 4px 16px rgba(166,35,143,0.3)',
      }}
    >
      💾 Save All Changes
    </button>
  );
}