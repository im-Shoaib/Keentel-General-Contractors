// src/app/blog/page.tsx
"use client";

import "./blog-listing.css"; // import the CSS
import { useState, useEffect, useRef } from "react";
import { blogPosts, BlogPostSummary } from "@/lib/blogData";
import Link from "next/link";

export default function BlogListingPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredPosts, setFilteredPosts] = useState<BlogPostSummary[]>(blogPosts);
  const toolsRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Filter logic
  useEffect(() => {
    let filtered = blogPosts;
    if (activeCategory !== "all") {
      filtered = filtered.filter(p => p.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      filtered = filtered.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.author.toLowerCase().includes(q)
      );
    }
    setFilteredPosts(filtered);
  }, [searchQuery, activeCategory]);

  // Sticky toolbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (toolsRef.current) {
        toolsRef.current.classList.toggle("scrolled", window.scrollY > 20);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard shortcut (Ctrl+K or /) to focus search
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

  const categories = ["all", "Architecture", "Real Estate", "Engineering", "Construction", "Interior", "Urban Planning"];

  return (
    <>
      <div className="bg-grid"></div>
      <div className="bg-orb bg-orb--1"></div>
      <div className="bg-orb bg-orb--2"></div>
      <div className="bg-orb bg-orb--3"></div>

      <div className="page-wrapper">
        <section className="hero-section">
          <span className="hero-section__overline">✦ The Journal ✦</span>
          <h1 className="hero-section__title">Built with <span className="accent">Vision</span></h1>
          <div className="hero-decorative-line"></div>
          <p className="hero-section__subtitle">Exploring the art of architecture, real estate, and engineering — where structure meets brilliance.</p>
        </section>

        {/* Sticky toolbar */}
        <div className="tools-section" id="toolsSection" ref={toolsRef}>
          <div className="search-wrapper">
            <span className="search-wrapper__icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </span>
            <input
              type="text"
              className="search-input"
              id="searchInput"
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
            {categories.map(cat => (
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

        <div className="results-count" id="resultsCount">
          Showing <strong>{filteredPosts.length}</strong> article{filteredPosts.length !== 1 ? "s" : ""}
        </div>

        <div className="blog-grid" id="blogGrid">
          {filteredPosts.map((post, idx) => (
            <Link
              href={`/blog/${post.slug}`}
              key={post.id}
              className={`blog-card ${post.large ? "blog-card--large" : ""} revealed`}
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              <div className="blog-card__image-wrapper">
                <img className="blog-card__image" src={post.image} alt={post.title} loading="lazy" />
                <div className="blog-card__image-overlay"></div>
                <span className="blog-card__category-badge">{post.category}</span>
                <div className="blog-card__date-dot">
                  <span className="day">{new Date(post.date).getDate()}</span>
                  <span className="month">{new Date(post.date).toLocaleString('en-US', { month: 'short' })}</span>
                </div>
              </div>
              <div className="blog-card__body">
                <h3 className="blog-card__title">{post.title}</h3>
                <p className="blog-card__excerpt">{post.excerpt}</p>
                <div className="blog-card__meta">
                  <span>{post.author}</span>
                  <span className="blog-card__meta-dot"></span>
                  <span>{post.readTime}</span>
                </div>
                <div className="blog-card__accent-line"></div>
              </div>
            </Link>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="no-results visible" id="noResults">
            <div style={{ fontSize: "2.5rem", marginBottom: "10px" }}>✨</div>
            <p style={{ fontWeight: 500, color: "var(--color-navy)" }}>No matches found</p>
            <p style={{ color: "var(--color-text-muted)" }}>Try a different search or filter.</p>
          </div>
        )}
      </div>
    </>
  );
}