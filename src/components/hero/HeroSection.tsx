import Image from "next/image";
import { heroConfig } from "@/config/hero";
import { HeroBackground } from "./HeroBackground";
import { TextBottomBorderIcon } from "../custom-icons";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-brand-black">
      {/* Background gradient */}
      <HeroBackground />

      {/* Main hero wrapper */}
      <div className="relative mx-auto max-w-[1440px]">

        {/* ========== HERO HEADING (top-left, over player) ========== */}
        <div className="relative z-10 px-6 pt-[100px] md:px-10 lg:px-[160px] lg:pt-[170px]">
          <h1
            className="font-bebas text-[28px] text-center lg:text-start leading-normal sm:text-[32px] md:text-[36px]"
          >
            <span className="block" style={{
              backgroundImage: "var(--gradient-metallic)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}>{heroConfig.headingLine1}</span>


            <span className="block" style={{
              backgroundImage: "var(--gradient-metallic)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}>
              {heroConfig.headingLine2}
            </span>
          </h1>
          <TextBottomBorderIcon className="mx-auto lg:mx-0" />
        </div>

        {/* ========== PLAYER IMAGE ========== */}
        <div className="pointer-events-none relative z-[5] flex justify-center lg:absolute lg:inset-x-0 lg:top-[140px]">
          <div className="relative h-[400px] w-[400px] md:size-[600px] lg:mx-auto lg:mt-0 lg:ml-[calc(54.17%-488px)] lg:h-[804px] lg:w-[977px]">
            <Image
              src={heroConfig.playerImage}
              alt="Basketball player"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>
        </div>

        {/* ========== THUMBNAIL IMAGES (right side, desktop) ========== */}
        <div className="absolute right-[160px] top-[156px] z-20 hidden items-start gap-3 lg:flex">
          {/* Main thumbnail */}
          <div className="h-[128px] w-[152px] overflow-hidden rounded-xl bg-white">
            <Image
              src={heroConfig.playerImage3}
              alt="Player thumbnail"
              width={171}
              height={227}
              className="h-full w-full object-cover"
            />
          </div>
          {/* Faded partial thumbnail */}
          <div className="relative h-[128px] w-[59px] overflow-hidden rounded-xl bg-white">
            <Image
              src={heroConfig.playerImage4}
              alt="Player thumbnail"
              width={163}
              height={200}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-b from-transparent from-55% to-white" />
          </div>
        </div>

        {/* ========== DESCRIPTION TEXT (right side, desktop) ========== */}
        <div className="absolute right-[160px] top-[574px] z-20 hidden w-[319px] text-right lg:block">
          <p className="font-inter text-[16px] leading-6 text-white">
            Professional coaching programs designed
            <br />
            — to unlock your full athletic potential
            <br />
            no matter your level.
          </p>
        </div>

        {/* ========== SPACER for proper height on desktop ========== */}
        <div className="hidden lg:block lg:h-[468px]" />

        {/* ========== DOMINANT TYPOGRAPHY ========== */}
        <div className="relative -z-0 -mt-[20px] sm:-mt-[40px] lg:mt-0 flex max-w-[1440px] items-center justify-center w-full">
          <h1 className="bg-[url('/images/dominant-bg.png')] font-bebas text-[100px] md:text-[150px] lg:text-[200px] xl:text-[300px] 2xl:text-[350px] bg-center bg-clip-text text-transparent inline-block leading-[0.85] tracking-wider font-black bg-size-[180%] bg-opacity-30">
            DOMINANT
          </h1>
        </div>

        {/* ========== MOBILE DESCRIPTION ========== */}
        <div className="px-6 pt-6 md:px-10 lg:hidden">
          <p className="font-inter text-center text-[14px] leading-[22px] text-white opacity-80 sm:text-[16px] sm:leading-6">
            Professional coaching programs designed — to unlock your full
            athletic potential no matter your level.
          </p>
        </div>
      </div>
    </section >
  );
}
