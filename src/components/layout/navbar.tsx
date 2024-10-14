import React from "react";
import logo from "~/assets/logo.png";
import {necronomiconLink} from "~/refs/socials";
import {Button} from "~/components/button";
import {Container} from "~/components/container";

type Props = {};

export const Navbar: React.FC<Props> = ({}) => {
  return (
    <>
      <div className="flex bg-primary text-primary-content md:h-16 z-50">
        <Container className="mx-auto flex flex-col md:flex-row justify-between">
          <div className="items-center justify-center md:justify-start text-2xl flex">
            <a href="/" className="bg-primary p-2 rounded-full mt-8">
              <img
                src={logo.src}
                alt="The DeadSafe Logo"
                className="w-auto h-20"
              />
            </a>
          </div>
          <div className="items-center flex justify-center md:justify-start gap-4">
            <Button to="/the-safe">The safe</Button>
            <Button ping to="/features">
              Features
            </Button>
            <Button to="/team">Team</Button>
            <Button to={necronomiconLink}>Necronomicon</Button>
          </div>
        </Container>
      </div>
    </>
  );
};