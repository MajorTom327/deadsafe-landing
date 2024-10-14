import React from "react";
import {Button} from "~/components/button";

import {Container} from "~/components/container";
import {Title} from "../title";

type Props = {};

export const Hero: React.FC<Props> = ({}) => {
  return (
    <>
      <Container className=" py-16">
        <Title id="safe">The safe</Title>
        <div className="grid md:grid-cols-3">
          <div className="md:col-span-2 my-16">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              DeadSafe
            </h1>
            <p className="mt-6 max-w-3xl text-xl text-gray-300">
              DeadSafe is a decentralized game based on a NFT Gameplay.
            </p>
            <p className="mt-6 max-w-3xl text-xl text-gray-300">
              <Button variant="ghost">
                Crack the code and get the treasure of the deads.
              </Button>
            </p>
          </div>

        </div>
      </Container>
    </>
  );
};