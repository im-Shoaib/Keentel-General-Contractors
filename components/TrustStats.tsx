"use client";

import { useEffect, useRef, useState } from "react";

export default function TrustStats() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            const numbers = document.querySelectorAll(".trust_number");
            numbers.forEach((num) => {
              const target = parseInt(num.getAttribute("data-target") || "0", 10);
              const suffix = num.getAttribute("data-suffix") || "";
              const duration = 2000;
              const startTime = performance.now();

              const update = (currentTime: number) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                const current = Math.floor(eased * target);
                num.textContent = current + suffix;
                if (progress < 1) {
                  requestAnimationFrame(update);
                }
              };
              requestAnimationFrame(update);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section className="trust_section" ref={sectionRef}>
      <div className="trust_inner">
        <div className="trust_grid">
          <div className="trust_card">
            <div className="trust_number-wrapper">
              <span className="trust_number" data-target="20" data-suffix="+">0</span>
            </div>
            <p className="trust_label">Years building<br />Tampa Bay</p>
          </div>
          <div className="trust_card">
            <div className="trust_number-wrapper">
              <span className="trust_number" data-target="500" data-suffix="+">0</span>
            </div>
            <p className="trust_label">Projects<br />delivered</p>
          </div>
          <div className="trust_card">
            <div className="trust_number-wrapper">
              <span className="trust_number" data-target="98" data-suffix="%">0</span>
            </div>
            <p className="trust_label">Customer<br />satisfaction</p>
          </div>
          <div className="trust_card">
            <div className="trust_number-wrapper">
              <span className="trust_number" data-target="24" data-suffix="/7">0</span>
            </div>
            <p className="trust_label">Emergency<br />response</p>
          </div>
        </div>
      </div>
    </section>
  );
}