import styled from 'styled-components';
import NavItems from './NavItems';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <Wrapper>
        <NavLogo to={'/home'}>SKH's Portfolio</NavLogo>
        <NavItems />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    width: 100vw;
    padding: 1rem 4.5rem;
    box-sizing: border-box;
    color: white;
    display: flex;
    border-bottom: 1px solid white;
    font-weight: 800;
    font-size: 15px;
    background-color: black;
    border-bottom-left-radius: 10vw;
  border-bottom-right-radius: 10vw;
  z-index: 2000;
  opacity: 1;
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0;
  -webkit-box-sizing: border-box;
  width: 100%;
  max-width: 71.25rem;
  height: 4.5rem;
  padding: 1.25rem 2rem;
  margin: 0 auto;
  display: flex;
  @media (max-width: 1140px) {
    max-width: 67.25rem;
  }

  @media (max-width: 576px) {
    height: auto; 
    flex-direction: column;
  } */
  @media (max-width: 1140px) {
    max-width: 67.25rem;
  }

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const NavLogo = styled(Link)`
  /* display: flex;
  align-items: center;
  flex-grow: 1;
  font-weight: 700;
  font-size: 1rem;
  color: wheat;
  line-height: 2rem;
  cursor: pointer;

  &:hover {
    color:#6e6657; 
  */
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-flex: 1;
    flex-grow: 1;
    position: relative;
     align-items: center;
  flex-grow: 1;
  font-weight: 700;
  font-size: 1rem;
  color: wheat;
  line-height: 2rem;
  cursor: pointer;
`;
