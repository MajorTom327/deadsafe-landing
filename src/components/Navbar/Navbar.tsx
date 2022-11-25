import React from "react";
import Button from "../Button";

type Props = {};

export const Navbar: React.FC<Props> = ({}) => {
  return (
    <>
      <div className="flex bg-primary text-primary-content h-16">
        <div className="container mx-auto flex justify-between">
          <div className="items-center text-lg flex">
            <Button to="/">DeadSafe</Button>
          </div>
          <div className="items-center flex gap-4">
            <Button to="/">Feature</Button>
            <Button to="/">Contract</Button>
          </div>
        </div>
      </div>
    </>
  );
};

Navbar.defaultProps = {};

export default Navbar;
