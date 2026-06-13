"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const left = section.querySelector(".cta-left");
            const right = section.querySelector(".cta-right");
            left?.classList.add("cta-revealed");
            right?.classList.add("cta-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="cta-section" ref={sectionRef}>
      <div className="cta-container">
        <div className="cta-left">
          <p className="cta-eyebrow">Let's build</p>
          <h2 className="cta-title">Your next project starts with a conversation.</h2>
          <p className="cta-subtext">Free estimate. No pressure. Usually back within 4 business hours.</p>
        </div>

        <div className="cta-right">
          <div className="cta-card">
            <a href="tel:8133950000" className="cta-phone">
              <svg className="cta-phone-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              (813) 395-0000
            </a>
            <Link href="/contact" className="cta-btn">Request Free Estimate</Link>
            <ul className="cta-perks">
              <li className="cta-perk">
                <svg className="cta-perk-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Free, no-obligation quote
              </li>
              <li className="cta-perk">
                <svg className="cta-perk-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                4-hour response
              </li>
              <li className="cta-perk">
                <svg className="cta-perk-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="M9 12l2 2 4-4"></path></svg>
                Licensed &amp; insured
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}