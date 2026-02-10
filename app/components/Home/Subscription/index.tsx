import Image from "next/image";

const CheckIcon = () => (
  <div className="w-6 h-6 bg-[#fffdf3] rounded-full flex items-center justify-center flex-shrink-0">
    <svg
      width="15"
      height="14"
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.3355 3.50049L5.82234 9.91716L2.86182 7.00049"
        stroke="#4A3E00"
        strokeWidth="1.19511"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

const ChevronDown = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
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

interface FeatureItemProps {
  text: string;
}

const FeatureItem = ({ text }: FeatureItemProps) => (
  <div className="flex items-start gap-3">
    <CheckIcon />
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
}

const SubscriptionCard = ({
  title,
  description,
  features,
  imagePosition,
  imageSrc,
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
      <button className="w-fit px-8 py-4 bg-[#FFD908] hover:bg-[#e5c537] text-[#4A3E00] font-semibold rounded-lg transition-colors duration-200 text-base sm:text-lg">
        Get Started
      </button>
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
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover"
      />
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
      imageSrc: "/images/content3.svg",
    },
  ];

  return (
    <section className="w-full mt-8 sm:mt-12 lg:mt-16">
      {/* Main Container */}
      <div className="bg-[#ffd90833] border border-[#4a3e0066] rounded-xl p-4 sm:p-8 lg:p-12">
        {/* Tab Navigation - At Top */}
        <div className="flex flex-wrap justify-center gap-8 sm:gap-16 lg:gap-24 mb-8 sm:mb-12">
          {["Ideation kit", "Growth kit", "Scaling kit"].map((tab) => (
            <button
              key={tab}
              className="flex items-center gap-2 text-base sm:text-xl lg:text-2xl font-medium text-[#4A3E00] hover:opacity-80 transition-opacity"
            >
              {tab}
              <ChevronDown />
            </button>
          ))}
        </div>

        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="bg-[#FFD908] text-[#4A3E00] font-bold text-xl sm:text-2xl lg:text-3xl tracking-widest py-4 sm:py-5 px-8 sm:px-16 lg:px-24 rounded-md mb-6 inline-block max-w-3xl w-full sm:w-auto">
            WHAT WE OFFER
          </div>
          <p className="text-base sm:text-lg text-[#4A3E00] font-semibold max-w-2xl mx-auto">
            We&apos;ve designed 3 simple packages- based on where your business is now:
          </p>
        </div>

        {/* Subscription Cards */}
        <div className="space-y-6 sm:space-y-8">
          {subscriptionPlans.map((plan, index) => (
            <SubscriptionCard
              key={index}
              title={plan.title}
              description={plan.description}
              features={plan.features}
              imagePosition={plan.imagePosition}
              imageSrc={plan.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subscriptions;
