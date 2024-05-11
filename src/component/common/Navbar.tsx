import styled from 'styled-components';
import NavItems from './NavItems';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <Header>
      <NavWrapper>
        <NavLogo to={'/'}>Front-end Developer</NavLogo>
        <NavItems />
      </NavWrapper>
    </Header>
  );
}

const Header= styled.div`
    position: fixed;
    width: 100%;
    height: 70px;
    top: 0px;
    box-sizing: border-box;
    z-index: 9999;


`;

const NavWrapper = styled.div`
  font-family: "DM Serif Display", serif;
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    padding: 0 50px;
    margin: 0 auto;
    box-sizing: border-box;
    justify-content: space-between;
    color: white;
    font-weight: 500;
    z-index: 9999;
    /* @media (max-width: 768px) {
        flex-direction: column;
    }

    @media (max-width: 576px) {
      flex-direction: column;
    } */

`;

const NavLogo = styled(Link)`

    display: flex;
    padding-left: 10px;
    align-items: center;
    color:white;
    font-size: 19px;
    font-weight: 800;
    /* @media (max-width: 768px) {
      flex-direction: column;
    } */

`;
