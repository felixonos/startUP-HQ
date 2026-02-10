"use client";

import Image from "next/image";
import { useState } from "react";
// import Testimonials from "../Home/Testimonials";

const CheckIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 4.5L6.75 12.75L3 9"
      stroke="#FFD908"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
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
  // title: string;
  testimonial: string;
  imageSrc: string;
}

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
}

const PricingCard = ({
  title,
  price,
  description,
  features,
}: PricingCardProps) => (
  <div className="bg-[#4A3E00] rounded-3xl p-6 sm:p-8 flex flex-col h-full">
    {/* Plan Badge */}
    <div className="bg-[#fffdf3] rounded-lg py-3 px-4 mb-6">
      <h3 className="text-[#4A3E00] text-lg sm:text-xl font-medium text-center tracking-wide">
        {title}
      </h3>
    </div>

    {/* Price */}
    <div className="mb-2">
      <span className="text-[#fffdf3] text-4xl sm:text-5xl font-bold">
        {price}
      </span>
      <span className="text-[#fffdf3] text-lg sm:text-xl font-medium">
        /Month
      </span>
    </div>

    {/* Description */}
    <p className="text-[#fffdf3] text-sm sm:text-base font-medium leading-relaxed mb-6 border-t border-[#fffdf3] pt-4">
      {description}
    </p>

    {/* Features */}
    <div className="flex-grow space-y-3 mb-6">
      {features.map((feature, index) => (
        <div key={index} className="flex items-start gap-2">
          <span className="flex-shrink-0 mt-0.5">
            <CheckIcon />
          </span>
          <span className="text-[#fffdf3] text-sm font-medium">{feature}</span>
        </div>
      ))}
    </div>

    {/* Button */}
    <button className="w-full py-3 bg-transparent border-2 border-[#fffdf3] text-[#fffdf3] font-semibold rounded-full hover:bg-[#fffdf3] hover:text-[#4A3E00] transition-colors duration-300">
      Activate Now
    </button>
  </div>
);

