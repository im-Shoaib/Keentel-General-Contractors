"use client";

import "./blog-listing.css";
import { useState, useEffect, useRef } from "react";

const blogPosts = [
  {
    id: 1,
    title: "Custom Home Build in Florida: What to Expect at Every Stage",
    excerpt:
      "Building a custom home is one of the most significant investments you will make. We walk you through every phase — from pre-construction planning and permits to the final walkthrough — so you know exactly what to expect before the first shovel hits the ground.",
    category: "Residential",
    date: "2026-06-12",
    readTime: "8 min",
    author: "Keentel Team",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "EV Charger Installation at Home: What Florida Homeowners Need to Know",
    excerpt:
      "With EV adoption growing rapidly across Florida, home charging installation is one of our most requested services. We cover the panel requirements, permit process, and installation timeline so you can make an informed decision before calling a contractor.",
    category: "Electrical",
    date: "2026-06-08",
    readTime: "5 min",
    author: "Keentel Team",
    image:
      "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "What to Do in the First 24 Hours After Storm Damage to Your Home",
    excerpt:
      "The actions you take in the first 24 hours after a storm can significantly affect your insurance claim and the extent of long-term damage. We share the exact steps our emergency team follows — and what you should do before we arrive.",
    category: "Emergency",
    date: "2026-06-05",
    readTime: "6 min",
    author: "Keentel Team",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Kitchen Remodel Timeline: How Long Does It Really Take in Florida?",
    excerpt:
      "Most kitchen remodels take between 4 and 8 weeks from demolition to final finish. The difference comes down to design decisions, permit speed, and contractor coordination. We break down each phase with realistic timelines based on real Florida project data.",
    category: "Remodeling",
    date: "2026-06-01",
    readTime: "7 min",
    author: "Keentel Team",
    image:
      "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    title: "Florida Building Code 2024: Key Updates Every Homeowner Should Know",
    excerpt:
      "Florida's building code updates affect permit requirements, hurricane standards, and energy efficiency specifications for all new construction and significant renovations. We summarize the most important changes and what they mean for your project.",
    category: "Code",
    date: "2026-05-28",
    readTime: "4 min",
    author: "Keentel Team",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    title: "Design-Build vs. Traditional GC: Which Is Right for Your Commercial Project?",
    excerpt:
      "The delivery model you choose for a commercial build affects your timeline, budget risk, and accountability structure. We compare design-build and traditional general contracting so you can choose the right approach for your project scope and goals.",
    category: "Commercial",
    date: "2026-05-24",
    readTime: "6 min",
    author: "Keentel Team",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
  },
];

const categories = ["all", "Residential", "Commercial", "Electrical", "Emergency", "Remodeling", "Code"];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const toolsRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [cardsRevealed, setCardsRevealed] = useState(false);

  useEffect(() => {
    let filtered = blogPosts;
    if (activeCategory !== "all") {
      filtered = filtered.filter((p) => p.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.author.toLowerCase().includes(q)
      );
    }
    setFilteredPosts(filtered);
    // Reset reveal state when filter changes
    setCardsRevealed(false);
    // Re-trigger reveal after render
    setTimeout(() => setCardsRevealed(true), 50);
  }, [searchQuery, activeCategory]);

  useEffect(() => {
    const handleScroll = () => {
      if (toolsRef.current) {
        toolsRef.current.classList.toggle("scrolled", window.scrollY > 20);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey && e.key === "k") || (e.key === "/" && document.activeElement === document.body)) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Trigger card reveal after initial render
  useEffect(() => {
    setTimeout(() => setCardsRevealed(true), 100);
  }, []);

  return (
    <>
      <div className="bg-grid"></div>
      <div className="bg-orb bg-orb--1"></div>
      <div className="bg-orb bg-orb--2"></div>
      <div className="bg-orb bg-orb--3"></div>

      <div className="page-wrapper">
        {/* Hero */}
        <section className="hero-section">
          <span className="hero-section__overline">✦ Keentel Insights ✦</span>
          <h1 className="hero-section__title">
            Construction <span className="accent">Insights</span> from the Field
          </h1>
          <div className="hero-decorative-line"></div>
          <p className="hero-section__subtitle">
            Real project experience, Florida building expertise, and practical guidance — written by the Keentel General Contractors team. Updated regularly with content that helps you make informed decisions about your next project.
          </p>
        </section>

        {/* Tools */}
        <div className="tools-section" ref={toolsRef}>
          <div className="search-wrapper">
            <span className="search-wrapper__icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </span>
            <input
              type="text"
              className="search-input"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              ref={searchInputRef}
            />
            <button
              className={`search-clear ${searchQuery ? "visible" : ""}`}
              onClick={() => setSearchQuery("")}
            >
              ✕
            </button>
          </div>
          <div className="category-filters">
            <span className="category-filters__label">Filter</span>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`category-pill ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat === "all" ? "All" : cat}
              </button>
            ))}
          </div>
        </div>

        <div className="results-count">
          Showing <strong>{filteredPosts.length}</strong> article{filteredPosts.length !== 1 ? "s" : ""}
        </div>

        <div className="blog-grid">
          {filteredPosts.map((post, idx) => (
            <article
              key={post.id}
              className={`blog-card ${cardsRevealed ? "revealed" : ""}`}
              style={{ animationDelay: `${idx * 0.06}s` }}
            >
              <div className="blog-card__image-wrapper">
                <img className="blog-card__image" src={post.image} alt={post.title} loading="lazy" />
                <span className="blog-card__category-badge">{post.category}</span>
              </div>
              <div className="blog-card__body">
                <h3 className="blog-card__title">{post.title}</h3>
                <p className="blog-card__excerpt">{post.excerpt}</p>
                <div className="blog-card__meta">
                  <span className="blog-card__meta-author">{post.author}</span>
                  <span>
                    {new Date(post.date).toLocaleString("en-US", { month: "short", day: "numeric", year: "numeric" })} · {post.readTime}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="no-results visible">
            <div style={{ fontSize: "2.5rem", marginBottom: "10px" }}>✨</div>
            <p style={{ fontWeight: 500, color: "var(--color-navy)" }}>No matches found</p>
            <p style={{ color: "var(--color-text-muted)" }}>Try a different search or filter.</p>
          </div>
        )}

        {/* Newsletter */}
        <section className="newsletter-section">
          <div className="newsletter-card">
            <h2>Stay Updated</h2>
            <p>Get project tips, Florida building code updates, and home improvement guidance delivered directly to your inbox.</p>
            <form
              className="newsletter-form"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you for subscribing!");
              }}
            >
              <input type="email" placeholder="Your email address" required />
              <button type="submit">Subscribe</button>
            </form>
            <p className="newsletter-note">No spam. Unsubscribe at any time.</p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta">
          <div className="final-cta-inner">
            <h2>Ready to start your project?</h2>
            <p>Our team is available 7 days a week. Get a free, no-obligation estimate for your project anywhere in Florida.</p>
            <div className="final-cta-actions">
              <a href="#" className="btn btn--primary">Request Free Estimate →</a>
              <a href="tel:+18133900000" className="btn btn--outline"><i className="fa-solid fa-phone"></i> (813) 390-0000</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}