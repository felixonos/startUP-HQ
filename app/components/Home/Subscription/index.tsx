"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useInView } from "../../../hooks/useInView";

const ChevronDown = ({ open }: { open: boolean }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
  >
    <path
      d="M6 9L12 15L18 9"
      stroke="#4A3E00"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CheckboxItem = ({
  text,
  checked,
}: {
  text: string;
  checked: boolean;
}) => (
  <div className="flex items-start gap-3">
    <div
      className={`w-6 h-6 rounded border-2 flex-shrink-0 mt-0.5 flex items-center justify-center ${
        checked
          ? "bg-[#FFD908] border-[#FFD908]"
          : "bg-transparent border-[#fffdf3]/60"
      }`}
    >
      {checked && (
        <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
          <path
            d="M1 5L4.5 8.5L11 1"
            stroke="#4A3E00"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
    <span className="text-[#fffdf3] text-sm sm:text-base leading-snug">
      {text}
    </span>
  </div>
);

const kits = [
  {
    label: "Ideation kit",
    title: "Ideation Stage",
    description:
      "Is your company just getting started? If you check three or more of these boxes, you're in the ideation stage.",
    items: [
      {
        text: "I haven't officially registered my business yet or just registered recently",
        checked: true,
      },
      { text: "I'm still figuring out my business model", checked: true },
      { text: "I'm bootstrapping or using personal savings", checked: true },
      { text: "My financial records are basic or informal", checked: true },
      { text: "I'm not sure what licenses or permits I need", checked: false },
      {
        text: "I haven't dealt with agreements or term sheets",
        checked: false,
      },
      { text: "I don't have a formal board of directors", checked: true },
    ],
  },
  {
    label: "Growth kit",
    title: "Growth Stage",
    description:
      "Is your company just entering the market? If you check three or more boxes, you're in the growth stage.",
    items: [
      {
        text: "I'm registered and have been operating for a while",
        checked: true,
      },
      { text: "I have some incomplete legal/compliance docs", checked: true },
      { text: "I have repeat customers and growing sales", checked: true },
      { text: "I don't have a formal organizational structure", checked: true },
      {
        text: "I don't have written policies or an employee handbook",
        checked: false,
      },
      {
        text: "My team doesn't have formal employment contracts",
        checked: false,
      },
      {
        text: "I need help with ongoing compliance, not just setup",
        checked: true,
      },
      {
        text: "I have a proven product or service with paying customers",
        checked: true,
      },
    ],
  },
  {
    label: "Scaling kit",
    title: "Scaling Stage",
    description:
      "Is your company just getting started? If you check three or more of these boxes, you're in the ideation stage.",
    items: [
      {
        text: "I'm operating or about to operate in multiple states",
        checked: true,
      },
      { text: "I'm constantly entering new markets", checked: true },
      {
        text: "I'm expanding internationally to different countries",
        checked: true,
      },
      {
        text: "I'm acquiring other firms or forming strategic partnerships",
        checked: true,
      },
      {
        text: "I need to manage compliance across different jurisdictions",
        checked: false,
      },
      {
        text: "My business decisions have significant regulatory impacts.",
        checked: false,
      },
      { text: "I need sophisticated governance structures", checked: true },
      {
        text: "I have significant legal and regulatory risk exposure",
        checked: true,
      },
    ],
  },
];

interface FeatureItemProps {
  text: string;
}
const FeatureItem = ({ text }: FeatureItemProps) => (
  <div className="flex items-start gap-3">
    <div className="w-6 h-6 bg-[#fffdf3] rounded-full flex items-center justify-center flex-shrink-0">
      <svg width="15" height="14" viewBox="0 0 15 14" fill="none">
        <path
          d="M12.3355 3.50049L5.82234 9.91716L2.86182 7.00049"
          stroke="#4A3E00"
          strokeWidth="1.19511"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
    <span className="text-[#fffdf3] text-base sm:text-lg font-medium leading-snug">
      {text}
    </span>
  </div>
);

interface SubscriptionCardProps {
  title: string;
  description: string;
  features: string[];
  imagePosition: "left" | "right";
  imageSrc: string;
  link: string;
}

const SubscriptionCard = ({
  title,
  description,
  features,
  imagePosition,
  imageSrc,
  link,
}: SubscriptionCardProps) => {
  const contentSection = (
    <div
      className={`bg-[#4A3E00] p-8 sm:p-10 lg:p-12 flex flex-col justify-center h-full ${
        imagePosition === "left"
          ? "rounded-b-3xl md:rounded-r-3xl md:rounded-bl-none"
          : "rounded-b-3xl md:rounded-l-3xl md:rounded-br-none"
      }`}
    >
      <h3 className="text-2xl sm:text-3xl font-semibold text-[#fffdf3] mb-4">
        {title}
      </h3>
      <p className="text-base sm:text-lg text-[#fffdf3] font-medium mb-6 leading-snug">
        {description}
      </p>
      <div className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <FeatureItem key={index} text={feature} />
        ))}
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-fit inline-block px-8 py-4 bg-[#FFD908] hover:bg-[#e5c537] text-[#4A3E00] font-semibold rounded-lg transition-colors duration-200 text-base sm:text-lg"
      >
        Get Started
      </a>
    </div>
  );

  const imageSection = (
    <div
      className={`relative h-full min-h-[300px] ${
        imagePosition === "left"
          ? "rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none"
          : "rounded-t-3xl md:rounded-r-3xl md:rounded-tl-none"
      } overflow-hidden`}
    >
      <Image src={imageSrc} alt={title} fill className="object-cover" />
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden">
      {imagePosition === "left" ? (
        <>
          <div className="h-full">{imageSection}</div>
          <div className="h-full">{contentSection}</div>
        </>
      ) : (
        <>
          <div className="order-2 md:order-1 h-full">{contentSection}</div>
          <div className="order-1 md:order-2 h-full">{imageSection}</div>
        </>
      )}
    </div>
  );
};

const Subscriptions = () => {
  const [openKit, setOpenKit] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const sectionRef = useInView();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpenKit(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const subscriptionPlans = [
    {
      title: "Ideation Stage",
      description:
        "This package is designed to help founders lay a strong legal foundation from day one.",
      features: [
        "Business structure & entity formation compliance",
        "Initial regulatory landscape assessment",
        "Basic licensing requirement identification",
        "Tax compliance structure",
        "Corporate bank account",
        "Consultation (30 minutes)",
      ],
      imagePosition: "right" as const,
      imageSrc: "/images/Content1.svg",
      link: "https://paystack.shop/startuphq-ideation-stage-package",
    },
    {
      title: "Growth Stage",
      description: "Perfect for startups ready to scale operations.",
      features: [
        "Everything in Ideation Stage",
        "CAC Registration",
        "Data protection",
        "Employment contract drafting",
        "Intellectual property protection",
        "Board advisory support",
        "Tax filing support",
      ],
      imagePosition: "right" as const,
      imageSrc: "/images/Content2.svg",
      link: "https://paystack.shop/growth-packages",
    },
    {
      title: "Scaling Stage",
      description: "For established startups expanding their reach.",
      features: [
        "Everything in Growth Stage plus:",
        "Investment-readiness legal audit",
        "Due diligence preparation and support",
        "Shareholder agreement structuring",
        "Advanced compliance frameworks (NDPR, sector-specific)",
        "International expansion legal advisory",
      ],
      imagePosition: "left" as const,
      imageSrc: "/images/content44.svg",
      link: "https://paystack.shop/scale-stage-packages",
    },
  ];

  const activeKit = kits.find((k) => k.label === openKit);

  return (
    <section className="w-full mt-8 sm:mt-12 lg:mt-16" ref={sectionRef}>
      <div className="bg-[#ffd90833] border border-[#4a3e0066] rounded-xl p-4 sm:p-8 lg:p-12">
        {/* Tab Navigation with Dropdown */}
        <div className="relative mb-8 sm:mb-12" ref={dropdownRef}>
          <div className="flex flex-wrap justify-center gap-8 sm:gap-16 lg:gap-24">
            {kits.map((kit) => (
              <button
                key={kit.label}
                onClick={() =>
                  setOpenKit(openKit === kit.label ? null : kit.label)
                }
                className="flex items-center gap-2 text-base sm:text-xl lg:text-2xl font-medium text-[#4A3E00] hover:opacity-80 transition-opacity"
              >
                {kit.label}
                <ChevronDown open={openKit === kit.label} />
              </button>
            ))}
          </div>

          {/* Dropdown Panel */}
          {activeKit && (
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 z-50 w-full max-w-lg sm:max-w-xl">
              <div className="bg-[#4A3E00] rounded-2xl p-6 sm:p-8 shadow-2xl dropdown-enter">
                <h3 className="text-xl sm:text-2xl font-bold text-[#FFD908] mb-2">
                  {activeKit.title}
                </h3>
                <p className="text-[#fffdf3]/80 text-sm sm:text-base mb-5 leading-snug">
                  {activeKit.description}
                </p>
                <div className="space-y-3">
                  {activeKit.items.map((item, i) => (
                    <CheckboxItem
                      key={i}
                      text={item.text}
                      checked={item.checked}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="bg-[#FFD908] text-[#4A3E00] font-bold text-xl sm:text-2xl lg:text-3xl tracking-widest py-4 sm:py-5 px-8 sm:px-16 lg:px-24 rounded-md mb-6 inline-block max-w-3xl w-full sm:w-auto animate-pop-up">
            WHAT WE OFFER
          </div>
          <p className="text-base sm:text-lg text-[#4A3E00] font-semibold max-w-2xl mx-auto animate-pop-up delay-100">
            We&apos;ve designed 3 simple packages- based on where your business
            is now:
          </p>
        </div>

        {/* Subscription Cards */}
        <div className="space-y-6 sm:space-y-8 animate-pop-up delay-200">
          {subscriptionPlans.map((plan, index) => (
            <SubscriptionCard
              key={index}
              title={plan.title}
              description={plan.description}
              features={plan.features}
              imagePosition={plan.imagePosition}
              imageSrc={plan.imageSrc}
              link={plan.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subscriptions;
