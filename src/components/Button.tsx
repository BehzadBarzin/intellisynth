import { FC, ReactNode } from "react";
import ButtonSvg from "../assets/svg/ButtonSvg.jsx";

interface IProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  light?: boolean;
  horizontalPadding?: string;
}

const Button: FC<IProps> = ({
  children,
  className,
  href,
  onClick,
  light,
  horizontalPadding,
}) => {
  // ---------------------------------------------------------------------------
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    horizontalPadding || "px-7"
  } ${light ? "text-n-8" : "text-n-1"} ${className || ""}`;
  // ---------------------------------------------------------------------------
  const spanClasses = "relative z-10";
  // ---------------------------------------------------------------------------
  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(light)}
    </button>
  );
  // ---------------------------------------------------------------------------
  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(light)}
    </a>
  );
  // ---------------------------------------------------------------------------
  // ---------------------------------------------------------------------------
  // Render Button or Link
  return href ? renderLink() : renderButton();
};

export default Button;
