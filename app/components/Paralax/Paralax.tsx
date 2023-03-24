import classnames from "classnames";
import React from "react";
import getImageUrl from "~/lib/getImageUrl";

type Props = {
  img: string;
  children?: React.ReactNode;
  className?: string;
};

export const Paralax: React.FC<Props> = ({ img, className, children }) => {
  const classes = classnames(
    "h-[42rem] w-full bg-fixed bg-cover bg-no-repeat bg-center",
    className
  );

  return (
    <>
      <div
        className={classes}
        style={{
          backgroundImage: `url('${getImageUrl(img)}')`,
        }}
      >
        {children}
      </div>
    </>
  );
};

Paralax.defaultProps = {};

export default Paralax;
