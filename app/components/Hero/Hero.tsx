import React from "react";
import Button from "../Button";
import Card from "../Card";
import Container from "../Container/Container";
import { MoneyFormat } from "../Format";
import Title from "../Title/Title";

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
                Crack thecode and get the treasure of the deads.
              </Button>
            </p>
          </div>

          <Card>
            <div className="flex flex-col gap-1 text-center">
              <div className="text-xl text-gray-300">Current Vault Value:</div>
              <div className="text-3xl font-bold text-gray-200">
                <MoneyFormat value={0} />
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </>
  );
};

Hero.defaultProps = {};

export default Hero;
