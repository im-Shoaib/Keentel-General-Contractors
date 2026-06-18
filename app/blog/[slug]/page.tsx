// src/app/blog/[slug]/page.tsx
"use client";

import "./blog-post.css"; // import single post CSS
import { useParams } from "next/navigation";
import { getPostBySlug, blogPosts } from "@/lib/blogData";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function BlogPostPage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;
  const post = getPostBySlug(slug);

  const [openFaqs, setOpenFaqs] = useState<Set<number>>(new Set());
  const progressRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLElement>(null);

  // Reading progress bar
  useEffect(() => {
    const handleScroll = () => {
      if (!progressRef.current) return;
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0;
      progressRef.current.style.width = progress + "%";
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // TOC scroll spy
  useEffect(() => {
    if (!post) return;
    const tocLinks = document.querySelectorAll(".toc-link");
    const headings: { el: HTMLElement; link: HTMLAnchorElement }[] = [];
    tocLinks.forEach(link => {
      const id = link.getAttribute("href")?.replace("#", "");
      if (id) {
        const el = document.getElementById(id);
        if (el) headings.push({ el, link: link as HTMLAnchorElement });
      }
    });

    const handleScroll = () => {
      let current = "";
      headings.forEach(h => {
        const rect = h.el.getBoundingClientRect();
        if (rect.top <= 120) current = h.el.id;
      });
      tocLinks.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === "#" + current);
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [post]);

  // FAQ toggle
  const toggleFaq = (index: number) => {
    setOpenFaqs(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) newSet.delete(index);
      else newSet.add(index);
      return newSet;
    });
  };

  // Share functionality
  const shareBlog = () => {
    if (navigator.share) {
      navigator.share({
        title: post?.title || "Blog Post",
        text: post?.excerpt || "",
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href).then(() => {
        const btn = document.querySelector(".top-nav__share-btn") as HTMLElement;
        if (btn) {
          const original = btn.innerHTML;
          btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>';
          btn.style.background = "#22c55e";
          btn.style.color = "#fff";
          setTimeout(() => {
            btn.innerHTML = original;
            btn.style.background = "";
            btn.style.color = "";
          }, 1800);
        }
      });
    }
  };

  if (!post) {
    return (
      <div style={{ textAlign: "center", padding: "100px 20px" }}>
        <h1>Post not found</h1>
        <Link href="/blog">← Back to blogs</Link>
      </div>
    );
  }

  // Build TOC links
  const tocItems = post.toc || [];

  return (
    <>
      <div className="bg-orb bg-orb--1"></div>
      <div className="bg-orb bg-orb--2"></div>
      <div className="reading-progress" id="readingProgress" ref={progressRef}></div>

      <nav className="top-nav">
        <Link href="/blog" className="top-nav__back">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
          Back to Blogs
        </Link>
        <span className="top-nav__brand">✦ The Journal</span>
        <div className="top-nav__actions">
          <button className="top-nav__share-btn" title="Share" onClick={shareBlog}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
            </svg>
          </button>
        </div>
      </nav>

      <div className="page-wrapper">
        <aside className="sidebar" id="sidebar">
          <div className="author-card">
            <img
              className="author-card__avatar"
              src={post.authorAvatar || "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face"}
              alt={post.author}
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="90" height="90"><rect fill="%23e0dce8" width="90" height="90" rx="45"/><text x="45" y="52" text-anchor="middle" font-size="24" fill="%231a1575">SP</text></svg>';
              }}
            />
            <div className="author-card__name">{post.author}</div>
            <div className="author-card__credentials">{post.authorCredentials || "IEEE Senior Member"}</div>
            <p className="author-card__bio">{post.authorBio || "Licensed Professional Engineer."}</p>
            <div className="author-card__meta">
              <span className="author-card__tag">PE · FL, CA, NY, WV, MN</span>
              <span className="author-card__tag">IEEE 2800 Contributor</span>
              <span className="author-card__tag">EC License</span>
            </div>
          </div>

          <div className="toc-card" id="tocCard">
            <div className="toc-card__title">📋 Contents</div>
            <ul className="toc-card__list">
              {tocItems.map(item => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="toc-link">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="cta-card">
            <div className="cta-card__title">Need Compliance Help?</div>
            <p className="cta-card__text">Keentel's engineers have cleared design evaluations for solar, wind & storage projects.</p>
            <a href="#" className="cta-card__btn">Speak to an Engineer →</a>
          </div>
        </aside>

        <main className="content-area">
          <header className="blog-header">
            <span className="blog-header__category">{post.category}</span>
            <h1 className="blog-header__title">{post.title}</h1>
            <p className="blog-header__subtitle">{post.excerpt}</p>
            <div className="blog-header__meta">
              <span>{post.date}</span>
              <span className="blog-header__meta-dot"></span>
              <span>White Paper</span>
              <span className="blog-header__meta-dot"></span>
              <span>{post.readTime}</span>
            </div>
          </header>

          <article className="blog-body" ref={contentRef}>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>

          <section className="related-section">
            <h3 className="related-section__title">Related Articles</h3>
            <div className="related-grid">
              {blogPosts.slice(0, 4).map(related => (
                <Link href={`/blog/${related.slug}`} key={related.id} className="related-card">
                  <img className="related-card__image" src={related.image} alt={related.title} loading="lazy" />
                  <div className="related-card__body">
                    <div className="related-card__title">{related.title}</div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}