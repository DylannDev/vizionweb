import { cn } from "@/lib/utils";
import { ArrowButton } from "./ui/arrow-button";

interface CallButtonProps {
  size?: "lg" | "md";
  className?: string;
  variant?: "blue" | "black" | "white";
}

const CallButton = ({
  size = "lg",
  className,
  variant = "blue",
}: CallButtonProps) => {
  return (
    <ArrowButton
      href="https://cal.com/dylann/30min"
      target="_blank"
      variant={variant}
      size={size}
      className={className}
    >
      Réserver un appel
    </ArrowButton>
  );
};

export default CallButton;
