import React from "react";
import { necronomiconLink } from "../../refs/socials";
import Button from "../Button";
import Container from "../Container/Container";
import Popover from "../Popover/Popover";
import logo from "~/assets/logo.png";
import { Link } from "@remix-run/react";

type Props = {};

export const Navbar: React.FC<Props> = ({}) => {
  return (
    <>
      <div className="flex bg-primary text-primary-content md:h-16 z-50">
        <Container className="mx-auto flex flex-col md:flex-row justify-between">
          <div className="items-center justify-center md:justify-start text-2xl flex">
            <Link to="/" className="bg-primary p-2 rounded-full mt-8">
              <img src={logo} alt="The DeadSafe Logo" className="w-auto h-20" />
            </Link>
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

Navbar.defaultProps = {};

export default Navbar;
