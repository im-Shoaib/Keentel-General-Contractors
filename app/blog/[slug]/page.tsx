import './blog.css';

import { getBlogData, getAllBlogSlugs } from '@/lib/blog';
import EditableText from '@/components/EditableText';
import EditableImage from '@/components/EditableImage';
import SaveControls from '@/components/SaveControls';
import BlogFAQ from '@/components/BlogFAQ';
import { BlogEditorProvider } from '@/context/BlogEditorContext';
import { notFound } from 'next/navigation';
import { cookies } from 'next/headers';

export const dynamic = 'force-dynamic';

interface BlogPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ edit?: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function BlogPage({ params, searchParams }: BlogPageProps) {
  const { slug } = await params;
  const { edit } = await searchParams;

  const data = await getBlogData(slug);
  if (!data) return notFound();

  const cookieStore = await cookies();
  const isAuthenticated = cookieStore.get('admin_authenticated')?.value === 'true';
  const isAdmin = isAuthenticated || edit === 'true';

  return (
    <BlogEditorProvider slug={slug}>
      <div className="blog-page">
        {isAdmin && (
          <div className="blog-admin-banner">
            ✏️ Admin Mode ON – Click any text to edit
          </div>
        )}

        <div className="blog-container">
          <main className="blog-main">
            <article>
              <h1 className="blog-title">
                <EditableText
                  field="title"
                  slug={slug}
                  value={data.title}
                  isAdmin={isAdmin}
                  tag="span"
                />
              </h1>

              <div className="blog-meta">
                <EditableText
                  field="date"
                  slug={slug}
                  value={data.date}
                  isAdmin={isAdmin}
                  tag="time"
                />
                <span className="blog-meta-divider">|</span>
                <EditableText
                  field="category"
                  slug={slug}
                  value={data.category}
                  isAdmin={isAdmin}
                  tag="span"
                />
              </div>

              <div className="blog-subtitle">
                <EditableText
                  field="subtitle"
                  slug={slug}
                  value={data.subtitle}
                  isAdmin={isAdmin}
                  tag="span"
                />
              </div>

              <div className="blog-featured-image">
                <EditableImage
                  field="featuredImage"
                  slug={slug}
                  src={data.featuredImage}
                  alt={data.title}
                  isAdmin={isAdmin}
                  className="blog-featured-image__img"
                />
              </div>

              <div className="blog-content">
                <EditableText
                  field="content"
                  slug={slug}
                  value={data.content}
                  isAdmin={isAdmin}
                  tag="div"
                />
              </div>

              {data.faqs && data.faqs.length > 0 && (
                <>
                  <h2 className="blog-faq-heading">FAQs</h2>
                  {isAdmin ? (
                    <div className="blog-faqs blog-faqs-edit">
                      {data.faqs.map((faq: { q: string; a: string }, index: number) => (
                        <div key={index} className="blog-faq-item active">
                          <div className="blog-faq-question">
                            <EditableText
                              field={`faqs[${index}].q`}
                              slug={slug}
                              value={faq.q}
                              isAdmin={isAdmin}
                              tag="span"
                            />
                          </div>
                          <div className="blog-faq-answer-wrapper" style={{ maxHeight: 'none' }}>
                            <div className="blog-faq-answer">
                              <EditableText
                                field={`faqs[${index}].a`}
                                slug={slug}
                                value={faq.a}
                                isAdmin={isAdmin}
                                tag="div"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <BlogFAQ faqs={data.faqs} />
                  )}
                </>
              )}

              {isAdmin && <SaveControls slug={slug} />}
            </article>
          </main>

          <aside className="blog-sidebar">
            {/* Author Card */}
            <div className="blog-sidebar-card">
              <div className="blog-author-avatar">
                <EditableImage
                  field="authorImage"
                  slug={slug}
                  src={data.authorImage || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'}
                  alt="Author"
                  isAdmin={isAdmin}
                  className="blog-author-avatar__img"
                />
              </div>
              <h3 className="blog-author-name">
                <EditableText
                  field="authorName"
                  slug={slug}
                  value={data.authorName || 'John Keentel'}
                  isAdmin={isAdmin}
                  tag="span"
                />
              </h3>
              <p className="blog-author-title">
                <EditableText
                  field="authorTitle"
                  slug={slug}
                  value={data.authorTitle || 'Senior Engineer & General Contractor'}
                  isAdmin={isAdmin}
                  tag="span"
                />
              </p>
              <p className="blog-author-bio">
                <EditableText
                  field="authorBio"
                  slug={slug}
                  value={data.authorBio || 'With over 20 years of experience...'}
                  isAdmin={isAdmin}
                  tag="span"
                />
              </p>
            </div>

            {/* CTA Card */}
            <div className="blog-sidebar-card blog-cta-card">
              <div className="blog-cta-image">
                <EditableImage
                  field="ctaImage"
                  slug={slug}
                  src={data.ctaImage || 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=200&fit=crop'}
                  alt="Discuss your project"
                  isAdmin={isAdmin}
                  className="blog-cta-image__img"
                />
              </div>
              <h3>
                <EditableText
                  field="ctaTitle"
                  slug={slug}
                  value={data.ctaTitle || "Let's Discuss Your Project"}
                  isAdmin={isAdmin}
                  tag="span"
                />
              </h3>
              <p>
                <EditableText
                  field="ctaText"
                  slug={slug}
                  value={data.ctaText || "Let's book a call..."}
                  isAdmin={isAdmin}
                  tag="span"
                />
              </p>
              <div className="blog-cta-buttons">
                <EditableText
                  field="ctaButton1Text"
                  slug={slug}
                  value={data.ctaButton1Text || 'Schedule A Consultation'}
                  isAdmin={isAdmin}
                  tag="a"
                  className="blog-cta-btn blog-cta-primary"
                  href={data.ctaButton1Link || '/contact#contactformsection'}
                />
                <EditableText
                  field="ctaButton2Text"
                  slug={slug}
                  value={data.ctaButton2Text || 'Download Company Profile Flyer'}
                  isAdmin={isAdmin}
                  tag="a"
                  className="blog-cta-btn blog-cta-secondary"
                  href={data.ctaButton2Link || '#'}
                />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </BlogEditorProvider>
  );
}