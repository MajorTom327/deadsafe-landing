import classNames from "classnames";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string
};

export const Card: React.FC<Props> = ({ children, className }) => {
  const classes = classNames("drop-shadow-lg overflow-hidden rounded-lg border border-dark my-auto bg-dark/30", className)
  return (
    <>
      <div className={classes}>
        <div className="px-4 py-5 sm:px-6">{children}</div>
      </div>
    </>
  );
};

Card.defaultProps = {};

export default Card;
