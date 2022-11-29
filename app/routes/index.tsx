import Button from "~/components/Button";
import Hero from "~/components/Hero";
import Paralax from "~/components/Paralax";
import socials from "~/refs/socials";

import HeaderImage from "~/assets/bg-2.jpeg";

export default function Index() {
  return (
    <>
      <Paralax img={HeaderImage}>
        <div className="flex flex-col justify-center gap-4 h-full group">
          <div className="bg-dark/30 text-4xl p-4 group-hover:bg-dark/70 transition w-full text-center">
            Dead are coming...
          </div>
          <div className="bg-dark/30 text-4xl p-4 group-hover:bg-dark/70 transition w-full text-center">
            The Vault is waiting.
          </div>
          <div className="flex justify-center pt-16">
            <Button className="text-2xl mx-4" to={socials.discordLink}>
              Join the Discord Server
            </Button>
          </div>
        </div>
      </Paralax>
    </>
  );
}
