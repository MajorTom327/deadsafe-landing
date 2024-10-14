import React from "react";

type Props = {
  children: React.ReactNode;
  id?: string;
};

export const Title: React.FC<Props> = ({ children, id }) => {
  return (
    <>
      <div className="text-6xl text-center underline pt-6 pb-2" id={id}>
        {children}
      </div>
    </>
  );
};