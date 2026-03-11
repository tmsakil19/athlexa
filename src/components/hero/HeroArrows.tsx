import { ArrowButton } from "@/components/ui/ArrowButton";

export function HeroArrows() {
  return (
    <div className="flex items-center gap-[16px]">
      <ArrowButton direction="left" variant="default" />
      <ArrowButton direction="right" variant="active" />
    </div>
  );
}
