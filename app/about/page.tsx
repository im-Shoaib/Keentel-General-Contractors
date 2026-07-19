'use client';

import { useEffect, useRef, useState } from 'react';
import './about.css';

// Industry icons (inline SVG, Font Awesome style)
const industryIcons: Record<string, JSX.Element> = {
  'Commercial Offices': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <line x1="9" y1="6" x2="9" y2="10" />
      <line x1="15" y1="6" x2="15" y2="10" />
      <line x1="9" y1="14" x2="9" y2="18" />
      <line x1="15" y1="14" x2="15" y2="18" />
    </svg>
  ),
  'Industrial & Manufacturing': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 20h20" />
      <path d="M5 20V8l5-4 4 4 5-4v12" />
      <rect x="8" y="10" width="3" height="6" rx="1" />
      <rect x="13" y="10" width="3" height="6" rx="1" />
    </svg>
  ),
  'Warehousing & Distribution': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  'Retail & Mixed-Use': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  ),
  'Restaurants & Hospitality': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8h1a4 4 0 010 8h-1" />
      <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
      <line x1="6" y1="1" x2="6" y2="4" />
      <line x1="10" y1="1" x2="10" y2="4" />
      <line x1="14" y1="1" x2="14" y2="4" />
    </svg>
  ),
  'Healthcare': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ),
  'Educational & Institutional': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-7 10 7-10 7z" />
      <path d="M6 12v6a4 4 0 008 0v-6" />
    </svg>
  ),
  'Multi-Family Developments': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="8" y="14" width="7" height="7" rx="1" />
    </svg>
  ),
  'Large Residential Projects': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
};

