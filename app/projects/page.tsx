"use client";

import React, { useEffect, useRef, useState } from "react";
import "./projects.css";

type IconName =
    | "compass"
    | "clipboard"
    | "hardhat"
    | "check"
    | "users"
    | "tools"
    | "chat"
    | "shield"
    | "clock"
    | "handshake"
    | "arrow"
    | "plus"
    | "building"
    | "factory"
    | "home"
    | "hammer"
    | "flame"
    | "droplet"
    | "pin"
    | "mail"
    | "phone"
    | "layers"
    | "grid"
    | "play";

function Icon({ name, className }: { name: IconName; className?: string }) {
    const paths: Record<IconName, React.ReactNode> = {
        compass: (
            <>
                <circle cx="12" cy="12" r="9" />
                <path d="M14.8 9.2 10.6 10.6 9.2 14.8l4.2-1.4 1.4-4.2Z" />
            </>
        ),
        clipboard: (
            <>
                <rect x="6" y="4.5" width="12" height="16" rx="1.5" />
                <path d="M9.5 4.5V3.8a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v.7" />
                <path d="M9 12.5l2 2 4-4.5" />
            </>
        ),
        hardhat: (
            <>
                <path d="M4 16.5a8 8 0 0 1 16 0Z" />
                <path d="M12 8v-.5a1.5 1.5 0 0 1 1.5-1.5h0A1.5 1.5 0 0 1 15 7.5V8" />
                <path d="M3 16.5h18" />
                <path d="M12 16.5V11" />
            </>
        ),
        check: (
            <>
                <circle cx="12" cy="12" r="9" />
                <path d="M8 12.2l2.6 2.6L16.2 9" />
            </>
        ),
        users: (
            <>
                <circle cx="9" cy="8.5" r="3" />
                <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
                <circle cx="17" cy="9.5" r="2.4" />
                <path d="M15.5 13a4.6 4.6 0 0 1 5 5.6" />
            </>
        ),
        tools: (
            <>
                <path d="M14 6.5a3 3 0 0 0 4 4l3.2 3.2-2 2L16 12.5a3 3 0 0 0-4-4l-3-3 2-2Z" />
                <path d="M6.5 14 3.6 16.9a2 2 0 0 0 2.8 2.8L9.3 16.8" />
            </>
        ),
        chat: (
            <>
                <path d="M4 6.5A1.5 1.5 0 0 1 5.5 5h13A1.5 1.5 0 0 1 20 6.5v8A1.5 1.5 0 0 1 18.5 16H10l-4 3.2V16H5.5A1.5 1.5 0 0 1 4 14.5Z" />
            </>
        ),
        shield: (
            <>
                <path d="M12 3.5 19 6v5.2c0 4.6-3 7.6-7 9.3-4-1.7-7-4.7-7-9.3V6Z" />
                <path d="M8.7 12.1l2.3 2.3 4.3-4.6" />
            </>
        ),
        clock: (
            <>
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5.2l3.6 2.1" />
            </>
        ),
        handshake: (
            <>
                <path d="M2.5 12.5 6 9l3 2 2.4-2.2a1.7 1.7 0 0 1 2.4.1l4 4.1" />
                <path d="M8.5 12.5 11 15l1.5-1.3" />
                <path d="M21.5 12.5 18 9l-2 1.8" />
            </>
        ),
        arrow: (
            <>
                <path d="M4.5 12h15" />
                <path d="M13 6.5 19.5 12 13 17.5" />
            </>
        ),
        plus: (
            <>
                <path d="M12 5v14" />
                <path d="M5 12h14" />
            </>
        ),
        building: (
            <>
                <rect x="5" y="3.5" width="10" height="17" rx="0.5" />
                <path d="M15 9h3.5a1 1 0 0 1 1 1v9.5H15" />
                <path d="M8.3 7h.01M11.3 7h.01M8.3 10.2h.01M11.3 10.2h.01M8.3 13.4h.01M11.3 13.4h.01M8.3 16.6h.01M11.3 16.6h.01" />
            </>
        ),
        factory: (
            <>
                <path d="M4 20.5V12l4.5 3V12l4.5 3V12l4.5 3V6.5L21 8v12.5Z" />
                <path d="M4 20.5h17" />
            </>
        ),
        home: (
            <>
                <path d="M4 11.5 12 4l8 7.5" />
                <path d="M6 10v10h5v-6h2v6h5V10" />
            </>
        ),
        hammer: (
            <>
                <path d="M14.5 5.5 18.5 9.5" />
                <path d="M13 7 3.8 16.2a1.5 1.5 0 0 0 2.1 2.1L15 9" />
                <path d="M16 4.5l3.5 3.5 1.2-1.2a1.7 1.7 0 0 0 0-2.3 1.7 1.7 0 0 0-2.3 0Z" />
            </>
        ),
        flame: (
            <>
                <path d="M12 3.5c1 2.3-.4 3.4-1.4 4.6-1.3 1.5-2 2.9-2 4.6a3.4 3.4 0 0 0 6.8 0c0-.9-.3-1.6-.8-2.3.9.6 1.9 1.9 1.9 3.6a4.5 4.5 0 0 1-9 0c0-4.3 3.2-6 4.5-10.5Z" />
            </>
        ),
        droplet: (
            <>
                <path d="M12 3.5s6 6.6 6 11a6 6 0 0 1-12 0c0-4.4 6-11 6-11Z" />
            </>
        ),
        pin: (
            <>
                <path d="M12 21s7-6.3 7-11.5A7 7 0 0 0 5 9.5C5 14.7 12 21 12 21Z" />
                <circle cx="12" cy="9.3" r="2.3" />
            </>
        ),
        mail: (
            <>
                <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
                <path d="M4 6.5 12 13l8-6.5" />
            </>
        ),
        phone: (
            <>
                <path d="M6 3.5h3l1.3 4-2 1.5a11 11 0 0 0 5.7 5.7l1.5-2 4 1.3v3a1.5 1.5 0 0 1-1.6 1.5A16.5 16.5 0 0 1 4.5 5.1 1.5 1.5 0 0 1 6 3.5Z" />
            </>
        ),
        layers: (
            <>
                <path d="M12 3.5 4 8l8 4.5L20 8Z" />
                <path d="M4 12 12 16.5 20 12" />
                <path d="M4 16 12 20.5 20 16" />
            </>
        ),
        grid: (
            <>
                <path d="M4 4h6.5v6.5H4ZM13.5 4H20v6.5h-6.5ZM4 13.5h6.5V20H4ZM13.5 13.5H20V20h-6.5Z" />
            </>
        ),
        play: (
            <>
                <circle cx="12" cy="12" r="9" />
                <path d="M10.3 8.7 15.5 12l-5.2 3.3Z" />
            </>
        ),
    };

    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            {paths[name]}
        </svg>
    );
}

