"use client";
import Image from "next/image";

const StayConnected = () => {
  return (
    <section className="w-full mt-8 sm:mt-12 lg:mt-16">
      <div className="bg-[#ffd90833] rounded-xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Content */}
          <div className="bg-[#ffd90833] rounded-none lg:rounded-l-3xl p-8 sm:p-12 lg:p-16">
            {/* Title */}
            <h2 className="text-[#4A3E00] text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wider uppercase mb-6 sm:mb-8">
              Stay Updated
            </h2>

            {/* Subtitle */}
            <h3 className="text-[#4A3E00] text-xl sm:text-2xl font-semibold mb-4">
              Sign Up to our Newsletter
            </h3>

            {/* Description */}
            <p className="text-[#4A3E00] text-base sm:text-lg font-medium leading-relaxed mb-8 sm:mb-10">
              Join hundreds of smart founders who receive expert tips, legal
              insights, compliance tools, and early access to exclusive offers,
              straight to their inbox
            </p>

            {/* Email Input */}
            <div className="mb-4">
              <input
                type="email"
                placeholder="Enter email address"
                className="w-full max-w-[500px] px-6 sm:px-8 py-4 bg-[#fffdf3b2] rounded-md text-[#4A3E00] text-sm sm:text-base font-semibold placeholder:text-[#4A3E00] placeholder:opacity-70 outline-none focus:ring-2 focus:ring-[#FFD908] transition-all"
              />
            </div>

            {/* Subscribe Button */}
            <button className="w-full max-w-[500px] px-8 py-4 bg-[#FFD908] hover:bg-[#e5c537] text-[#4A3E00] font-bold text-base sm:text-lg rounded-md transition-colors duration-300">
              Subscribe
            </button>
          </div>

          {/* Right Image */}
          <div className="relative min-h-[300px] sm:min-h-[400px] lg:min-h-[520px] lg:rounded-r-3xl overflow-hidden order-first lg:order-last">
            <Image
              src="/stayConnected.svg"
              alt="Newsletter illustration"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StayConnected;
