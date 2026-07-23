"use client";

import React, { useEffect, useState } from "react";
import styles from "./privacy-policy.module.css";
import {
  FaUser,
  FaCogs,
  FaHandshake,
  FaShieldAlt,
  FaBalanceScale,
  FaExternalLinkAlt,
  FaChild,
  FaSyncAlt,
  FaEnvelope,
} from "react-icons/fa";

const PrivacyPolicyPage = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

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
        "We may collect the following types of information when you interact with our website, chat services, or marketing materials:",
        "Personal Information: This may include your name, email address, phone number, and any other contact details you voluntarily provide when scheduling consultations or engaging in our services.",
        "Usage Data: Information related to your interaction with our website, such as IP addresses, browser type, device information, and the pages you visit on our website.",
        "Cookies and Tracking Technologies: We may use cookies and similar tracking technologies to enhance user experience, analyze website usage, and deliver personalized content or ads.",
      ],
    },
    {
      title: "How We Use Your Information",
      icon: <FaCogs />,
      content: [
        "We use the information we collect for the following purposes:",
        "To provide and improve our services, including consultations and project discussions.",
        "To respond to your inquiries or requests made via the website, chat services, or through marketing materials.",
        "To communicate with you about updates, promotions, or other relevant information related to Keentel Engineering and Keentel Electrical Contractors.",
        "To analyze website usage and improve user experience.",
      ],
    },
    {
      title: "How We Share Your Information",
      icon: <FaHandshake />,
      content: [
        "We respect your privacy and do not share your personal information with third parties, except in the following circumstances:",
        "Service Providers: We may share your information with trusted third-party service providers who assist in operating our website, conducting business operations, or providing marketing support.",
        "Legal Compliance: We may disclose your information if required to do so by law, regulation, or in response to legal requests.",
      ],
    },
    {
      title: "Data Security",
      icon: <FaShieldAlt />,
      content: [
        "We take the security of your personal information seriously and employ reasonable technical and organizational measures to protect it from unauthorized access, alteration, or disclosure. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.",
      ],
    },
    {
      title: "Your Rights and Choices",
      icon: <FaBalanceScale />,
      content: [
        "You have the right to:",
        "Access: Request access to the personal information we hold about you.",
        "Correction: Request correction of any inaccurate or incomplete information.",
        "Deletion: Request the deletion of your personal information, subject to legal obligations.",
        "Opt-out of Marketing Communications: You may opt out of receiving marketing emails or communications from us by following the unsubscribe instructions provided in the communication.",
      ],
    },
    {
      title: "Third-Party Links",
      icon: <FaExternalLinkAlt />,
      content: [
        "Our website or marketing materials may contain links to third-party websites. This Privacy Policy applies only to KEENTEL GENERAL CONTRACTORS and our subsidiaries, and we are not responsible for the privacy practices or content of third-party websites. We encourage you to read the privacy policies of any third-party sites you visit.",
      ],
    },
    {
      title: "Children’s Privacy",
      icon: <FaChild />,
      content: [
        "Our website and services are not directed to children under the age of 13, and we do not knowingly collect personal information from individuals under 13. If we learn that we have inadvertently collected such information, we will take steps to delete it as soon as possible.",
      ],
    },
    {
      title: "Changes to This Privacy Policy",
      icon: <FaSyncAlt />,
      content: [
        "KEENTEL GENERAL CONTRACTORS reserves the right to update or modify this Privacy Policy at any time. Any changes will be posted on this page with an updated effective date. We encourage you to review this Privacy Policy periodically to stay informed about how we protect your personal information.",
      ],
    },
    {
      title: "Contact Us",
      icon: <FaEnvelope />,
      content: [
        "If you have any questions or concerns regarding this Privacy Policy or our privacy practices, please contact us:",
        "KEENTEL GENERAL CONTRACTORS",
        "Attn: Privacy Policy",
        "Phone: 813-389-7871 or 813-395-0000",
        "Email1: contact@keentelgeneralcontractors.com",
        "Email2: BD@keentelengineering.com",
      ],
    },
  ];

  return (
    <div className={styles["kpp-page"]}>
      {/* Hero Section – unchanged */}
      <section className={styles["kpp-hero"]}>
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

      {/* Policy Sections – new clean layout */}
      <section className={styles["kpp-policy"]}>
        <div className={styles["kpp-container"]}>
          <div className={styles["kpp-intro"]}>
            <h2 className={styles["kpp-reveal"]}>
              How We Handle Your Information
            </h2>
            <p className={styles["kpp-reveal"]}>
              This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website or contact us
              regarding our construction services.
            </p>
          </div>

          <div className={styles["kpp-policy-list"]}>
            {policySections.map((section, idx) => (
              <div
                key={idx}
                className={`${styles["kpp-policy-item"]} ${styles["kpp-reveal"]}`}
                style={{ transitionDelay: `${idx * 0.06}s` }}
              >
                <div className={styles["kpp-policy-header"]}>
                  <span className={styles["kpp-policy-number"]}>{idx + 1}</span>
                  <span className={styles["kpp-policy-icon"]}>{section.icon}</span>
                  <h3 className={styles["kpp-policy-title"]}>{section.title}</h3>
                </div>
                <div className={styles["kpp-policy-body"]}>
                  {section.content.map((item, i) => (
                    <p key={i}>{item}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Footer – unchanged */}
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

      {/* Background decorative shapes – unchanged */}
      <div className={styles["kpp-floating-shape-1"]} />
      <div className={styles["kpp-floating-shape-2"]} />
    </div>
  );
};

export default PrivacyPolicyPage;