/* -------------------------------------------------------------------------
   Content data — sourced from the Keentel Projects page copy.
   ------------------------------------------------------------------------- */

const TRUST_BAR = [
    "Quality Craftsmanship",
    "Professional Project Management",
    "Licensed & Insured",
    "Safety-First Construction",
    "Trusted Project Delivery",
];

type Category = {
    tag: string;
    title: string;
    description: string;
    items: string[];
    cta: string;
    image: string;
    icon: IconName;
};

const CATEGORIES: Category[] = [
    {
        tag: "01",
        title: "Commercial Projects",
        description:
            "Modern commercial spaces designed to support business growth, improve functionality, and create exceptional customer and employee experiences.",
        items: [
            "Office Buildings",
            "Retail Centers",
            "Restaurants",
            "Medical Offices",
            "Hospitality Facilities",
            "Mixed-Use Developments",
            "Tenant Improvements",
            "Commercial Renovations",
        ],
        cta: "View Commercial Projects",
        image:
            "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
        icon: "building",
    },
    {
        tag: "02",
        title: "Industrial Projects",
        description:
            "Construction solutions that improve operational efficiency, increase production capacity, and support long-term industrial performance.",
        items: [
            "Manufacturing Facilities",
            "Warehouses",
            "Distribution Centers",
            "Production Facilities",
            "Logistics Buildings",
            "Industrial Expansions",
            "Equipment Installations",
            "Facility Improvements",
        ],
        cta: "View Industrial Projects",
        image:
            "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1200&q=80",
        icon: "factory",
    },
    {
        tag: "03",
        title: "Residential Projects",
        description:
            "Thoughtfully crafted residential construction and remodeling projects designed around comfort, functionality, and long-term value.",
        items: [
            "Custom Homes",
            "Luxury Renovations",
            "Kitchen Remodeling",
            "Bathroom Remodeling",
            "Home Additions",
            "Whole Home Renovations",
            "Basement Finishing",
            "Outdoor Living Spaces",
        ],
        cta: "View Residential Projects",
        image:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        icon: "home",
    },
    {
        tag: "04",
        title: "Renovation Projects",
        description:
            "Modernizing existing properties through strategic renovations that improve appearance, functionality, and property value.",
        items: [
            "Office Renovations",
            "Retail Remodeling",
            "Interior Renovations",
            "Tenant Improvements",
            "Facility Upgrades",
            "Structural Improvements",
            "Building Modernization",
            "Property Improvements",
        ],
        cta: "View Renovation Projects",
        image:
            "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
        icon: "hammer",
    },
    {
        tag: "05",
        title: "Emergency Restoration Projects",
        description:
            "Helping businesses and homeowners recover after unexpected property damage through professional restoration and reconstruction.",
        items: [
            "Fire Damage Restoration",
            "Water Damage Repairs",
            "Storm Damage Recovery",
            "Structural Reconstruction",
            "Commercial Restoration",
            "Residential Restoration",
            "Insurance Restoration",
            "Complete Property Rebuilding",
        ],
        cta: "View Restoration Projects",
        image:
            "https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=1200&q=80",
        icon: "flame",
    },
];

