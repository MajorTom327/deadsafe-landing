import React from "react";
import Container from "../Container/Container";
import Title from "../Title/Title";
import Feature from "./Feature";

type Props = {};

type FeatureType = {
  title: string;
  description: string;
};

const features: FeatureType[] = [
  {
    title: "Play the game, Access the Vault",
    description:
      "Play the game, get the keys NFT and be the first one to unlock the vault. Protect your refuges, build your camp and investigate the full city to find the keys. The first one to unlock the vault will win the full content of the vault.",
  },
  {
    title: "Buy somes items NFT to help you and fill the vault",
    description:
      "During your journey you will need stuff to survive. Buy some items NFT to help you and fill the vault. A large part of the mint value is put into the vault to increase the value of the gains.",
  },
  {
    title: "Explore the city",
    description:
      "Explore the city, save people and organise the camp, the more you safe people, make the exploration easier to find the keys. Make your team stronger and more efficient to protect from the zombies.",
  },
  {
    title: "Protect your refuges from Big Waves of Zombies",
    description:
      "Big waves of zombies will come to your camp, protect your refuges and your team. Survive to ponctual events and be the last camp standing.",
  },
];

export const Features: React.FC<Props> = ({}) => {
  return (
    <>
      <Container className="py-8">
        <div className="flex flex-col gap-4 divide-y md:divide-none">
          <Title id="features">The Deadly Features</Title>

          {features.map((feature, index) => (
            <Feature
              key={feature.title + feature.description}
              feature={feature}
            />
          ))}
        </div>
      </Container>
    </>
  );
};

Features.defaultProps = {};

export default Features;
