import React from "react";
import Card from "../Card";

type FeatureType = {
  icon?: React.ReactNode;
  title: string;
  description: string;
};

type Props = {
  feature: FeatureType;
};

export const Feature: React.FC<Props> = ({ feature }) => {
  return (
    <>
      <div className="py-2 flex gap-2">
        {feature.icon && (
          <div>
            <div className="rounded-full text-4xl bg-primary p-2">
              {feature.icon}
            </div>
          </div>
        )}
        <div className="flex flex-col gap-5">
          <div className="text-xl font-semibold">{feature.title}</div>
          <div className="">{feature.description}</div>
        </div>
      </div>
    </>
  );
};

Feature.defaultProps = {};

export default Feature;
