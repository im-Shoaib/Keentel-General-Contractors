// app/terms/page.tsx
"use client";

import { useEffect, useState } from "react";
import styles from "./TermsConditions.module.css";
import {
  FaGlobe,
  FaCopyright,
  FaInfoCircle,
  FaShieldAlt,
  FaLock,
  FaExternalLinkAlt,
  FaExclamationCircle,
  FaGavel,
  FaSyncAlt,
  FaBalanceScale,
  FaEnvelope,
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
      title: "Use of Website and Services",
      icon: <FaGlobe />,
      content: [
        "By using this website, including any chatbot services, content, or marketing materials, you agree to abide by these Terms.",
        "You are granted a limited, non-exclusive, non-transferable license to access and use our website solely for lawful purposes.",
      ],
    },
    {
      title: "Intellectual Property",
      icon: <FaCopyright />,
      content: [
        "All content, logos, graphics, text, images, videos, and other materials on the website are owned or licensed by Keentel General Contractors and are protected by copyright, trademark, and other intellectual property laws.",
        "You may not use, reproduce, or distribute any content without our prior written consent.",
      ],
    },
    {
      title: "No Professional Advice or Services",
      icon: <FaInfoCircle />,
      content: [
        "The information provided on this website and through chatbot responses is intended solely for educational and marketing purposes. It is not, and should not be construed as, professional advice, guidance, or a substitute for consultation with a licensed Professional Engineer or Electrical Contractor regarding electrical installation, electrical design engineering, or any related services.",
        "Under Florida law, we strongly advise that you consult with a licensed Professional Engineer or Electrical Contractor before making any decisions concerning your project.",
        "To facilitate a comprehensive discussion of your project, we invite you to schedule a meeting with us, either in person or via video conference. We are pleased to offer an initial consultation at no cost and with no obligation.",
      ],
    },
    {
      title: "User Obligations",
      icon: <FaShieldAlt />,
      content: [
        "You agree to use our website and services in compliance with all applicable laws, regulations, and guidelines.",
        "You are responsible for maintaining the confidentiality of any login credentials you may use to access certain services.",
        "You agree to promptly notify us if you become aware of any unauthorized use of your credentials.",
      ],
    },
    {
      title: "Understanding Our Privacy Policy and Your Rights",
      icon: <FaLock />,
      content: [
        "Your use of our website and services is also governed by our Privacy Policy, which can be reviewed at our website.",
        "By using our website, you consent to the collection and use of your information as described in the Privacy Policy.",
      ],
    },
    {
      title: "Links to Third-Party Websites",
      icon: <FaExternalLinkAlt />,
      content: [
        "Our website may contain links to third-party websites or services that are not owned or controlled by Keentel General Contractors.",
        "We are not responsible for the content, privacy practices, or terms of use of these external sites.",
        "We encourage you to review the privacy policies and terms of use of any third-party websites you visit.",
      ],
    },
    {
      title: "Limitation of Liability",
      icon: <FaExclamationCircle />,
      content: [
        "In no event shall Keentel General Contractors, its directors, officers, employees, or affiliates be held liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from your use of the website, services, or any content provided, even if we have been advised of the possibility of such damages.",
        "Your sole remedy for dissatisfaction with the website or services is to stop using the website or services.",
      ],
    },
    {
      title: "Indemnification",
      icon: <FaGavel />,
      content: [
        "You agree to indemnify, defend, and hold harmless Keentel General Contractors, its affiliates, officers, employees, and agents from and against any claims, actions, demands, liabilities, or damages, including reasonable attorney fees, arising out of your use of the website, violation of these Terms, or violation of any third-party rights.",
      ],
    },
    {
      title: "Modifications",
      icon: <FaSyncAlt />,
      content: [
        "We reserve the right to modify, suspend, or discontinue any aspect of our website, services, or marketing materials at any time without notice.",
        "We also reserve the right to update or change these Terms at any time. Any changes will be posted on this page with an updated effective date.",
        "Your continued use of the website after any changes constitutes your acceptance of the updated Terms.",
      ],
    },
    {
      title: "Governing Law and Dispute Resolution",
      icon: <FaBalanceScale />,
      content: [
        "These Terms shall be governed by and construed in accordance with the laws of the State of Florida, without regard to its conflict of law principles.",
        "Any disputes arising under or in connection with these Terms shall be resolved through binding arbitration in Florida, and you agree to submit to the exclusive jurisdiction of such arbitration.",
      ],
    },
    {
      title: "Contact Information",
      icon: <FaEnvelope />,
      content: [
        "If you have any questions about these Terms and Conditions or need to contact us for any reason, please reach out via:",
        "Keentel General Contractors",
        "Attn: Terms and Conditions",
        "Email: contact@keentelgeneralcontractors.com",
      ],
    },
  ];

  return (
    <div className={styles["ktc-page"]}>
      {/* Hero Section - unchanged */}
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

      {/* Terms Sections - New clean layout */}
      <section className={styles["ktc-terms"]}>
        <div className={styles["ktc-container"]}>
          <div className={styles["ktc-intro"]}>
            <h2 className={styles["ktc-reveal"]}>Your Agreement With Us</h2>
            <p className={styles["ktc-reveal"]}>
              Please read these terms carefully before using our website or services.
            </p>
          </div>

          <div className={styles["ktc-terms-list"]}>
            {termsSections.map((section, idx) => (
              <div
                key={idx}
                className={`${styles["ktc-term"]} ${styles["ktc-reveal"]}`}
                style={{ transitionDelay: `${idx * 0.06}s` }}
              >
                <div className={styles["ktc-term-header"]}>
                  <span className={styles["ktc-term-number"]}>{idx + 1}</span>
                  <span className={styles["ktc-term-icon"]}>{section.icon}</span>
                  <h3 className={styles["ktc-term-title"]}>{section.title}</h3>
                </div>
                <div className={styles["ktc-term-body"]}>
                  {section.content.map((item, i) => (
                    <p key={i}>{item}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Footer - unchanged */}
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

      {/* Floating decorative shapes - unchanged */}
      <div className={styles["ktc-floating-shape-1"]} />
      <div className={styles["ktc-floating-shape-2"]} />
    </div>
  );
};

export default TermsConditionsPage;