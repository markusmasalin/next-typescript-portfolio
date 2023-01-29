import { useRouter } from 'next/router';
import { NextPage } from 'next';
import Projects from './Projects';
import Certificates from './Certificates';
import Recommendations from './testimonials';
import Contact from './Contact';
import Homepage from './Homepage';


const Index: NextPage = () => {
  const router = useRouter();
  const Page = (() => {
    switch (router.pathname) {
    case '/projects':
      return <Projects />;
    case '/certificates':
      return <Certificates />;
    case '/recommendations':
      return <Recommendations />;
    case '/contact':
      return <Contact />;
    default:
      return <Homepage />;
    }
  })();
  return (
    <main>
      {Page}
    </main>
  );
}

export default Index;