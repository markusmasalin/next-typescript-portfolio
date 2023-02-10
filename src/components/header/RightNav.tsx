import { NextPage } from 'next';
import styled from 'styled-components';
import NavLink, { NavLinkProps } from './NavLink';
import { CloseIcon } from '../../assets/index'

const NavContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  flex-flow: column;
  z-index: 10;
`;

const NavListContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
`;


const RightNavBar:NextPage = () => {

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
    <NavContainer>
      <CloseIcon/>
      <NavListContainer>
        {navList.map(navlink => {
          return <NavLink key={navlink.name} name={navlink.name} href={navlink.href} />
        })}
      </NavListContainer>
    </NavContainer>
  );
}

export default RightNavBar;