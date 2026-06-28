"use client";

import "./pinellas.css";
import { useEffect, useRef, useState } from "react";

export default function PinellasPage() {
  // ─── FAQ state ───
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  // ─── Effect to set max-height whenever openIndex changes ───
  useEffect(() => {
    const wrappers = document.querySelectorAll(".tampa-faq-answer-wrapper");
    wrappers.forEach((wrapper, i) => {
      const content = contentRefs.current[i];
      if (i === openIndex && content) {
        const height = content.scrollHeight;
        (wrapper as HTMLDivElement).style.maxHeight = height + "px";
        const item = wrapper.closest(".tampa-faq-item");
        if (item) item.classList.add("tampa-active");
      } else {
        (wrapper as HTMLDivElement).style.maxHeight = "0px";
        const item = wrapper.closest(".tampa-faq-item");
        if (item) item.classList.remove("tampa-active");
      }
    });
  }, [openIndex]);

  // ─── Scroll animations, counter, and FAQ initial setup ───
  useEffect(() => {
    // Intersection Observer for scroll animations
    const animatedElements = document.querySelectorAll(".tampa-animate-on-scroll");
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -40px 0px",
      threshold: 0.12,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("tampa-visible");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    animatedElements.forEach((el) => {
      observer.observe(el);
    });

    // Counter animation for 500+ stat
    const countUpTarget = document.querySelector(
      ".tampa-count-up-target"
    ) as HTMLElement | null;
    let countUpDone = false;

    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !countUpDone && countUpTarget) {
            countUpDone = true;
            const target = parseInt(countUpTarget.getAttribute("data-count") || "500");
            const duration = 1800;
            const startTime = performance.now();
            const startVal = 0;

            function updateCounter(currentTime: number) {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              const current = Math.round(startVal + (target - startVal) * eased);
              countUpTarget.textContent = current.toString();
              if (progress < 1) {
                requestAnimationFrame(updateCounter);
              } else {
                countUpTarget.textContent = target.toString();
              }
            }
            requestAnimationFrame(updateCounter);
            counterObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (countUpTarget) {
      const statItem = countUpTarget.closest(".tampa-stat-item");
      if (statItem) {
        counterObserver.observe(statItem);
      }
    }

    // Cleanup
    return () => {
      observer.disconnect();
      counterObserver.disconnect();
    };
  }, []);

  // ─── FAQ list data ───
  const faqs = [
    {
      q: "Q: Are you experienced with Pinellas County's coastal construction requirements?",
      a: "Yes. We are experienced in coastal construction across Pinellas County — including CCCL compliance, FEMA flood zone construction, wind-borne debris zone standards, and barrier island building requirements in communities from Clearwater Beach to Treasure Island.",
    },
    {
      q: "Q: Can you work on barrier island properties in Pinellas County?",
      a: "Yes. We have delivered residential and commercial construction projects on barrier island properties throughout Pinellas County. We understand the specific permit, elevation, and material requirements that apply to barrier island construction in Florida.",
    },
    {
      q: "Q: Do you manage Pinellas County building permits?",
      a: "Yes. We manage all permit applications, plan reviews, and county inspections through the Pinellas County Building Department for every project we deliver in the county.",
    },
    {
      q: "Q: Do you respond to emergencies across all of Pinellas County?",
      a: "Yes. Our 24/7 emergency response covers all of Pinellas County — including barrier island communities. We confirm on-site arrival within 30 to 60 minutes.",
    },
    {
      q: "Q: Is your estimate free for Pinellas County projects?",
      a: "Yes. Our initial estimate is completely free with no obligation. We visit the site and deliver a written fixed-price proposal before any contract is signed.",
    },
  ];

  return (
    <>
      {/* Top Label */}
      <div className="tampa-top-label">
        <span>General Contractor — Pinellas County</span>
        <span className="tampa-divider-label">|</span>
        <span>Residential, Commercial &amp; Industrial Construction — Pinellas County, Florida</span>
      </div>

      {/* Hero Section */}
      <section className="tampa-hero" aria-labelledby="hero-heading">
        <div className="tampa-hero-inner">
          <span className="tampa-hero-label">INTRODUCTION</span>
          <h1 id="hero-heading" className="tampa-hero-heading tampa-animate-on-scroll tampa-fade-in-up">
            General Contractor in Pinellas County, Florida
          </h1>
          <p
            className="tampa-hero-text tampa-animate-on-scroll tampa-fade-in-up"
            style={{ transitionDelay: "0.1s" }}
          >
            We deliver licensed general contracting services across Pinellas County —
            from St. Petersburg and Clearwater to Dunedin, Tarpon Springs, and every
            barrier island community along Florida's Gulf Coast. Pinellas County
            presents some of the most complex construction environments in Florida,
            and we have the experience to navigate them correctly.
          </p>
          <p
            className="tampa-hero-text tampa-animate-on-scroll tampa-fade-in-up"
            style={{ transitionDelay: "0.2s" }}
          >
            We always advise Pinellas County clients — particularly those on barrier
            islands and coastal waterfront properties — that the regulatory
            requirements here are more layered than almost anywhere else in the state.
            Flood zones, coastal construction setbacks, wind-borne debris zone
            requirements, and CCCL restrictions all interact on the same parcel.
            Getting it right requires a contractor who deals with these requirements
            daily.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="tampa-stats-bar" aria-label="Key statistics">
        <div className="tampa-stats-bar-inner">
          <div className="tampa-stat-item tampa-animate-on-scroll tampa-fade-in-up">
            <div className="tampa-stat-value">24/7</div>
            <div className="tampa-stat-label">Emergency Response</div>
          </div>
          <div
            className="tampa-stat-item tampa-animate-on-scroll tampa-fade-in-up"
            style={{ transitionDelay: "0.1s" }}
          >
            <div className="tampa-stat-value">A+</div>
            <div className="tampa-stat-label">BBB Rated</div>
          </div>
          <div
            className="tampa-stat-item tampa-animate-on-scroll tampa-fade-in-up"
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="tampa-stat-value">
              <span className="tampa-count-up-target" data-count="500">
                500
              </span>
              +
            </div>
            <div className="tampa-stat-label">Projects Delivered</div>
          </div>
          <div
            className="tampa-stat-item tampa-animate-on-scroll tampa-fade-in-up"
            style={{ transitionDelay: "0.3s" }}
          >
            <div className="tampa-stat-value">5-Yr</div>
            <div className="tampa-stat-label">Written Warranty</div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="tampa-section tampa-section-alt" aria-labelledby="services-heading">
        <div className="tampa-section-inner">
          <p className="tampa-section-label">SERVICES WE DELIVER IN PINELLAS COUNTY</p>
          <h2
            id="services-heading"
            className="tampa-section-heading tampa-animate-on-scroll tampa-fade-in-up"
          >
            What We Build in Pinellas County
          </h2>
          <p
            className="tampa-animate-on-scroll tampa-fade-in"
            style={{ color: "var(--color-text-light)", marginBottom: "20px", fontSize: "0.95rem" }}
          >
            We deliver the full scope of licensed general contracting services across
            Pinellas County — the same team, the same licensed standard, and the same
            5-year warranty on every project.
          </p>
          <div className="tampa-services-grid">
            <div className="tampa-service-card tampa-animate-on-scroll tampa-fade-in-up">
              <span className="tampa-service-icon">
                <i className="fa-solid fa-house"></i>
              </span>
              <h3 className="tampa-service-title">Residential Construction</h3>
              <p className="tampa-service-desc">
                Custom homes, additions, and new builds designed and built to Florida
                Building Code.
              </p>
            </div>
            <div
              className="tampa-service-card tampa-animate-on-scroll tampa-fade-in-up"
              style={{ transitionDelay: "0.08s" }}
            >
              <span className="tampa-service-icon">
                <i className="fa-solid fa-hammer"></i>
              </span>
              <h3 className="tampa-service-title">Remodeling</h3>
              <p className="tampa-service-desc">
                Kitchen, bathroom, whole-home, and commercial remodels — managed under
                one contract.
              </p>
            </div>
            <div
              className="tampa-service-card tampa-animate-on-scroll tampa-fade-in-up"
              style={{ transitionDelay: "0.16s" }}
            >
              <span className="tampa-service-icon">
                <i className="fa-solid fa-building"></i>
              </span>
              <h3 className="tampa-service-title">Commercial Construction</h3>
              <p className="tampa-service-desc">
                Office builds, tenant improvements, retail, and warehouse construction.
              </p>
            </div>
            <div
              className="tampa-service-card tampa-animate-on-scroll tampa-fade-in-up"
              style={{ transitionDelay: "0.24s" }}
            >
              <span className="tampa-service-icon">
                <i className="fa-solid fa-bolt"></i>
              </span>
              <h3 className="tampa-service-title">Electrical Services</h3>
              <p className="tampa-service-desc">
                Residential, commercial, and industrial electrical — CFC-licensed,
                always in-house.
              </p>
            </div>
            <div
              className="tampa-service-card tampa-animate-on-scroll tampa-fade-in-up"
              style={{ transitionDelay: "0.32s" }}
            >
              <span className="tampa-service-icon">
                <i className="fa-solid fa-phone-volume"></i>
              </span>
              <h3 className="tampa-service-title">Emergency 24/7</h3>
              <p className="tampa-service-desc">
                Storm, flood, fire, and structural emergencies — on-site within 30 to
                60 minutes.
              </p>
            </div>
            <div
              className="tampa-service-card tampa-animate-on-scroll tampa-fade-in-up"
              style={{ transitionDelay: "0.4s" }}
            >
              <span className="tampa-service-icon">
                <i className="fa-solid fa-pen-ruler"></i>
              </span>
              <h3 className="tampa-service-title">Design Services</h3>
              <p className="tampa-service-desc">
                Permit-ready architectural drawings, 3D visualization, and full
                design-build scope.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Knowledge */}
      <section className="tampa-section" aria-labelledby="local-heading">
        <div className="tampa-section-inner tampa-local-heading-center">
          <p className="tampa-section-label">LOCAL KNOWLEDGE</p>
          <h2
            id="local-heading"
            className="tampa-section-heading tampa-animate-on-scroll tampa-fade-in-up"
          >
            Why Local Knowledge Matters in Pinellas County
          </h2>
          <p
            className="tampa-local-knowledge-text tampa-animate-on-scroll tampa-fade-in-up"
            style={{ transitionDelay: "0.1s" }}
          >
            Pinellas County's construction environment is defined by its peninsular
            geography. Nearly every property in the county is within a designated
            flood zone, a wind-borne debris zone, or a coastal construction setback
            area — or all three simultaneously. We understand the Coastal Construction
            Control Line (CCCL) requirements administered by the Florida DEP, the
            FEMA flood zone mapping across the county's extensive waterfront, the
            specific building standards for barrier island construction in communities
            like Clearwater Beach, St. Pete Beach, and Treasure Island, and the
            Pinellas County Building Department's permit review process for properties
            in these regulated zones.
          </p>
          <h3
            className="tampa-animate-on-scroll tampa-fade-in"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.15rem",
              color: "var(--color-navy)",
              marginBottom: "12px",
              letterSpacing: "-0.01em",
              textAlign: "center",
            }}
          >
            Cities &amp; Communities We Serve in Pinellas County
          </h3>
          <ul
            className="tampa-cities-grid tampa-animate-on-scroll tampa-fade-in-up"
            style={{ transitionDelay: "0.15s" }}
          >
            <li>St. Petersburg</li>
            <li>Clearwater</li>
            <li>Dunedin</li>
            <li>Tarpon Springs</li>
            <li>Safety Harbor</li>
            <li>Largo</li>
            <li>Pinellas Park</li>
            <li>Clearwater Beach</li>
            <li>St. Pete Beach</li>
            <li>Treasure Island</li>
            <li>Madeira Beach</li>
            <li>Indian Rocks Beach</li>
            <li>Palm Harbor</li>
            <li>Oldsmar</li>
          </ul>
        </div>
      </section>

      {/* Why Keentel */}
      <section className="tampa-section tampa-section-alt" aria-labelledby="why-heading">
        <div className="tampa-section-inner">
          <p className="tampa-section-label">WHY KEENTEL</p>
          <h2
            id="why-heading"
            className="tampa-section-heading tampa-animate-on-scroll tampa-fade-in-up"
          >
            Why Pinellas County Clients Choose Keentel
          </h2>
          <div className="tampa-why-grid">
            <div className="tampa-why-card tampa-animate-on-scroll tampa-slide-in-left">
              <span className="tampa-why-card-accent"></span>
              <h3 className="tampa-why-card-title">Licensed &amp; Insured in Florida</h3>
              <p className="tampa-why-card-desc">
                We hold active CGC, CPC, and CFC licenses. Every crew member on your
                Pinellas County project is fully covered — general liability and
                workers' compensation.
              </p>
            </div>
            <div
              className="tampa-why-card tampa-animate-on-scroll tampa-slide-in-right"
              style={{ transitionDelay: "0.1s" }}
            >
              <span className="tampa-why-card-accent"></span>
              <h3 className="tampa-why-card-title">Permit-Managed on Every Project</h3>
              <p className="tampa-why-card-desc">
                We manage all permit submissions and county inspections through the
                Pinellas County Building Department on your behalf. You never have to
                chase approvals.
              </p>
            </div>
            <div
              className="tampa-why-card tampa-animate-on-scroll tampa-slide-in-left"
              style={{ transitionDelay: "0.2s" }}
            >
              <span className="tampa-why-card-accent"></span>
              <h3 className="tampa-why-card-title">One Team — Full Accountability</h3>
              <p className="tampa-why-card-desc">
                Design, construction, electrical, and finishing are all managed by our
                in-house licensed team under one contract. One project manager. One
                point of contact. No gaps.
              </p>
            </div>
            <div
              className="tampa-why-card tampa-animate-on-scroll tampa-slide-in-right"
              style={{ transitionDelay: "0.3s" }}
            >
              <span className="tampa-why-card-accent"></span>
              <h3 className="tampa-why-card-title">5-Year Workmanship Warranty</h3>
              <p className="tampa-why-card-desc">
                Every project we complete in Pinellas County is backed by our written
                5-year workmanship warranty. If something is not right, we return and
                fix it at no charge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="tampa-section" aria-labelledby="faq-heading">
        <div className="tampa-section-inner">
          <p className="tampa-section-label">FAQ</p>
          <h2
            id="faq-heading"
            className="tampa-section-heading tampa-animate-on-scroll tampa-fade-in-up"
          >
            Frequently Asked Questions — Pinellas County
          </h2>
          <div className="tampa-faq-list">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="tampa-faq-item tampa-animate-on-scroll tampa-fade-in-up"
                style={{ transitionDelay: `${index * 0.08}s` }}
              >
                <button
                  className="tampa-faq-question"
                  aria-expanded={openIndex === index}
                  onClick={() => toggleFaq(index)}
                >
                  {faq.q}
                </button>
                <div className="tampa-faq-answer-wrapper">
                  <div
                    className="tampa-faq-answer"
                    ref={(el) => {
                      contentRefs.current[index] = el;
                    }}
                  >
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="tampa-cta-section" aria-labelledby="cta-heading">
        <div className="tampa-cta-inner">
          <h2
            id="cta-heading"
            className="tampa-cta-heading tampa-animate-on-scroll tampa-fade-in-up"
          >
            Start Your Pinellas County Project Today
          </h2>
          <p
            className="tampa-animate-on-scroll tampa-fade-in"
            style={{
              color: "rgba(255,255,255,0.8)",
              marginBottom: "18px",
              fontSize: "0.95rem",
              transitionDelay: "0.1s",
            }}
          >
            Contact Keentel General Contractors for a free, no-obligation estimate on
            your residential, commercial, or industrial project anywhere in Pinellas
            County.
          </p>
          <div
            className="tampa-cta-phone tampa-animate-on-scroll tampa-scale-in"
            style={{ transitionDelay: "0.2s" }}
          >
            <i className="fa-solid fa-phone"></i>{" "}
            <a href="tel:+18133900000">(813) 390-0000</a>
          </div>
          <p
            className="tampa-cta-sub tampa-animate-on-scroll tampa-fade-in"
            style={{ transitionDelay: "0.25s" }}
          >
            Available 7 Days a Week &nbsp;|&nbsp; 24/7 Emergency Line
          </p>
          <a
            href="#"
            className="tampa-cta-btn tampa-animate-on-scroll tampa-scale-in"
            style={{ transitionDelay: "0.35s" }}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Request Free Estimate
          </a>
          <p
            className="tampa-cta-location tampa-animate-on-scroll tampa-fade-in"
            style={{ transitionDelay: "0.45s" }}
          >
            <i className="fa-solid fa-location-dot"></i> &nbsp;Serving all of Pinellas
            County, Florida
          </p>
        </div>
      </section>
    </>
  );
}