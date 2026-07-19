// src/components/BlogFAQ.tsx
"use client";

import { useState } from 'react';

interface FAQ {
  q: string;
  a: string;
}

interface BlogFAQProps {
  faqs: FAQ[];
}

export default function BlogFAQ({ faqs }: BlogFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="blog-faqs">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`blog-faq-item ${openIndex === index ? 'active' : ''}`}
        >
          <button
            className="blog-faq-question"
            onClick={() => toggleFaq(index)}
            aria-expanded={openIndex === index}
          >
            <span>{faq.q}</span>
            <span className="blog-faq-icon">
              {openIndex === index ? '−' : '+'}
            </span>
          </button>
          <div className="blog-faq-answer-wrapper">
            <div className="blog-faq-answer">{faq.a}</div>
          </div>
        </div>
      ))}
    </div>
  );
}