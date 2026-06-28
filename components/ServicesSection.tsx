"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const header = section.querySelector(".sec2-header");
            const cards = section.querySelectorAll(".sec2-card");

            if (header && !header.classList.contains("sec2-revealed")) {
              header.classList.add("sec2-revealed");
            }
            cards.forEach((card, index) => {
              if (!card.classList.contains("sec2-revealed")) {
                setTimeout(() => {
                  card.classList.add("sec2-revealed");
                }, index * 120);
              }
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

  return (
    <section className="sec2-services" ref={sectionRef}>
      <div className="sec2-container">
        <div className="sec2-header">
          <p className="sec2-eyebrow">WHAT WE DO</p>
          <h2 className="sec2-title">One contractor.<br />Every project.</h2>
          <p className="sec2-subtitle">One supply chain, one licensed team, one point of accountability — from permit to punch list.</p>

          {/* New descriptive block */}
          <div className="sec2-description-block">
            <div className="sec2-description-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <div className="sec2-description-text">
              <p>
                At Keentel General Contractors, we manage the full scope of construction and contracting services — design, build, electrical, remodeling, and finishing — all under one roof. We serve residential, commercial, and industrial clients across Tampa Bay and throughout Florida, with the same licensed team handling every trade on your project.
              </p>
              <p className="sec2-highlight">
                We have seen firsthand how divided project management leads to delays and cost overruns. Our integrated approach eliminates that risk entirely.
              </p>
            </div>
          </div>
        </div>

        {/* Sub-heading */}
        <div style={{ textAlign: "center", margin: "50px 0 30px" }}>
          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, color: "var(--color-navy)" }}>Our Construction Services</h3>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--color-text-muted)", maxWidth: "700px", margin: "10px auto 0" }}>From Tampa Bay to every corner of Florida, we deliver the full scope of construction services that homeowners, businesses, and industrial facilities depend on.</p>
        </div>

        <div className="sec2-grid">
          {/* Card 1: Design */}
          <div className="sec2-card">
            <div className="sec2-card-image">
              <img src="/assets/serv1.png" alt="Design Services" loading="lazy" />
              <svg className="sec2-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
              </svg>
            </div>
            <div className="sec2-card-body">
              <span className="sec2-card-category">Design Services</span>
              <h3 className="sec2-card-title">Design Services</h3>
              <p className="sec2-card-desc">Permit-ready drawings, architectural coordination, and full project planning — every detail defined before construction begins.</p>
              <Link href="/design-services" className="sec2-card-link">Learn more <span aria-hidden="true">→</span></Link>
            </div>
          </div>

          {/* Card 2: Build */}
          <div className="sec2-card">
            <div className="sec2-card-image">
              <img src="/assets/serv2.png" alt="Build Services" loading="lazy" />
              <svg className="sec2-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 20h20"></path><path d="M5 20V8l7-5 7 5v12"></path><path d="M9 20v-6h6v6"></path>
              </svg>
            </div>
            <div className="sec2-card-body">
              <span className="sec2-card-category">Build Services</span>
              <h3 className="sec2-card-title">Build Services</h3>
              <p className="sec2-card-desc">Ground-up construction managed by one licensed team. Every trade, every timeline, every Florida Building Code standard — delivered.</p>
              <Link href="/build-services" className="sec2-card-link">Learn more <span aria-hidden="true">→</span></Link>
            </div>
          </div>

          {/* Card 3: Emergency */}
          <div className="sec2-card">
            <div className="sec2-card-image">
              <img src="/assets/serv3.png" alt="Emergency 24/7" loading="lazy" />
              <svg className="sec2-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="13" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            <div className="sec2-card-body">
              <span className="sec2-card-category">Emergency 24/7</span>
              <h3 className="sec2-card-title">Emergency 24/7</h3>
              <p className="sec2-card-desc">Storm, flood, fire, or structural failure — 30 to 60-minute response across Florida. We stabilize, document, and plan the fix in a single visit.</p>
              <Link href="/emergency-services" className="sec2-card-link">Learn more <span aria-hidden="true">→</span></Link>
            </div>
          </div>

          {/* Card 4: Remodel */}
          <div className="sec2-card">
            <div className="sec2-card-image">
              <img src="/assets/serv4.png" alt="Remodeling" loading="lazy" />
              <svg className="sec2-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
              </svg>
            </div>
            <div className="sec2-card-body">
              <span className="sec2-card-category">Remodeling</span>
              <h3 className="sec2-card-title">Remodeling</h3>
              <p className="sec2-card-desc">Kitchens, bathrooms, additions, and full interior renovations — one contractor managing everything from demolition to final finish.</p>
              <Link href="/remodeling-services" className="sec2-card-link">Learn more <span aria-hidden="true">→</span></Link>
            </div>
          </div>

          {/* Card 5: Electrical */}
          <div className="sec2-card">
            <div className="sec2-card-image">
              <img src="/assets/serv5.png" alt="Electrical" loading="lazy" />
              <svg className="sec2-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
            </div>
            <div className="sec2-card-body">
              <span className="sec2-card-category">Electrical</span>
              <h3 className="sec2-card-title">Electrical</h3>
              <p className="sec2-card-desc">Residential, commercial, and industrial electrical services — self-performed by our licensed electricians, never outsourced.</p>
              <Link href="/electrical-services" className="sec2-card-link">Learn more <span aria-hidden="true">→</span></Link>
            </div>
          </div>

          {/* Card 6: Finish */}
          <div className="sec2-card">
            <div className="sec2-card-image">
              <img src="/assets/serv6.png" alt="Finish & Warranty" loading="lazy" />
              <svg className="sec2-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
            </div>
            <div className="sec2-card-body">
              <span className="sec2-card-category">Finish &amp; Warranty</span>
              <h3 className="sec2-card-title">Finish &amp; Warranty</h3>
              <p className="sec2-card-desc">Final invoice only after every punch list item is resolved. All work backed by a written 5-year warranty.</p>
              <Link href="/warranty" className="sec2-card-link">Learn more <span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}