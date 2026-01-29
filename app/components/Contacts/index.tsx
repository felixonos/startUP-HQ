import Link from "next/link";
import React from "react";

const Contacts = () => {
  return (
    <div className="header-wrapper">
      <section className="w-full max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-xl overflow-hidden border border-yellow-900/20">
          {/* LEFT: Contact Info */}
          <div className="bg-[#4a3e00] text-[#fffdf3] p-6 sm:p-10 flex flex-col gap-8">
            <h2 className="text-2xl sm:text-4xl font-semibold">
              Our Contact Info
            </h2>

            <p className="text-sm sm:text-base leading-relaxed">
              Kindly reach out to us via any of our communication channels
              listed below.
            </p>

            <div>
              <p className="font-semibold">Corporate Office:</p>
              <p className="text-sm">0701 685 0509</p>
            </div>

            <p className="text-sm">
              Kindly reach to us on any of our communications channels with
              details listed below. Kindly reach to us on any of our
              communications channels with details listed below.
            </p>

            {/* Contact Icons */}
            <div>
              <p className="font-semibold mb-2">You can contact us via:</p>
              <div className="flex items-center gap-4">
                {/* Icon placeholders */}
                <div className="w-8 h-8 bg-white/20 rounded-full">
                  <Link
                    href="https://instagram.com"
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
                </div>
                <div className="w-8 h-8 bg-white/20 rounded-full">
                  <Link
                    href="https://youtube.com"
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
                </div>
                <div className="w-8 h-8 bg-white/20 rounded-full">
                  <Link
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
                  </Link>
                </div>

                <div className="class">
                  <Link
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
                  </Link>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div>
              <p className="font-semibold">Office Hours:</p>
              <p className="text-sm">Mon – Fri, 9am – 5pm</p>
            </div>

            {/* Phone */}
          </div>

          {/* RIGHT: Contact Form */}
          <div className="bg-[#fffdf3] p-6 sm:p-10">
            <h2 className="text-xl sm:text-3xl font-semibold text-[#4a3e00] text-center mb-8">
              Ready to learn more? Talk to our experts today
            </h2>

            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Full Name */}
              <input
                type="text"
                placeholder="Full Name *"
                className="w-full rounded-xl bg-[#4a3e00]/5 px-4 py-4 outline-none focus:ring-2 focus:ring-[#4a3e00]"
              />

              {/* Email */}
              <input
                type="email"
                placeholder="Email *"
                className="w-full rounded-xl bg-[#4a3e00]/5 px-4 py-4 outline-none focus:ring-2 focus:ring-[#4a3e00]"
              />

              {/* Subject */}
              <input
                type="text"
                placeholder="Subject *"
                className="sm:col-span-2 w-full rounded-xl bg-[#4a3e00]/5 px-4 py-4 outline-none focus:ring-2 focus:ring-[#4a3e00]"
              />

              {/* Message */}
              <textarea
                placeholder="Your question"
                rows={4}
                className="sm:col-span-2 w-full rounded-xl bg-[#4a3e00]/5 px-4 py-4 outline-none focus:ring-2 focus:ring-[#4a3e00]"
              />

              {/* Button */}
              <button
                type="submit"
                className="sm:col-span-2 mt-4 w-full rounded-xl bg-[#4a3e00] text-white py-4 font-semibold hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