const Grow = () => {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">(
    "monthly",
  );

  const monthlyPlans = [
    {
      title: "EMERGING CREATOR",
      price: "$99",
      description:
        "For creators just getting started or building their audience",
      features: [
        "Business structure consultation",
        "Contract template library",
        "1 contract review per month",
        "Intellectual property (IP) basics",
        "Monthly legal Q&A",
      ],
    },
    {
      title: "ESTABLISHED CREATOR",
      price: "$249",
      description:
        "For creators with a growing audience and multiple revenue streams",
      features: [
        "Everything in Emerging Creator",
        "Up to 3 contract reviews per month",
        "Custom contract drafting",
        "Trademark registration assistance",
        "Content licensing agreements",
        "NDPR/data privacy compliance",
        "Priority legal support",
      ],
    },
    {
      title: "ENTERPRISE CREATOR",
      price: "$499",
      description:
        "For high-earning creators, creator-led businesses and influencers",
      features: [
        "Everything in Established Creator",
        "Unlimited contract reviews and drafting",
        "Business entity formation and compliance",
        "Dispute resolution and negotiation support",
        "Cross-border legal advisory",
        "24/7 priority support",
        "Quarterly strategy sessions",
      ],
    },
  ];

  const yearlyPlans = [
    {
      title: "EMERGING CREATOR",
      price: "$79",
      description:
        "For creators just getting started or building their audience",
      features: [
        "Business structure consultation",
        "Contract template library",
        "1 contract review per month",
        "Intellectual property (IP) basics",
        "Monthly legal Q&A",
      ],
    },
    {
      title: "ESTABLISHED CREATOR",
      price: "$199",
      description:
        "For creators with a growing audience and multiple revenue streams",
      features: [
        "Everything in Emerging Creator",
        "Up to 3 contract reviews per month",
        "Custom contract drafting",
        "Trademark registration assistance",
        "Content licensing agreements",
        "NDPR/data privacy compliance",
        "Priority legal support",
      ],
    },
    {
      title: "ENTERPRISE CREATOR",
      price: "$399",
      description:
        "For high-earning creators, creator-led businesses and influencers",
      features: [
        "Everything in Established Creator",
        "Unlimited contract reviews and drafting",
        "Business entity formation and compliance",
        "Dispute resolution and negotiation support",
        "Cross-border legal advisory",
        "24/7 priority support",
        "Quarterly strategy sessions",
      ],
    },
  ];

  const currentPlans = billingPeriod === "monthly" ? monthlyPlans : yearlyPlans;

  return (
    <div className="header-wrapper">
      <section className="w-full py-8 sm:py-12 lg:py-16">
        {/* Creators Network Section */}
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Content */}
            <div className="p-6 sm:p-10 lg:p-14 flex flex-col justify-center order-2 lg:order-1">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#4A3E00] leading-tight mb-4 sm:mb-6">
                <span className="text-[#FFD908] italic">
                  We&apos;re the Lawyers for Creators Network
                </span>{" "}
                - The Legal Brand for Creator-Led Businesses
              </h1>

              <p className="text-[#4A3E00] text-sm sm:text-base font-normal italic leading-relaxed mb-6 sm:mb-8">
                You&apos;re Not Just Creating Content. You&apos;re Building a
                Legacy. Get your <span className="font-bold">FREE</span>{" "}
                creators legal checklist to create a future-proof brand that
                will stand the test of time.
              </p>

              <div>
                <button className="px-8 py-3 bg-[#FFD908] hover:bg-[#e5c537] text-[#4A3E00] font-semibold text-base sm:text-lg rounded-full transition-colors duration-300">
                  Get Started
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative min-h-[300px] sm:min-h-[400px] lg:min-h-[456px] lg:rounded-r-3xl overflow-hidden order-1 lg:order-2">
              <Image
                src="/images/grow44.svg"
                alt="Creators Network"
                fill
                className="object-center object-contain"
              />
            </div>
          </div>
        </div>

        {/* Testimonials */}

          <Testimonials />



        {/* Subscription Plans Section */}
        <div className="mt-12 sm:mt-16 lg:mt-20 bg-[#ffd90833] border border-[#4a3e007f] rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-14">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-[#4A3E00] text-2xl sm:text-3xl lg:text-4xl font-bold tracking-widest uppercase mb-4 sm:mb-6">
              THE RIGHT PLAN FOR YOU
            </h2>
            <p className="text-[#4A3E00] text-sm sm:text-base lg:text-lg font-medium leading-relaxed max-w-4xl mx-auto">
              You&apos;ve put in the work, built the audience, created the
              impact. Now it&apos;s time to protect it legally, strategically
              and for the long term. Book a free call and let&apos;s secure what
              you&apos;ve built with ongoing legal support tailored to your
              stage as a creator.
            </p>
          </div>

          {/* Billing Toggle */}
          <div className="flex justify-center mb-8 sm:mb-12">
            <div className="flex gap-4 rounded-lg overflow-hidden">
              <button
                onClick={() => setBillingPeriod("monthly")}
                className={`px-6 py-2 text-sm sm:text-base font-medium transition-colors ${
                  billingPeriod === "monthly"
                    ? "text-[#4A3E00] border-b-2 border-[#4A3E00]"
                    : "text-[#7e7e7e]"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod("yearly")}
                className={`px-6 py-2 text-sm sm:text-base font-medium transition-colors ${
                  billingPeriod === "yearly"
                    ? "text-[#4A3E00] border-b-2 border-[#4A3E00]"
                    : "text-[#7e7e7e]"
                }`}
              >
                Yearly
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentPlans.map((plan, index) => (
              <PricingCard
                key={index}
                title={plan.title}
                price={plan.price}
                description={plan.description}
                features={plan.features}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Grow;

const TestimonialCard = ({
  name,
  rating,
  testimonial,
  // title,
  imageSrc,
}: TestimonialCardProps) => (
  <div className="bg-[#FFFDF3] rounded-3xl p-6 min-w-[340px] sm:min-w-[380px] max-w-[400px] flex-shrink-0 overflow-hidden">
    <div className="flex items-start gap-4 mb-4">
      {/* Profile Image */}
      <div className="relative w-[74px] h-[74px] rounded-full overflow-hidden bg-gray-300 flex-shrink-0">
        <Image src={imageSrc} alt={name} fill className="object-cover" />
      </div>

      {/* Name and Rating */}
      <div className="pt-3">
        <h4 className="text-[#4A3E00] text-lg font-semibold leading-tight mb-2">
          {name}
        </h4>
        {/* <p className="text-[#fffdf3] text-sm font-medium mb-1">{title}</p> */}
        <div className="flex gap-1">
          {[...Array(5)].map((_, index) => (
            <StarIcon key={index} filled={index < rating} />
          ))}
        </div>
      </div>
    </div>

    {/* Testimonial Text */}
    <p className="text-[#4A3E00] text-base font-medium leading-snug">
      {testimonial}
    </p>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      name: "GlobalTemis",
      rating: 4,
      testimonial:
        "Nowadays, it isn't great uncommon to see lenders rapidly adopting",
      imageSrc: "/images/testimonial.svg",
    },
    {
      name: "Vitor Okafor",
      rating: 4,
      testimonial:
        "Nowadays, it isn't great uncommon to see lenders rapidly adopting",
      imageSrc: "/images/testimonial3.svg",
    },
    {
      name: "Olushola Olaleye",
      rating: 4,
      testimonial:
        "Startup HQ has been instrumental in my journey as a creator and business leader. They didn’t just provide legal support, they brought structure, clarity as a creator at scale. From protecting my intellectual property to guiding partnerships and content ownership, their work has helped me build with confidence and intention. What I value most is their understanding of the creator economy. They recognize that for us creators, it's more than contracts, we need systems that support growth, visibility, and long-term sustainability.",
      imageSrc: "/images/olusola.svg",
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
          <div className="flex gap-10 sm:gap-6 animate-scroll hover:pause-animation">
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
