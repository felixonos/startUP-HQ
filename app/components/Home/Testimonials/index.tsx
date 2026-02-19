"use client";

import Image from "next/image";
import { useState, useRef, TouchEvent } from "react";

const StarIcon = ({ filled = true }: { filled?: boolean }) => (
  <svg
    width="18"
    height="20"
    viewBox="0 0 18 20"
    fill={filled ? "#FFD908" : "none"}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 1L11.47 6.6L17.5 7.35L13.05 11.4L14.18 17.35L9 14.5L3.82 17.35L4.95 11.4L0.5 7.35L6.53 6.6L9 1Z"
      stroke="#FFD908"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface TestimonialCardProps {
  name: string;
  rating: number;
  title: string;
  testimonial: string;
  imageSrc: string;
}

const TestimonialCard = ({
  name,
  rating,
  testimonial,
  title,
  imageSrc,
}: TestimonialCardProps) => (
  <div className="bg-[#ffd90833] rounded-3xl p-6 min-w-[340px] sm:min-w-[380px] max-w-[400px] flex-shrink-0 overflow-hidden">
    <div className="flex items-start gap-4 mb-4">
      {/* Profile Image */}
      <div className="relative w-[74px] h-[74px] rounded-full overflow-hidden bg-gray-300 flex-shrink-0">
        <Image src={imageSrc} alt={name} fill className="object-cover" />
      </div>

      {/* Name and Rating */}
      <div className="pt-3">
        <h4 className="text-[#fffdf3] text-lg font-semibold leading-tight mb-1">
          {name}
        </h4>
        <p className="text-[#fffdf3] text-sm font-medium mb-1">{title}</p>
        <div className="flex gap-1">
          {[...Array(5)].map((_, index) => (
            <StarIcon key={index} filled={index < rating} />
          ))}
        </div>
      </div>
    </div>

    {/* Testimonial Text */}
    <p className="text-[#fffdf3] text-base font-medium leading-snug">
      {testimonial}
    </p>
  </div>
);

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const testimonials = [
    {
      name: "Bajulaye Victor",
      title: "Hanageo Electricals",
      rating: 4,
      testimonial:
        "The service was excellent and very helpful! They helped with business registration and boosted our client trust.",
      imageSrc: "/images/test2.svg",
    },
    {
      name: "Taiye Oloriade",
      title: "Edumova Ventures",
      rating: 4,
      testimonial:
        "Thank you so much for the speed and the attention paid to the filings. I will definitely recommend the service to anyone.",
      imageSrc: "/images/test1.svg",
    },
    {
      name: "Aleksandra Leonteva",
      title: "PR PILLARS",
      rating: 4,
      testimonial:
        "As a portuguese company, we were very satisfied with StartupHQ service, the consultation was very helpful for us as a foreign company coming to do business in Nigeria for our tasks. We received the necessary information in a short time and would recommend StartupHQ to others.",
      imageSrc: "/images/test3.svg",
    },
  ];

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;

    if (diff > threshold && activeIndex < testimonials.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else if (diff < -threshold && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <section className="w-full mt-8 sm:mt-12 lg:mt-16">
      <div className="bg-[#4A3E00] border border-[#4a3e007f] rounded-xl p-6 sm:p-10 lg:p-14 overflow-hidden">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-[#fffdf3] text-2xl sm:text-3xl lg:text-4xl font-bold tracking-widest uppercase mb-4">
            Testimonials
          </h2>
          <h3 className="text-[#fffdf3] text-xl sm:text-2xl lg:text-3xl font-semibold mb-3">
            See What Founders Have To Say About Us
          </h3>
          <p className="text-[#fffdf3] text-base sm:text-lg lg:text-xl font-normal">
            Trusted by Founders, Backed by results
          </p>
        </div>

        {/* Mobile Swiper - visible on small screens only */}
        <div
          className="sm:hidden relative overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0 px-2">
                <div className="bg-[#ffd90833] rounded-3xl p-6 h-[280px] flex flex-col">
                  <div className="flex items-start gap-4 mb-4 flex-shrink-0">
                    <div className="relative w-[74px] h-[74px] rounded-full overflow-hidden bg-gray-300 flex-shrink-0">
                      <Image
                        src={testimonial.imageSrc}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="pt-3">
                      <h4 className="text-[#fffdf3] text-lg font-semibold leading-tight mb-1">
                        {testimonial.name}
                      </h4>
                      <p className="text-[#fffdf3] text-sm font-medium mb-1">
                        {testimonial.title}
                      </p>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon key={i} filled={i < testimonial.rating} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="overflow-y-auto flex-1 min-h-0">
                    <p className="text-[#fffdf3] text-base font-medium leading-snug">
                      {testimonial.testimonial}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === activeIndex ? "bg-[#FFD908]" : "bg-[#fffdf3]/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Carousel - hidden on small screens */}
        <div className="hidden sm:block relative overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#4A3E00] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#4A3E00] to-transparent z-10 pointer-events-none" />

          {/* Scrolling Cards */}
          <div className="flex gap-6 animate-scroll hover:pause-animation">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                title={testimonial.title}
                rating={testimonial.rating}
                testimonial={testimonial.testimonial}
                imageSrc={testimonial.imageSrc}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Inline styles for desktop animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        .animate-scroll:hover,
        .pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
