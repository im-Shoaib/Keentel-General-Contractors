"use client";

export default function Hero() {
  return (
    <section className="sec1-hero" style={{ backgroundImage: "url('/assets/hero_bg.png')" }}>
      <div className="sec1-hero__overlay"></div>
      <div className="sec1-hero__inner">
        <div className="sec1-hero__content">
          <span className="sec1-hero__badge">
            <span className="sec1-hero__badge-dot"></span>
            Florida's Licensed General Contractor
          </span>
          <h1 className="sec1-hero__title">
            Your project deserves a contractor who's done this <span style={{ color: "#a6238f" }}>1,000 times</span>.
          </h1>
          <p className="sec1-hero__subtitle">Residential, Commercial &amp; Industrial Experts</p>
          <p className="sec1-hero__desc">
            Keentel General Contractors delivers licensed construction expertise across Florida — from Tampa Bay to every county statewide. One team, one contract, zero surprises.
          </p>
          <div className="sec1-hero__buttons">
            <a href="#contact" className="btn btn--primary">Request Free Estimate <i className="fa-regular fa-circle-right"></i></a>
            <a href="tel:8133950000" className="btn btn--secondary"><i className="fa-solid fa-phone"></i>&nbsp; 24/7 Emergency</a>
          </div>
          <div className="sec1-hero__trust">
            <svg className="sec1-hero__trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            Trusted by 500+ Florida homeowners, businesses, and industrial facilities
          </div>
        </div>
        <div className="sec1-hero__floating-badge">
          <strong>30+</strong> Years<br />Experience
        </div>

        
      </div>
    </section>
  );
}