export default function AboutPage() {
  const [revealed, setRevealed] = useState<Set<string>>(new Set());
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setRevealed((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    const currentSections = sectionsRef.current.filter(Boolean) as HTMLElement[];
    currentSections.forEach((el) => observer.observe(el));

    return () => {
      currentSections.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const isRevealed = (id: string) => revealed.has(id);

  const industriesList = [
    'Commercial Offices', 'Industrial & Manufacturing', 'Warehousing & Distribution',
    'Retail & Mixed-Use', 'Restaurants & Hospitality', 'Healthcare',
    'Educational & Institutional', 'Multi-Family Developments', 'Large Residential Projects',
  ];

  // Helper to generate staggered delays for text elements
  const getDelay = (index: number) => `${0.1 + index * 0.08}s`;

  return (
    <div className="about-page">
      {/* ==================== HERO ==================== */}
      <section
        id="about-hero"
        ref={(el) => { sectionsRef.current[0] = el; }}
        className={`about-hero ${isRevealed('about-hero') ? 'about-reveal' : ''}`}
        style={{ backgroundImage: 'url(https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/31/e6/5e/a0/99/v1_E10/E10AODH5.jpg?w=1600&cf_fit=scale-down&q=85&format=auto&s=691a14be367a59479a92ca106664d048c36c1cac68848bc51abfe0a241646e08)' }}
      >
        <div className="about-hero-overlay" />
        <div className="about-hero-content">
          <p className="about-hero-eyebrow animate-text" style={{ animationDelay: getDelay(0) }}>KEENTEL GENERAL CONTRACTORS</p>
          <h1 className="about-hero-title animate-text" style={{ animationDelay: getDelay(1) }}>
            Building with <span className="about-hero-highlight">Purpose</span>.<br />
            Delivering with <span className="about-hero-highlight">Confidence</span>.
          </h1>
          <p className="about-hero-text animate-text" style={{ animationDelay: getDelay(2) }}>
            We partner with developers, businesses, property owners, and institutions to deliver
            commercial, industrial, and large-scale residential construction projects that are built
            to perform today and create value for years to come.
          </p>
          
          <a href="/contact" className="about-hero-cta animate-text" style={{ animationDelay: getDelay(4) }}>
            <span>Book a Consultation</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>

      {/* ==================== WHO WE ARE ==================== */}
      <section
        id="about-who"
        ref={(el) => { sectionsRef.current[1] = el; }}
        className={`about-who ${isRevealed('about-who') ? 'about-reveal' : ''}`}
      >
        <div className="about-who-container">
          <div className="about-who-image-wrap">
            <img
              src="https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/84/c9/13/0b/9b/v1_E10/E101J44K.jpg?w=1600&cf_fit=scale-down&q=85&format=auto&s=0cb8c743abc07f205dd48e96db18cb92b78e72898154f01fe0d17fa706c5e333"
              alt="Keentel team"
            />
            <div className="about-who-badge">
              <span>Licensed Contractor</span>
            </div>
          </div>
          <div className="about-who-text">
            <span className="about-who-section-tag animate-text" style={{ animationDelay: getDelay(0) }}>Who We Are</span>
            <h2 className="about-who-heading animate-text" style={{ animationDelay: getDelay(1) }}>A Trusted Construction Partner</h2>
            <p className="about-who-large animate-text" style={{ animationDelay: getDelay(2) }}>
              Keentel General Contractors is a full-service construction company providing professional
              project planning, construction management, design-build services, commercial renovations,
              industrial construction, electrical contracting, and emergency restoration.
            </p>
            <p className="about-who-sub animate-text" style={{ animationDelay: getDelay(3) }}>
              We bring together experienced project management, coordinated trade execution, and a
              commitment to quality, allowing clients to work with one trusted construction partner
              from concept through completion.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== APPROACH (TIMELINE) ==================== */}
      <section
        id="about-approach"
        ref={(el) => { sectionsRef.current[2] = el; }}
        className={`about-approach ${isRevealed('about-approach') ? 'about-reveal' : ''}`}
      >
        <div className="about-approach-bg-pattern" />
        <div className="about-approach-content">
          <span className="about-approach-tag animate-text" style={{ animationDelay: getDelay(0) }}>Our Process</span>
          <h2 className="about-approach-heading animate-text" style={{ animationDelay: getDelay(1) }}>How We Deliver Excellence</h2>
          <div className="about-timeline">
            <div className="about-timeline-item">
              <div className="about-timeline-marker"><span>01</span></div>
              <div className="about-timeline-card animate-text" style={{ animationDelay: getDelay(2) }}>
                <h4>Strategic Planning</h4>
                <p>We analyze every detail before breaking ground, aligning objectives and resources.</p>
              </div>
            </div>
            <div className="about-timeline-item">
              <div className="about-timeline-marker"><span>02</span></div>
              <div className="about-timeline-card animate-text" style={{ animationDelay: getDelay(3) }}>
                <h4>Clear Objectives</h4>
                <p>Milestones and KPIs are set to keep everyone aligned and accountable.</p>
              </div>
            </div>
            <div className="about-timeline-item">
              <div className="about-timeline-marker"><span>03</span></div>
              <div className="about-timeline-card animate-text" style={{ animationDelay: getDelay(4) }}>
                <h4>Coordinated Execution</h4>
                <p>We orchestrate every trade and timeline with precision, reducing risk.</p>
              </div>
            </div>
            <div className="about-timeline-item">
              <div className="about-timeline-marker"><span>04</span></div>
              <div className="about-timeline-card animate-text" style={{ animationDelay: getDelay(5) }}>
                <h4>Continuous Communication</h4>
                <p>Transparency from start to finish ensures no surprises.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== VALUES (INTERACTIVE CARDS) ==================== */}
      <section
        id="about-values"
        ref={(el) => { sectionsRef.current[3] = el; }}
        className={`about-values ${isRevealed('about-values') ? 'about-reveal' : ''}`}
      >
        <div className="about-values-header">
          <span className="about-values-tag animate-text" style={{ animationDelay: getDelay(0) }}>What We Stand For</span>
          <h2 className="about-values-title animate-text" style={{ animationDelay: getDelay(1) }}>Our Core Principles</h2>
        </div>
        <div className="about-values-grid">
          <div className="about-value-card animate-text" style={{ animationDelay: getDelay(2) }}>
            <div className="about-value-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
              </svg>
            </div>
            <h4>Quality</h4>
            <p>Workmanship that stands the test of time.</p>
          </div>
          <div className="about-value-card animate-text" style={{ animationDelay: getDelay(3) }}>
            <div className="about-value-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
              </svg>
            </div>
            <h4>Accountability</h4>
            <p>We own every outcome, from plan to completion.</p>
          </div>
          <div className="about-value-card animate-text" style={{ animationDelay: getDelay(4) }}>
            <div className="about-value-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h4>Safety</h4>
            <p>People and property protected always.</p>
          </div>
          <div className="about-value-card animate-text" style={{ animationDelay: getDelay(5) }}>
            <div className="about-value-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
              </svg>
            </div>
            <h4>Collaboration</h4>
            <p>Success through strong partnerships.</p>
          </div>
        </div>
      </section>

      {/* ==================== INDUSTRIES MARQUEE ==================== */}
      <section
        id="about-industries"
        ref={(el) => { sectionsRef.current[4] = el; }}
        className={`about-industries ${isRevealed('about-industries') ? 'about-reveal' : ''}`}
      >
        <h3 className="about-industries-heading animate-text" style={{ animationDelay: getDelay(0) }}>Industries We Serve</h3>
        <div className="about-industries-track-wrap">
          <div className="about-industries-track">
            {[...industriesList, ...industriesList].map((item, i) => (
              <div key={i} className="about-industry-card">
                <span className="about-industry-icon">{industryIcons[item]}</span>
                <span className="about-industry-label">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WHY CHOOSE ==================== */}
      <section
        id="about-why"
        ref={(el) => { sectionsRef.current[5] = el; }}
        className={`about-why ${isRevealed('about-why') ? 'about-reveal' : ''}`}
      >
        <div className="about-why-grid">
          <div className="about-why-image">
            <img
              src="https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/5b/57/50/43/03/v1_E10/E109U4EQ.jpg?w=1600&cf_fit=scale-down&q=85&format=auto&s=016af40a5802c7eeccdd6dde78d8d26e8efb9afdd3f7a1f106b6e1ce99989e7b"
              alt="Project planning"
            />
          </div>
          <div className="about-why-points">
            <span className="about-why-tag animate-text" style={{ animationDelay: getDelay(0) }}>Why Choose Keentel</span>
            <h3 className="about-why-title animate-text" style={{ animationDelay: getDelay(1) }}>Leadership That Builds Confidence</h3>
            <ul className="about-why-list">
              <li className="animate-text" style={{ animationDelay: getDelay(2) }}>
                <span className="about-why-check" />
                Strategic Project Planning
              </li>
              <li className="animate-text" style={{ animationDelay: getDelay(3) }}>
                <span className="about-why-check" />
                Transparent Communication
              </li>
              <li className="animate-text" style={{ animationDelay: getDelay(4) }}>
                <span className="about-why-check" />
                Multi-Trade Coordination
              </li>
              <li className="animate-text" style={{ animationDelay: getDelay(5) }}>
                <span className="about-why-check" />
                Safety-First Execution
              </li>
              <li className="animate-text" style={{ animationDelay: getDelay(6) }}>
                <span className="about-why-check" />
                Reliable Scheduling
              </li>
              <li className="animate-text" style={{ animationDelay: getDelay(7) }}>
                <span className="about-why-check" />
                Quality Workmanship
              </li>
              <li className="animate-text" style={{ animationDelay: getDelay(8) }}>
                <span className="about-why-check" />
                Long-Term Relationships
              </li>
            </ul>
            <p className="about-why-outro animate-text" style={{ animationDelay: getDelay(9) }}>
              From the first conversation to final turnover, we deliver with professionalism and integrity.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== CTA (solid gradient, no image) ==================== */}
      <section
        id="about-cta"
        ref={(el) => { sectionsRef.current[6] = el; }}
        className={`about-cta ${isRevealed('about-cta') ? 'about-reveal' : ''}`}
      >
        <div className="about-cta-content">
          <h2 className="about-cta-title animate-text" style={{ animationDelay: getDelay(0) }}>Let&apos;s Build Something That Lasts</h2>
          <p className="about-cta-text animate-text" style={{ animationDelay: getDelay(1) }}>
            The right contractor does more than complete construction—they provide leadership,
            solve problems, coordinate people, and protect the success of the entire project.
          </p>
          <a href="/contact" className="about-cta-btn animate-text" style={{ animationDelay: getDelay(2) }}>
            <span>Discuss Your Project</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}