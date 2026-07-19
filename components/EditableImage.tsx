// src/components/EditableImage.tsx
"use client";

import { useState, useRef } from 'react';

interface EditableImageProps {
  field: string;
  slug: string;
  src: string;
  alt: string;
  isAdmin: boolean;
  className?: string;
}

export default function EditableImage({
  field,
  slug,
  src,
  alt,
  isAdmin,
  className = '',
}: EditableImageProps) {
  const [imageSrc, setImageSrc] = useState(src);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // ─── Resize image before converting to base64 ───
  const resizeImage = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          // Calculate new dimensions (max width 800px)
          let width = img.width;
          let height = img.height;
          const maxWidth = 800;
          if (width > maxWidth) {
            height = (height * maxWidth) / width;
            width = maxWidth;
          }
          
          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx?.drawImage(img, 0, 0, width, height);
          resolve(canvas.toDataURL('image/jpeg', 0.8));
        };
        img.onerror = reject;
        img.src = e.target?.result as string;
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleImageClick = () => {
    if (isAdmin) {
      fileInputRef.current?.click();
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      // ─── Resize image ───
      const resizedBase64 = await resizeImage(file);

      // ─── Save to API ───
      const response = await fetch('/api/blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug, field, value: resizedBase64 }),
      });

      if (response.ok) {
        setImageSrc(resizedBase64);
        // ─── Dispatch success event ───
        window.dispatchEvent(new CustomEvent('contentSaved'));
      } else {
        console.error('Image save failed:', await response.text());
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  if (!isAdmin) {
    return <img src={imageSrc} alt={alt} className={className} />;
  }

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <img
        src={imageSrc}
        alt={alt}
        className={className}
        style={{
          cursor: 'pointer',
          outline: '2px dashed #a6238f',
          borderRadius: '8px',
        }}
        onClick={handleImageClick}
      />
      {isAdmin && (
        <div
          style={{
            position: 'absolute',
            bottom: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(166,35,143,0.9)',
            color: '#fff',
            padding: '4px 12px',
            borderRadius: '4px',
            fontSize: '12px',
            fontWeight: '600',
            pointerEvents: 'none',
          }}
        >
          Click to change image
        </div>
      )}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        style={{ display: 'none' }}
      />
    </div>
  );
}