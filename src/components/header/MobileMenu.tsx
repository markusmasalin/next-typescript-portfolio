import { NextPage } from 'next';
import styled from 'styled-components';
import NavLink, { NavLinkProps } from './NavLink';
import { Dispatch, SetStateAction } from 'react';

type MobileMenuProps = {
  setNavOpen: Dispatch<SetStateAction<boolean>>
  navList: NavLinkProps[]
}

const NavContainer = styled.div`
   @media (min-width: 600px) {
    display: none
  } 
  z-index: 10;
  background-color: #ebebeb;;
  display: flex;
  position: absolute;
  justify-content: center;
  right: 0px;
  top: 0px;
  bottom: 0px;
  width: 40%;
  padding: 40px 20px;
`;

const NavListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;



const MobileMenu:NextPage<MobileMenuProps> = ({ navList}) => {

  return (
    <NavContainer>
      
      <NavListContainer>
        {navList.map(navlink => {
          return <NavLink key={navlink.name} name={navlink.name} href={navlink.href} />
        })}
      </NavListContainer>
    </NavContainer>
  );
}

export default MobileMenu;