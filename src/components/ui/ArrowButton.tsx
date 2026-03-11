import { ChevronLeft, ChevronRight } from "lucide-react";

interface ArrowButtonProps {
  direction: "left" | "right";
  variant?: "default" | "active";
  onClick?: () => void;
}

export function ArrowButton({
  direction,
  variant = "default",
  onClick,
}: ArrowButtonProps) {
  const isActive = variant === "active";

  return (
    <button
      onClick={onClick}
      aria-label={direction === "left" ? "Previous" : "Next"}
      className={`flex size-[56px] items-center justify-center rounded-full border-r-2 border-solid transition-colors ${isActive
          ? "border-white bg-brand-primary"
          : "border-[rgba(255,255,255,0.15)] bg-[rgba(220,102,30,0.15)]"
        }`}
    >
      {direction === "left" ? (
        <ChevronLeft className="size-[28px] text-white" />
      ) : (
        <ChevronRight className="size-[28px] text-white" />
      )}
    </button>
  );
}
