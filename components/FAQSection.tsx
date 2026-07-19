"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function FAQSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const answerRefs = useRef<Map<number, HTMLDivElement>>(new Map());
  const openIndexRef = useRef<number | null>(null); // no state, just a ref

  // 1. Reveal animation (unchanged)
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const header = section.querySelector(".faq-header");
            const items = section.querySelectorAll(".faq-item");
            if (header) header.classList.add("faq-revealed");
            items.forEach((item, i) => {
              setTimeout(() => item.classList.add("faq-revealed"), 150 + i * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // 2. Close when clicking outside the whole section
  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (sectionRef.current && !sectionRef.current.contains(e.target as Node)) {
        // Close whatever is open
        const current = openIndexRef.current;
        if (current !== null) {
          const el = answerRefs.current.get(current);
          if (el) {
            el.style.maxHeight = "0px";
            el.parentElement?.classList.remove("faq-open");
          }
          openIndexRef.current = null;
        }
      }
    };
    document.addEventListener("click", handleOutside);
    return () => document.removeEventListener("click", handleOutside);
  }, []);

  // 3. Toggle an answer – pure DOM, no React state
  const toggle = (index: number) => {
    const prev = openIndexRef.current;
    const answerEl = answerRefs.current.get(index);
    if (!answerEl) return;

    // Close the previously open item
    if (prev !== null && prev !== index) {
      const prevAnswer = answerRefs.current.get(prev);
      if (prevAnswer) {
        prevAnswer.style.maxHeight = "0px";
        prevAnswer.parentElement?.classList.remove("faq-open");
      }
    }

    // Toggle the clicked item
    if (prev === index) {
      // It's already open → close it
      answerEl.style.maxHeight = "0px";
      answerEl.parentElement?.classList.remove("faq-open");
      openIndexRef.current = null;
    } else {
      // Open it
      answerEl.style.maxHeight = answerEl.scrollHeight + 20 + "px";
      answerEl.parentElement?.classList.add("faq-open");
      openIndexRef.current = index;
    }
  };

  const faqs = [
    { question: "What types of projects do you specialize in?", answer: "Commercial, industrial, institutional, multi-family, and large residential construction projects." },
    { question: "Do you provide design-build services?", answer: "Yes. We manage planning, design coordination, and construction through one integrated team." },
    { question: "Can you manage the entire construction project?", answer: "Absolutely. We oversee planning, scheduling, coordination, construction, quality control, and project closeout." },
    { question: "Do you perform commercial renovations?", answer: "Yes. We complete office renovations, retail build-outs, tenant improvements, hospitality projects, and facility upgrades." },
    { question: "Do you offer emergency restoration services?", answer: "Yes. We provide restoration and reconstruction following fire, storm, water, and structural damage." },
    { question: "Can electrical services be included in my project?", answer: "Yes. Electrical contracting is available as part of our integrated construction services or as a standalone solution." },
  ];

  return (
    <section className="faq-section" ref={sectionRef}>
      <div className="faq-container">
        <div className="faq-header">
          <span className="faq-eyebrow">FAQ</span>
          <h2 className="faq-title">FREQUENTLY ASKED QUESTIONS</h2>
          <p className="faq-subtitle">Answers to Common Questions</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              data-faq-index={index}
              className="faq-item"
              onClick={(e) => {
                // stop all propagation – we handle everything manually
                e.stopPropagation();
                e.preventDefault();
                toggle(index);
              }}
            >
              <div className="faq-question">
                <span>{faq.question}</span>
                <span className="faq-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </span>
              </div>
              <div
                className="faq-answer"
                ref={(el) => {
                  if (el) answerRefs.current.set(index, el);
                  else answerRefs.current.delete(index);
                }}
                onClick={(e) => e.stopPropagation()} // prevent toggling when clicking answer text
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-cta-wrapper">
          <Link href="/faq" className="faq-cta">
            View All FAQs
            <svg className="faq-cta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}