// src/app/blog/page.tsx
import './blog.css';
import { getAllBlogSlugs, getBlogData } from '@/lib/blog';
import BlogFilters from '@/components/BlogFilters';

export const dynamic = 'force-dynamic';

export default async function BlogIndexPage() {
  const slugs = await getAllBlogSlugs();

  // Fetch all blog data
  const blogs = await Promise.all(
    slugs.map(async (slug) => {
      const data = await getBlogData(slug);
      return {
        slug,
        ...data,
      };
    })
  );

  // Sort by date (newest first)
  blogs.sort((a, b) => {
    const dateA = new Date(a.date || '2000-01-01');
    const dateB = new Date(b.date || '2000-01-01');
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <div className="blog-index-page">
      {/* ─── HERO SECTION ─── */}
      <section className="blog-hero">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="blog-hero-video"
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="blog-hero-overlay"></div>
        <div className="blog-hero-content">
          <span className="hero-badge">Insights &amp; Updates</span>
          <h1 className="hero-title">
            Stories from the <br/>
            <span className="hero-gradient-text">Keentel Team</span>
          </h1>
          <p className="hero-subtitle">
            Deep dives, technical guides, and product announcements.
          </p>
          <a href="#blog-grid" className="hero-cta">
            Explore articles
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </section>

      {/* ─── EXISTING HEADER ─── */}
      <div className="blog-index-header" id='blog-grid'>
        <h1>Keentel Blogs</h1>
        <p>
          Insights, guides, and technical publications from our engineering team.
        </p>
      </div>

      <BlogFilters blogs={blogs} />
    </div>
  );
}