import Image from "next/image";

const About = () => {
  return (
    <div className="header-wrapper">
      <section className="w-full py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#4A3E00] leading-tight mb-4 sm:mb-6">
              Legal Compliance Advisory Firm Built For{" "}
              <span className="text-[#FFD908] italic">African StartUps.</span>
            </h1>

            {/* Description */}
            <p className="text-[#4A3E00] text-base sm:text-lg font-normal italic leading-relaxed mb-6 sm:mb-8 max-w-lg">
              We help founders launch with confidence, stay compliant, and scale
              sustainably without the legal overwhelm.
            </p>

            {/* Button */}
            <button className="px-8 py-3 bg-[#FFD908] hover:bg-[#e5c537] text-[#4A3E00] font-semibold text-base sm:text-lg rounded-full transition-colors duration-300">
              Get Started
            </button>
          </div>

          {/* Right Image */}
          <div className="relative w-full aspect-[616/456] rounded-3xl overflow-hidden order-1 lg:order-2">
            <Image
              src="/images/aboutFirstLayer.svg"
              alt="African startup founders collaborating"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Second Section - Mission & Vision */}
        <div className="mt-12 sm:mt-16 lg:mt-20 bg-[#ffd90833] rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-14">
          {/* Section Header */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#4A3E00] text-center mb-8 sm:mb-12 lg:mb-16">
            Simplifying Your Options to Make Decision-Making Easier
          </h2>

          {/* Our Mission Card */}
          <div className="flex flex-col lg:flex-row mb-6 sm:mb-8">
            {/* Mission Text */}
            <div className="bg-[#ffd90866] rounded-2xl lg:rounded-l-3xl lg:rounded-r-none p-6 sm:p-8 lg:p-10 flex flex-col justify-center lg:w-1/2 order-2 lg:order-1">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#4A3E00] mb-4">
                Our Mission
              </h3>
              <p className="text-[#4A3E00] text-sm sm:text-base font-normal leading-relaxed">
                Our mission is to provide startups with ease of doing business
                by providing the requisite regulatory compliance services
                tailored to their unique needs.
              </p>
            </div>

            {/* Mission Image */}
            <div className="relative lg:w-1/2 h-[250px] sm:h-[280px]  rounded-2xl lg:rounded-2xl overflow-hidden order-1 lg:order-2">
              <Image
                src="/images/aboutlayer2.svg"
                alt="Our Mission"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Our Vision Card */}
          <div className="flex flex-col lg:flex-row">
            {/* Vision Image */}
            <div className="relative lg:w-1/2 h-[250px] sm:h-[280px]  rounded-2xl lg:rounded-2xl overflow-hidden">
              <Image
                src="/images/aboutLayer3.svg"
                alt="Our Vision"
                fill
                className="object-cover object-center absolute"
              />
            </div>

            {/* Vision Text */}
            <div className="bg-[#ffd90866] rounded-2xl lg:rounded-r-3xl lg:rounded-l-none p-6 sm:p-8 lg:p-10 flex flex-col justify-center lg:w-1/2">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#4A3E00] mb-4">
                Our Vision
              </h3>
              <p className="text-[#4A3E00] text-sm sm:text-base font-normal leading-relaxed">
                Our mission is to provide startups with ease of doing business
                by providing the requisite regulatory compliance services
                tailored to their unique needs.
              </p>
            </div>
          </div>
        </div>

        {/* Third Section - Meet Our Team */}
        <div className="mt-12 sm:mt-16 lg:mt-20 bg-[#4A3E00] rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-14">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-[#fffdf3] text-2xl sm:text-3xl lg:text-4xl font-bold tracking-widest uppercase mb-4">
              MEET OUR TEAM
            </h2>
            <p className="text-[#fffdf3] text-base sm:text-lg font-normal">
              Collectively, our team brings over 10 years of experience:
            </p>
          </div>

          {/* Team Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Team Member 1 */}
            <div className="  bg-[#fffdf3]  rounded-2xl p-4 sm:p-6 text-center">
              <div className="relative w-full aspect-[300/210] rounded-xl overflow-hidden mb-4">
                <Image
                  src="/images/wonderful.svg"
                  alt="Wonderful Akanbi"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-[ #4a3e00] text-lg sm:text-xl font-semibold mb-1">
                Wonderful Akanbi
              </h3>
              <p className=" text-[ #4a3e00] text-sm sm:text-base font-normal">
                Chief Compliance Officer
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-[#fffdf3] rounded-2xl p-4 sm:p-6 text-center">
              <div className="relative w-full aspect-[300/210] rounded-xl overflow-hidden mb-4">
                <Image
                  src="/images/oyindamola.svg"
                  alt="Oyindamola Fasanya"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-[ #4a3e00] text-lg sm:text-xl font-semibold mb-1">
                Oyindamola Fasanya
              </h3>
              <p className="text-[ #4a3e00] text-sm sm:text-base font-normal">
                Director of Legal Operations
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-[#fffdf3] rounded-2xl p-4 sm:p-6 text-center">
              <div className="relative w-full aspect-[300/210] rounded-xl overflow-hidden mb-4">
                <Image
                  src="/images/ifon.svg"
                  alt="Unyime Stephen Ifon"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-[ #4a3e00] text-lg sm:text-xl font-semibold mb-1">
                Unyime Stephen Ifon
              </h3>
              <p className="text-[ #4a3e00] text-sm sm:text-base font-normal">
                Legal and Client Relations Lead
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
