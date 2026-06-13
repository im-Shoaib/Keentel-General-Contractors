"use client";

import "./faq.css"; // ← Import FAQ-specific CSS
import { useState, useEffect } from "react";
import Link from "next/link";
import Script from "next/script";

const faqData = [
  {
    id: 1,
    category: "general",
    question: "What services does Keentel General Contractors provide?",
    answer: "Keentel offers full-service general contracting, including new construction, commercial and residential remodeling, tenant improvements, structural work, MEP (Mechanical, Electrical, Plumbing) design and installation, roofing, flooring, painting, and site development. With decades of electrical contracting expertise, Keentel integrates electrical and civil scopes seamlessly into general construction projects."
  },
  {
    id: 2,
    category: "general",
    question: "Do you provide both residential and commercial construction services?",
    answer: "Yes. Keentel specializes in both residential and commercial projects. For homeowners, we handle full remodels, additions, and new builds. For businesses, we manage office buildouts, retail renovations, warehouse expansions, and industrial facility construction."
  },
  {
    id: 3,
    category: "general",
    question: "How is Keentel different from other general contractors?",
    answer: "Keentel brings 30+ years of engineering and electrical expertise to construction. Unlike many general contractors, we self-perform key scopes such as electrical and MEP work, ensuring tighter quality control, compliance with codes, and cost savings for clients. Our engineering-driven approach also reduces delays and redesign issues."
  },
  {
    id: 4,
    category: "process",
    question: "What is your project management process?",
    answer: "Our process includes: <br><br><strong>1.</strong> Initial consultation & scope definition<br><strong>2.</strong> Budgeting & scheduling<br><strong>3.</strong> Design-build coordination<br><strong>4.</strong> Permitting & approvals<br><strong>5.</strong> Construction execution with QA/QC checks<br><strong>6.</strong> Final inspection & turnover<br><br>We use project management software to keep clients informed at every stage."
  },
  {
    id: 5,
    category: "process",
    question: "Do you offer design-build services?",
    answer: "Yes. Keentel offers design-build delivery, meaning we handle both the design and construction under one contract. This reduces risks, accelerates schedules, and ensures accountability for both budget and quality."
  },
  {
    id: 6,
    category: "compliance",
    question: "Are you licensed and insured?",
    answer: "Absolutely. Keentel is a fully licensed General Contractor with liability insurance, workers' compensation coverage, and bonding capacity to protect clients on every project."
  },
  {
    id: 7,
    category: "compliance",
    question: "How do you handle permitting and code compliance?",
    answer: "Our team manages the entire permitting process, working directly with local building departments. With our engineering background, we ensure compliance with the Florida Building Code (FBC), NEC, OSHA, and other applicable regulations, avoiding costly rework or delays."
  },
  {
    id: 8,
    category: "budget",
    question: "Do you provide cost estimates and proposals?",
    answer: "Yes. We provide detailed, itemized estimates, including labor, materials, subcontractor costs, and contingency planning. Our proposals are transparent and help clients make informed budget decisions before construction begins."
  },
  {
    id: 9,
    category: "general",
    question: "What types of projects do you specialize in?",
    answer: "Keentel specializes in:<br><br>• Commercial tenant buildouts<br>• Office and retail renovations<br>• Restaurant construction<br>• Multi-family housing projects<br>• Industrial/warehouse construction<br>• High-end residential remodels and new homes"
  },
  {
    id: 10,
    category: "technical",
    question: "Can you work with architects and engineers we've already hired?",
    answer: "Yes. We regularly collaborate with third-party architects and engineers. However, since we also provide in-house design-build services, clients may choose to streamline the process by using Keentel for both design and construction."
  },
  {
    id: 11,
    category: "budget",
    question: "Do you offer pre-construction services?",
    answer: "Yes. Pre-construction services include feasibility studies, site analysis, budgeting, scheduling, constructability reviews, and risk assessments—helping clients make smart decisions before breaking ground."
  },
  {
    id: 12,
    category: "process",
    question: "How do you ensure projects stay on schedule?",
    answer: "Keentel uses critical path scheduling (CPM), weekly progress updates, and proactive coordination with subcontractors and suppliers. Our background in utility and electrical projects has taught us to manage timelines with precision."
  },
  {
    id: 13,
    category: "technical",
    question: "Do you provide green building or energy-efficient construction solutions?",
    answer: "Yes. We incorporate energy-efficient HVAC, lighting, insulation, solar readiness, and smart building controls into projects. Our engineering team is skilled in sustainable design and LEED principles, helping clients reduce energy costs."
  },
  {
    id: 14,
    category: "compliance",
    question: "What safety measures do you follow?",
    answer: "Keentel enforces strict OSHA compliance, regular jobsite safety meetings, PPE usage, and worker training programs. We have a zero-tolerance policy for unsafe practices and conduct routine inspections to ensure safety."
  },
  {
    id: 15,
    category: "general",
    question: "Can you handle both small renovations and large-scale builds?",
    answer: "Yes. Whether it's a small bathroom remodel or a 100,000 sq. ft. industrial facility, Keentel has the workforce, subcontractor network, and project management expertise to deliver."
  },
  {
    id: 16,
    category: "technical",
    question: "Do you provide electrical contracting as part of your general contracting services?",
    answer: "Yes. Unlike most general contractors, Keentel is also an experienced electrical contractor. This means clients get in-house expertise for power distribution, lighting, renewable energy systems, and compliance with NEC standards."
  },
  {
    id: 17,
    category: "budget",
    question: "How do you manage subcontractors?",
    answer: "We carefully prequalify all subcontractors based on licensing, safety record, financial stability, and past performance. Our project managers oversee all subs to ensure compliance with specs, safety, and quality."
  },
  {
    id: 18,
    category: "budget",
    question: "Do you assist with financing or phased construction?",
    answer: "While Keentel does not directly provide financing, we work with client-selected lenders and can coordinate phased construction schedules to align with budget releases and cash flow."
  },
  {
    id: 19,
    category: "support",
    question: "Can you provide references and past project examples?",
    answer: "Yes. We maintain a portfolio of completed projects in commercial, residential, and industrial sectors, and can provide client references upon request."
  },
  {
    id: 20,
    category: "support",
    question: "How do you ensure quality control?",
    answer: "Our QA/QC program includes regular inspections, adherence to specifications, materials testing, and commissioning. Every stage of the project undergoes verification before proceeding to the next."
  },
  {
    id: 21,
    category: "general",
    question: "What areas do you serve?",
    answer: "Keentel serves clients across Tampa Bay, Hillsborough County, and the broader Florida region. For select projects, we extend services throughout the Southeast U.S."
  },
  {
    id: 22,
    category: "support",
    question: "Do you provide emergency repair or restoration services?",
    answer: "Yes. Keentel provides 24/7 emergency services for storm damage, fire restoration, and urgent building repairs, ensuring safety and rapid recovery."
  },
  {
    id: 23,
    category: "process",
    question: "What is your typical project timeline?",
    answer: "Timelines vary by scope:<br><br>• <strong>Small renovations:</strong> 2–6 weeks<br>• <strong>Mid-size remodels:</strong> 2–4 months<br>• <strong>Commercial buildouts:</strong> 4–8 months<br>• <strong>Large-scale builds:</strong> 9–18 months<br><br>We provide detailed schedules during pre-construction."
  },
  {
    id: 24,
    category: "process",
    question: "How can clients stay updated during construction?",
    answer: "Keentel uses client portals, progress photos, weekly reports, and regular meetings. Clients always have real-time access to project updates and financial tracking."
  },
  {
    id: 25,
    category: "start",
    question: "How do I get started with Keentel General Contractors?",
    answer: "Simply contact us through our website form, email, or phone. We'll schedule a consultation to discuss your vision, budget, and timeline, then provide a detailed proposal tailored to your project."
  }
];

