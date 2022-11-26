import React from "react";
import Container from "../Container/Container";
import { DateTime } from "luxon";
import socials from "../../refs/socials";

type Props = {};

type SocialLink = {
  name: string;
  url: string;
};

const current = DateTime.local().year;
const start = 2022;

const formattedYear =
  start !== current ? `${start} - ${current}` : `${current}`;

const socialLinks: SocialLink[] = [
  { name: "Twitter", url: socials.twitterLink },
  { name: "Discord", url: socials.discordLink },
];

export const Footer: React.FC<Props> = ({}) => {
  return (
    <>
      <div className="bg-primary my-0">
        <Container className="pt-24 pb-12 flex flex-col justify-evenly w-full gap-3">
          <div className="flex gap-8 justify-center w-full">
            {socialLinks.map(({ name, url }) => (
              <a
                key={url}
                href={url}
                target="_blank"
                className="hover:underline"
              >
                {name}
              </a>
            ))}
          </div>
          <div className="flex justify-around w-full text-white/50">
            Copyright &copy; {formattedYear} DeadSafe
          </div>
        </Container>
      </div>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
