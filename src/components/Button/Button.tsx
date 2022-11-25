import React from "react";
import classnames from "classnames";

type Props = {
  children: React.ReactNode;
  variant?: "ghost" | "filled" | "outline";
  to?: string;
  onClick?: () => void;
  className?: string;
};

export const Button: React.FC<Props> = ({
  children,
  variant,
  to,
  onClick,
  className,
}) => {
  const classes = classnames(
    "transition duration-300 ease-in-out font-semibold rounded",
    "px-4 py-2",
    {
      "text-primary-content bg-primary hover:bg-primary-focus hover:text-white":
        variant === "filled",
      "hover:bg-white/80 hover:text-base-color ": variant === "ghost",
    },
    className
  );

  if (to) {
    return (
      <a href={to} className={classes}>
        {children}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  variant: "filled",
};

export default Button;