// Category configuration
const categories = [
  { id: "all", label: "All", count: faqData.length },
  { id: "general", label: "General & Services", count: faqData.filter(f => f.category === "general").length },
  { id: "process", label: "Process & Timeline", count: faqData.filter(f => f.category === "process").length },
  { id: "compliance", label: "Licensing & Safety", count: faqData.filter(f => f.category === "compliance").length },
  { id: "budget", label: "Cost & Budget", count: faqData.filter(f => f.category === "budget").length },
  { id: "technical", label: "Design & Technical", count: faqData.filter(f => f.category === "technical").length },
  { id: "support", label: "Quality & Support", count: faqData.filter(f => f.category === "support").length },
  { id: "start", label: "Getting Started", count: faqData.filter(f => f.category === "start").length }
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (id: number) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) newSet.delete(id);
      else newSet.add(id);
      return newSet;
    });
  };

  const filteredFaqs = faqData.filter(faq => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch = searchQuery === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const resetFilters = () => {
    setActiveCategory("all");
    setSearchQuery("");
    setOpenItems(new Set());
  };

  useEffect(() => {
    const section = document.querySelector(".faq-section");
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [activeCategory, searchQuery]);

  return (
    <>
      {/* Structured Data for SEO */}
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer.replace(/<[^>]*>/g, '')
              }
            }))
          })
        }}
      />

      <section className="faq-hero">
        <div className="faq-hero__inner">
          <p className="faq-hero__overline">Help Center</p>
          <h1 className="faq-hero__title">Frequently Asked Questions</h1>
          <p className="faq-hero__subtitle">Find answers to common questions about our services, process, and expertise.</p>
          <div className="faq-hero__search-wrap">
            <svg className="faq-hero__search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              className="faq-hero__search"
              placeholder="Search questions & answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoComplete="off"
            />
            <button
              className={`faq-hero__search-clear ${searchQuery ? "visible" : ""}`}
              onClick={() => setSearchQuery("")}
              aria-label="Clear search"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="faq-section__header">
          <div className="category-pills">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`category-pill ${activeCategory === cat.id ? "active" : ""}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
                <span className="category-pill__count">{cat.count}</span>
              </button>
            ))}
          </div>
          <span className="faq-section__results">
            Showing <strong>{filteredFaqs.length}</strong> of {faqData.length} FAQs
          </span>
        </div>

        <div className="faq-list">
          {filteredFaqs.map(faq => (
            <div key={faq.id} className={`faq-item ${openItems.has(faq.id) ? "active" : ""}`}>
              <button className="faq-item__question" onClick={() => toggleItem(faq.id)}>
                <span>{faq.question}</span>
                <span className="faq-item__icon"></span>
              </button>
              <div className="faq-item__answer-wrapper" style={{ maxHeight: openItems.has(faq.id) ? "1000px" : "0" }}>
                <div className="faq-item__answer" dangerouslySetInnerHTML={{ __html: faq.answer }} />
              </div>
            </div>
          ))}
        </div>

        <div className={`no-results ${filteredFaqs.length === 0 ? "visible" : ""}`}>
          <div className="no-results__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
              <line x1="8" y1="11" x2="14" y2="11" />
            </svg>
          </div>
          <p className="no-results__title">No matching FAQs found</p>
          <p className="no-results__text">Try adjusting your search or filter to find what you're looking for.</p>
          <button className="no-results__reset" onClick={resetFilters}>Clear All Filters</button>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-section__inner">
          <h2 className="cta-section__title">Still Have Questions?</h2>
          <p className="cta-section__text">Our team is ready to help. Reach out and we'll get back to you within one business day.</p>
          <div className="cta-section__buttons">
            <Link href="/contact" className="btn btn--primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <rect x="3" y="3" width="18" height="18" rx="3" />
                <line x1="9" y1="9" x2="15" y2="15" />
                <line x1="15" y1="9" x2="9" y2="15" />
              </svg>
              Request a Consultation
            </Link>
            <a href="tel:+18133950000" className="btn btn--outline">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call 813-395-0000
            </a>
          </div>
        </div>
      </section>
    </>
  );
}