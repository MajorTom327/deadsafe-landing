import React from "react";

type Props = {};

export const Ping: React.FC<Props> = ({}) => {
  return (
    <>
      <span className="top-1 right-0 absolute">
        <span className="relative  flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
        </span>
      </span>
    </>
  );
};

Ping.defaultProps = {};

export default Ping;
