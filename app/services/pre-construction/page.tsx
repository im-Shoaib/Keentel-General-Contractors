// page.tsx
"use client";

import { useState, useEffect, useRef, FormEvent } from "react";
import "./pre-construction.css";

// Font Awesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faIndustry,
  faSchool,
  faBuildingColumns,
  faHouse,
  faMaximize,
  faCheck,
  faArrowRight,
  faPhone,
  faEnvelope,
  faLocationDot,
  faClipboardList,
  faDollarSign,
  faUsers,
  faClock,
  faRulerCombined,
  faShieldAlt,
  faHandshake,
  faChartLine,
  faWrench,
  faHardHat,
  faFileContract,
  faCalendar,
  faCircleCheck,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";

export default function PreConstructionPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "success">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  // Scroll reveal using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("pc-visible");
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -60px 0px" }
    );

    const revealElements = document.querySelectorAll(".pc-reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("success");
    setTimeout(() => {
      setFormStatus("idle");
      formRef.current?.reset();
    }, 3000);
  };

  // ── FAQ refs and logic (dynamic height) ──
  const faqSectionRef = useRef<HTMLElement>(null);
  const faqAnswerRefs = useRef<Map<number, HTMLDivElement>>(new Map());
  const faqOpenIndexRef = useRef<number | null>(null);

  // Close FAQ when clicking outside the section
  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (faqSectionRef.current && !faqSectionRef.current.contains(e.target as Node)) {
        const current = faqOpenIndexRef.current;
        if (current !== null) {
          const el = faqAnswerRefs.current.get(current);
          if (el) {
            el.style.maxHeight = "0px";
            el.parentElement?.classList.remove("pc-active");
          }
          faqOpenIndexRef.current = null;
        }
      }
    };
    document.addEventListener("click", handleOutside);
    return () => document.removeEventListener("click", handleOutside);
  }, []);

  // Toggle FAQ – pure DOM, no React state
  const toggleFaq = (index: number) => {
    const prev = faqOpenIndexRef.current;
    const answerEl = faqAnswerRefs.current.get(index);
    if (!answerEl) return;

    // Close previously open
    if (prev !== null && prev !== index) {
      const prevAnswer = faqAnswerRefs.current.get(prev);
      if (prevAnswer) {
        prevAnswer.style.maxHeight = "0px";
        prevAnswer.parentElement?.classList.remove("pc-active");
      }
    }

    // Toggle current
    if (prev === index) {
      answerEl.style.maxHeight = "0px";
      answerEl.parentElement?.classList.remove("pc-active");
      faqOpenIndexRef.current = null;
    } else {
      answerEl.style.maxHeight = answerEl.scrollHeight + 20 + "px";
      answerEl.parentElement?.classList.add("pc-active");
      faqOpenIndexRef.current = index;
    }
  };
  // ── End FAQ logic ──

  // Trust bar items
  const trustItems = [
    "Early Project Planning",
    "Budget & Cost Guidance",
    "Design Coordination",
    "Risk Reduction",
    "Construction Expertise",
  ];

  // Services list (shortened for balanced layout)
  const servicesList = [
    "Project Consultation",
    "Site Evaluation",
    "Budget Development",
    "Preliminary Cost Estimates",
    "Value Engineering",
    "Design Coordination",
    "Constructability Reviews",
    "Scheduling & Milestone Planning",
    "Procurement Planning",
    "Material Selection Guidance",
    "Risk Assessment",
    "Scope Development",
    "Bid Package Support",
    "Permit Planning",
    "Utility Coordination",
    "Project Phasing Strategies",
  ];

  const projectTypes = [
    {
      icon: faBuilding,
      title: "Commercial Developments",
      desc: "Office buildings, retail centers, mixed‑use developments, and business facilities.",
      image: "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/38/7f/c9/07/ca/v1_E10/E10AQCWB.jpg?w=1600&cf_fit=scale-down&q=85&format=auto&s=0c948850b392c0ae2a54badb9913435d46fd281ebfc73bd19b935409b593367e",
    },
    {
      icon: faIndustry,
      title: "Industrial Projects",
      desc: "Manufacturing plants, warehouses, logistics centers, and operational facilities.",
      image: "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/1a/da/d1/88/c0/v1_E10/E10CXB3Q.jpg?w=1600&cf_fit=scale-down&q=85&format=auto&s=f444a31362c6942bb657dfee8c6d3150c8173a962660b5401a735b9ac69aafa8",
    },
    {
      icon: faSchool,
      title: "Institutional Buildings",
      desc: "Schools, healthcare facilities, municipal buildings, and public infrastructure.",
      image: "https://elements-resized.envatousercontent.com/envato-dam-assets-production/1da902e5-8bb7-4bc2-883f-e253ca487511/a1a5d319-de7c-4538-a255-42a41016f7fa.jpg?w=1600&cf_fit=scale-down&q=85&format=auto&s=67e91452b6cb3cbf1373feb59b41849d9a27c86d06e45946b0a69adb60daa953",
    },
    {
      icon: faBuildingColumns,
      title: "Multi‑Family Developments",
      desc: "Apartment communities, condominium projects, and residential developments.",
      image: "https://static.wixstatic.com/media/1bdf38229a3e48f5aa5bf33a7c65ca92.jpg/v1/fill/w_568,h_378,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/1bdf38229a3e48f5aa5bf33a7c65ca92.jpg",
    },
    {
      icon: faHouse,
      title: "Large Residential Projects",
      desc: "Luxury homes, custom residences, additions, and complete property transformations.",
      image: "https://buildings.pk/wp-content/uploads/2023/08/Aerial-View-New.jpg",
    },
    {
      icon: faMaximize,
      title: "Facility Expansions",
      desc: "Projects that increase capacity while minimizing operational disruption.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpl3s9lRnEY3GLpzJtTM3sjHfSE47VhCtDuWSHWDmv2PUBwm1Cks-_jiY&s=10",
    },
  ];

  // Client types – redesigned with icons and descriptions
  const clientTypes = [
    {
      icon: faBuilding,
      title: "Commercial Property Owners",
      desc: "Office, retail, and mixed‑use property owners.",
    },
    {
      icon: faChartLine,
      title: "Developers",
      desc: "Real estate development firms and investors.",
    },
    {
      icon: faUsers,
      title: "Business Owners",
      desc: "Companies planning new facilities or expansions.",
    },
    {
      icon: faHandshake,
      title: "Investors",
      desc: "Financial institutions and private equity groups.",
    },
    {
      icon: faRulerCombined,
      title: "Architects",
      desc: "Design professionals seeking construction input.",
    },
    {
      icon: faWrench,
      title: "Engineers",
      desc: "Structural, MEP, and civil engineering firms.",
    },
    {
      icon: faHardHat,
      title: "Facility Managers",
      desc: "Operational teams planning upgrades or expansions.",
    },
    {
      icon: faClipboardList,
      title: "Property Managers",
      desc: "Management companies overseeing large portfolios.",
    },
    {
      icon: faIndustry,
      title: "Industrial Companies",
      desc: "Manufacturing, logistics, and warehousing firms.",
    },
    {
      icon: faSchool,
      title: "Educational Institutions",
      desc: "Schools, universities, and training centers.",
    },
  ];

  const processSteps = [
    {
      step: "1",
      title: "Project Discovery & Evaluation",
      desc: "We begin by understanding your goals, vision, timeline, and budget, while also evaluating site conditions and project constraints.",
      icon: faClipboardList,
    },
    {
      step: "2",
      title: "Budget & Feasibility",
      desc: "We develop realistic budgets, cost expectations, and feasibility recommendations to ensure your project is financially viable.",
      icon: faDollarSign,
    },
    {
      step: "3",
      title: "Design Coordination",
      desc: "We collaborate with architects and engineers to improve constructability and resolve design conflicts before they become costly issues.",
      icon: faRulerCombined,
    },
    {
      step: "4",
      title: "Planning, Scheduling & Readiness",
      desc: "Detailed schedules, procurement strategies, and construction sequencing are developed, ensuring your project is ready for efficient execution.",
      icon: faCalendar,
    },
  ];

  const reasons = [
    { title: "Experienced Planning", desc: "Construction knowledge that supports informed decision‑making." },
    { title: "Cost Confidence", desc: "Realistic budgeting that helps reduce unexpected expenses." },
    {
      title: "Collaborative Coordination",
      desc: "Working closely with architects, engineers, consultants, and owners.",
    },
    {
      title: "Reduced Project Risk",
      desc: "Identifying challenges early to minimize delays and costly changes.",
    },
    {
      title: "Smarter Scheduling",
      desc: "Construction timelines designed for efficient project delivery.",
    },
    {
      title: "Long‑Term Value",
      desc: "Planning that supports better construction quality, performance, and investment protection.",
    },
  ];

  const benefitsList = [
    "Improve project budgeting",
    "Reduce construction delays",
    "Identify potential risks early",
    "Improve collaboration among project teams",
    "Minimize design conflicts",
    "Streamline permitting and approvals",
    "Improve procurement planning",
    "Support better construction quality",
    "Increase schedule reliability",
    "Deliver greater confidence before construction begins",
  ];

  const faqData = [
    {
      q: "Why are pre‑construction services important?",
      a: "They help reduce uncertainty by improving planning, budgeting, scheduling, and coordination before construction begins.",
    },
    {
      q: "When should pre‑construction begin?",
      a: "Ideally during the earliest stages of project development, before final design and procurement decisions are made.",
    },
    {
      q: "Can pre‑construction help control costs?",
      a: "Yes. Early budgeting and planning help identify opportunities for cost savings while reducing expensive changes later.",
    },
    {
      q: "Do you coordinate with architects and engineers?",
      a: "Absolutely. We work collaboratively with the entire project team throughout the planning phase.",
    },
    {
      q: "Is pre‑construction only for large projects?",
      a: "No. Projects of all sizes benefit from proper planning, budgeting, and coordination.",
    },
    {
      q: "Can Keentel General Contractors manage the project after planning?",
      a: "Yes. We provide complete project delivery from pre‑construction through final construction and project closeout.",
    },
  ];

  return (
    <main className="pc-about-page">

      {/* ── Hero Section ── */}
      <section className="pc-hero-section">
        <div className="pc-hero-image"></div>
        <div className="pc-hero-overlay"></div>
        <div className="pc-hero-content">
          <div className="pc-hero-badge pc-reveal">
            <span className="pc-hero-badge-dot" />
            PLANNING • BUDGETING • DESIGN COORDINATION • PROJECT FEASIBILITY
          </div>
          <h1 className="pc-hero-title pc-reveal pc-reveal-delay-1">
            Every Successful Project Begins <span className="pc-highlight">Before Construction</span> Starts
          </h1>
          <p className="pc-hero-subtitle pc-reveal pc-reveal-delay-2">
            The most successful construction projects are built on careful planning—not assumptions. Keentel General Contractors provides comprehensive pre‑construction services that help owners, developers, and businesses make informed decisions before breaking ground.
          </p>
          <div className="pc-hero-cta-group pc-reveal pc-reveal-delay-3">
            <a href="#pc-contact" className="pc-btn pc-btn-primary">
              Schedule a Pre‑Construction Consultation <FontAwesomeIcon icon={faArrowRight} className="pc-btn-arrow" />
            </a>
            <a href="#pc-contact" className="pc-btn pc-btn-secondary">
              Talk With Our Team <FontAwesomeIcon icon={faArrowRight} className="pc-btn-arrow" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Trust Bar (Marquee) ── */}
      <div className="pc-trust-bar-wrapper">
        <div className="pc-trust-bar">
          {[...trustItems, ...trustItems].map((item, idx) => (
            <span key={idx} className="pc-trust-item">
              <span className="pc-trust-check">
                <FontAwesomeIcon icon={faCheck} />
              </span>
              {item}
              {idx % trustItems.length !== trustItems.length - 1 && <span className="pc-trust-divider" />}
            </span>
          ))}
        </div>
      </div>

      {/* ── About Our Pre‑Construction Services ── */}
      <section className="pc-section-light" id="pc-about">
        <div className="pc-decor-orb" style={{ width: 250, height: 250, top: "10%", right: "-5%" }} />
        <div className="pc-container">
          <div className="pc-about-grid">
            <div className="pc-reveal">
              <span className="pc-section-label">About Our Pre‑Construction Services</span>
              <h2 className="pc-section-heading">Build Smarter Before You Build</h2>
              <p className="pc-section-body">
                Every construction project begins with important decisions. Poor planning can lead to delays, budget overruns, design conflicts, and costly changes during construction.
              </p>
              <p className="pc-section-body">
                At Keentel General Contractors, our pre‑construction services are designed to eliminate uncertainty before work begins. We collaborate with owners, architects, engineers, consultants, and stakeholders to develop practical construction strategies that improve efficiency and support better project outcomes.
              </p>
              <p className="pc-section-body">
                By investing time in planning, clients gain greater confidence, better cost control, and a smoother construction experience from start to finish.
              </p>
            </div>
            <div className="pc-about-visual pc-reveal pc-reveal-delay-2">
              <div className="pc-about-bg-dot" style={{ top: "5%", left: "5%" }} />
              <div className="pc-about-bg-dot pc-dot-2" />
              <div className="pc-about-floating-card">
                <div className="pc-card-icon-large">
                  <FontAwesomeIcon icon={faHardHat} />
                </div>
                <h4>Strategic Pre‑Construction</h4>
                <p>Comprehensive planning that eliminates uncertainty, reduces risk, and sets the foundation for construction success.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Pre‑Construction Matters (Dark) ── */}
      <section className="pc-section-dark" id="pc-why-matters">
        <div className="pc-decor-ring" style={{ width: 300, height: 300, top: -60, right: -80 }} />
        <div className="pc-container">
          <span className="pc-section-label pc-reveal">Why Pre‑Construction Matters</span>
          <h2 className="pc-section-heading pc-reveal pc-reveal-delay-1">Better Planning Leads to Better Projects</h2>
          <p className="pc-section-body pc-reveal pc-reveal-delay-1">
            Pre‑construction is one of the most valuable phases of any project because it allows critical decisions to be made before construction begins.
          </p>
          <p className="pc-section-body pc-reveal pc-reveal-delay-1">
            Rather than solving problems during construction, Keentel General Contractors focuses on preventing them before they happen.
          </p>
          <div className="pc-matters-grid">
            {["Reduce Unexpected Costs", "Improve Scheduling", "Coordinate Design Teams", "Identify Project Risks"].map((title, i) => (
              <div className={`pc-matter-card pc-reveal pc-reveal-delay-${i + 2}`} key={i}>
                <span className="pc-matter-number">0{i + 1}</span>
                <h4>{title}</h4>
                <p>Early planning ensures clarity, collaboration, and proactive risk management.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comprehensive Planning Services (redesigned) ── */}
      <section className="pc-section-light-alt" id="pc-services">
        <div className="pc-container">
          <div className="pc-services-layout">
            <div className="pc-services-left pc-reveal">
              <span className="pc-section-label">What&apos;s Included</span>
              <h2 className="pc-section-heading">Comprehensive Planning Services</h2>
              <p className="pc-section-body">
                We tailor every service to the goals and complexity of your project, ensuring a thorough approach from concept to construction.
              </p>
              <div className="pc-services-image-wrapper">
                <img
                  src="https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/ed/6b/a7/6e/48/v1_E11/E118CG4S.jpg?w=1600&cf_fit=scale-down&q=85&format=auto&s=60127bdca6734a11de17a7023704ddd421e2cc6594733ed849a27600523f5d28"
                  alt="Planning services"
                  className="pc-services-image"
                />
              </div>
            </div>
            <div className="pc-services-right pc-reveal pc-reveal-delay-2">
              <div className="pc-services-grid">
                {servicesList.map((service, idx) => (
                  <div className="pc-service-item" key={idx}>
                    <span className="pc-service-dot" />
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Project Types (Dark, with images and CTA) ── */}
      <section className="pc-section-dark" id="pc-project-types">
        <div className="pc-container">
          <span className="pc-section-label pc-reveal">Project Types</span>
          <h2 className="pc-section-heading pc-reveal pc-reveal-delay-1">Supporting Projects of Every Size</h2>
          <div className="pc-project-types-grid">
            {projectTypes.map((type, idx) => (
              <div className={`pc-project-type-card pc-reveal pc-reveal-delay-${idx + 2}`} key={idx}>
                <div className="pc-project-type-image" style={{ backgroundImage: `url(${type.image})` }} />
                <div className="pc-project-type-content">
                  <div className="pc-project-type-icon">
                    <FontAwesomeIcon icon={type.icon} />
                  </div>
                  <h4>{type.title}</h4>
                  <p>{type.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="pc-project-types-cta pc-reveal">
            <a href="#pc-contact" className="pc-btn pc-btn-primary">
              Let&apos;s Discuss Your Project <FontAwesomeIcon icon={faArrowRight} className="pc-btn-arrow" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Who We Work With (redesigned) ── */}
      <section className="pc-section-light" id="pc-who-we-work-with">
        <div className="pc-container">
          <span className="pc-section-label pc-reveal">Who We Work With</span>
          <h2 className="pc-section-heading pc-reveal pc-reveal-delay-1">Built for Owners, Developers &amp; Project Teams</h2>
          <div className="pc-clients-grid">
            {clientTypes.map((client, idx) => (
              <div className="pc-client-card pc-reveal pc-reveal-delay-2" key={idx}>
                <div className="pc-client-icon">
                  <FontAwesomeIcon icon={client.icon} />
                </div>
                <h4>{client.title}</h4>
                <p>{client.desc}</p>
              </div>
            ))}
          </div>
          <p className="pc-section-body pc-reveal" style={{ marginTop: 20 }}>
            Whether you&apos;re starting with a concept or preparing for construction, Keentel General Contractors provides the expertise needed to move your project forward with confidence.
          </p>
        </div>
      </section>

      {/* ── Our Pre‑Construction Process (Horizontal) ── */}
      <section className="pc-section-dark" id="pc-process">
        <div className="pc-container">
          <span className="pc-section-label pc-reveal">Our Pre‑Construction Process</span>
          <h2 className="pc-section-heading pc-reveal pc-reveal-delay-1">A Structured Approach to Better Construction</h2>
          <div className="pc-process-horizontal">
            {processSteps.map((step, idx) => (
              <div className={`pc-process-step pc-reveal pc-reveal-delay-${idx + 1}`} key={idx}>
                <div className="pc-process-step-icon">
                  <FontAwesomeIcon icon={step.icon} />
                </div>
                <div className="pc-process-step-number">{step.step}</div>
                <div className="pc-process-step-content">
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Keentel ── */}
      <section className="pc-section-light-alt" id="pc-why-choose">
        <div className="pc-container">
          <span className="pc-section-label pc-reveal">Why Choose Keentel General Contractors</span>
          <h2 className="pc-section-heading pc-reveal pc-reveal-delay-1">A Better Way to Plan Construction</h2>
          <div className="pc-choose-grid">
            {reasons.map((reason, idx) => (
              <div className={`pc-choose-card pc-reveal pc-reveal-delay-${idx + 2}`} key={idx}>
                <h4>{reason.title}</h4>
                <p>{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits (Dark, no tick animation) ── */}
      <section className="pc-section-dark" id="pc-benefits">
        <div className="pc-container">
          <span className="pc-section-label pc-reveal">Benefits of Pre‑Construction</span>
          <h2 className="pc-section-heading pc-reveal pc-reveal-delay-1">Why Early Planning Pays Off</h2>
          <div className="pc-benefits-list">
            {benefitsList.map((benefit, idx) => (
              <div className="pc-benefit-item pc-reveal" key={idx}>
                <span className="pc-benefit-icon">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </span>
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ (fixed – dynamic height) ── */}
      <section className="pc-section-light" id="pc-faq" ref={faqSectionRef}>
        <div className="pc-container pc-faq-container">
          <span className="pc-section-label pc-reveal">Frequently Asked Questions</span>
          <h2 className="pc-section-heading pc-reveal pc-reveal-delay-1">Common Questions About Pre‑Construction</h2>
          <div className="pc-faq-list">
            {faqData.map((faq, idx) => (
              <div
                key={idx}
                className="pc-faq-item pc-reveal"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFaq(idx);
                }}
              >
                <div className="pc-faq-question">
                  <span>{faq.q}</span>
                  <span className="pc-faq-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </div>
                <div
                  className="pc-faq-answer"
                  ref={(el) => {
                    if (el) faqAnswerRefs.current.set(idx, el);
                    else faqAnswerRefs.current.delete(idx);
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact Section (Dark Form, improved layout) ── */}
      <section className="pc-section-dark" id="pc-contact">
        <div className="pc-decor-orb" style={{ width: 280, height: 280, top: "15%", right: "-6%" }} />
        <div className="pc-container">
          <span className="pc-section-label pc-reveal">Contact Section</span>
          <h2 className="pc-section-heading pc-reveal pc-reveal-delay-1">Start Planning With Confidence</h2>
          <p className="pc-section-body pc-reveal pc-reveal-delay-1">
            The strongest projects begin with thoughtful planning. Tell us about your project, and our team will help you develop a practical strategy for successful construction.
          </p>
          <div className="pc-contact-grid">
            <form className="pc-contact-form pc-reveal pc-reveal-delay-2" ref={formRef} onSubmit={handleFormSubmit}>
              <div className="pc-form-row">
                <input type="text" className="pc-form-input" placeholder="Full Name *" required />
                <input type="text" className="pc-form-input" placeholder="Company" />
              </div>
              <div className="pc-form-row">
                <input type="email" className="pc-form-input" placeholder="Email Address *" required />
                <input type="tel" className="pc-form-input" placeholder="Phone Number" />
              </div>
              <div className="pc-form-row">
                <input type="text" className="pc-form-input" placeholder="Project Location" />
                <select className="pc-form-select">
                  <option value="">Project Type</option>
                  <option>Commercial</option>
                  <option>Industrial</option>
                  <option>Institutional</option>
                  <option>Multi‑Family</option>
                  <option>Large Residential</option>
                  <option>Facility Expansion</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="pc-form-row">
                <select className="pc-form-select">
                  <option value="">Estimated Budget</option>
                  <option>Under $500K</option>
                  <option>$500K – $2M</option>
                  <option>$2M – $10M</option>
                  <option>$10M – $50M</option>
                  <option>$50M+</option>
                </select>
                <select className="pc-form-select">
                  <option value="">Expected Timeline</option>
                  <option>0–6 Months</option>
                  <option>6–12 Months</option>
                  <option>1–2 Years</option>
                  <option>2+ Years</option>
                </select>
              </div>
              <textarea className="pc-form-textarea" placeholder="Tell Us About Your Project *" required></textarea>
              <button type="submit" className="pc-btn-submit">
                {formStatus === "success" ? "✓ Sent Successfully!" : "Schedule My Consultation →"}
              </button>
            </form>
            <div className="pc-contact-info-side pc-reveal pc-reveal-delay-3">
              <div className="pc-contact-info-card">
                <h5><FontAwesomeIcon icon={faPhone} /> Call Us</h5>
                <p>Speak directly with our pre‑construction team.</p>
              </div>
              <div className="pc-contact-info-card">
                <h5><FontAwesomeIcon icon={faEnvelope} /> Email Us</h5>
                <p>Send us your project details and we’ll respond within one business day.</p>
              </div>
              <div className="pc-contact-info-card">
                <h5><FontAwesomeIcon icon={faLocationDot} /> Visit Our Office</h5>
                <p>Schedule an in‑person consultation at our headquarters.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA (theme matching) ── */}
      <section className="pc-final-cta-section" id="pc-final-cta">
        <div className="pc-container pc-reveal">
          <h2>
            Every Great Project Starts With a{" "}
            <span style={{ color: "#a6238f" }}>Great Plan</span>
          </h2>
          <p>
            Whether you&apos;re developing a commercial property, expanding an industrial facility, or preparing for a major renovation, Keentel General Contractors provides the planning, coordination, and construction expertise needed to move forward with confidence.
          </p>
          <p className="pc-final-cta-bold">Let&apos;s build the right foundation before construction begins.</p>
          <div className="pc-final-cta-buttons">
            <a href="#pc-contact" className="pc-btn-filled-dark">Get Started Today <FontAwesomeIcon icon={faArrowRight} /></a>
            <a href="#pc-contact" className="pc-btn-outline-dark">Contact Keentel General Contractors</a>
          </div>
        </div>
      </section>
    </main>
  );
}