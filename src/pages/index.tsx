import dynamic from 'next/dynamic';
const Navigation = dynamic(() => import('../../components/Navigation'));
const Greetings = dynamic(() => import('../../features/Greetings'));
const Skills = dynamic(() => import('../../features/Skills'));
const Proficiency = dynamic(() => import('../../features/Proficiency'));
const Education = dynamic(() => import('../../features/Education'));
const Experience = dynamic(() => import('../../features/Experience'));
const Projects = dynamic(() => import('../../features/Projects'));
const GithubProfileCard = dynamic(() => import('../../components/GithubProfileCard'));
import { openSource, showContactUs } from '../../portfolio';
import SEO from '../../components/SEO';
import ContactUs from '../../components/ContactUs';
import { GithubUserType } from '../../types';

export default function Home({
  githubProfileData,
}: {
  githubProfileData: any;
}) {
  return (
    <div>
      <SEO />
      <Navigation />
      <Greetings />
      <Skills />
      <Proficiency />
      <Education />
      <Experience />
      <Projects />
      {showContactUs ? <ContactUs /> : null}
      <GithubProfileCard {...githubProfileData} />
    </div>
  );
}

export async function getStaticProps() {
  const githubProfileData: GithubUserType = await fetch(
    `https://api.github.com/users/${openSource.githubUserName}`
  ).then((res) => res.json());

  return {
    props: { githubProfileData },
  };
}