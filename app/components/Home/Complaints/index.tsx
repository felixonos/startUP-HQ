"use client";

import Image from "next/image";
import Link from "next/link";
import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";
import { useInView } from "../../../hooks/useInView";

const useCountUp = (target: number, duration: number, triggered: boolean) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!triggered) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [triggered, target, duration]);
  return count;
};

const services = [
  {
    title: "Pricing & Return Policy",
    description:
      "Custom policy documents that clearly outline your pricing structure, refund terms, and customer rights essential for transparency and trust.",
    href: "https://paystack.com/buy/pricing-and-return-policy-ktoqfk",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="8" y="6" width="24" height="28" rx="2" />
        <circle cx="20" cy="18" r="5" />
        <path d="M16 28h8M13 13h4M23 13h4" />
      </svg>
    ),
  },
  {
    title: "Insurance Policy",
    description:
      "We draft and review insurance policies that protect your business assets, operations, and liabilities. Tailored to your startup's specific risks and needs.",
    href: "https://paystack.shop/insurance-essentials-package",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 5L8 10v10c0 8 5.5 13.5 12 15 6.5-1.5 12-7 12-15V10L20 5z" />
        <path d="M15 20l3.5 3.5L26 16" />
      </svg>
    ),
  },
  {
    title: "Delivery & Refund Policy",
    description:
      "Define how your product or service is delivered, including timelines, methods, and customer expectations. Crucial for e-commerce and service-based startups.",

    href: "https://paystack.com/buy/refund--delivery-policy-nlzcpn",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="4" y="14" width="24" height="16" rx="2" />
        <path d="M28 18h4l4 6v6h-8V18z" />
        <circle cx="11" cy="32" r="3" />
        <circle cx="29" cy="32" r="3" />
      </svg>
    ),
  },
  {
    title: "Other Company Licences",
    description:
      "We help you identify and obtain sector specific licenses required to operate legally in Africa whether you're in fintech, healthtech, or beyond.",
    href: "https://paystack.com/buy/narfdac-registration-esuwyo",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="8" y="6" width="24" height="28" rx="2" />
        <path d="M14 14h12M14 20h12M14 26h8" />
        <path d="M28 28l4 4" />
        <circle cx="26" cy="26" r="4" />
      </svg>
    ),
  },
  {
    title: "Full Brand + Business Policy",
    description:
      "A tailored set of legal policies covering your operations, privacy, terms of use, disclaimers, and more — including a 30-minute consultation to customise them.",
    href: "https://paystack.shop/business-policy",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="6" y="6" width="28" height="28" rx="3" />
        <circle cx="20" cy="17" r="5" />
        <path d="M10 34c0-5.5 4.5-9 10-9s10 3.5 10 9" />
      </svg>
    ),
  },
  {
    title: "Tax Clearance Certificate",
    description:
      "We assist with obtaining your Tax Clearance Certificate from tax authorities, often required for funding, partnerships, and government contracts.",
    href: "/",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="8" y="4" width="24" height="32" rx="2" />
        <path d="M14 14h12M14 20h8" />
        <circle cx="24" cy="28" r="6" fill="none" />
        <path d="M21 28l2.5 2.5L27 25" />
      </svg>
    ),
  },
  {
    title: "Patent & Design Registration",
    description:
      "Secure legal rights to your inventions, product designs, or technical innovations. Ideal for hardware, tech and manufacturing startups.",
    href: "https://paystack.com/buy/patent--industrial-design-jnwlqm",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="20" cy="20" r="12" />
        <path d="M20 8v4M20 28v4M8 20h4M28 20h4" />
        <circle cx="20" cy="20" r="4" />
      </svg>
    ),
  },
  {
    title: "Trademark or Copyright Registration",
    description:
      "Protect your brand name, logo, content, and creative assets with official IP registration, so your ideas and assets stay yours.",
    href: "https://paystack.shop/startuphq-consult",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="20" cy="20" r="14" />
        <path d="M24 15c-1-1.5-2.5-2.5-4-2.5-3.5 0-6 3-6 7.5s2.5 7.5 6 7.5c1.5 0 3-1 4-2.5" />
      </svg>
    ),
  },
  {
    title: "Post-Incorporation Documents",
    description:
      "We prepare essential post-incorporation documents and manage changes such as business name updates, upgrades, and changes in directors or shareholders.",
    href: "https://paystack.com/buy/scmul-redistration-efcc-certificate-phfbtt",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="8" y="6" width="24" height="28" rx="2" />
        <path d="M14 14h12M14 20h12M14 26h6" />
        <path d="M24 24l6 6M27 24h3v3" />
      </svg>
    ),
  },
  {
    title: "NSITF, PENCOM, ITF & BPP Compliance",
    description:
      "We handle registration and compliance with key labor and procurement agencies required for hiring, contracts and public sector engagement.",
    href: "https://paystack.shop/nsitfpencomitfbpp",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="6" y="10" width="28" height="22" rx="2" />
        <path d="M14 10V7a2 2 0 014 0v3M22 10V7a2 2 0 014 0v3" />
        <path d="M12 20h16M12 26h10" />
      </svg>
    ),
  },
  {
    title: "Business Consultation Call",
    description:
      "Speak directly with a legal advisor to get clarity on your compliance needs, risks, or next steps — perfect for founders who want quick, expert insight.",

    href: "https://paystack.shop/business-contracts",
    external: true,
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10 8h6l3 7-3.5 2.5c1.5 3 4 5.5 7 7L25 21l7 3v6c0 2-1.5 3.5-3.5 3C13 31 9 17 8 11.5 7.5 9.5 8.5 8 10 8z" />
      </svg>
    ),
  },
];

