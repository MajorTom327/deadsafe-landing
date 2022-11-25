import classnames from "classnames";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Container: React.FC<Props> = ({ children, className }) => {
  const classes = classnames(className, "container mx-auto");
  return <div className={classes}>{children}</div>;
};

Container.defaultProps = {};

export default Container;
