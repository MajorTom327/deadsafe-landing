import React from "react";
import Features from "~/components/Features";
import SeparatorImage from "~/assets/bg-1.jpeg";
import Paralax from "~/components/Paralax";

type Props = {};

export const Index: React.FC<Props> = ({}) => {
  return (
    <>
      <Paralax img={SeparatorImage}>
        <div className="flex flex-col justify-center items-center gap-4 h-full group">
          <div className=" z-30 flex flex-col gap-4 text-4xl bg-dark/40 p-4 group-hover:bg-dark/75 text-center w-full mt-16">
            <div>Run away these features.</div>
            <div>They will try to eat you.</div>
          </div>
        </div>
      </Paralax>
      <Features />
    </>
  );
};

Index.defaultProps = {};

export default Index;
