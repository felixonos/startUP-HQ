"use client";

import React, { useState } from "react";
import Link from "next/link";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter submission
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <footer className="footer-container">
      <div className="footer-wrapper">
        {/* Footer Top Section */}
        <div className="footer-content">
          {/* Quick Links */}
          <div className="footer-column">
            <h3 className="footer-heading">QUICK LINKS</h3>
            <ul className="footer-links">
              <li>
                <Link href="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="footer-link">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/grow" className="footer-link">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="footer-column">
            <h3 className="footer-heading">SUPPORT</h3>
            <ul className="footer-links">
              <li>
                <Link href="/contacts" className="footer-link">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/refund" className="footer-link">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="footer-column">
            <h3 className="footer-heading">LEGAL</h3>
            <ul className="footer-links">
              <li>
                <Link href="/terms" className="footer-link">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="footer-link">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="newsletter-container">
            <h3 className="newsletter-heading">Signup to our Newsletter</h3>
            <form onSubmit={handleSubmit} className="newsletter-form">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email Address"
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-button">
                Submit
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="arrow-icon"
                >
                  <path
                    d="M1 8H15M15 8L8 1M15 8L8 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        {/* Logo */}
        <div className="footer-logo">
          {/* <div className="footer-logo-icon">sh</div>
          <span className="footer-logo-text">
            Startup<span className="footer-logo-hq">HQ</span>
          </span> */}
          <img src="/Logo-lightDSK.svg" alt="footer logo" />
        </div>

        {/* Copyright */}
        <p className="footer-copyright">
          © 2026 StartupHQ. All Rights Reserved.
        </p>

        {/* Social Icons */}
        <div className="social-icons">
          {/* Instagram */}
          <Link
            href="https://www.instagram.com/startuphq_consult?igsh=M2h4d3BqcDVvaWVl"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="Instagram"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect
                x="3"
                y="3"
                width="14"
                height="14"
                rx="3"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle
                cx="10"
                cy="10"
                r="3"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle cx="14.5" cy="5.5" r="0.5" fill="currentColor" />
            </svg>
          </Link>
          {/* LinkedIn */}
          {/* <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="LinkedIn"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M16 2H4C2.9 2 2 2.9 2 4V16C2 17.1 2.9 18 4 18H16C17.1 18 18 17.1 18 16V4C18 2.9 17.1 2 16 2ZM6.5 15H4.5V8H6.5V15ZM5.5 7C4.95 7 4.5 6.55 4.5 6C4.5 5.45 4.95 5 5.5 5C6.05 5 6.5 5.45 6.5 6C6.5 6.55 6.05 7 5.5 7ZM15.5 15H13.5V11.5C13.5 10.5 12.5 10.6 12.5 11.5V15H10.5V8H12.5V9C13.25 7.75 15.5 7.65 15.5 10.5V15Z"
                fill="currentColor"
              />
            </svg>
          </Link> */}

          {/* TikTok */}
          <Link
            href="https://www.tiktok.com/@startuphq_?is_from_webapp=1&sender_device=pc"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="TikTok"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M14 7C15.1046 7 16 6.10457 16 5V3C16 2.44772 15.5523 2 15 2H13.5C13.5 4.5 11.5 6 9 6V8C11.5 8 13.5 6.5 14 5V12C14 15.3137 11.3137 18 8 18C4.68629 18 2 15.3137 2 12C2 8.68629 4.68629 6 8 6V8.5C6.067 8.5 4.5 10.067 4.5 12C4.5 13.933 6.067 15.5 8 15.5C9.933 15.5 11.5 13.933 11.5 12V2H14V7Z"
                fill="currentColor"
              />
            </svg>
          </Link>

          {/* YouTube */}
          <Link
            href="https://youtube.com/@startuphq-kj9ui?si=TodBMgLpD8MbCtvK"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="YouTube"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M18 5C18 5 18 3 16 3C14 2 10 2 10 2C10 2 6 2 4 3C2 3 2 5 2 5C2 5 2 7 2 9V11C2 13 2 15 2 15C2 15 2 17 4 17C6 18 10 18 10 18C10 18 14 18 16 17C18 17 18 15 18 15C18 15 18 13 18 11V9C18 7 18 5 18 5ZM8 13V7L14 10L8 13Z"
                fill="currentColor"
              />
            </svg>
          </Link>

          {/* <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="X (Twitter)"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M15.5 3H18L12 10L19 17H14L9.5 12L4.5 17H2L8.5 9.5L2 3H7L11 7.5L15.5 3ZM14.5 15.5L5 4.5H5.5L15 15.5H14.5Z"
                fill="currentColor"
              />
            </svg>
          </Link> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
