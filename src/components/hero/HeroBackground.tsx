import Image from "next/image";

export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Header gradient background image */}
      <Image
        src="/images/header-gradient.png"
        alt=""
        fill
        className="object-cover lg:object-contain object-top opacity-30 lg:opacity-50"
        priority
      />
    </div>
  );
}