const PROCESS = [
    {
        num: "01",
        title: "Discover",
        description:
            "Understanding project goals, budget, timeline, and operational requirements.",
        icon: "compass" as IconName,
    },
    {
        num: "02",
        title: "Plan",
        description:
            "Developing construction strategies, schedules, budgets, and project coordination plans.",
        icon: "clipboard" as IconName,
    },
    {
        num: "03",
        title: "Build",
        description:
            "Executing construction with experienced leadership and attention to quality.",
        icon: "hardhat" as IconName,
    },
    {
        num: "04",
        title: "Deliver",
        description:
            "Completing inspections, closeout documentation, and final project handover with confidence.",
        icon: "check" as IconName,
    },
];

const TRUST_FEATURES = [
    {
        title: "Professional Project Management",
        description: "Experienced leadership from planning through completion.",
        icon: "users" as IconName,
    },
    {
        title: "Quality Craftsmanship",
        description:
            "Construction built with precision, durability, and attention to detail.",
        icon: "tools" as IconName,
    },
    {
        title: "Transparent Communication",
        description:
            "Clear updates and collaborative decision-making throughout the project.",
        icon: "chat" as IconName,
    },
    {
        title: "Safety-First Execution",
        description: "Safe job sites and responsible construction practices.",
        icon: "shield" as IconName,
    },
    {
        title: "Reliable Scheduling",
        description: "Carefully managed timelines designed to keep projects moving.",
        icon: "clock" as IconName,
    },
    {
        title: "Long-Term Partnerships",
        description:
            "Focused on building relationships through exceptional project delivery.",
        icon: "handshake" as IconName,
    },
];

const GALLERY = [
    {
        title: "Corporate Headquarters Build-Out",
        category: "Commercial",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR37W1Ka16SMlWHd66uNHTfBz9YEDebU847WkHZrxOjwU0gs6H0v0-cGQQ&s=10",
    },
    {
        title: "Distribution Center Expansion",
        category: "Industrial",
        image:
            "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80",
    },
    {
        title: "Custom Home Renovation",
        category: "Residential",
        image:
            "https://wallsanddreams.com/wp-content/uploads/2024/10/image2-2.jpg",
    },
    {
        title: "Luxury Bathroom Remodel",
        category: "Residential",
        image:
            "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=80",
    },
    {
        title: "Retail Tenant Improvement",
        category: "Renovation",
        image:
            "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80",
    },
    {
        title: "Storm Damage Reconstruction",
        category: "Restoration",
        image:
            "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=80",
    },
    {
        title: "Manufacturing Facility Upgrade",
        category: "Industrial",
        image:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80",
    },
    {
        title: "Mixed-Use Development",
        category: "Commercial",
        image:
            "https://www.pillarstone.pk/assets/img/Commercial-Construction-Lahore-3.webp",
    },
];

const GALLERY_FILTERS = [
    "All",
    "Commercial",
    "Industrial",
    "Residential",
    "Renovation",
    "Restoration",
];

const PROJECT_TYPES_ROW_1 = [
    "Commercial Offices",
    "Industrial & Manufacturing",
    "Warehousing & Distribution",
    "Retail",
    "Restaurants & Hospitality",
];

const PROJECT_TYPES_ROW_2 = [
    "Healthcare",
    "Educational Facilities",
    "Government Buildings",
    "Multi-Family Developments",
    "Large Residential Projects",
];

