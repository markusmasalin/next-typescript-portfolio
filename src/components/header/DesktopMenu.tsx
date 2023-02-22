import { NextPage } from 'next';
import styled from 'styled-components';
import NavLink, { NavLinkProps } from './NavLink';

type DesktopMenuProps = {
  navList: NavLinkProps[]
}


const NavLinkListContainer = styled.div`
  justify-content: space-between;
  display: flex;
  @media (max-width: 599px) {
    display: none
  }
`

const DesktopMenu:NextPage<DesktopMenuProps> = ({ navList}) => {
  return (
    <NavLinkListContainer>
      {navList.map(navlink => {
        return <NavLink key={navlink.name} name={navlink.name} href={navlink.href} />
      })}
    </NavLinkListContainer>

  );
}

export default DesktopMenu;