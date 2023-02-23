import { NextPage } from 'next';
import styled from 'styled-components';
import { NavLinkProps } from './NavLink';
import RightNav from './MobileMenu';
import { Hamburger } from '../../assets/index'
import { useState } from 'react';
import DesktopMenu from './DesktopMenu';
import { CloseIcon } from '../../assets/index'

const NavContainer = styled.header`
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
`;


const HamburgerIcon = styled(Hamburger)`
  height: 50px;
  width: 50px;
`
const MobileIconDiv = styled.div`
  @media (min-width: 600px) {
    display: none
  } 
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0;
  padding: 10px;
  z-index: 20;
`

const NavBar:NextPage = () => {

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

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
        <p> Markus Masalin
        </p>
        {mobileNavOpen && <RightNav navList={navList} setNavOpen={setMobileNavOpen} />}

        <DesktopMenu navList={navList}/>
       
        <MobileIconDiv onClick={() => setMobileNavOpen((c => !c))}>
          { mobileNavOpen ? <CloseIcon /> : <HamburgerIcon /> }
        </MobileIconDiv>

       
      </NavContainer>
    </>
  );
}

export default NavBar;