import { FC, ReactNode } from "react";
import brackets from "../assets/svg/Brackets.jsx";

interface IProps {
  className?: string;
  children?: ReactNode;
}

const TagLine: FC<IProps> = ({ className, children }) => {
  return (
    <div className={`tagline flex items-center ${className || ""}`}>
      {brackets("left")}
      <div className="mx-3 text-n-3">{children}</div>
      {brackets("right")}
    </div>
  );
};

export default TagLine;
