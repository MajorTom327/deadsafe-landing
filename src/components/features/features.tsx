import React from "react";
import {CiVault} from "react-icons/ci";
import {GiModernCity, GiPayMoney, GiRaiseZombie} from "react-icons/gi";
import {Container} from "~/components/container";
import {Title} from "~/components/title";
import {Feature} from "./feature";

type Props = {};

type FeatureType = {
  icon?: React.ReactNode;
  title: string;
  description: string;
};

const features: FeatureType[] = [
  {
    icon: <CiVault/>,
    title: "Play the game, Access the Vault",
    description:
      "Play the game, get the keys NFT and be the first one to unlock the vault. Protect your refuges, build your camp and investigate the full city to find the keys. The first one to unlock the vault will win the full content of the vault.",
  },
  {
    icon: <GiPayMoney/>,
    title: "Buy somes items NFT to help you and fill the vault",
    description:
      "During your journey you will need stuff to survive. Buy some items as NFT to help you and participate to fill the vault the same way. A large part of the mint value for items is put into the vault and increase the value of the gains.",
  },
  {
    icon: <GiModernCity/>,
    title: "Explore the city",
    description:
      "Explore the city, save people and organise the camp, the more you save people, the more you make the exploration easier to find the keys. Make your team stronger and more efficient to protect your quarantine from the zombies.",
  },
  {
    icon: <GiRaiseZombie/>,
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
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-16">
            {features.map((feature) => (
              <Feature
                key={feature.title + feature.description}
                feature={feature}
              />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};