"use client";
import { createPortal } from "react-dom";
import Image from "next/image";
import { useState } from "react";
import { useInView } from "../../../hooks/useInView";

const StayConnected = () => {
  const ref = useInView();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFrameLoading, setIsFrameLoading] = useState(true);

  const openModal = () => {
    setIsFrameLoading(true);
    setIsModalOpen(true);
  };

  return (
    <section className="w-full mt-8 sm:mt-12 lg:mt-16" ref={ref}>
      <div className="bg-[#ffd90833] rounded-xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Content */}
          <div className="bg-[#ffd90833] rounded-none lg:rounded-l-3xl p-8 sm:p-12 lg:p-16">
            {/* Title */}
            <h2 className="text-[#4A3E00] text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wider uppercase mb-6 sm:mb-8 animate-pop-up">
              Stay Updated
            </h2>

            {/* Subtitle */}
            <h3 className="text-[#4A3E00] text-xl sm:text-2xl font-semibold mb-4 animate-pop-up delay-100">
              Sign Up to our Newsletter
            </h3>

            {/* Description */}
            <p className="text-[#4A3E00] text-base sm:text-lg font-medium leading-relaxed mb-8 sm:mb-10 animate-pop-up delay-200">
              Join hundreds of smart founders who receive expert tips, legal
              insights, compliance tools, and early access to exclusive offers,
              straight to their inbox
            </p>

            {/* Subscribe Button */}
            <button
              onClick={openModal}
              className="w-full max-w-125 px-8 py-4 bg-[#FFD908] hover:bg-[#e5c537] text-[#4A3E00] font-bold text-base sm:text-lg rounded-md transition-colors duration-300 animate-pop-in delay-400"
            >
              Subscribe
            </button>
          </div>

          {/* Right Image */}
          <div className="relative min-h-[300px] sm:min-h-[400px] lg:min-h-[520px] lg:rounded-r-3xl overflow-hidden order-first lg:order-last animate-pop-right">
            <Image
              src="/images/stayConnected.svg"
              alt="Newsletter illustration"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Newsletter Modal — rendered via portal to escape <main>'s stacking context */}
      {isModalOpen && createPortal(
        <div
          className="fixed inset-0 z-9999 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
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

            {/* Loading Spinner */}
            {isFrameLoading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white gap-4">
                <div className="w-12 h-12 border-4 border-[#FFD908] border-t-[#4A3E00] rounded-full animate-spin" />
                <p className="text-[#4A3E00] text-sm font-medium">Loading...</p>
              </div>
            )}

            {/* ConvertKit Embed */}
            <iframe
              src="https://startuphqconsult.kit.com/e6dd7bb5d2"
              width="100%"
              height="680"
              style={{ border: "none", display: "block" }}
              title="Subscribe to StartupHQ Newsletter"
              onLoad={() => setTimeout(() => setIsFrameLoading(false), 2000)}
            />
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};

export default StayConnected;
