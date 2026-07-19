"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./privacy-policy.module.css";
import {
  FaUser,
  FaCogs,
  FaCookieBite,
  FaHandshake,
  FaShieldAlt,
  FaBalanceScale,
  FaExternalLinkAlt,
  FaSyncAlt,
} from "react-icons/fa";

const PrivacyPolicyPage = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles["kpp-reveal-visible"]);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll(`.${styles["kpp-reveal"]}`);
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const policySections = [
    {
      title: "Information We Collect",
      icon: <FaUser />,
      content: [
        "Full Name",
        "Company Name",
        "Email Address",
        "Phone Number",
        "Property Address",
        "Project Information",
        "Any information submitted through contact forms",
      ],
      techContent: [
        "IP Address",
        "Browser Type",
        "Device Information",
        "Pages Visited",
        "Website Usage Data",
      ],
    },
    {
      title: "How We Use Your Information",
      icon: <FaCogs />,
      content: [
        "Respond to inquiries",
        "Provide project estimates",
        "Schedule consultations",
        "Improve our services",
        "Communicate project updates",
        "Improve website performance",
        "Meet legal obligations",
      ],
      techContent: [],
    },
    {
      title: "Cookies",
      icon: <FaCookieBite />,
      content: [
        "Our website may use cookies to improve user experience, analyze website traffic, and enhance website functionality.",
        "You may disable cookies through your browser settings at any time.",
      ],
      techContent: [],
    },
    {
      title: "Third-Party Services",
      icon: <FaHandshake />,
      content: [
        "Google Analytics",
        "Google Maps",
        "Email Service Providers",
        "CRM Platforms",
        "Website Hosting Services",
      ],
      techContent: [
        "These providers only receive information necessary to perform their services.",
      ],
    },
    {
      title: "Data Security",
      icon: <FaShieldAlt />,
      content: [
        "We implement reasonable technical and organizational measures to protect your information against unauthorized access, disclosure, or misuse.",
        "While no online transmission is completely secure, we continually work to maintain appropriate safeguards.",
      ],
      techContent: [],
    },
    {
      title: "Your Rights",
      icon: <FaBalanceScale />,
      content: [
        "Access your personal information",
        "Correct inaccurate information",
        "Request deletion of your information",
        "Withdraw communication preferences",
      ],
      techContent: [],
    },
    {
      title: "External Links",
      icon: <FaExternalLinkAlt />,
      content: [
        "Our website may contain links to third-party websites. We are not responsible for their privacy practices or content.",
      ],
      techContent: [],
    },
    {
      title: "Policy Updates",
      icon: <FaSyncAlt />,
      content: [
        "We may update this Privacy Policy periodically. Changes will become effective immediately upon posting on this page.",
      ],
      techContent: [],
    },
  ];

  return (
    <div className={styles["kpp-page"]}>
      {/* Hero Section with Video Background */}
      <section className={styles["kpp-hero"]} ref={heroRef}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className={`${styles["kpp-hero-video"]} ${
            isVideoLoaded ? styles["kpp-hero-video-loaded"] : ""
          }`}
          onLoadedData={() => setIsVideoLoaded(true)}
          poster="/images/privacy/hero-fallback.jpg"
        >
          <source src="/videos/construction-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles["kpp-hero-overlay"]} />
        <div className={styles["kpp-hero-content"]}>
          <span className={styles["kpp-hero-badge"]}>
            <span className={styles["kpp-pulse-dot"]} />
            Last Updated: July 2026
          </span>
          <h1 className={styles["kpp-hero-title"]}>Privacy Policy</h1>
          <p className={styles["kpp-hero-subtitle"]}>
            Keentel General Contractors respects your privacy and is committed
            to protecting the personal information you share with us.
          </p>
          <div className={styles["kpp-hero-scroll"]}>
            <span>Scroll to learn more</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className={styles["kpp-bounce-icon"]}
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

      {/* Policy Cards Section */}
      <section className={styles["kpp-policy-grid"]}>
        <div className={styles["kpp-container"]}>
          <div className={styles["kpp-intro-text"]}>
            <h2 className={styles["kpp-reveal"]}>
              How We Handle Your Information
            </h2>
            <p className={styles["kpp-reveal"]}>
              This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website or contact us
              regarding our construction services.
            </p>
          </div>

          <div className={styles["kpp-cards-wrapper"]}>
            {policySections.map((section, idx) => (
              <div
                key={idx}
                className={`${styles["kpp-card"]} ${styles["kpp-reveal"]}`}
                style={{ transitionDelay: `${idx * 0.05}s` }}
              >
                <div className={styles["kpp-card-media"]}>
                  <span className={styles["kpp-card-icon"]}>{section.icon}</span>
                </div>
                <div className={styles["kpp-card-body"]}>
                  <h3>{section.title}</h3>
                  <ul>
                    {section.content.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                    {section.techContent.map((item, i) => (
                      <li key={`tech-${i}`} className={styles["kpp-tech"]}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* decorative background image */}
                <div
                  className={styles["kpp-card-bg-img"]}
                  style={{
                    backgroundImage: `url(/images/privacy/card-bg-${(idx % 4) + 1}.jpg)`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <section className={styles["kpp-contact"]}>
        <div className={`${styles["kpp-container"]} ${styles["kpp-reveal"]}`}>
          <h2>Contact Us</h2>
          <p>
            If you have questions regarding this Privacy Policy, please contact
            Keentel General Contractors through our Contact page.
          </p>
          <a href="/contact" className={styles["kpp-btn"]}>
            <span>Get in Touch</span>
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

      {/* Background decorative shapes */}
      <div className={styles["kpp-floating-shape-1"]} />
      <div className={styles["kpp-floating-shape-2"]} />
    </div>
  );
};

export default PrivacyPolicyPage;