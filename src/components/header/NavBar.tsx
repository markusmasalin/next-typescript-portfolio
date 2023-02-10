import { NextPage } from 'next';
import styled from 'styled-components';
import NavLink, { NavLinkProps } from './NavLink';
import RightNav from './RightNav';

const NavContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;


const NavBar:NextPage = () => {

  const navList: NavLinkProps[] = [
    {
      name: 'Home',
      href: '/' 
    },
    {
      name: 'Certificates',
      href: 'certificates' 
    },
    {
      name: 'Projects',
      href: '/projects' 
    },
    {
      name: 'Testimonials',
      href: '/testimonials' 
    },
    {
      name: 'Contact',
      href: '/contact' 
    }
  ]

  return (
    <>
      <NavContainer>
        {navList.map(navlink => {
          return <NavLink key={navlink.name} name={navlink.name} href={navlink.href} />
        })}
     
      </NavContainer>
      <RightNav />
    </>
  );
}

export default NavBar;