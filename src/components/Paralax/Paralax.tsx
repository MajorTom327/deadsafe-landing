import React from "react";
import Button from "../Button";

type Props = {
  img: string;
};

export const Paralax: React.FC<Props> = ({ img }) => {
  return (
    <>
      <div
        className="h-[42rem] w-full bg-fixed bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url('${img}')` }}
      ></div>
    </>
  );
};

Paralax.defaultProps = {};

export default Paralax;
