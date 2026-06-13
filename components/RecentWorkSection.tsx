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
              Built for <span style={{ color: "#a6238f" }}>Tampa Bay</span> .<br />Built to last.
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
              <img src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=600&h=400&fit=crop" alt="Hyde Park Kitchen" loading="lazy" />
              <div className="recent-card-overlay">
                <span className="recent-card-category">Remodel</span>
                <h3 className="recent-card-title">Hyde Park Kitchen</h3>
              </div>
            </div>
          </div>
          {/* Project 2 */}
          <div className="recent-card">
            <div className="recent-card-image">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop" alt="Bayshore Office Buildout" loading="lazy" />
              <div className="recent-card-overlay">
                <span className="recent-card-category">Commercial</span>
                <h3 className="recent-card-title">Bayshore Office Buildout</h3>
              </div>
            </div>
          </div>
          {/* Project 3 */}
          <div className="recent-card">
            <div className="recent-card-image">
              <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop" alt="Davis Islands Bath" loading="lazy" />
              <div className="recent-card-overlay">
                <span className="recent-card-category">Remodel</span>
                <h3 className="recent-card-title">Davis Islands Bath</h3>
              </div>
            </div>
          </div>
          {/* Project 4 */}
          <div className="recent-card">
            <div className="recent-card-image">
              <img src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&h=400&fit=crop" alt="Channelside Panel Upgrade" loading="lazy" />
              <div className="recent-card-overlay">
                <span className="recent-card-category">Electrical</span>
                <h3 className="recent-card-title">Channelside Panel Upgrade</h3>
              </div>
            </div>
          </div>
          {/* Project 5 */}
          <div className="recent-card">
            <div className="recent-card-image">
              <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop" alt="South Tampa New Build" loading="lazy" />
              <div className="recent-card-overlay">
                <span className="recent-card-category">Build</span>
                <h3 className="recent-card-title">South Tampa New Build</h3>
              </div>
            </div>
          </div>
          {/* Project 6 */}
          <div className="recent-card">
            <div className="recent-card-image">
              <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop" alt="Storm Recovery — Clearwater" loading="lazy" />
              <div className="recent-card-overlay">
                <span className="recent-card-category">Emergency</span>
                <h3 className="recent-card-title">Storm Recovery — Clearwater</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}