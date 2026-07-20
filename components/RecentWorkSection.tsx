"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function RecentWorkSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const header = section.querySelector(".recent-header");
            const cards = section.querySelectorAll(".recent-card");

            if (header && !header.classList.contains("recent-revealed")) {
              header.classList.add("recent-revealed");
            }
            cards.forEach((card, i) => {
              setTimeout(() => {
                card.classList.add("recent-revealed");
              }, i * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="recent-section" ref={sectionRef}>
      <div className="recent-container">
        <div className="recent-header">
          <div className="recent-header-left">
            <p className="recent-eyebrow">Recent work</p>
            <h2 className="recent-title">
              Projects Built to  <span style={{ color: "#a6238f" }}>last</span>.
            </h2>
          </div>
          <Link href="/projects" className="recent-view-all">
            View All Projects <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="recent-grid">
          {/* Project 1 */}
          <div className="recent-card">
            <div className="recent-card-image">
              <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop" alt="Commercial construction site" loading="lazy" />
              <div className="recent-card-overlay">
                <span className="recent-card-category">Commercial</span>
                <h3 className="recent-card-title">Office Building</h3>
              </div>
            </div>
          </div>
          {/* Project 2 */}
          <div className="recent-card">
            <div className="recent-card-image">
              <img src="https://www.autodesk.com/blogs/construction/wp-content/uploads/2024/06/cost-to-build-a-warehouse-construction.jpg" alt="Construction workers on site" loading="lazy" />
              <div className="recent-card-overlay">
                <span className="recent-card-category">Build</span>
                <h3 className="recent-card-title">Warehouse Facility</h3>
              </div>
            </div>
          </div>
          {/* Project 3 */}
          <div className="recent-card">
            <div className="recent-card-image">
              <img src="https://cdn.ezo.io/wp-content/uploads/2021/08/plant-asset-management.jpg" alt="Industrial construction" loading="lazy" />
              <div className="recent-card-overlay">
                <span className="recent-card-category">Industrial</span>
                <h3 className="recent-card-title">Manufacturing Plant</h3>
              </div>
            </div>
          </div>
          {/* Project 4 */}
          <div className="recent-card">
            <div className="recent-card-image">
              <img src="https://www.belvanconstruction.com/wp-content/themes/belvan-construction/img/inner-commercial-services/Retail%20Store-1.png" alt="Commercial renovation" loading="lazy" />
              <div className="recent-card-overlay">
                <span className="recent-card-category">Renovation</span>
                <h3 className="recent-card-title">Retail Storefront</h3>
              </div>
            </div>
          </div>
          {/* Project 5 */}
          <div className="recent-card">
            <div className="recent-card-image">
              <img src="https://www.investopedia.com/thmb/ufSCkKocZkeEG1jGNV8D-3jMR_o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-942487282-ae2da73b74aa4e868af3a6beac662e52.jpg" alt="Multi-family construction" loading="lazy" />
              <div className="recent-card-overlay">
                <span className="recent-card-category">Multi-Family</span>
                <h3 className="recent-card-title">Apartment Complex</h3>
              </div>
            </div>
          </div>
          {/* Project 6 */}
          <div className="recent-card">
            <div className="recent-card-image">
              <img src="https://cdn.prod.website-files.com/67b63dcbadb8f1376005d51f/68111103651e4854a9fba6e3_m50%20storm%20damage.jpg" alt="Emergency restoration" loading="lazy" />
              <div className="recent-card-overlay">
                <span className="recent-card-category">Emergency</span>
                <h3 className="recent-card-title">Storm Recovery</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}