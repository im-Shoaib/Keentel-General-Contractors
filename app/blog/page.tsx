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
      <div className="blog-index-header">
        <h1>Keentel Blog</h1>
        <p>
          Insights, guides, and technical publications from our engineering team.
        </p>
      </div>

      <BlogFilters blogs={blogs} />
    </div>
  );
}