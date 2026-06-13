"use client";

import "./residential-design.css";
import { useEffect } from "react";

export default function ResidentialDesignPage() {
  useEffect(() => {
    // Hero carousel
    const slides = document.querySelectorAll(".hero__slide");
    const dots = document.querySelectorAll(".hero__dot");
    let current = 0;
    const totalSlides = slides.length;
    const intervalTime = 3200;
    let autoPlay: NodeJS.Timeout;

    function goToSlide(index: number) {
      slides.forEach((s) => s.classList.remove("active"));
      dots.forEach((d) => d.classList.remove("active"));
      slides[index].classList.add("active");
      dots[index].classList.add("active");
      current = index;
    }

    function nextSlide() {
      goToSlide((current + 1) % totalSlides);
    }

    autoPlay = setInterval(nextSlide, intervalTime);

    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        clearInterval(autoPlay);
        goToSlide(i);
        autoPlay = setInterval(nextSlide, intervalTime);
      });
    });

    // Scroll reveal
    const revealElements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    revealElements.forEach((el) => observer.observe(el));
    document.querySelectorAll(".hero .reveal").forEach((el) => el.classList.add("visible"));

    return () => {
      clearInterval(autoPlay);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Hero Carousel */}
      <section className="hero">
        <div className="hero__slides">
          <div
            className="hero__slide active"
            style={{ backgroundImage: "url('/assets/iStock-1488302260.jpg')" }}
          ></div>
          <div
            className="hero__slide"
            style={{ backgroundImage: "url('/assets/iStock-1425142611.jpg')" }}
          ></div>
          <div
            className="hero__slide"
            style={{ backgroundImage: "url('/assets/iStock-2203032223.jpg')" }}
          ></div>
        </div>
        <div className="hero__overlay"></div>
        <div className="hero__content">
          <p className="hero__overline reveal">Design Services: Residential Design</p>
          <h1 className="hero__title reveal reveal-delay-1">
            Residential Design Services Custom Homes, Renovations, Interiors & Landscaping
            Integration
          </h1>
          <p className="hero__subtitle reveal reveal-delay-2">
            Bringing creativity, functionality, and technical expertise together to create homes
            that perfectly balance style and comfort.
          </p>
        </div>
        <div className="hero__dots">
          <span className="hero__dot active"></span>
          <span className="hero__dot"></span>
          <span className="hero__dot"></span>
        </div>
      </section>

      {/* Intro Section */}
      <section className="intro">
        <div className="intro__inner">
          <div
            className="intro__image reveal"
            style={{ backgroundImage: "url('/assets/iStock-1488302260.jpg')" }}
          ></div>
          <div className="intro__text reveal reveal-delay-1">
            <p>
              At Keentel General Contractors, we believe that every home should be as unique as the
              people who live in it. Our residential design services bring together creativity,
              functionality, and technical expertise to transform your vision into a home that
              perfectly balances style and comfort. Whether you're building a new custom home,
              remodeling your existing space, or refreshing your interiors and landscaping, our
              team ensures that every detail is designed with precision and purpose.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Grid */}
      <section className="section section--off-white">
        <div className="section__inner">
          <p className="section__label reveal">Our Residential Design Expertise</p>
          <div className="expertise-grid">
            {/* Card 1: Custom Home Design */}
            <div className="expertise-card reveal reveal-delay-1">
              <div
                className="expertise-card__image"
                style={{ backgroundImage: "url('/assets/iStock-2149088667.jpg')" }}
              ></div>
              <div className="expertise-card__body">
                <h3 className="expertise-card__title">1. Custom Home Design</h3>
                <p className="expertise-card__desc">
                  Your dream home starts with a design that reflects your lifestyle.
                </p>
                <ul className="expertise-card__list">
                  <li>Tailored architectural concepts to suit your preferences</li>
                  <li>Integration of modern, traditional, or transitional styles</li>
                  <li>Functional layouts that maximize space and natural light</li>
                  <li>Energy-efficient and sustainable design solutions</li>
                  <li>
                    3D renderings and visualization so you can "walk through" before construction
                    begins
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 2: Renovation & Remodeling Design */}
            <div className="expertise-card reveal reveal-delay-2">
              <div
                className="expertise-card__image"
                style={{ backgroundImage: "url('/assets/iStock-1425142611.jpg')" }}
              ></div>
              <div className="expertise-card__body">
                <h3 className="expertise-card__title">2. Renovation & Remodeling Design</h3>
                <p className="expertise-card__desc">
                  Breathe new life into your home with smart, strategic redesigns.
                </p>
                <ul className="expertise-card__list">
                  <li>Kitchen and bathroom redesigns for modern living</li>
                  <li>Basement and attic conversions into functional spaces</li>
                  <li>Whole-home renovation plans</li>
                  <li>Open floor plan transformations</li>
                  <li>Code-compliant designs with permit-ready documentation</li>
                </ul>
              </div>
            </div>

            {/* Card 3: Interior Design & Space Planning */}
            <div className="expertise-card reveal reveal-delay-3">
              <div
                className="expertise-card__image"
                style={{ backgroundImage: "url('/assets/iStock-2203032223.jpg')" }}
              ></div>
              <div className="expertise-card__body">
                <h3 className="expertise-card__title">3. Interior Design & Space Planning</h3>
                <p className="expertise-card__desc">
                  We design interiors that go beyond aesthetics—they enhance the way you live.
                </p>
                <ul className="expertise-card__list">
                  <li>Custom layouts for maximum comfort and efficiency</li>
                  <li>Material, finish, and fixture selections tailored to your taste</li>
                  <li>Lighting, color, and furnishing concepts</li>
                  <li>Smart home and technology integration</li>
                  <li>Design packages for single rooms or entire homes</li>
                </ul>
              </div>
            </div>

            {/* Card 4: Landscaping & Outdoor Living Integration */}
            <div className="expertise-card reveal reveal-delay-4">
              <div
                className="expertise-card__image"
                style={{ backgroundImage: "url('/assets/iStock-91482218.jpg')" }}
              ></div>
              <div className="expertise-card__body">
                <h3 className="expertise-card__title">
                  4. Landscaping & Outdoor Living Integration
                </h3>
                <p className="expertise-card__desc">
                  Your outdoor space is an extension of your home.
                </p>
                <ul className="expertise-card__list">
                  <li>Landscape design that blends with architecture</li>
                  <li>Outdoor kitchens, patios, and entertainment areas</li>
                  <li>Sustainable plant selections and water-efficient layouts</li>
                  <li>Poolside and deck design</li>
                  <li>Driveways, walkways, and exterior lighting plans</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose">
        <div className="why-choose__wrapper">
          <div
            className="why-choose__image-side reveal"
            style={{ backgroundImage: "url('/assets/iStock-1223521808.jpg')" }}
          ></div>
          <div className="why-choose__content-side">
            <p className="why-choose__label reveal">Why Choose Keentel for Residential Design?</p>
            <h2 className="why-choose__heading reveal reveal-delay-1">
              Designed around your life, built to last
            </h2>
            <ul className="why-choose__list">
              <li className="reveal reveal-delay-1">
                <span className="why-choose__icon">
                  <svg viewBox="0 0 24 24" strokeWidth="2">
                    <path d="M12 2L2 22h20L12 2z" />
                    <circle cx="12" cy="15" r="3" />
                  </svg>
                </span>
                <div className="why-choose__item-text">
                  <strong>Personalized Approach</strong>
                  <span>We listen, understand, and design based on your lifestyle.</span>
                </div>
              </li>
              <li className="reveal reveal-delay-2">
                <span className="why-choose__icon">
                  <svg viewBox="0 0 24 24" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="4" />
                    <line x1="9" y1="9" x2="15" y2="15" />
                    <line x1="15" y1="9" x2="9" y2="15" />
                  </svg>
                </span>
                <div className="why-choose__item-text">
                  <strong>Full-Service Expertise</strong>
                  <span>From architectural drawings to final finishes, we cover it all.</span>
                </div>
              </li>
              <li className="reveal reveal-delay-3">
                <span className="why-choose__icon">
                  <svg viewBox="0 0 24 24" strokeWidth="2">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M5 20v-2a7 7 0 0 1 14 0v2" />
                  </svg>
                </span>
                <div className="why-choose__item-text">
                  <strong>Experienced Team</strong>
                  <span>Decades of design and construction experience in residential projects.</span>
                </div>
              </li>
              <li className="reveal reveal-delay-4">
                <span className="why-choose__icon">
                  <svg viewBox="0 0 24 24" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="3" />
                    <line x1="12" y1="2" x2="12" y2="6" />
                    <line x1="12" y1="18" x2="12" y2="22" />
                  </svg>
                </span>
                <div className="why-choose__item-text">
                  <strong>Technology-Driven</strong>
                  <span>3D modeling, digital visualization, and code compliance built-in.</span>
                </div>
              </li>
              <li className="reveal reveal-delay-5">
                <span className="why-choose__icon">
                  <svg viewBox="0 0 24 24" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
                <div className="why-choose__item-text">
                  <strong>Seamless Transition to Build</strong>
                  <span>
                    As a design-build contractor, we take your project from concept to completion.
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process">
        <div className="process__inner">
          <p className="section__label reveal">Our Process</p>
          <div className="process__steps">
            <div className="process__step reveal reveal-delay-1">
              <div className="process__step-number">1</div>
              <p className="process__step-title">Consultation & Vision Planning</p>
              <p className="process__step-desc">Understanding your goals, style, and budget.</p>
            </div>
            <div className="process__step reveal reveal-delay-2">
              <div className="process__step-number">2</div>
              <p className="process__step-title">Concept Design</p>
              <p className="process__step-desc">
                Drafting layouts, sketches, and preliminary 3D models.
              </p>
            </div>
            <div className="process__step reveal reveal-delay-3">
              <div className="process__step-number">3</div>
              <p className="process__step-title">Detailed Design</p>
              <p className="process__step-desc">
                Finalizing floor plans, materials, finishes, and compliance documentation.
              </p>
            </div>
            <div className="process__step reveal reveal-delay-4">
              <div className="process__step-number">4</div>
              <p className="process__step-title">Approval & Permits</p>
              <p className="process__step-desc">Handling city approvals and code requirements.</p>
            </div>
            <div className="process__step reveal reveal-delay-5">
              <div className="process__step-number">5</div>
              <p className="process__step-title">Build Transition</p>
              <p className="process__step-desc">
                Our construction team brings the approved design to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="section__inner">
          <h2 className="cta-section__title reveal">Ready to design your dream home?</h2>
          <p className="cta-section__text reveal reveal-delay-1">
            Contact Keentel General Contractors today to schedule your free design consultation and
            let's bring your vision to reality.
          </p>
          <a href="#" className="cta-section__btn reveal reveal-delay-2">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
            >
              <rect x="3" y="3" width="18" height="18" rx="3" />
              <line x1="9" y1="9" x2="15" y2="15" />
              <line x1="15" y1="9" x2="9" y2="15" />
            </svg>
            Schedule Free Consultation
          </a>
          <div className="cta-section__contact reveal reveal-delay-3">
            <span>813-395-0000</span>
            <span className="sep">|</span>
            <span>contact@keentelgeneralcontractors.com</span>
            <span className="sep">|</span>
            <span>400 North Ashley Drive, Suite 2600, Tampa, FL 33602</span>
          </div>
        </div>
      </section>
    </>
  );
}