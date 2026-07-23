"use client";

import React, { useEffect, useState } from "react";
import styles from "./disclaimer.module.css";
import { FaInfoCircle, FaHandshake, FaEnvelope } from "react-icons/fa";

const DisclaimerPage = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles["kd-reveal-visible"]);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll(`.${styles["kd-reveal"]}`);
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles["kd-page"]}>
      {/* Hero Section */}
      <section className={styles["kd-hero"]}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className={`${styles["kd-hero-video"]} ${
            isVideoLoaded ? styles["kd-hero-video-loaded"] : ""
          }`}
          onLoadedData={() => setIsVideoLoaded(true)}
          poster="/images/disclaimer/hero-fallback.jpg"
        >
          <source src="/videos/construction-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles["kd-hero-overlay"]} />
        <div className={styles["kd-hero-content"]}>
          <span className={styles["kd-hero-badge"]}>
            <span className={styles["kd-pulse-dot"]} />
            Page Modified: April 6, 2025
          </span>
          <h1 className={styles["kd-hero-title"]}>Legal Disclaimer</h1>
          <p className={styles["kd-hero-subtitle"]}>
            Keentel Engineering Legal Disclaimer and Liability Notice
          </p>
          <div className={styles["kd-hero-scroll"]}>
            <span>Scroll to read</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className={styles["kd-bounce-icon"]}
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

      {/* Disclaimer Content */}
      <section className={styles["kd-disclaimer"]}>
        <div className={styles["kd-container"]}>
          <div className={styles["kd-intro"]}>
            <h2 className={styles["kd-reveal"]}>Disclaimer</h2>
            <p className={styles["kd-reveal"]}>
              Please read this disclaimer carefully before using our website or services.
            </p>
          </div>

          <div className={styles["kd-disclaimer-block"]}>
            <div className={`${styles["kd-disclaimer-item"]} ${styles["kd-reveal"]}`}>
              <div className={styles["kd-disclaimer-header"]}>
                <span className={styles["kd-disclaimer-icon"]}>
                  <FaInfoCircle />
                </span>
                <h3 className={styles["kd-disclaimer-title"]}>
                  Educational & Marketing Purposes
                </h3>
              </div>
              <div className={styles["kd-disclaimer-body"]}>
                <p>
                  The information provided on this website and through chatbot responses is intended solely for educational and marketing purposes. It is not, and should not be construed as, professional advice, guidance, or a substitute for consultation with a licensed Professional Engineer or Electrical Contractor regarding electrical installation, electrical design engineering, or any related services.
                </p>
              </div>
            </div>

            <div className={`${styles["kd-disclaimer-item"]} ${styles["kd-reveal"]}`}>
              <div className={styles["kd-disclaimer-header"]}>
                <span className={styles["kd-disclaimer-icon"]}>
                  <FaHandshake />
                </span>
                <h3 className={styles["kd-disclaimer-title"]}>
                  Florida Law & Consultation
                </h3>
              </div>
              <div className={styles["kd-disclaimer-body"]}>
                <p>
                  Under Florida law, we strongly advise that you consult with a licensed Professional Engineer or Electrical Contractor before making any decisions concerning your project.
                </p>
                <p>
                  To facilitate a comprehensive discussion of your project, we invite you to schedule a meeting with us, either in person or via video conference. We are pleased to offer an initial consultation at no cost and with no obligation.
                </p>
              </div>
            </div>

            <div className={`${styles["kd-disclaimer-cta"]} ${styles["kd-reveal"]}`}>
              <a href="/contact" className={styles["kd-btn"]}>
                <span>Schedule a Consultation</span>
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
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <section className={styles["kd-contact"]}>
        <div className={`${styles["kd-container"]} ${styles["kd-reveal"]}`}>
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this disclaimer, please reach out through our Contact page.
          </p>
          <a href="/contact" className={styles["kd-btn"]}>
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

      {/* Floating decorative shapes */}
      <div className={styles["kd-floating-shape-1"]} />
      <div className={styles["kd-floating-shape-2"]} />
    </div>
  );
};

export default DisclaimerPage;