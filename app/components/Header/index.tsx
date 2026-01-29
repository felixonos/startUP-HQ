"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";


const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const bookConsultation = () => {
      router.push("/contacts");

  };


  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header className="header-container">
      <div className="header-spacer"></div>
      <div className="header-wrapper">
        {/* Logo */}
        <Link href="/" className="logo">
          {/* <div className="logo-icon">sh</div>
          <span className="logo-text">
            Startup<span className="logo-hq">HQ</span>
          </span> */}
          <img src="/logo-header.svg" alt="logo" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <Link
            href="/"
            className={`nav-link ${isActive("/") ? "active" : ""}`}
          >
            Home
          </Link>
          <Link
            href="/grow"
            className={`nav-link ${isActive("/grow") ? "active" : ""}`}
          >
            Grow
          </Link>
          {/* <Link
            href="/resources"
            className={`nav-link ${isActive("/resources") ? "active" : ""}`}
          >
            Resources
          </Link> */}
          {/* <Link
            href="/blogs"
            className={`nav-link ${isActive("/blogs") ? "active" : ""}`}
          >
            Blog
          </Link> */}
          <Link
            href="/contacts"
            className={`nav-link ${isActive("/contacts") ? "active" : ""}`}
          >
            Contact
          </Link>
          <Link
            href="/about"
            className={`nav-link ${isActive("/about") ? "active" : ""}`}
          >
            About
          </Link>
        </nav>

        {/* CTA Button - Desktop */}
        <button className="cta-button desktop-cta" onClick={bookConsultation}  >Book a Consultation</button>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M3 12H21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M3 6H21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M3 18H21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <nav className="mobile-nav">
            <Link
              href="/"
              className="mobile-nav-link"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link
              href="/grow"
              className="mobile-nav-link"
              onClick={toggleMobileMenu}
            >
              Grow
            </Link>
            <Link
              href="/resources"
              className="mobile-nav-link"
              onClick={toggleMobileMenu}
            >
              Resources
            </Link>
            <Link
              href="/blogs"
              className="mobile-nav-link"
              onClick={toggleMobileMenu}
            >
              Blog
            </Link>
            <Link
              href="/contacts"
              className="mobile-nav-link"
              onClick={toggleMobileMenu}
            >
              Contact
            </Link>
            <Link
              href="/about"
              className="mobile-nav-link"
              onClick={toggleMobileMenu}
            >
              About
            </Link>
            <button className="cta-button mobile-cta">
              Book a Consultation
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