const Complaints = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const heroRef = useInView();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isModalOpen]);

  const stat1 = useCountUp(98, 1500, triggered);
  const stat2 = useCountUp(150, 1800, triggered);
  const stat3 = useCountUp(6, 1200, triggered);

  return (
    <>
      <section className="w-full mt-8 sm:mt-12 lg:mt-16" ref={heroRef}>
        {/* Hero Section */}
        <div className="mx-auto px-4 sm:px-6 lg:px-6 py-12 sm:py-16 lg:py-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 lg:pb-10 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1 space-y-6">
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#4A3E00] leading-tight lg:whitespace-nowrap animate-pop-up">
                  Take the Guesswork Out
                </h1>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#FFD908] leading-tight animate-pop-up delay-100">
                  Build with Clarity
                </h2>
              </div>
              <p className="text-base sm:text-lg lg:text-xl text-[#3d3d1f] italic leading-relaxed animate-pop-up delay-200">
                Build Right from Day One: Startup
                <br className="hidden sm:block" />
                Compliance Advisory for Nigerian Founders
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-block px-8 py-3.5 bg-[#F5D547] hover:bg-[#e5c537] text-[#1a1a1a] font-semibold rounded-md transition-colors duration-200 text-base sm:text-lg cursor-pointer animate-pop-in delay-300"
              >
                Get Started
              </button>
            </div>

            {/* Right Image */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-pop-right">
              <div className="relative w-full max-w-[450px] lg:max-w-[550px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/complaint-Image.svg"
                  alt="Compliance professional holding document"
                  width={550}
                  height={400}
                  className="w-full h-auto object-cover rounded-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-[#4A3E00]" ref={statsRef}>
          <div className="mx-auto px-4 sm:px-6 lg:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 p-4 lg:p-10">
              <div className="bg-[#f5f5e8] rounded-2xl py-8 sm:py-10 lg:py-12 px-6 text-center animate-pop-in">
                <p className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#3d3d1f] mb-3 sm:mb-4">
                  {stat1}%
                </p>
                <p className="text-sm sm:text-base lg:text-lg font-semibold text-[#3d3d1f]">
                  Compliance success rate
                </p>
              </div>
              <div className="bg-[#f5f5e8] rounded-2xl py-8 sm:py-10 lg:py-12 px-6 text-center animate-pop-in delay-100">
                <p className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#3d3d1f] mb-3 sm:mb-4">
                  {stat2}+
                </p>
                <p className="text-sm sm:text-base lg:text-lg font-semibold text-[#3d3d1f]">
                  StartUps served Across all sectors
                </p>
              </div>
              <div className="bg-[#f5f5e8] rounded-2xl py-8 sm:py-10 lg:py-12 px-6 text-center animate-pop-in delay-200">
                <p className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#3d3d1f] mb-3 sm:mb-4">
                  {stat3}+
                </p>
                <p className="text-sm sm:text-base lg:text-lg font-semibold text-[#3d3d1f] leading-tight">
                  Years of early-stage startup
                  <br />
                  legal expertise
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Modal — rendered via portal into document.body to escape <main>'s stacking context */}
      {isModalOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <div
              className="relative bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="sticky top-3 float-right mr-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Close"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M12 4L4 12M4 4l8 8"
                    stroke="#333"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

              <div className="p-6 sm:p-8 lg:p-10">
                {/* Modal Header */}
                <div className="mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#4A3E00] leading-tight mb-2">
                    Just Looking For a <br className="sm:hidden" />
                    One-off Service?
                  </h2>
                  <p className="text-[#3d3d1f] text-sm sm:text-base">
                    We&apos;ve got you covered, no subscriptions, no strings.
                    <br className="hidden sm:block" /> Just the legal support
                    you need, when you need it.
                  </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="flex gap-4 bg-[#4A3E00] rounded-xl p-4 sm:p-5"
                    >
                      {/* Icon */}
                      <div className="text-[#FFD908] flex-shrink-0 mt-1">
                        {service.icon}
                      </div>

                      {/* Content */}
                      <div className="flex flex-col gap-2">
                        <h3 className="text-[#FFFDF3] font-semibold text-sm sm:text-base leading-tight">
                          {service.title}
                        </h3>
                        <p className="text-[#FFFDF3]/80 text-xs sm:text-sm leading-relaxed">
                          {service.description}
                        </p>
                        {service.external ? (
                          <a
                            href={service.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#FFD908] text-sm font-semibold flex items-center gap-1 hover:underline mt-1 w-fit"
                          >
                            Choose Service
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                            >
                              <path
                                d="M1 7h12M7 1l6 6-6 6"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </a>
                        ) : (
                          <Link
                            href={service.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsModalOpen(false)}
                            className="text-[#FFD908] text-sm font-semibold flex items-center gap-1 hover:underline mt-1 w-fit"
                          >
                            Choose Service
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                            >
                              <path
                                d="M1 7h12M7 1l6 6-6 6"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </Link>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
};

export default Complaints;
