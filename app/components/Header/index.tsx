"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const APPOINTLET_URL =
  "https://appt.link/meet-with-startuphq-consult-psqEmnBj/startup-hq-consult-free-call";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const openBooking = () => {
    setIsBookingOpen(true);
    setIsMobileMenuOpen(false);
  };

  const closeBooking = () => {
    setIsBookingOpen(false);
    setIsIframeLoaded(false);
  };

  const isActive = (path: string) => {
    return pathname === path;
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isBookingOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isBookingOpen]);

  return (
    <>
      <header className="header-container">
        <div className="header-spacer"></div>
        <div className="header-wrapper">
          {/* Logo */}
          <Link href="/" className="logo">
            {/* <div className="logo-icon">sh</div>
            <span className="logo-text">
              Startup<span className="logo-hq">HQ</span>
            </span> */}
            <img src="/images/logo-header.svg" alt="logo" />
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
              Creators Hub
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
          <button className="cta-button desktop-cta" onClick={openBooking}>
            Book a Consultation
          </button>

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
                Creators Hub
              </Link>
              {/* <Link
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
              </Link> */}
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
              <button className="cta-button mobile-cta" onClick={openBooking}>
                Book a Consultation
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Booking Modal */}
      {isBookingOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60"
          onClick={closeBooking}
        >
          <div
            className="relative bg-white rounded-2xl w-[95vw] max-w-[900px] h-[85vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeBooking}
              className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Close booking"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M12 4L4 12"
                  stroke="#333"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M4 4L12 12"
                  stroke="#333"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            {/* Appointlet Inline Embed */}
            <div className="relative w-full h-full pt-12">
              {!isIframeLoaded && (
                <div className="absolute inset-0 flex items-center justify-center pt-12">
                  <div className="w-10 h-10 border-4 border-[#FFD908] border-t-transparent rounded-full animate-spin" />
                </div>
              )}
              <iframe
                src={APPOINTLET_URL}
                width="100%"
                height="100%"
                title="Book a Consultation"
                style={{ border: "none" }}
                onLoad={() => setIsIframeLoaded(true)}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
