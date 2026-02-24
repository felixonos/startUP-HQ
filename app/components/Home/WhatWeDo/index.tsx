"use client";

import Image from "next/image";
import { useInView } from "../../../hooks/useInView";

const WhatWeDo = () => {
  const ref = useInView();

  return (
    <section className="w-full bg-[#4A3E00] rounded-2xl mt-8 sm:mt-12 lg:mt-16" ref={ref}>
      {/* Inner Container - matches stats section padding */}
      <div className="mx-auto px-4 sm:px-6 lg:px-6">
        <div className="p-4 lg:p-10">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <span className="inline-block bg-[#FFD908] text-[#4A3E00] font-bold text-sm sm:text-base tracking-widest px-8 sm:px-12 py-3 rounded-md mb-6 animate-pop-up">
              WHAT WE DO
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 animate-pop-up delay-100">
              We Don&apos;t Just Support You ! We Think Ahead for You
            </h2>
            <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto animate-pop-up delay-200">
              We anticipate the gaps, simplify the steps, and build structures
              that grow with you.
            </p>
          </div>

          {/* Cards Container */}
          <div className="overflow-hidden rounded-3xl">
            {/* Row 1 - Image Left, Content Right */}
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Image */}
              <div className="relative h-[250px] sm:h-[280px] md:h-[300px] md:rounded-tl-3xl overflow-hidden animate-pop-left">
                <Image
                  src="/images/creatorImage.svg"
                  alt="Startup Founders & Entrepreneurs"
                  fill
                  className="object-cover"
                />
                {/* Placeholder overlay - remove when image is added */}
                {/* <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Image Placeholder</span>
                </div> */}
              </div>
              {/* Content */}
              <div className="bg-[#fffdf3] p-8 sm:p-10 lg:p-12 flex flex-col justify-center md:rounded-tr-3xl h-[250px] sm:h-[280px] md:h-[300px] animate-pop-right">
                <h3 className="text-lg sm:text-xl lg:text-[22px] font-bold text-[#4A3E00] mb-3 sm:mb-4 text-center md:text-left">
                  Startup Founders & Entrepreneurs
                </h3>
                <p className="text-sm sm:text-base lg:text-[17px] text-[#4A3E00] font-medium leading-relaxed tracking-wide">
                  Building the next big thing? We help you navigate incorporation, regulatory compliance, corporate governance and contracts so you can focus on growth.
                </p>
              </div>
            </div>

            {/* Row 2 - Content Left, Image Right */}
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Content */}
              <div className="bg-[#fffdf3] p-8 sm:p-10 lg:p-12 flex flex-col justify-center order-2 md:order-1 md:rounded-bl-3xl h-[250px] sm:h-[280px] md:h-[300px] animate-pop-left">
                <h3 className="text-lg sm:text-xl lg:text-[22px] font-bold text-[#4A3E00] mb-3 sm:mb-4 text-center md:text-left">
                  Creators & Creative Entrepreneurs
                </h3>
                <p className="text-sm sm:text-base lg:text-[17px] text-[#4A3E00] font-medium leading-relaxed tracking-wide">
                  Content creators, influencers, artists, and digital entrepreneurs need legal protection too. We help you protect your work, negotiate deals, and build sustainable businesses.
                </p>
              </div>
              {/* Image */}
              <div className="relative h-[250px] sm:h-[280px] md:h-[300px] order-1 md:order-2 md:rounded-br-3xl overflow-hidden animate-pop-right">
                <Image
                  src="/images/creatorImage2.svg"
                  alt="Creators & Creative Entrepreneurs"
                  fill
                  className="object-cover"
                />
                {/* Placeholder overlay - remove when image is added */}
                {/* <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Image Placeholder</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
