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
      className="flex size-14 relative items-center justify-center rounded-full overflow-visible"
    >
      {/* Crescent that peeks out behind the main circle */}
      <div
        className={`absolute inset-0 rounded-full ${isActive
          ? "bg-white -translate-x-[2px]"
          : "bg-[#DC661E26] translate-x-[2px]"
          }`}
      />
      {/* Main circle background */}
      <div
        className={`absolute inset-0 rounded-full ${isActive ? "bg-brand-primary" : "bg-[#DC661E26]"
          }`}
      />

      {direction === "left" ? (
        <ChevronLeft className="relative z-10 size-7 text-white" />
      ) : (
        <ChevronRight className="relative z-10 size-7 text-white" />
      )}
    </button>
  );
}
