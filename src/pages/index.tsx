import { useRouter } from 'next/router';
import { NextPage } from 'next';
import Recommendations from './testimonials';
import Projects from './projects';
import Certificates from './certificates';
import Contact from './contact';
import Homepage from './homepage';


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