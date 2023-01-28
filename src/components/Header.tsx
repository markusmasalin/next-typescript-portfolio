import { NextPage } from 'next';
import Link from 'next/link';

const Header:NextPage = () => {

  return (
    <header>
      <Link href="/">
        <button>Home</button>
      </Link>
      <Link href="/certificates">
        <button>Certificates</button>
      </Link>
      <Link href="/projects">
        <button>Projects</button>
      </Link>
      <Link href="/recommendations">
        <button>Recommendations</button>
      </Link>
      <Link href="/contact">
        <button>Contact</button>
      </Link>
    </header>
  );
}

export default Header;