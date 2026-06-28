"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function WhyKeentel() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const header = section.querySelector(".why-header");
            const cards = section.querySelectorAll(".why-card");

            if (header && !header.classList.contains("why-revealed")) {
              header.classList.add("why-revealed");
            }
            cards.forEach((card, i) => {
              setTimeout(() => {
                card.classList.add("why-revealed");
              }, 200 + i * 140);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="why-section" ref={sectionRef}>
      <div className="why-bg-angle" aria-hidden="true"></div>
      <div className="why-container">
        <div className="why-header">
          <div className="why-header-left">
            <p className="why-eyebrow">Why Keentel</p>
            <h2 className="why-title">The contractor your neighbors already trust.</h2>
            <p className="why-story">
              At Keentel General Contractors, we take pride in being the go-to licensed GC for residential, commercial, and industrial projects across Florida.
            </p>
          </div>

          <div className="why-team-card">
            <div className="why-team-image">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=300&h=200&fit=crop&crop=faces"
                alt="Keentel team"
                loading="lazy"
              />
            </div>
            <div className="why-team-card-body">
              <svg
                className="why-meet-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <Link href="/about" className="why-meet-link">
                Meet the team <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="why-grid">
          <div className="why-card">
            <div className="why-card-icon-wrap">
              <svg
                className="why-card-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <path d="M9 12l2 2 4-4"></path>
              </svg>
            </div>
            <h3 className="why-card-title">Licensed &amp; Insured</h3>
            <p className="why-card-desc">Fully licensed (CGC · CPC · CFC) and comprehensively insured across Florida. Every crew member on your property is covered.</p>
            <span className="why-card-accent"></span>
          </div>

          <div className="why-card">
            <div className="why-card-icon-wrap">
              <svg
                className="why-card-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <h3 className="why-card-title">24/7 Response</h3>
            <p className="why-card-desc">Nights, weekends, holidays — we answer. Emergency calls receive confirmed on-site response across our full Florida service area.</p>
            <span className="why-card-accent"></span>
          </div>

          <div className="why-card">
            <div className="why-card-icon-wrap">
              <svg
                className="why-card-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
            </div>
            <h3 className="why-card-title">5‑Year Warranty</h3>
            <p className="why-card-desc">Every project backed in writing. If something isn't right within 5 years, we return and fix it — no invoices, no conditions.</p>
            <span className="why-card-accent"></span>
          </div>

          <div className="why-card">
            <div className="why-card-icon-wrap">
              <svg
                className="why-card-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 className="why-card-title">One Team, One Bill</h3>
            <p className="why-card-desc">No separate subcontractors. No split invoices. One contract covers all trades. One project manager answers for all of it.</p>
            <span className="why-card-accent"></span>
          </div>
        </div>
      </div>
    </section>
  );
}