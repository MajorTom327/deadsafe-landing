import React from "react";

type Props = {
  children: React.ReactNode;
};

export const Card: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="drop-shadow-lg overflow-hidden rounded-lg border border-dark my-auto bg-dark/50">
        <div className="px-4 py-5 sm:px-6">{children}</div>
      </div>
    </>
  );
};

Card.defaultProps = {};

export default Card;
