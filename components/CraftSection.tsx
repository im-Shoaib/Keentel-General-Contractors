"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function CraftSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const header = section.querySelector(".craft-header");
            const cards = section.querySelectorAll(".craft-card");
            const badges = section.querySelectorAll(".craft-feature-badge");

            if (header && !header.classList.contains("craft-revealed")) {
              header.classList.add("craft-revealed");
            }
            cards.forEach((card, i) => {
              setTimeout(() => {
                card.classList.add("craft-revealed");
              }, 150 + i * 130);
            });
            badges.forEach((badge, i) => {
              setTimeout(() => {
                badge.classList.add("craft-revealed");
              }, 550 + i * 90);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="craft-section" ref={sectionRef}>
      <div className="craft-bg-pattern" aria-hidden="true"></div>
      <div className="craft-container">
        <div className="craft-header">
          <p className="craft-eyebrow">Our original craft</p>
          <h2 className="craft-title">30 years as Tampa's electricians.<br />Now your full‑service GC.</h2>
          <p className="craft-description">
            From a single outlet to a 50,000 sq ft industrial fit‑out — every Keentel project still runs
            through master electricians. Code‑compliant. Hurricane‑ready. Inspection‑passed the first time.
          </p>
        </div>

        <div className="craft-cards">
          {/* Card 1: Residential */}
          <article className="craft-card">
            <div className="craft-card-image-wrap">
              <img src="/assets/residential.png" alt="Residential Electrical" loading="lazy" />
              <span className="craft-card-number">01</span>
              <div className="craft-card-image-overlay"></div>
            </div>
            <div className="craft-card-body">
              <h3 className="craft-card-title">Residential Electrical</h3>
              <ul className="craft-card-list">
                <li>Panel upgrades &amp; rewiring</li>
                <li>EV charger installation</li>
                <li>Standby generators</li>
                <li>Smart home integration</li>
                <li>Lighting design</li>
              </ul>
              <Link href="/quote-residential" className="craft-card-cta">
                Get a quote <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>

          {/* Card 2: Commercial */}
          <article className="craft-card">
            <div className="craft-card-image-wrap">
              <img src="/assets/commercial.png" alt="Commercial Electrical" loading="lazy" />
              <span className="craft-card-number">02</span>
              <div className="craft-card-image-overlay"></div>
            </div>
            <div className="craft-card-body">
              <h3 className="craft-card-title">Commercial Electrical</h3>
              <ul className="craft-card-list">
                <li>New construction wiring</li>
                <li>Office &amp; retail buildouts</li>
                <li>Emergency power &amp; UPS</li>
                <li>Maintenance contracts</li>
                <li>Code compliance</li>
              </ul>
              <Link href="/quote-commercial" className="craft-card-cta">
                Get a quote <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>

          {/* Card 3: Industrial */}
          <article className="craft-card">
            <div className="craft-card-image-wrap">
              <img src="/assets/industrial.png" alt="Industrial Electrical" loading="lazy" />
              <span className="craft-card-number">03</span>
              <div className="craft-card-image-overlay"></div>
            </div>
            <div className="craft-card-body">
              <h3 className="craft-card-title">Industrial Electrical</h3>
              <ul className="craft-card-list">
                <li>High‑voltage installation</li>
                <li>Motor control systems</li>
                <li>Energy efficiency upgrades</li>
                <li>24/7 facility support</li>
                <li>Inspections &amp; audits</li>
              </ul>
              <Link href="/quote-industrial" className="craft-card-cta">
                Get a quote <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        </div>

        <div className="craft-features">
          <div className="craft-feature-badge">
            <svg className="craft-feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
            <span>EV Chargers</span>
          </div>
          <div className="craft-feature-badge">
            <svg className="craft-feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>Standby Generators</span>
          </div>
          <div className="craft-feature-badge">
            <svg className="craft-feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <span>Lighting Design</span>
          </div>
          <div className="craft-feature-badge">
            <svg className="craft-feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
            </svg>
            <span>24/7 Repairs</span>
          </div>
        </div>
      </div>
    </section>
  );
}