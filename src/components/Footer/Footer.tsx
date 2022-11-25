import React from "react";
import Container from "../Container/Container";

type Props = {};

export const Footer: React.FC<Props> = ({}) => {
  return (
    <>
      <div className="bg-primary my-0">
        <Container className="pt-24 pb-12 flex flex-col justify-evenly w-full gap-3">
          <div className="flex gap-8 justify-center w-full">
            <a href="#" className="hover:underline">
              Facebook
            </a>
            <a href="#" className="hover:underline">
              Twitter
            </a>
            <a href="#" className="hover:underline">
              Discord
            </a>
          </div>
          <div className="flex justify-around w-full text-white/50">
            Copyright &copy; 2022 DeadSafe
          </div>
        </Container>
      </div>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
