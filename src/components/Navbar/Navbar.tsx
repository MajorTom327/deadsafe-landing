import React from "react";
import Button from "../Button";
import Container from "../Container/Container";
import Popover from "../Popover/Popover";

type Props = {};

export const Navbar: React.FC<Props> = ({}) => {
  return (
    <>
      <div className="flex bg-primary text-primary-content md:h-16">
        <Container className="mx-auto flex flex-col md:flex-row justify-between">
          <div className="items-center justify-center md:justify-start text-2xl flex">
            <Button to="/">DeadSafe</Button>
          </div>
          <div className="items-center flex justify-center md:justify-start gap-4">
            <Button to="#safe">The safe</Button>
            <Button ping to="#features">
              Features
            </Button>
            <Popover title="The Bible of the project">
              <Button disabled to="#">
                Necronomicon
              </Button>
            </Popover>
          </div>
        </Container>
      </div>
    </>
  );
};

Navbar.defaultProps = {};

export default Navbar;
