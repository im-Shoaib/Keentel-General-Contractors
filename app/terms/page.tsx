// app/terms/page.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./TermsConditions.module.css";
import {
  FaGlobe,
  FaCopyright,
  FaInfoCircle,
  FaClipboardList,
  FaExternalLinkAlt,
  FaShieldAlt,
  FaExclamationCircle,
  FaGavel,
  FaSyncAlt,
} from "react-icons/fa";

const TermsConditionsPage = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles["ktc-reveal-visible"]);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll(`.${styles["ktc-reveal"]}`);
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const termsSections = [
    {
      title: "Website Use",
      icon: <FaGlobe />,
      content: [
        "You agree to use this website only for lawful purposes.",
      ],
      restrictions: [
        "Attempt unauthorized access",
        "Distribute harmful software",
        "Copy website content without permission",
        "Interfere with website functionality",
        "Misrepresent your identity",
      ],
    },
    {
      title: "Intellectual Property",
      icon: <FaCopyright />,
      content: [
        "All website content, including text, graphics, images, logos, layouts, and other materials, is the property of Keentel General Contractors unless otherwise stated.",
        "Unauthorized reproduction or distribution is prohibited.",
      ],
    },
    {
      title: "Project Information",
      icon: <FaInfoCircle />,
      content: [
        "Information presented on this website is intended for general informational purposes only.",
        "Project descriptions, service information, timelines, and availability may change without notice.",
      ],
    },
    {
      title: "Estimates & Consultations",
      icon: <FaClipboardList />,
      content: [
        "Submitting a contact form or requesting an estimate does not create a contractual agreement.",
        "All proposals are subject to project review, scheduling, availability, and written agreement.",
      ],
    },
    {
      title: "Third-Party Links",
      icon: <FaExternalLinkAlt />,
      content: [
        "Our website may include links to third-party websites for convenience.",
        "We do not control or endorse external websites and are not responsible for their content.",
      ],
    },
    {
      title: "Limitation of Liability",
      icon: <FaShieldAlt />,
      content: [
        "To the maximum extent permitted by law, Keentel General Contractors shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of this website.",
      ],
    },
    {
      title: "Disclaimer",
      icon: <FaExclamationCircle />,
      content: [
        "While we strive to keep all information accurate and current, we do not guarantee that all website content is complete, accurate, or free from errors.",
      ],
    },
    {
      title: "Governing Law",
      icon: <FaGavel />,
      content: [
        "These Terms & Conditions shall be governed by the applicable laws of the State of Florida.",
      ],
    },
    {
      title: "Changes to These Terms",
      icon: <FaSyncAlt />,
      content: [
        "We reserve the right to modify these Terms & Conditions at any time.",
        "Continued use of the website constitutes acceptance of any updated terms.",
      ],
    },
  ];

  return (
    <div className={styles["ktc-page"]}>
      {/* Hero Section */}
      <section className={styles["ktc-hero"]}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className={`${styles["ktc-hero-video"]} ${
            isVideoLoaded ? styles["ktc-hero-video-loaded"] : ""
          }`}
          onLoadedData={() => setIsVideoLoaded(true)}
          poster="/images/terms/hero-fallback.jpg"
        >
          <source src="/videos/construction-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles["ktc-hero-overlay"]} />
        <div className={styles["ktc-hero-content"]}>
          <span className={styles["ktc-hero-badge"]}>
            <span className={styles["ktc-pulse-dot"]} />
            Last Updated: July 2026
          </span>
          <h1 className={styles["ktc-hero-title"]}>Terms & Conditions</h1>
          <p className={styles["ktc-hero-subtitle"]}>
            Welcome to the Keentel General Contractors website. By accessing or
            using this website, you agree to comply with these Terms &amp;
            Conditions.
          </p>
          <div className={styles["ktc-hero-scroll"]}>
            <span>Scroll to explore</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className={styles["ktc-bounce-icon"]}
            >
              <path
                d="M12 5v14M5 12l7 7 7-7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Terms Cards Section */}
      <section className={styles["ktc-terms-grid"]}>
        <div className={styles["ktc-container"]}>
          <div className={styles["ktc-intro-text"]}>
            <h2 className={styles["ktc-reveal"]}>Your Agreement With Us</h2>
            <p className={styles["ktc-reveal"]}>
              Please read these terms carefully before using our website or
              services.
            </p>
          </div>

          <div className={styles["ktc-cards-wrapper"]}>
            {termsSections.map((section, idx) => (
              <div
                key={idx}
                className={`${styles["ktc-card"]} ${styles["ktc-reveal"]}`}
                style={{ transitionDelay: `${idx * 0.05}s` }}
              >
                <div className={styles["ktc-card-media"]}>
                  <span className={styles["ktc-card-icon"]}>{section.icon}</span>
                </div>
                <div className={styles["ktc-card-body"]}>
                  <h3>{section.title}</h3>
                  <ul>
                    {section.content.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                    {section.restrictions &&
                      section.restrictions.map((item, i) => (
                        <li key={`restrict-${i}`} className={styles["ktc-restriction"]}>
                          {item}
                        </li>
                      ))}
                  </ul>
                </div>
                <div
                  className={styles["ktc-card-bg-img"]}
                  style={{
                    backgroundImage: `url(/images/terms/card-bg-${(idx % 4) + 1}.jpg)`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <section className={styles["ktc-contact"]}>
        <div className={`${styles["ktc-container"]} ${styles["ktc-reveal"]}`}>
          <h2>Contact</h2>
          <p>
            Questions regarding these Terms &amp; Conditions may be submitted through
            our Contact page.
          </p>
          <a href="/contact" className={styles["ktc-btn"]}>
            <span>Contact Us</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M4.167 10h11.666M10 4.167L15.833 10 10 15.833"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </section>

      {/* Floating decorative shapes */}
      <div className={styles["ktc-floating-shape-1"]} />
      <div className={styles["ktc-floating-shape-2"]} />
    </div>
  );
};

export default TermsConditionsPage;