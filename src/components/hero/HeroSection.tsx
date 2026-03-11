import Image from "next/image";
import { heroConfig } from "@/config/hero";
import { HeroBackground } from "./HeroBackground";
import { DominantTypography } from "./DominantTypography";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-brand-black">
      {/* Background */}
      <HeroBackground />

      {/* Hero Content */}
      <div className="relative z-10">
        {/* Hero heading + player area */}
        <div className="relative px-6 pt-4 lg:px-[160px] lg:pt-[40px]">
          {/* Heading text - gradient metallic */}
          <div className="relative z-20 max-w-[400px]">
            <h1
              className="font-bebas text-[28px] leading-none sm:text-[32px] md:text-[36px]"
              style={{
                backgroundImage: "var(--gradient-metallic)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              <span className="block">{heroConfig.headingLine1}</span>
              <span className="block">{heroConfig.headingLine2}</span>
            </h1>

            {/* Decorative line under heading */}
            <div className="mt-4 h-[3px] w-[203px] bg-gradient-to-r from-white to-transparent" />
          </div>

          {/* Player Image */}
          <div className="relative z-10 mx-auto -mt-[60px] flex justify-center sm:-mt-[80px] lg:-mt-[120px] lg:ml-[15%]">
            <div className="relative h-[400px] w-[350px] sm:h-[500px] sm:w-[450px] md:h-[600px] md:w-[550px] lg:h-[804px] lg:w-[977px]">
              <Image
                src={heroConfig.playerImage}
                alt="Basketball player"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Thumbnail images - Desktop only */}
          <div className="absolute right-[160px] top-[156px] z-20 hidden gap-[12px] lg:flex">
            <div className="h-[128px] w-[152px] overflow-hidden rounded-[12px] bg-white">
              <Image
                src={heroConfig.playerImage}
                alt="Player thumbnail"
                width={171}
                height={227}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="relative h-[128px] w-[59px] overflow-hidden rounded-[12px] bg-white">
              <Image
                src={heroConfig.playerImage}
                alt="Player thumbnail"
                width={163}
                height={200}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent from-55% to-white" />
            </div>
          </div>

          {/* Description text - Desktop only */}
          <div className="absolute right-[160px] top-[574px] z-20 hidden text-right lg:block">
            <p className="max-w-[319px] font-inter text-[16px] leading-[24px] text-white">
              Professional coaching programs designed — to unlock your full
              athletic potential
              <br />
              no matter your level.
            </p>
          </div>
        </div>

        {/* DOMINANT typography section */}
        <div className="-mt-[40px] sm:-mt-[60px] lg:-mt-[120px]">
          <DominantTypography />
        </div>

        {/* Mobile description */}
        <div className="px-6 pt-8 lg:hidden">
          <p className="font-inter text-[14px] leading-[22px] text-white sm:text-[16px] sm:leading-[24px]">
            Professional coaching programs designed — to unlock your full
            athletic potential no matter your level.
          </p>
        </div>
      </div>
    </section>
  );
}
