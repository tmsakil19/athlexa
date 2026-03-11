import Image from "next/image";

export function DominantTypography() {
  return (
    <div className="relative flex w-full items-center justify-center overflow-hidden py-4 lg:py-0">
      {/* The DOMINANT text rendered as an image to match exact Figma styling with mask */}
      <div className="relative h-[80px] w-full max-w-[1280px] sm:h-[120px] md:h-[180px] lg:h-[252px]">
        {/* Background player image with mask */}
        <div
          className="absolute inset-0"
          style={{
            maskImage: "url('/images/dominant-bg.png')",
            WebkitMaskImage: "url('/images/dominant-bg.png')",
            maskSize: "contain",
            WebkitMaskSize: "contain",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskPosition: "center",
            WebkitMaskPosition: "center",
          }}
        >
          <Image
            src="/images/player-1.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        {/* DOMINANT text overlay with hard-light blend */}
        <div className="absolute inset-0 mix-blend-hard-light">
          <Image
            src="/images/dominant-bg.png"
            alt="DOMINANT"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
