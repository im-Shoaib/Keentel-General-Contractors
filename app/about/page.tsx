"use client";

import "./about.css";
import { useEffect, useRef } from "react";
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
            animateNumber(document.getElementById("statCounties"), 0, 67, 1500);
            // Impact numbers
            animateNumber(document.getElementById("impactYears"), 0, 30, 1500);
            animateNumber(document.getElementById("impactProjects"), 0, 158, 1800);
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
            From master electricians to full-service general contractors, Keentel has delivered over 500 projects with unwavering quality across Florida. Your vision, executed by a family of craftsmen.
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
          <span style={{ fontSize: "0.7rem" }}>— Marcus R., Tampa</span>
        </div>
      </section>

      {/* STORY SPLIT */}
      <section className="story-split">
        <div className="story-container">
          <div className="story-text fade-up">
            <span className="luxury-eyebrow">Our narrative</span>
            <h2>Where heritage meets <span style={{ color: "#a6238f" }}>tomorrow’s standard</span></h2>
            <p>
              Keentel began as a two-person electrical crew in Tampa Bay. Over two decades, we evolved into a licensed full-spectrum general contractor serving residential, commercial, and industrial clients across every Florida county — yet our soul remains that of craftsmen. Each project bears the same obsession with safety, code, and artistry.
            </p>
            <p>
              We don't use subcontractor roulette. Our integrated team of designers, project managers, and master electricians work under one roof — ensuring accountability from blueprint to final walkthrough. No excuses. Just results.
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
            <p>Zero-compromise protocols, fully insured &amp; OSHA compliant on every Florida job site.</p>
          </div>
          <div className="value-card fade-up">
            <div className="value-icon"><i className="fas fa-gem"></i></div>
            <h3>Master Craftsmanship</h3>
            <p>Construction DNA in every trade — precision down to the last detail, every time.</p>
          </div>
          <div className="value-card fade-up">
            <div className="value-icon"><i className="fas fa-hand-holding-heart"></i></div>
            <h3>Radical Transparency</h3>
            <p>Real-time budgets, proactive updates, no surprises — from first meeting to final walkthrough.</p>
          </div>
          <div className="value-card fade-up">
            <div className="value-icon"><i className="fas fa-leaf"></i></div>
            <h3>Sustainable Innovation</h3>
            <p>Energy-efficient builds, green materials, and smart integrations across all project types.</p>
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
              <p>Started with a simple promise — quality work done right the first time. Florida's trust began growing.</p>
            </div>
          </div>
          <div className="timeline-item fade-up">
            <div className="timeline-year">2012</div>
            <div className="timeline-content">
              <h3>Full GC License &amp; Expansion</h3>
              <p>Transitioned to full general contracting, integrating design-build and remodeling under one roof statewide.</p>
            </div>
          </div>
          <div className="timeline-item fade-up">
            <div className="timeline-year">2020</div>
            <div className="timeline-content">
              <h3>24/7 Emergency Division</h3>
              <p>Launched rapid response for storm, fire, and flood — covering all Florida counties within 60 minutes.</p>
            </div>
          </div>
          <div className="timeline-item fade-up">
            <div className="timeline-year">2025+</div>
            <div className="timeline-content">
              <h3>Smart &amp; Sustainable Pioneer</h3>
              <p>Leading Florida's EV charger installations, solar-ready builds, and net-zero remodels statewide.</p>
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
              <div className="team-role">Founder &amp; CEO</div>
              <p>Master electrician turned general contractor. 25+ years of construction innovation across Florida.</p>
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
              <p>Excellence in project logistics, client communication, and statewide delivery coordination.</p>
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
              <h3>David Ortz</h3>
              <div className="team-role">Lead Architect &amp; Design</div>
              <p>Award-winning design visionary with a focus on sustainable, code-compliant residential and commercial projects.</p>
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

      {/* WHY CHOOSE US */}
      <section className="why-choose-section">
        <div className="section-header fade-up">
          <span className="luxury-eyebrow" style={{ margin: "0 auto 10px" }}>Why Choose Us</span>
          <h2 style={{ fontSize: "2.5rem", color: "var(--color-navy)" }}>Why Choose Keentel General Contractors?</h2>
        </div>
        <div className="why-choose-grid">
          <div className="why-choose-card fade-up">
            <h3>Client-Focused Work Approach</h3>
            <p>We develop a thorough understanding of your project goals before work begins. From concept to completion, we stay accountable to your outcome at every stage.</p>
          </div>
          <div className="why-choose-card fade-up">
            <h3>Proven Experience</h3>
            <p>We have delivered projects across all 67 Florida counties — from custom residential builds in Tampa Bay to large-scale commercial and industrial contracts statewide.</p>
          </div>
          <div className="why-choose-card fade-up">
            <h3>Quality with Innovation</h3>
            <p>We combine licensed construction expertise with forward-thinking solutions — smart home integrations, energy-efficient builds, and sustainable material selection.</p>
          </div>
          <div className="why-choose-card fade-up">
            <h3>Attention to Detail</h3>
            <p>Every project undergoes a structured QA/QC process. Every detail is inspected, documented, and signed off before we close the contract.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="about-cta-block fade-up">
        <h2 style={{ fontSize: "2rem", color: "white" }}>Your story, crafted by Keentel.</h2>
        <p style={{ color: "rgba(255,255,255,0.9)", maxWidth: "580px", margin: "20px auto" }}>
          Whether you need a modern home, a commercial flagship, or emergency restoration anywhere in Florida — we deliver with precision.
        </p>
        <Link href="/contact" className="cta-btn">Start a Conversation →</Link>
        <a href="tel:8133900000" className="cta-phone"><i className="fas fa-phone-alt"></i> (813) 390-0000</a>
      </div>
    </>
  );
}