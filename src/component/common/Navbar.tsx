import styled from 'styled-components';
import NavItems from './NavItems';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <Wrapper>
        <NavLogo to={'/'}>Front-end Developer</NavLogo>
        <NavItems />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
    /* position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    padding: 1rem 1.5rem;
    box-sizing: border-box;
    display: flex;
    font-weight: 500;
    font-size: 30px;
    z-index: 2000;
    opacity: 1;
    width: 86%;
    margin:0 auto;
    justify-content: space-between; */
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    width: 100vw;
    background: linear-gradient(90deg, #6F84E2 0%, #7BABE5 100%);
    padding: 1rem 10.4167vw;
    border-bottom-left-radius: 10vw;
    border-bottom-right-radius: 10vw;
    box-sizing: border-box;
    box-shadow: rgba(54, 113, 217, 0.25) 0px 4px 4px;
    transition: top 0.5s ease 0s, opacity 0.5s ease 0s, visibility 0.5s ease 0s;
    z-index: 2000;
    opacity: 1;
    display: flex;
    font-size: 1.25rem;
    font-weight: 600;

    @media (max-width: 1140px) {
      max-width: 67.25rem;
    }

    @media (max-width: 576px) {
      flex-direction: column;
    }
`;

const NavLogo = styled(Link)`
    /* border-top: 1px solid #000000;
    width: 19.5%;
    font-size: 1.6rem;
    line-height: 1.2;
    font-weight: 500;
    color:black;
    padding-top:1.2rem;
    margin-bottom: 20px; */
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-flex: 1;
    flex-grow: 1;
    position: relative;
    top: -5px;
    color:white;
    @media (max-width: 1140px) {
      width: 100%;
      margin-bottom: 20px;
    }

    @media (max-width: 576px) {
      flex-direction: column;
    }

`;
