// src/app/about/page.tsx
"use client";

import "./about.css";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const heroStatsRef = useRef<HTMLDivElement>(null);
  const impactRef = useRef<HTMLDivElement>(null);

  // Counting animation for hero stats and impact numbers
  useEffect(() => {
    const animateNumber = (el: HTMLElement | null, start: number, end: number, duration = 1500) => {
      if (!el) return;
      let startTime: number | null = null;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min(1, (timestamp - startTime) / duration);
        const current = Math.floor(progress * (end - start) + start);
        el.innerText = current.toString();
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.innerText = end.toString();
        }
      };
      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Hero stats
            animateNumber(document.getElementById("statYears"), 0, 30, 1500);
            animateNumber(document.getElementById("statRetention"), 0, 98, 1500);
            animateNumber(document.getElementById("statCounties"), 0, 9, 1000);
            // Impact numbers
            animateNumber(document.getElementById("impactYears"), 0, 30, 1500);
            animateNumber(document.getElementById("impactProjects"), 0, 500, 1800);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5, rootMargin: "0px" }
    );

    if (heroStatsRef.current) observer.observe(heroStatsRef.current);
    if (impactRef.current) observer.observe(impactRef.current);

    // Scroll reveal for fade-up and timeline items
    const fadeElements = document.querySelectorAll(".fade-up, .timeline-item");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    fadeElements.forEach((el) => revealObserver.observe(el));

    return () => {
      observer.disconnect();
      revealObserver.disconnect();
    };
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="about-hero__inner">
          <div className="about-hero__badge hero-animate">
            <i className="fas fa-crown"></i> Est. 2003 — Built on excellence
          </div>
          <h1 className="about-hero__title hero-animate">
            We don't just build.<br />
            <span className="gradient-text-premium">We shape legacies.</span>
          </h1>
          <p className="about-hero__desc hero-animate">
            From master electricians to full‑service general contractors, Keentel has delivered over 500 projects with unwavering quality. Your vision, executed by a family of craftsmen.
          </p>
          <div className="hero-stat-group hero-animate" ref={heroStatsRef}>
            <div>
              <span className="hero-stat__number" id="statYears">0</span>
              <span className="hero-stat__number" style={{ fontSize: "1.8rem" }}>+</span>
              <div className="hero-stat__label">Years of impact</div>
            </div>
            <div>
              <span className="hero-stat__number" id="statRetention">0</span>
              <span className="hero-stat__number" style={{ fontSize: "1.8rem" }}>%</span>
              <div className="hero-stat__label">Client retention</div>
            </div>
            <div>
              <span className="hero-stat__number" id="statCounties">0</span>
              <div className="hero-stat__label">Counties served</div>
            </div>
          </div>
        </div>
        <div className="floating-lux-card">
          <i className="fas fa-quote-left" style={{ color: "#a6238f" }}></i>
          <p style={{ fontWeight: 600, margin: "8px 0" }}>“They finished ahead of schedule and exceeded every expectation.”</p>
          <span style={{ fontSize: "0.7rem" }}>— Marisol R., Tampa</span>
        </div>
      </section>

      {/* STORY SPLIT */}
      <section className="story-split">
        <div className="story-container">
          <div className="story-text fade-up">
            <span className="luxury-eyebrow">Our narrative</span>
            <h2>Where heritage meets <span style={{ color: "#a6238f" }}>tomorrow’s standard</span></h2>
            <p>
              Keentel began as a two‑person electrical crew in Tampa Bay. Over two decades, we evolved into a licensed full‑spectrum general contractor — yet our soul remains that of craftsmen. Each project, from residential remodels to million‑dollar commercial builds, bears the same obsession with safety, code, and artistry.
            </p>
            <p>
              We don't use subcontractor roulette. Our integrated team of designers, project managers, and master electricians work under one roof, ensuring accountability from blueprint to final walkthrough. It's the Keentel difference: no excuses, just results.
            </p>
          </div>
          <div className="story-visual fade-up">
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop"
              alt="Keentel craftsmanship"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="values-section">
        <div className="section-header fade-up">
          <span className="luxury-eyebrow" style={{ margin: "0 auto 10px" }}>The pillars</span>
          <h2 style={{ fontSize: "2.5rem", color: "var(--color-navy)" }}>What guides every decision</h2>
        </div>
        <div className="values-grid">
          <div className="value-card fade-up">
            <div className="value-icon"><i className="fas fa-hard-hat"></i></div>
            <h3>Safety Obsession</h3>
            <p>Zero-compromise protocols, insured & OSHA compliant.</p>
          </div>
          <div className="value-card fade-up">
            <div className="value-icon"><i className="fas fa-gem"></i></div>
            <h3>Master Craftsmanship</h3>
            <p>Electrical DNA in every trade: precision down to the last outlet.</p>
          </div>
          <div className="value-card fade-up">
            <div className="value-icon"><i className="fas fa-hand-holding-heart"></i></div>
            <h3>Radical Transparency</h3>
            <p>Real-time budgets, proactive updates, no surprises.</p>
          </div>
          <div className="value-card fade-up">
            <div className="value-icon"><i className="fas fa-leaf"></i></div>
            <h3>Sustainable Innovation</h3>
            <p>Energy‑efficient, green materials, smart integrations.</p>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="timeline-lux">
        <div className="section-header fade-up">
          <span className="luxury-eyebrow" style={{ margin: "0 auto 10px" }}>Decades of excellence</span>
          <h2 style={{ fontSize: "2.5rem", color: "var(--color-navy)" }}>The Keentel timeline</h2>
        </div>
        <div className="timeline-container">
          <div className="timeline-item fade-up">
            <div className="timeline-year">2003</div>
            <div className="timeline-content">
              <h3>Founded as Keentel Electric</h3>
              <p>Started with a simple promise: quality electrical work done right the first time. Tampa's trust began growing.</p>
            </div>
          </div>
          <div className="timeline-item fade-up">
            <div className="timeline-year">2012</div>
            <div className="timeline-content">
              <h3>Full GC License & Expansion</h3>
              <p>Transitioned to full general contracting, integrating design-build and remodeling under one roof.</p>
            </div>
          </div>
          <div className="timeline-item fade-up">
            <div className="timeline-year">2020</div>
            <div className="timeline-content">
              <h3>24/7 Emergency Division</h3>
              <p>Launched rapid response for storm, fire, flood — serving 9 Florida counties within 60 min.</p>
            </div>
          </div>
          <div className="timeline-item fade-up">
            <div className="timeline-year">2025+</div>
            <div className="timeline-content">
              <h3>Smart & Sustainable Pioneer</h3>
              <p>Leading Tampa's EV charger installations, solar-ready builds, and net‑zero remodels.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="team-section">
        <div className="section-header fade-up">
          <span className="luxury-eyebrow" style={{ margin: "0 auto 10px" }}>Visionaries</span>
          <h2 style={{ fontSize: "2.5rem", color: "var(--color-navy)" }}>Leadership that builds trust</h2>
        </div>
        <div className="team-grid">
          <div className="team-card fade-up">
            <div className="team-img">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop"
                alt="CEO"
                loading="lazy"
              />
            </div>
            <div className="team-info">
              <h3>Michael Keene</h3>
              <div className="team-role">Founder & CEO</div>
              <p>Master electrician turned GC, 25+ years of innovation.</p>
            </div>
          </div>
          <div className="team-card fade-up">
            <div className="team-img">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop"
                alt="Operations"
                loading="lazy"
              />
            </div>
            <div className="team-info">
              <h3>Sarah Jenkins</h3>
              <div className="team-role">Director of Operations</div>
              <p>Excellence in project logistics & client experience.</p>
            </div>
          </div>
          <div className="team-card fade-up">
            <div className="team-img">
              <img
                src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=400&h=500&fit=crop"
                alt="Design lead"
                loading="lazy"
              />
            </div>
            <div className="team-info">
              <h3>David Orta</h3>
              <div className="team-role">Lead Architect & Design</div>
              <p>Award‑winning sustainable design visionary.</p>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT NUMBERS */}
      <section className="impact-section">
        <div className="fade-up">
          <span className="luxury-eyebrow" style={{ color: "#a6238f" }}>by the numbers</span>
          <h2 style={{ fontSize: "2.8rem", marginBottom: "20px", color: "white" }}>
            Keentel in <span className="gradient-text-premium">data</span>
          </h2>
        </div>
        <div className="impact-grid" ref={impactRef}>
          <div className="impact-item">
            <div className="impact-number"><span id="impactYears">0</span>+</div>
            <div className="impact-label">Years experience</div>
          </div>
          <div className="impact-item">
            <div className="impact-number"><span id="impactProjects">0</span>+</div>
            <div className="impact-label">Projects delivered</div>
          </div>
          <div className="impact-item">
            <div className="impact-number">24/7</div>
            <div className="impact-label">Emergency readiness</div>
          </div>
          <div className="impact-item">
            <div className="impact-number">A+</div>
            <div className="impact-label">BBB rated</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="about-cta-block fade-up">
        <h2 style={{ fontSize: "2rem", color: "white" }}>Your story, crafted by Keentel</h2>
        <p style={{ color: "rgba(255,255,255,0.9)", maxWidth: "580px", margin: "20px auto" }}>
          Whether you dream of a modern home, commercial flagship, or emergency restoration — we deliver with white‑glove precision.
        </p>
        <Link href="/contact" className="cta-btn">Start a conversation →</Link>
      </div>
    </>
  );
}