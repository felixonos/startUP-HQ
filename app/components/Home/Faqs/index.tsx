"use client";

import { useState } from "react";

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
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <div className="bg-[#FFD908] bg-opacity-60 px-4 py-4 rounded-b-3xl">
        <p className=" text-[#4A3E00]  text-sm sm:text-base leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  </div>
);

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData = [
    {
      question: "How do I get started with your services?",
      answer:
        "Getting started is easy! Simply click the 'Get Started' button on our homepage or contact us directly. We'll schedule a consultation to understand your startup's needs and recommend the best package for you. Our team will guide you through the entire onboarding process.",
    },
    {
      question: "What industries do you work in?",
      answer:
        "We work with startups across various industries including technology, fintech, e-commerce, healthcare, education, and creative industries. Our expertise spans multiple sectors, allowing us to provide tailored legal and compliance solutions regardless of your industry.",
    },
    {
      question: "What's your pricing model, fixed fee, hourly, or retainer?",
      answer:
        "We offer flexible pricing options to suit different needs. Our packages are primarily fixed-fee based for predictable budgeting. For ongoing support, we offer retainer arrangements. We don't typically charge hourly to ensure transparency and help you manage costs effectively.",
    },
    {
      question: "Can I Customize your services to meet my startup needs?",
      answer:
        "Absolutely! We understand that every startup is unique. Our packages can be customized to address your specific requirements. During our initial consultation, we'll work with you to create a tailored solution that aligns with your business goals and budget.",
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full mt-8 sm:mt-12 lg:mt-16">
      <div className="bg-[#ffd90833] border border-[#4a3e0019] rounded-xl p-6 sm:p-10 lg:p-14">
        {/* FAQs Badge */}
        <div className="flex justify-center mb-8 sm:mb-10">
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#4A3E00] leading-tight mb-6 sm:mb-8">
              Got Questions?
              <br />
              We&apos;ve Got Answers
            </h2>
            <div>
              <button className="px-8 py-3 bg-transparent border-2 border-[#4A3E00] text-[#4A3E00] font-semibold rounded-full hover:bg-[#4A3E00] hover:text-white transition-colors duration-300">
                Find Resources
              </button>
            </div>
          </div>

          {/* Right Side - FAQ Accordion */}
          <div className="flex flex-col">
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
