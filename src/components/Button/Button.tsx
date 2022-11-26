import React from "react";
import classnames from "classnames";
import Ping from "../Ping";

type Props = {
  children: React.ReactNode;
  variant?: "ghost" | "filled" | "outline";
  to?: string;
  onClick?: () => void;
  className?: string;
  ping?: boolean;
  disabled?: boolean;
};

export const Button: React.FC<Props> = ({
  children,
  variant,
  to,
  onClick,
  className,
  ping,
  disabled,
}) => {
  const classes = classnames(
    "transition duration-300 ease-in-out font-semibold rounded relative text-center",
    "px-4 py-2",
    {
      "text-primary-content bg-primary hover:bg-primary-focus hover:text-white":
        variant === "filled",
      "hover:bg-white/80 hover:text-base-color ": variant === "ghost",
    },
    {
      "text-gray-500 hover:text-gray-500 hover:bg-primary-focus/30 hover:cursor-not-allowed":
        disabled,
    },
    className
  );

  if (to && !disabled) {
    return (
      <a href={to} className={classes}>
        {children}
        {ping && <Ping />}
      </a>
    );
  }
  return (
    <button onClick={disabled ? () => {} : onClick} className={classes}>
      {children}
      {ping && <Ping />}
    </button>
  );
};

Button.defaultProps = {
  variant: "filled",
};

export default Button;
