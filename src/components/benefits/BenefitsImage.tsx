import Image from "next/image";

interface BenefitsImageProps {
  src: string;
  alt: string;
}

export function BenefitsImage({ src, alt }: BenefitsImageProps) {
  return (
    <div className="relative h-[350px] w-full shrink-0 overflow-hidden rounded-[32px] sm:h-[400px] md:h-[478px] md:w-[358px]">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
      />
      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 h-[109px] w-full bg-gradient-to-b from-transparent from-[8%] to-[#6b6b6b] backdrop-blur-[6.2px]" />
    </div>
  );
}
