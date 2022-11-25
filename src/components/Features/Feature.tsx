import React from "react";
import Card from "../Card";

type FeatureType = {
  title: string;
  description: string;
};

type Props = {
  feature: FeatureType;
};

export const Feature: React.FC<Props> = ({ feature }) => {
  return (
    <>
      <div className="grid grid-cols-2 py-2 items-center group">
        <div className="flex flex-col">
          <div className="text-2xl font-semibold text-center group-hover:animate-bounce">
            {feature.title}
          </div>
        </div>
        <div className="p-4 bg-dark/5 group-hover:bg-dark/40 transition cursor-pointer rounded-lg group-hover:drop-shadow-lg transform group-hover:-translate-y-1">
          {feature.description}
        </div>
      </div>
    </>
  );
};

Feature.defaultProps = {};

export default Feature;