const FAQS = [
    {
        q: "What types of construction projects do you complete?",
        a: "We deliver commercial, industrial, residential, renovation, and emergency restoration projects for a wide range of clients and industries.",
    },
    {
        q: "Can you manage projects from planning to completion?",
        a: "Yes. We provide complete project management, construction coordination, quality control, and final project delivery.",
    },
    {
        q: "Do you work on occupied buildings?",
        a: "Yes. Many renovation and remodeling projects are completed while facilities remain operational through carefully planned construction phasing.",
    },
    {
        q: "Can you handle large-scale commercial projects?",
        a: "Absolutely. Our team has the experience and resources to manage projects of varying sizes and complexity.",
    },
    {
        q: "Do you provide Design-Build services?",
        a: "Yes. We offer integrated Design-Build solutions that simplify project delivery through one coordinated team.",
    },
    {
        q: "How do I get started?",
        a: "Contact Keentel General Contractors to schedule a consultation. We'll discuss your goals, evaluate your project, and recommend the best path forward.",
    },
];

/* -------------------------------------------------------------------------
   Reveal wrapper — animates children in on scroll using IntersectionObserver.
   ------------------------------------------------------------------------- */
function Reveal({
    children,
    className = "",
    delay = 0,
    as: Tag = "div",
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    as?: keyof JSX.IntrinsicElements;
}) {
    const ref = useRef<HTMLElement | null>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisible(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return React.createElement(
        Tag,
        {
            ref,
            className: `ktl-reveal ${visible ? "ktl-visible" : ""} ${className}`,
            style: { transitionDelay: `${delay}ms` },
        },
        children
    );
}

/* =========================================================================
   PAGE COMPONENT
   ========================================================================= */
export default function ProjectsPage() {
    const [activeFaq, setActiveFaq] = useState<number | null>(0);
    const [galleryFilter, setGalleryFilter] = useState("All");
    const [submitted, setSubmitted] = useState(false);

    const filteredGallery =
        galleryFilter === "All"
            ? GALLERY
            : GALLERY.filter((g) => g.category === galleryFilter);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setSubmitted(true);
    }

    return (
        <main className="ktl-page">
            {/* ================= HERO ================= */}
            <section className="ktl-hero">
                <div className="ktl-hero-media">
                    <video
                        className="ktl-hero-video"
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80"
                    >
                        {/* Replace with your own hero footage at /public/videos/hero-construction.mp4 */}
                        <source src="https://video-previews.elements.envatousercontent.com/06513e02-7f78-45cb-90b5-281996f4001b/watermarked_preview/watermarked_preview.mp4" type="video/mp4" />
                    </video>
                    <div className="ktl-hero-overlay" />
                    <div className="ktl-hero-grid" />
                    <div className="ktl-hero-shape ktl-hero-shape-1" />
                    <div className="ktl-hero-shape ktl-hero-shape-2" />
                </div>

                <div className="ktl-container ktl-hero-content">
                    <p className="ktl-eyebrow ktl-hero-kicker">
                        Commercial <span className="ktl-dot">•</span> Industrial{" "}
                        <span className="ktl-dot">•</span> Residential{" "}
                        <span className="ktl-dot">•</span> Renovations{" "}
                        <span className="ktl-dot">•</span> Restoration
                    </p>

                    <h1 className="ktl-hero-title">
                        <span className="ktl-hero-line">Projects Built with Quality.</span>
                        <span className="ktl-hero-line ktl-hero-line-accent">
                            Delivered with Confidence.
                        </span>
                    </h1>

                    <p className="ktl-hero-text">
                        Every project tells a story of planning, collaboration, and
                        craftsmanship. At Keentel General Contractors, we deliver
                        construction solutions that help businesses grow, strengthen
                        communities, and create spaces built to last.
                    </p>

                    <div className="ktl-hero-actions">
                        <a href="#ktl-contact" className="ktl-btn ktl-btn-primary">
                            Discuss Your Project
                            <Icon name="arrow" className="ktl-btn-icon" />
                        </a>
                        <a href="#ktl-contact" className="ktl-btn ktl-btn-ghost">
                            Request a Consultation
                        </a>
                    </div>

                    <ul className="ktl-trust-bar">
                        {TRUST_BAR.map((item, i) => (
                            <li
                                key={item}
                                className="ktl-trust-bar-item"
                                style={{ animationDelay: `${0.9 + i * 0.12}s` }}
                            >
                                <Icon name="check" className="ktl-trust-bar-icon" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

              
            </section>

            {/* ================= ABOUT ================= */}
            <section className="ktl-section ktl-about">
                <div className="ktl-container ktl-about-grid">
                    <Reveal className="ktl-about-media">
                        <div className="ktl-frame">
                            <img
                                src="https://leaptodigital.com/wp-content/uploads/2024/07/07092024-General-Contractor-Blog.png"
                                alt="Architectural exterior of a completed Keentel construction project"
                                loading="lazy"
                            />
                            <span className="ktl-corner ktl-corner-tl" />
                            <span className="ktl-corner ktl-corner-tr" />
                            <span className="ktl-corner ktl-corner-bl" />
                            <span className="ktl-corner ktl-corner-br" />
                        </div>
                        <div className="ktl-about-badge">
                            <Icon name="layers" className="ktl-about-badge-icon" />
                            <div>
                                <strong>Full-Cycle</strong>
                                <span>Project Delivery</span>
                            </div>
                        </div>
                    </Reveal>

                    <div>
                        <Reveal>
                            <p className="ktl-eyebrow">About Our Projects</p>
                        </Reveal>
                        <Reveal delay={80}>
                            <h2 className="ktl-section-title">
                                Building Projects That Deliver Long-Term Value
                            </h2>
                        </Reveal>
                        <Reveal delay={160}>
                            <p className="ktl-body-text">
                                Every construction project represents an investment in the
                                future. Whether it&rsquo;s a new commercial facility, an
                                industrial expansion, a custom home renovation, or emergency
                                reconstruction, our focus remains the same&mdash;delivering
                                exceptional workmanship with professional project management
                                from beginning to end.
                            </p>
                        </Reveal>
                        <Reveal delay={240}>
                            <p className="ktl-body-text">
                                At Keentel General Contractors, we believe successful
                                projects are built through collaboration, careful planning,
                                transparent communication, and attention to every detail.
                                Our portfolio reflects a commitment to delivering spaces
                                that perform today while creating value for years to come.
                            </p>
                        </Reveal>
                    </div>
                </div>
            </section>

            <DimensionDivider label="Portfolio" />

            {/* ================= PROJECT CATEGORIES ================= */}
            <section className="ktl-section ktl-categories">
                <div className="ktl-container">
                    <Reveal className="ktl-section-head">
                        <p className="ktl-eyebrow">Project Categories</p>
                        <h2 className="ktl-section-title">
                            Explore Our Construction Experience
                        </h2>
                    </Reveal>

                    <div className="ktl-categories-grid">
                        {CATEGORIES.map((cat, i) => (
                            <Reveal
                                key={cat.title}
                                delay={i * 90}
                                className="ktl-cat-card"
                            >
                                <div className="ktl-cat-media">
                                    <img src={cat.image} alt={cat.title} loading="lazy" />
                                    <span className="ktl-corner ktl-corner-tl" />
                                    <span className="ktl-corner ktl-corner-br" />
                                    <span className="ktl-cat-tag">{cat.tag}</span>
                                    <span className="ktl-cat-icon">
                                        <Icon name={cat.icon} />
                                    </span>
                                </div>
                                <div className="ktl-cat-body">
                                    <h3 className="ktl-cat-title">{cat.title}</h3>
                                    <p className="ktl-cat-desc">{cat.description}</p>
                                    <p className="ktl-cat-sub">Projects Include</p>
                                    <ul className="ktl-cat-list">
                                        {cat.items.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                    <a href="#ktl-contact" className="ktl-cat-cta">
                                        {cat.cta}
                                        <Icon name="arrow" className="ktl-btn-icon" />
                                    </a>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= OUR APPROACH / PROCESS ================= */}
            <section className="ktl-section ktl-process">
                <div className="ktl-process-grid" />
                <div className="ktl-container">
                    <Reveal className="ktl-section-head ktl-section-head-light">
                        <p className="ktl-eyebrow ktl-eyebrow-light">Our Approach</p>
                        <h2 className="ktl-section-title ktl-section-title-light">
                            Every Project Begins with a Plan
                        </h2>
                        <p className="ktl-section-sub ktl-section-sub-light">
                            No matter the project size or complexity, Keentel General
                            Contractors follows a proven process that ensures quality,
                            accountability, and consistent communication throughout every
                            stage of construction.
                        </p>
                    </Reveal>

                    <div className="ktl-process-steps">
                        {PROCESS.map((step, i) => (
                            <Reveal
                                key={step.num}
                                delay={i * 110}
                                className="ktl-process-step"
                            >
                                <div className="ktl-process-step-inner">
                                    <div className="ktl-process-icon-wrap">
                                        <Icon name={step.icon} className="ktl-process-icon" />
                                        <span className="ktl-process-num">{step.num}</span>
                                    </div>
                                    <h3 className="ktl-process-title">{step.title}</h3>
                                    <p className="ktl-process-desc">{step.description}</p>
                                </div>
                                {i < PROCESS.length - 1 && (
                                    <div className="ktl-process-connector" aria-hidden="true">
                                        <div className="ktl-process-connector-line" />
                                        <div className="ktl-process-connector-dot" />
                                    </div>
                                )}
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= WHY CLIENTS TRUST US ================= */}
            <section className="ktl-section ktl-trust-section">
                <div className="ktl-container">
                    <Reveal className="ktl-section-head">
                        <p className="ktl-eyebrow">
                            Why Clients Trust Keentel General Contractors
                        </p>
                        <h2 className="ktl-section-title">Building More Than Structures</h2>
                        <p className="ktl-section-sub ktl-section-sub-dark">
                            Clients choose Keentel General Contractors because we bring
                            experience, organization, and accountability to every project.
                        </p>
                    </Reveal>

                    <div className="ktl-trust-grid">
                        {TRUST_FEATURES.map((f, i) => (
                            <Reveal key={f.title} delay={i * 80} className="ktl-trust-card">
                                <span className="ktl-trust-icon-wrap">
                                    <Icon name={f.icon} className="ktl-trust-icon" />
                                </span>
                                <h3 className="ktl-trust-title">{f.title}</h3>
                                <p className="ktl-trust-desc">{f.description}</p>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <DimensionDivider label="Gallery" />

            {/* ================= FEATURED PROJECT GALLERY ================= */}
            <section className="ktl-section ktl-gallery-section">
                <div className="ktl-container">
                    <Reveal className="ktl-section-head">
                        <p className="ktl-eyebrow">Featured Project Gallery</p>
                        <h2 className="ktl-section-title">See What&rsquo;s Possible</h2>
                        <p className="ktl-section-sub">
                            Every completed project demonstrates our commitment to
                            quality construction, professional management, and dependable
                            results. Whether it&rsquo;s a commercial development,
                            industrial facility, residential renovation, or emergency
                            restoration, our work reflects the same high standards of
                            craftsmanship and client service.
                        </p>
                    </Reveal>

                    <Reveal className="ktl-gallery-filters">
                        {GALLERY_FILTERS.map((f) => (
                            <button
                                key={f}
                                type="button"
                                onClick={() => setGalleryFilter(f)}
                                className={`ktl-filter-chip ${galleryFilter === f ? "ktl-filter-chip-active" : ""
                                    }`}
                            >
                                {f}
                            </button>
                        ))}
                    </Reveal>

                    <div className="ktl-gallery-grid">
                        {filteredGallery.map((g, i) => (
                            <Reveal
                                key={g.title}
                                delay={(i % 4) * 90}
                                className="ktl-gallery-item"
                            >
                                <div className="ktl-gallery-media">
                                    <img src={g.image} alt={g.title} loading="lazy" />
                                    <span className="ktl-corner ktl-corner-tl" />
                                    <span className="ktl-corner ktl-corner-br" />
                                </div>
                                <div className="ktl-gallery-caption">
                                    <span className="ktl-gallery-cat">{g.category}</span>
                                    <span className="ktl-gallery-title">{g.title}</span>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    <Reveal className="ktl-gallery-cta-wrap">
                        <a href="#ktl-contact" className="ktl-btn ktl-btn-outline">
                            Explore Our Portfolio
                            <Icon name="arrow" className="ktl-btn-icon" />
                        </a>
                    </Reveal>
                </div>
            </section>

            {/* ================= PROJECT TYPES WE SERVE (marquee) ================= */}
            <section className="ktl-section ktl-types-section">
                <div className="ktl-container">
                    <Reveal className="ktl-section-head">
                        <p className="ktl-eyebrow">Project Types We Serve</p>
                        <h2 className="ktl-section-title">
                            Construction Solutions Across Every Industry
                        </h2>
                    </Reveal>
                </div>

                <div className="ktl-marquee-row">
                    <div className="ktl-marquee-track ktl-marquee-track-left">
                        {[...PROJECT_TYPES_ROW_1, ...PROJECT_TYPES_ROW_1].map((t, i) => (
                            <span className="ktl-marquee-chip" key={`${t}-${i}`}>
                                <Icon name="grid" className="ktl-marquee-chip-icon" />
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="ktl-marquee-row">
                    <div className="ktl-marquee-track ktl-marquee-track-right">
                        {[...PROJECT_TYPES_ROW_2, ...PROJECT_TYPES_ROW_2].map((t, i) => (
                            <span className="ktl-marquee-chip" key={`${t}-${i}`}>
                                <Icon name="grid" className="ktl-marquee-chip-icon" />
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            <DimensionDivider label="FAQ" />

            {/* ================= FAQ ================= */}
            <section className="ktl-section ktl-faq-section">
                <div className="ktl-container ktl-faq-grid">
                    <Reveal className="ktl-faq-head">
                        <p className="ktl-eyebrow">Frequently Asked Questions</p>
                        <h2 className="ktl-section-title">Project FAQs</h2>
                        <p className="ktl-section-sub">
                            Answers to the questions we hear most often from clients
                            planning a new project.
                        </p>
                    </Reveal>

                    <div className="ktl-faq-list">
                        {FAQS.map((item, i) => {
                            const open = activeFaq === i;
                            return (
                                <Reveal
                                    key={item.q}
                                    delay={i * 60}
                                    className={`ktl-faq-item ${open ? "ktl-faq-item-open" : ""
                                        }`}
                                >
                                    <button
                                        type="button"
                                        className="ktl-faq-question"
                                        onClick={() => setActiveFaq(open ? null : i)}
                                        aria-expanded={open}
                                    >
                                        {item.q}
                                        <span className="ktl-faq-icon-wrap">
                                            <Icon name="plus" className="ktl-faq-icon" />
                                        </span>
                                    </button>
                                    <div className="ktl-faq-answer">
                                        <p>{item.a}</p>
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ================= CONTACT ================= */}
            <section className="ktl-section ktl-contact-section" id="ktl-contact">
                <div className="ktl-container ktl-contact-grid">
                    <Reveal className="ktl-contact-intro">
                        <p className="ktl-eyebrow">Get In Touch</p>
                        <h2 className="ktl-section-title">
                            Ready to Build Your Next Project?
                        </h2>
                        <p className="ktl-body-text">
                            Whether you&rsquo;re planning new construction, expanding an
                            existing facility, remodeling your property, or recovering
                            from unexpected damage, Keentel General Contractors is ready
                            to help.
                        </p>
                        <p className="ktl-body-text">
                            Tell us about your project, and our team will develop a
                            solution tailored to your goals.
                        </p>

                        <div className="ktl-contact-media">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9unIXZKoMFQZQJcxfCjU-3rI76NcFuCErkRFfUBYQInObaN_cE07pVZ3w&s=10"
                                alt="Keentel project management team reviewing plans"
                                loading="lazy"
                            />
                            <span className="ktl-corner ktl-corner-tl" />
                            <span className="ktl-corner ktl-corner-br" />
                        </div>

                        <ul className="ktl-contact-details">
                            <li>
                                <Icon name="pin" className="ktl-contact-detail-icon" />
                                Proudly serving projects nationwide
                            </li>
                            <li>
                                <Icon name="phone" className="ktl-contact-detail-icon" />
                                Speak with a project manager today
                            </li>
                            <li>
                                <Icon name="mail" className="ktl-contact-detail-icon" />
                                Fast, detailed project proposals
                            </li>
                        </ul>
                    </Reveal>

                    <Reveal delay={100} className="ktl-form-wrap">
                        {submitted ? (
                            <div className="ktl-form-success">
                                <span className="ktl-form-success-icon">
                                    <Icon name="check" />
                                </span>
                                <h3>Thank you.</h3>
                                <p>
                                    Your project details have been received. A member of our
                                    team will reach out shortly to schedule your consultation.
                                </p>
                                <button
                                    type="button"
                                    className="ktl-btn ktl-btn-outline"
                                    onClick={() => setSubmitted(false)}
                                >
                                    Submit Another Project
                                </button>
                            </div>
                        ) : (
                            <form className="ktl-form" onSubmit={handleSubmit}>
                                <div className="ktl-form-row">
                                    <div className="ktl-field">
                                        <label htmlFor="ktl-name">Full Name</label>
                                        <input id="ktl-name" name="name" type="text" required />
                                    </div>
                                    <div className="ktl-field">
                                        <label htmlFor="ktl-company">Company</label>
                                        <input id="ktl-company" name="company" type="text" />
                                    </div>
                                </div>
                                <div className="ktl-form-row">
                                    <div className="ktl-field">
                                        <label htmlFor="ktl-email">Email Address</label>
                                        <input id="ktl-email" name="email" type="email" required />
                                    </div>
                                    <div className="ktl-field">
                                        <label htmlFor="ktl-phone">Phone Number</label>
                                        <input id="ktl-phone" name="phone" type="tel" />
                                    </div>
                                </div>
                                <div className="ktl-form-row">
                                    <div className="ktl-field">
                                        <label htmlFor="ktl-type">Project Type</label>
                                        <select id="ktl-type" name="projectType" defaultValue="">
                                            <option value="" disabled>
                                                Select a project type
                                            </option>
                                            <option>Commercial</option>
                                            <option>Industrial</option>
                                            <option>Residential</option>
                                            <option>Renovation</option>
                                            <option>Emergency Restoration</option>
                                        </select>
                                    </div>
                                    <div className="ktl-field">
                                        <label htmlFor="ktl-location">Project Location</label>
                                        <input id="ktl-location" name="location" type="text" />
                                    </div>
                                </div>
                                <div className="ktl-form-row">
                                    <div className="ktl-field">
                                        <label htmlFor="ktl-budget">Estimated Budget</label>
                                        <select id="ktl-budget" name="budget" defaultValue="">
                                            <option value="" disabled>
                                                Select a range
                                            </option>
                                            <option>Under $100,000</option>
                                            <option>$100,000 &ndash; $500,000</option>
                                            <option>$500,000 &ndash; $1M</option>
                                            <option>$1M+</option>
                                        </select>
                                    </div>
                                    <div className="ktl-field">
                                        <label htmlFor="ktl-timeline">Project Timeline</label>
                                        <select id="ktl-timeline" name="timeline" defaultValue="">
                                            <option value="" disabled>
                                                Select a timeline
                                            </option>
                                            <option>Immediate / Emergency</option>
                                            <option>1&ndash;3 Months</option>
                                            <option>3&ndash;6 Months</option>
                                            <option>6+ Months</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="ktl-field">
                                    <label htmlFor="ktl-details">
                                        Tell Us About Your Project
                                    </label>
                                    <textarea id="ktl-details" name="details" rows={4} />
                                </div>
                                <button type="submit" className="ktl-btn ktl-btn-primary ktl-btn-full">
                                    Request a Consultation
                                    <Icon name="arrow" className="ktl-btn-icon" />
                                </button>
                            </form>
                        )}
                    </Reveal>
                </div>
            </section>

            {/* ================= FINAL CTA ================= */}
            <section className="ktl-final-cta">
                <div className="ktl-final-cta-media">
                    <img
                        src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=80"
                        alt="Construction site at golden hour"
                        loading="lazy"
                    />
                    <div className="ktl-final-cta-overlay" />
                </div>
                <div className="ktl-container ktl-final-cta-content">
                    <Reveal>
                        <p className="ktl-eyebrow ktl-eyebrow-light">Let&rsquo;s Build Together</p>
                    </Reveal>
                    <Reveal delay={80}>
                        <h2 className="ktl-final-cta-title">Your Next Project Starts Here</h2>
                    </Reveal>
                    <Reveal delay={160}>
                        <p className="ktl-final-cta-text">
                            Every successful project begins with the right partner. At
                            Keentel General Contractors, we combine strategic planning,
                            experienced project management, and quality craftsmanship to
                            deliver construction solutions that exceed expectations.
                            Let&rsquo;s build something exceptional together.
                        </p>
                    </Reveal>
                    <Reveal delay={240} className="ktl-final-cta-actions">
                        <a href="#ktl-contact" className="ktl-btn ktl-btn-primary">
                            Start Your Project
                            <Icon name="arrow" className="ktl-btn-icon" />
                        </a>
                        <a href="#ktl-contact" className="ktl-btn ktl-btn-ghost">
                            Contact Keentel General Contractors
                        </a>
                    </Reveal>
                </div>
            </section>
        </main>
    );
}

/* -------------------------------------------------------------------------
   Small decorative divider used between major sections — echoes an
   architectural dimension line from a technical drawing.
   ------------------------------------------------------------------------- */
function DimensionDivider({ label }: { label: string }) {
    return (
        <div className="ktl-dimension-divider">
            <span className="ktl-dimension-tick" />
            <span className="ktl-dimension-line" />
            <span className="ktl-dimension-label">{label}</span>
            <span className="ktl-dimension-line" />
            <span className="ktl-dimension-tick" />
        </div>
    );
}