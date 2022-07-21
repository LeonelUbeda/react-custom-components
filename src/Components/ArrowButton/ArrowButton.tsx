import { ButtonHTMLAttributes } from "react";
import cn from "classnames";
import ArrowLeft from "../../assets/arrow-left.svg";
import ArrowRight from "../../assets/arrow-right.svg";
import "./ArrowButton.css";

type Props = {
  direction: "left" | "right";
  size?: "md" | "lg";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const ArrowButton = ({
  direction,
  size = "md",
  className,
  ...props
}: Props) => {
  return (
    <button
      type="button"
      className={cn(className, "calendar-controls__action-button")}
      {...props}
    >
      <img
        src={direction === "left" ? ArrowLeft : ArrowRight}
        className={cn({
          "arrow-button-md": size === "md",
          "arrow-button-lg": size === "lg",
        })}
      />
    </button>
  );
};

export default ArrowButton;
