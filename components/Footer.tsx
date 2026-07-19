"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <section className="sec10-footer">
      <div className="sec10-pre-footer">
        <div className="sec10-pre-footer__inner">
          <p className="sec10-pre-footer__text">
            Keentel General Contractors – Powering Tampa's Homes and Businesses with Expertise You Can Trust.
          </p>
        </div>
      </div>

      <div className="sec10-main-footer">
        <div className="sec10-main-footer__inner">
          {/* Column 1: Branding & Trust */}
          <div className="sec10-footer-col">
            <div className="sec10-footer-logo">
              <img
                src="/assets/logo.png"
                alt="Keentel Electrical Contractors logo"
                className="sec10-footer-logo__img"
              />
            </div>
            <div className="sec10-footer-badge">
              <span className="sec10-footer-badge__bbb">BBB Accredited Business</span>
              <span className="sec10-footer-badge__rating">A+ Rating</span>
            </div>
            <div className="sec10-footer-social">
              {/* Facebook */}
              <a href="#" className="sec10-footer-social__link" aria-label="Facebook">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                </svg>
              </a>
              {/* X (Twitter) */}
              <a href="#" className="sec10-footer-social__link" aria-label="X (Twitter)">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="sec10-footer-social__link" aria-label="Instagram">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              {/* YouTube */}
              <a href="#" className="sec10-footer-social__link" aria-label="YouTube">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.376.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.376-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="sec10-footer-social__link" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                </svg>
              </a>
              {/* Pinterest and TikTok removed as requested */}
            </div>
          </div>

          {/* Column 2: Get in Touch */}
          <div className="sec10-footer-col">
            <h3 className="sec10-footer-col__title">Get in Touch</h3>
            <ul className="sec10-footer-contact">
              <li className="sec10-footer-contact__item">
                <svg
                  className="sec10-footer-contact__icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                <a href="tel:8133950000">813-395-0000</a>
              </li>
              <li className="sec10-footer-contact__item">
                <svg
                  className="sec10-footer-contact__icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href="mailto:contact@keentelgeneralcontractors.com">
                  contact@keentelgeneralcontractors.com
                </a>
              </li>
              <li className="sec10-footer-contact__item">
                <svg
                  className="sec10-footer-contact__icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>400 North Ashley Drive, Suite 2600, Tampa, FL 33602</span>
              </li>
              {/* License line removed */}
            </ul>
          </div>

          {/* Column 3: Company Links (updated) */}
          <div className="sec10-footer-col">
            <h3 className="sec10-footer-col__title" style={{ paddingLeft: "30px" }}>
              General Contractor
            </h3>
            <ul className="sec10-footer-links" style={{ paddingLeft: "30px" }}>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/industries">Industries</Link></li>
              <li><Link href="/service-areas">Service Areas</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Column 4: Legal (replaces newsletter) */}
          <div className="sec10-footer-col">
            <h3 className="sec10-footer-col__title">Legal</h3>
            <ul className="sec10-footer-links">
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>

        <div className="sec10-bottom-bar">
          <div className="sec10-bottom-bar__inner">
            <p className="sec10-bottom-bar__copyright">
              © 2026 Copyright keentelgeneralcontractors
            </p>
            <p>
              Developed & Managed by{" "}
              <span>
                <a
                  href="https://dexoradigital.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Dexora Digital
                </a>
              </span>
            </p>
            <div className="sec10-bottom-bar__links">
              <a href="/terms">Term and Condition</a>
              <span className="sep">|</span>
              <a href="/privacy">Privacy Policy</a>
              <span className="sep">|</span>
              <a href="/legal">Legal Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}