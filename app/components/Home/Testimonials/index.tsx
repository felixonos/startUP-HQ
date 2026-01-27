"use client";

import Image from "next/image";

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
  testimonial: string;
  imageSrc: string;
}

const TestimonialCard = ({
  name,
  rating,
  testimonial,
  imageSrc,
}: TestimonialCardProps) => (
  <div className="bg-[#ffd90833] rounded-3xl p-6 min-w-[340px] sm:min-w-[380px] flex-shrink-0">
    <div className="flex items-start gap-4 mb-4">
      {/* Profile Image */}
      <div className="relative w-[74px] h-[74px] rounded-full overflow-hidden bg-gray-300 flex-shrink-0">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover"
        />

      </div>

      {/* Name and Rating */}
      <div className="pt-3">
        <h4 className="text-[#fffdf3] text-lg font-semibold leading-tight mb-2">
          {name}
        </h4>
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
  const testimonials = [
    {
      name: "Favour",
      rating: 5,
      testimonial:
        "Nowadays, it isn't great uncommon to see lenders rapidly adopting",
      imageSrc: "/testimonial.svg",
    },
    {
      name: "David",
      rating: 5,
      testimonial:
        "Nowadays, it isn't great uncommon to see lenders rapidly adopting",
      imageSrc: "/testimonial2.svg",
    },
    {
      name: "Rejoice",
      rating: 4,
      testimonial:
        "Nowadays, it isn't great uncommon to see lenders rapidly adopting",
      imageSrc: "/testimonial3.svg",
    },
    {
      name: "Favour",
      rating: 5,
      testimonial:
        "Nowadays, it isn't great uncommon to see lenders rapidly adopting",
      imageSrc: "/testimonial.svg",
    },
    {
      name: "David",
      rating: 4,
      testimonial:
        "Nowadays, it isn't great uncommon to see lenders rapidly adopting",
      imageSrc: "/testimonial2.svg",
    },
    {
      name: "Rejoice",
      rating: 5,
      testimonial:
        "Nowadays, it isn't great uncommon to see lenders rapidly adopting",
      imageSrc: "/testimonial3.svg",
    },
  ];

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

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          {/* Gradient Overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#4A3E00] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#4A3E00] to-transparent z-10 pointer-events-none" />

          {/* Scrolling Cards */}
          <div className="flex gap-4 sm:gap-6 animate-scroll hover:pause-animation">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                rating={testimonial.rating}
                testimonial={testimonial.testimonial}
                imageSrc={testimonial.imageSrc}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Inline styles for animation */}
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
