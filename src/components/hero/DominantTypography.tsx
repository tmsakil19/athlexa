import Image from "next/image";

export function DominantTypography() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Container for the DOMINANT word */}
      <div className="relative mx-auto flex max-w-[1440px] items-center justify-center">
        {/* Layer 1: Player image clipped to text shape */}
        <div
          className="select-none font-bebas text-[clamp(60px,17.5vw,260px)] font-normal uppercase leading-[0.85] tracking-tight text-transparent"
          style={{
            backgroundImage: "url('/images/player-1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center 35%",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
          }}
          aria-hidden="true"
        >
          DOMINANT
        </div>

        {/* Layer 2: Text overlay with mix-blend-hard-light for metallic sheen */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center mix-blend-hard-light">
          <div className="relative h-full w-full max-w-[1281px]">
            <Image
              src="/images/dominant-bg.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
