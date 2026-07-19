"use client";

export default function TopBar() {
  return (
    <div className="topbar" aria-label="Contact information bar">
      <div className="topbar__inner">
        <a href="tel:8133950000" className="topbar__item">
          <svg className="topbar__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
          </svg>
          Phone: 813-395-0000
        </a>
        <span className="topbar__separator">|</span>
        <span className="topbar__item">
          <svg className="topbar__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          400 North Ashley Drive, Suite 2600, Tampa, FL 33602
        </span>
        <span className="topbar__separator">|</span>
        <span className="topbar__serving">Serving Tampa & Surrounding Counties</span>
      </div>
    </div>
  );
}