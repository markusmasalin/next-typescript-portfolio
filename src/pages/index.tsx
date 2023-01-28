import { useRouter } from 'next/router';

import { NextPage } from 'next';

import Homepage from '../pages/Homepage';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import Footer from '../components/footer';
import Recommendations from '../pages/Recommendations';
import Header from '../components/header';
import Certificates from '../pages/Certificates';


const Index: NextPage = () => {
  const router = useRouter();

  console.log('router', router.pathname);

  return (
    <>
      <Header />
      <main>
        {router.pathname === '/projects' && <Projects />}
        {router.pathname === '/certificates' && <Certificates />}
        {router.pathname === '/recommendations' && <Recommendations />}
        {router.pathname === '/contact' && <Contact />}
        {router.pathname === '/' && <Homepage />}
      </main>
      <Footer />
    </>
  );
}

export default Index;