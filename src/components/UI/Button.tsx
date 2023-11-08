import Link from "next/link";
import React from "react";
interface IButton {
  type: "neutral" | "primary";
  path: string;
  children: React.ReactNode;
}
const Button: React.FC<IButton> = ({ type, path, children }) => {
  const style = type === "neutral" ? "btn btn-neutral" : "btn btn-primary";
  return (
    <Link href={path} className={style}>
      {children}
    </Link>
  );
};

export default Button;
