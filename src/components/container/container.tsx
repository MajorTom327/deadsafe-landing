import classnames from "classnames";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Container: React.FC<Props> = ({ children, className }) => {
  const classes = classnames(className, "container p-6 md:p-auto mx-auto");
  return <div className={classes}>{children}</div>;
};