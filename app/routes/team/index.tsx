import React from 'react';
import Card from '~/components/Card';
import Container from '~/components/Container/Container';
import Paralax from '~/components/Paralax';
import background from '~/assets/bg-2.jpeg'

type Props = {
};

export type TeamMember = {
  name: string
  image: string,
  description: string[],
  citation: string,
  twitter: string
}

const teamMembers: TeamMember[] = [
  {
    name: "MajorTom327",
    image: 'https://fr.gravatar.com/userimage/143358375/708f1db20097495533f3a533f4897d15.png?size=200',
    description: [
      "MajorTom327 is a developper. His passion is to build tools and stuff that make people happy. He's a Utopian Nerd. He thinks the most interresting things in web3 isn't making a lot of money, but enjoying good projects and make the world a better place. Line of code after line of code.",
      "That's a passionate who want, before anything else, make a good thing",
      "Founder of the project with the motivation to change the life of one player forever and make the Web3 ecosystem less money-centrist to put the user and the community back in the center of the future application.",
      "So to define him, he truly believe in freedom. He believes the user is important and the power should be in his hands and web3 will make this possible."
    ],
    citation: "Until now, everything is ok.",
    twitter: "https://twitter.com/majortom327"
  }
]

export const Index: React.FC<Props> = ({}) => {
  return (<>
  <Paralax img={background} className="h-[90vh] ">
    <Container className="flex flex-col gap-4 py-8">
      {teamMembers.map((member: TeamMember) => (

      <Card key={member.name} className="bg-primary/80 rounded-2xl">
        <div className='grid md:grid-cols-2'>
          <div className='flex justify-center items-center'>
            <img
              src={member.image}
              alt={`${member.name}'s avatar`}
              className="rounded-xl drop-shadow-xl border border-primary w-72 h-72 md:-mt-16"
            />
          </div>
          <div className='flex flex-col gap-4'>
            <h1 className='text-5xl font-semibold text-center'>{member.name}</h1>
            <div className="flex flex-col gap-4">

              {member.description.map((line) => (
                <p key="line" className='text-xl'>
                  {line}
                </p>
              ))}
            </div>


            <div className="flex flex-col gap-4 mt-4 justify-center items-center">
              <div className="text-3xl font-light italic">
                «{member.citation}»
              </div>
              <div className="text-2xl">
                <a href={member.twitter} target="_blank">
                  {member.name}
                </a>
              </div>

            </div>

          </div>
        </div>

      </Card>
      ))}
    </Container>
  </Paralax>
  </>);
}

Index.defaultProps = {
};

export default Index;
