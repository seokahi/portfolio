import styled from 'styled-components';
import NavItems from './NavItems';

export default function Navbar() {
  return (
    <>
      <Wrapper>
        <NavLogo>SKH's Portfolio</NavLogo>
        <NavItems />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  position: fixed;
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
  z-index: 9999; 
  @media (max-width: 1140px) {
    max-width: 67.25rem;
  }

  @media (max-width: 576px) {
    height: auto; 
    flex-direction: column;
  }
`;

const NavLogo = styled.a`
  display: flex;
  align-items: center;
  flex-grow: 1;
  font-weight: 700;
  font-size: 1rem;
  color: wheat;
  line-height: 2rem;
  cursor: pointer;

  &:hover {
    color:#6e6657; /* Increase the font weight on hover */
  }
`;
