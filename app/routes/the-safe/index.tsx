import React from "react";
import Hero from "~/components/Hero";
import Paralax from "~/components/Paralax";
import SafeImage from "~/assets/safe.jpeg";
import Safe from "~/components/Safe";

type Props = {};

export const Index: React.FC<Props> = ({}) => {
  return (
    <>
      <Paralax img={SafeImage} className="h-[32rem] group">
        <div className="flex flex-col justify-center items-center gap-4 h-full ">
          <div className=" flex flex-col gap-4 text-4xl bg-dark/40 p-4 group-hover:bg-dark/75 text-center w-full mt-16">
            <div>Keep your keys safe.</div>
            <div>Stay alive</div>
          </div>
        </div>
      </Paralax>
      <Safe />
    </>
  );
};

Index.defaultProps = {};

export default Index;
