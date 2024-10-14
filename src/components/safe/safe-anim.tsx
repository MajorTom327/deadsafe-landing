import React from "react";
import Cog from "~/assets/cog.svg";

type Props = {};

export const SafeAnim: React.FC<Props> = ({}) => {
  return (
    <>
      <img src={Cog.src} />
    </>
  );
};