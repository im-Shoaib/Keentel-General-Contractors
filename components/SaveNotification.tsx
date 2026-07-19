"use client";

import { useState, useEffect } from 'react';

export default function SaveNotification() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleSave = () => {
      setVisible(true);
      setTimeout(() => setVisible(false), 2500);
    };
    window.addEventListener('contentSaved', handleSave);
    return () => window.removeEventListener('contentSaved', handleSave);
  }, []);

  if (!visible) return null;
  return <div className="blog-save-notification">✅ Changes saved successfully!</div>;
}