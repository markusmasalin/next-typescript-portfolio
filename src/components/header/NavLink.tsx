import { NextPage } from 'next';
import styled from 'styled-components';

export type NavLinkProps = {
  name: string;
  href: string
}

const NavLinkContainer = styled.div`
  display: flex;
  text-align: center;  
  padding: 10px;
`;

const StyledNavLink = styled.a`
  display: flex;
  font-size: 20px;
  color: #514e4e;
  text-decoration: none;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    color: #b5b3b3;
  }
`;

const NavLink:NextPage<NavLinkProps> = ({href, name}) => {

  return (
    <NavLinkContainer>
      <StyledNavLink href={href}>
        <span>{name}</span>
      </StyledNavLink>
    </NavLinkContainer>
   

  );
}

export default NavLink;