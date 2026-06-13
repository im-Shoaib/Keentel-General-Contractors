"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? "hidden" : "";
    if (!isMobileMenuOpen) {
      setOpenDropdown(null);
      setOpenSubmenu(null);
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "";
    setOpenDropdown(null);
    setOpenSubmenu(null);
  };

  const toggleDropdown = (name: string) => {
    if (!isMobileMenuOpen) return;
    setOpenDropdown(openDropdown === name ? null : name);
    setOpenSubmenu(null);
  };

  const toggleSubmenu = (name: string) => {
    setOpenSubmenu(openSubmenu === name ? null : name);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900 && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  return (
    <header className="header" role="banner" ref={headerRef}>
      <div className="header__inner">
        <Link href="/" className="logo" onClick={closeMobileMenu}>
          <img src="/assets/logo.png" alt="Keentel logo" className="logo__img" width={44} height={44} />
        </Link>

        <button
          className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation"
          aria-expanded={isMobileMenuOpen}
        >
          <span></span><span></span><span></span>
        </button>

        <div className="header-right">
          <nav aria-label="Main navigation">
            <ul className={`nav ${isMobileMenuOpen ? "active" : ""}`} id="nav">
              <li><Link href="/" className="nav__link" onClick={closeMobileMenu}>Home</Link></li>
              <li><Link href="/about" className="nav__link" onClick={closeMobileMenu}>About Us</Link></li>

              {/* Services Dropdown */}
              <li className="nav-item-has-dropdown">
                <a
                  href="#"
                  className={`nav__link dropdown-toggle ${openDropdown === "services" ? "rotate-chevron" : ""}`}
                  onClick={(e) => { e.preventDefault(); toggleDropdown("services"); }}
                >
                  Our Services <span className="dropdown-chevron">⌵</span>
                </a>
                <ul className={`dropdown-menu ${openDropdown === "services" ? "show-mobile" : ""}`}>
                  {/* Design Services submenu */}
                  <li className="dropdown-submenu-parent">
                    <a
                      href="#"
                      className="dropdown-link submenu-toggle"
                      onClick={(e) => { e.preventDefault(); toggleSubmenu("design"); }}
                    >
                      Design Services <span className="right-arrow">❯</span>
                    </a>
                    <ul className={`sub-dropdown-menu ${openSubmenu === "design" ? "show-mobile" : ""}`}>
                      <li><Link href="/residential-design" onClick={closeMobileMenu}>Residential design (custom homes, renovations, interiors, landscaping integration)</Link></li>
                      <li><Link href="/commercial-design" onClick={closeMobileMenu}>Commercial design (office layouts, retail spaces, restaurant designs, industrial planning)</Link></li>
                      <li><Link href="/architectural-drawings" onClick={closeMobileMenu}>Architectural & engineering drawings</Link></li>
                      <li><Link href="/3d-modeling" onClick={closeMobileMenu}>3D modeling & project visualization</Link></li>
                      <li><Link href="/permit-compliance" onClick={closeMobileMenu}>Permit & code compliance support</Link></li>
                    </ul>
                  </li>
                  {/* Build Services submenu */}
                  <li className="dropdown-submenu-parent">
                    <a
                      href="#"
                      className="dropdown-link submenu-toggle"
                      onClick={(e) => { e.preventDefault(); toggleSubmenu("build"); }}
                    >
                      Build Services <span className="right-arrow">❯</span>
                    </a>
                    <ul className={`sub-dropdown-menu ${openSubmenu === "build" ? "show-mobile" : ""}`}>
                      <li><Link href="/new-residential-construction" onClick={closeMobileMenu}>New residential construction</Link></li>
                      <li><Link href="/commercial-construction" onClick={closeMobileMenu}>Commercial construction (tenant improvements, office buildings, warehouses)</Link></li>
                      <li><Link href="/project-management" onClick={closeMobileMenu}>Project management & general contracting</Link></li>
                      <li><Link href="/quality-assurance" onClick={closeMobileMenu}>Quality assurance & safety control</Link></li>
                      <li><Link href="/sustainable-solutions" onClick={closeMobileMenu}>Sustainable & energy-efficient solutions</Link></li>
                    </ul>
                  </li>
                  {/* Emergency Services submenu */}
                  <li className="dropdown-submenu-parent">
                    <a
                      href="#"
                      className="dropdown-link submenu-toggle"
                      onClick={(e) => { e.preventDefault(); toggleSubmenu("emergency"); }}
                    >
                      Emergency (24/7) <span className="right-arrow">❯</span>
                    </a>
                    <ul className={`sub-dropdown-menu ${openSubmenu === "emergency" ? "show-mobile" : ""}`}>
                      <li><Link href="/fire-storm-flood-restoration" onClick={closeMobileMenu}>Fire, storm, and flood damage restoration</Link></li>
                      <li><Link href="/electrical-structural-repairs" onClick={closeMobileMenu}>Electrical and structural emergency repairs</Link></li>
                      <li><Link href="/roof-plumbing-emergencies" onClick={closeMobileMenu}>Roof leaks and plumbing emergencies</Link></li>
                      <li><Link href="/secure-unsafe-structures" onClick={closeMobileMenu}>Securing unsafe structures</Link></li>
                      <li><Link href="/insurance-claim-assistance" onClick={closeMobileMenu}>Insurance claim assistance</Link></li>
                    </ul>
                  </li>
                  {/* Remodeling Services submenu */}
                  <li className="dropdown-submenu-parent">
                    <a
                      href="#"
                      className="dropdown-link submenu-toggle"
                      onClick={(e) => { e.preventDefault(); toggleSubmenu("remodel"); }}
                    >
                      Remodeling Services <span className="right-arrow">❯</span>
                    </a>
                    <ul className={`sub-dropdown-menu ${openSubmenu === "remodel" ? "show-mobile" : ""}`}>
                      <li><Link href="/residential-remodeling" onClick={closeMobileMenu}>Residential remodeling (kitchens, bathrooms, basements, whole-home upgrades)</Link></li>
                      <li><Link href="/commercial-remodeling" onClick={closeMobileMenu}>Commercial remodeling (office renovations, retail build-outs, restaurant redesigns)</Link></li>
                      <li><Link href="/additions-expansions" onClick={closeMobileMenu}>Additions and expansions</Link></li>
                      <li><Link href="/green-smart-remodeling" onClick={closeMobileMenu}>Green remodeling & smart home integration</Link></li>
                      <li><Link href="/ada-compliance" onClick={closeMobileMenu}>ADA compliance upgrades</Link></li>
                    </ul>
                  </li>
                  {/* Electrical Services submenu */}
                  <li className="dropdown-submenu-parent">
                    <a
                      href="#"
                      className="dropdown-link submenu-toggle"
                      onClick={(e) => { e.preventDefault(); toggleSubmenu("electrical"); }}
                    >
                      Electrical Services <span className="right-arrow">❯</span>
                    </a>
                    <ul className={`sub-dropdown-menu ${openSubmenu === "electrical" ? "show-mobile" : ""}`}>
                      <li><Link href="/residential-electrical" onClick={closeMobileMenu}>Residential</Link></li>
                      <li><Link href="/commercial-electrical" onClick={closeMobileMenu}>Commercial</Link></li>
                      <li><Link href="/industrial-electrical" onClick={closeMobileMenu}>Industrial</Link></li>
                    </ul>
                  </li>
                </ul>
              </li>

              {/* Service Areas Dropdown */}
              <li className="nav-item-has-dropdown">
                <a
                  href="#"
                  className={`nav__link dropdown-toggle ${openDropdown === "areas" ? "rotate-chevron" : ""}`}
                  onClick={(e) => { e.preventDefault(); toggleDropdown("areas"); }}
                >
                  Service Areas <span className="dropdown-chevron">⌵</span>
                </a>
                <ul className={`dropdown-menu ${openDropdown === "areas" ? "show-mobile" : ""}`}>
                  <li><Link href="/service-areas/tampa" className="dropdown-link" onClick={closeMobileMenu}>Tampa</Link></li>
                  <li><Link href="/service-areas/citrus" className="dropdown-link" onClick={closeMobileMenu}>Citrus</Link></li>
                  <li><Link href="/service-areas/hernando" className="dropdown-link" onClick={closeMobileMenu}>Hernando</Link></li>
                  <li><Link href="/service-areas/hillsborough" className="dropdown-link" onClick={closeMobileMenu}>Hillsborough</Link></li>
                  <li><Link href="/service-areas/manatee" className="dropdown-link" onClick={closeMobileMenu}>Manatee</Link></li>
                  <li><Link href="/service-areas/pasco" className="dropdown-link" onClick={closeMobileMenu}>Pasco</Link></li>
                  <li><Link href="/service-areas/pinellas" className="dropdown-link" onClick={closeMobileMenu}>Pinellas</Link></li>
                  <li><Link href="/service-areas/polk" className="dropdown-link" onClick={closeMobileMenu}>Polk</Link></li>
                  <li><Link href="/service-areas/sarasota" className="dropdown-link" onClick={closeMobileMenu}>Sarasota</Link></li>
                </ul>
              </li>

              <li><Link href="/faq" className="nav__link" onClick={closeMobileMenu}>FAQ</Link></li>
              <li><Link href="/blog" className="nav__link" onClick={closeMobileMenu}>Blogs</Link></li>
              <li><Link href="/contact" className="nav__link" onClick={closeMobileMenu}>Contact</Link></li>
            </ul>
          </nav>
          <Link href="/contact" className="cta-button" onClick={closeMobileMenu}>Get a Quote</Link>
        </div>
        <div className={`nav-overlay ${isMobileMenuOpen ? "active" : ""}`} id="navOverlay" onClick={closeMobileMenu}></div>
      </div>
    </header>
  );
}