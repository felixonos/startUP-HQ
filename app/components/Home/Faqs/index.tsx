"use client";

import { useState } from "react";
import { useInView } from "../../../hooks/useInView";

const PlusIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M7 1V13" stroke="#4A3E00" strokeWidth="2" strokeLinecap="round" />
    <path d="M1 7H13" stroke="#4A3E00" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const MinusIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1 7H13" stroke="#4A3E00" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FaqItem = ({ question, answer, isOpen, onToggle }: FaqItemProps) => (
  <div className="mb-2">
    <button
      onClick={onToggle}
      className={`w-full bg-[#FFD908] px-4 py-4 flex items-center justify-between text-left transition-all duration-300 ${
        isOpen ? "rounded-t-3xl" : "rounded-3xl"
      }`}
    >
      <span className="text-[#4A3E00] text-base sm:text-lg font-medium pr-4">
        {question}
      </span>
      <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
        {isOpen ? <MinusIcon /> : <PlusIcon />}
      </span>
    </button>
    <div
      className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? "max-h-150 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <div className="bg-[#FFD908] bg-opacity-60 px-4 py-4 rounded-b-3xl">
        <p className="text-[#4A3E00] text-sm sm:text-base leading-relaxed whitespace-pre-wrap">
          {answer}
        </p>
      </div>
    </div>
  </div>
);

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useInView();

  const faqData = [
    {
      question: "How do I get started with your service?",
      answer:
        "1. Book a Free Consultation\nVisit www.startuphqconsult.com or contact us via info@startuphqconsult.com or 0701 685 0509.\n\n2. Select a Package\nWe'll recommend the right package based on your stage: Ideation, Growth, or Scaling.\n\n3. Place Your Order\nComplete the form on our website and make payment (multiple options available).\n\n4. Submit Required Documents\nWe process your application and liaise with authorities while keeping you informed.\n\n5. Receive Your Documents\nAll certificates and compliance materials are delivered to you upon completion.\n\nTimeline: Most registrations are completed within 20–30 business days, subject to government processing times.",
    },
    {
      question: "How will I receive updates on my application?",
      answer:
        "We believe in transparent communication. You'll receive updates through:\n• Regular email updates at key milestones\n• Access to your dedicated account manager (for retainer clients)\n• WhatsApp updates (if preferred)\n\nYou can always reach out to us at admin@startuphqconsult.com or call 0701 685 0509.",
    },
    {
      question: "What's your pricing model – fixed fee, hourly, or retainer?",
      answer:
        "We offer flexible pricing based on your needs:\n\nFixed Fees: All-inclusive pricing for company setup, registrations, and one-off services.\nRetainers: Monthly or annual plans for ongoing legal and compliance support.\nProject-Based: Custom pricing for complex or expansion projects.\n\nPayment Terms: Upfront (fixed) · Monthly/annual (retainer) · Milestone-based (projects)\n\nGet a Quote: info@startuphqconsult.com | 0701 685 0509",
    },
    {
      question: "What industries do you work in?",
      answer:
        "StartupHQ serves startups and emerging businesses across diverse industries. In just 24 months, we've successfully served over 150 companies across multiple sectors including: Edtech, Fintech, Consulting, Creative Industries, and more.",
    },
    {
      question: "What documents do I need to register my company?",
      answer:
        "For company registration in Nigeria, you'll typically need:\n• Valid means of identification (International Passport, National ID, Driver's License, or Voter's Card)\n• Proof of address (utility bill)\n• Passport photographs of directors/shareholders\n• Proposed company name (we'll help with name availability checks)\n• Business address in Nigeria\n• Details of business activities and objectives\n\nDon't worry — we'll provide you with a complete checklist and guide you through the entire process!",
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full mt-8 sm:mt-12 lg:mt-16" ref={ref}>
      <div className="bg-[#ffd90833] border border-[#4a3e0019] rounded-xl p-6 sm:p-10 lg:p-14">
        {/* FAQs Badge */}
        <div className="flex justify-center mb-8 sm:mb-10 animate-pop-up">
          <div className="bg-[#FFD908] px-16 sm:px-24 py-3 rounded">
            <span className="text-[#4A3E00] text-2xl sm:text-3xl font-bold">
              FAQs
            </span>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side - Title and Button */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#4A3E00] leading-tight mb-6 sm:mb-8 animate-pop-left">
              Got Questions?
              <br />
              We&apos;ve Got Answers
            </h2>
            <div>
              <button className="px-8 py-3 bg-transparent border-2 border-[#4A3E00] text-[#4A3E00] font-semibold rounded-full hover:bg-[#4A3E00] hover:text-white transition-colors duration-300 animate-pop-in delay-200">
                Find Resources
              </button>
            </div>
          </div>

          {/* Right Side - FAQ Accordion */}
          <div className="flex flex-col animate-pop-right">
            {faqData.map((faq, index) => (
              <FaqItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
