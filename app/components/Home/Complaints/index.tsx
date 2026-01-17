import Image from "next/image";

const Complaints = () => {
  return (
    <section className="">
      {/* Hero Section */}
      <div className=" mx-auto px-4 sm:px-6 lg:px-6 py-12 sm:py-16 lg:py-5">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 lg:pb-10 items-center"

        >
          {/* Left Content */}
          <div className="order-2 lg:order-1 space-y-6">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#4A3E00] leading-tight lg:whitespace-nowrap">
                Take the Guesswork Out
              </h1>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#FFD908] leading-tight">
                Build with Clarity
              </h2>
            </div>
            <p className="text-base sm:text-lg lg:text-xl text-[#3d3d1f] italic leading-relaxed">
              Build Right from Day One: Startup
              <br className="hidden sm:block" />
              Compliance Advisory for Nigerian Founders
            </p>
            <button className="px-8 py-3.5 bg-[#F5D547] hover:bg-[#e5c537] text-[#1a1a1a] font-semibold rounded-md transition-colors duration-200 text-base sm:text-lg">
              Get Started
            </button>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[450px] lg:max-w-[550px] rounded-2xl overflow-hidden">
              <Image
                src="/complaint-Image.svg"
                alt="Compliance professional holding document"
                width={550}
                height={400}
                className="w-full h-auto object-cover rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className=" bg-[#4A3E00] ">
        <div className=" mx-auto px-4 sm:px-6 lg:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 p-4 lg:p-10">
            {/* Stat Card 1 */}
            <div className="bg-[#f5f5e8] rounded-2xl py-8 sm:py-10 lg:py-12 px-6 text-center">
              <p className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#3d3d1f] mb-3 sm:mb-4">
                98%
              </p>
              <p className="text-sm sm:text-base lg:text-lg font-semibold text-[#3d3d1f]">
                Compliance success rate
              </p>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-[#f5f5e8] rounded-2xl py-8 sm:py-10 lg:py-12 px-6 text-center">
              <p className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#3d3d1f] mb-3 sm:mb-4">
                150+
              </p>
              <p className="text-sm sm:text-base lg:text-lg font-semibold text-[#3d3d1f]">
                StartUps served Across all sectors
              </p>
            </div>

            {/* Stat Card 3 */}
            <div className="bg-[#f5f5e8] rounded-2xl py-8 sm:py-10 lg:py-12 px-6 text-center">
              <p className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#3d3d1f] mb-3 sm:mb-4">
                6+
              </p>
              <p className="text-sm sm:text-base lg:text-lg font-semibold text-[#3d3d1f] leading-tight">
                Years of early-stage startup
                <br />
                legal expertise
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Complaints;
