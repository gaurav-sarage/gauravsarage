import type { NextPage } from 'next';
import { SEO } from '../components';
import {
  About,
  Experience,
  Hero,
  Skills,
  Contact,
  Projects,
  Layout,
} from '../containers';
import { seoData } from '../utils/portfolio';

const Home: NextPage = () => {
  return (
    <>
      <SEO {...seoData} />
      <Layout>
        <Hero />
        <About />
        <Skills />
        <Experience />
        {/* <Projects /> */}
        {/* <Contact /> */}
      </Layout>
    </>
  );
};

export default Home;
