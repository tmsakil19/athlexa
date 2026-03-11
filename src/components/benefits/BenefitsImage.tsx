import Image from "next/image";

interface BenefitsImageProps {
  src: string;
  alt: string;
}

export function BenefitsImage({ src, alt }: BenefitsImageProps) {
  return (
    <div className="relative mx-auto h-[400px] w-full shrink-0 overflow-hidden rounded-[32px] sm:h-[450px] md:h-[478px] md:w-[358px]">
      <Image src={src} alt={alt} fill className="object-cover" />
      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 h-25 w-full bg-linear-to-b from-transparent from-0% via-transparent via-0% to-[#6b6b6b] backdrop-blur-[3.2px]" />
    </div>
  );
}
