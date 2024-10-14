import React, { Children } from "react";

type Props = {
  children: React.ReactNode;
  title: string;
};

export const Popover: React.FC<Props> = ({ children, title }) => {
  return (
    <>
      <div className="group relative overflow-visible">
        {children}
        <div className="cursor-default mt-2 absolute group-hover:block hidden px-4 py-2 w-auto bg-slate-700 border border-slate-700/50 drop-shadow-2xl rounded">
          {title}
        </div>
      </div>
    </>
  );
};