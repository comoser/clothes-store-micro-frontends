import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import AsyncLoader from '../async_loader';

const Wrapper = React.lazy(() => import('shared/Wrapper'));

const Navbar = () => {
  return (
    <Nav>
      <AsyncLoader>
        <Wrapper>
          <NavbarLayout>
            <Logo>
              <img src={logo} height="90" width="90" />
            </Logo>
            <LinksWrapper>
              <StyledNavbarLink to="/items">Clothes</StyledNavbarLink>
              <StyledNavbarLink to="/blog">Blog</StyledNavbarLink>
            </LinksWrapper>
          </NavbarLayout>
        </Wrapper>
      </AsyncLoader>
    </Nav>
  );
};

const Nav = styled.nav`
  height: 100px;
  background-color: #F0D030;
`;

const NavbarLayout = styled.div`
  height: 100px;
  display: flex;
  flex-direction: row;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const LinksWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const StyledNavbarLink = styled(Link)`
  position: relative;
  color: #F03B93;
  font-size: 1.5rem;
  margin-right: 30px;
  text-decoration: none;
  &:after {
    content: ' ';
    transition: opacity 200ms;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -15%;
    opacity: 0;
    height: 3px;
    width: 80%;
    background-color: #F03B93;
  }
  &:hover {
    &:after {
      opacity: 1;
    }
  }
`;

export default Navbar;
