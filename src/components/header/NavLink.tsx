import { NextPage } from 'next';
import styled from 'styled-components';

export type NavLinkProps = {
  name: string;
  href: string
}

const StyledNavLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-right: 20px;

  &:hover {
    color: #ccc;
  }
`;

const NavLink:NextPage<NavLinkProps> = ({href, name}) => {

  return (
    <StyledNavLink href={href}>
      <button>{name}</button>
    </StyledNavLink>

  );
}

export default NavLink;