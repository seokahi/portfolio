
import { TbArrowBigDownLinesFilled } from 'react-icons/tb';
import styled from 'styled-components';

interface Props {
  handleChildClick: () => void;
};

export const MoveButton = ({ handleChildClick }: Props) => {

  const handleClick = () => {
    console.log("흐음");
    handleChildClick(); // handleChildClick 함수 호출
  };
  return (
    <ButtonWrapper>
      <ButtonBox onClick={handleClick} >
        <Text>gg</Text>
        <Circle />
        <Arrow />
      </ButtonBox>
    </ButtonWrapper>
  )
}


const ButtonWrapper =styled.div`
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 3;
            transform: none;
        }
        }
    cursor: pointer;
    animation: fadeIn 5s ease-in-out;
`;
const Text = styled.p`
      font-family: 'Rora';
      color: white;
      opacity: 0.8;
      font-size: 1rem;
      font-weight: 300;
      transition: 300ms;

`;
const ButtonBox = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    left: 50%;
    align-items: center;

    
`;

const Arrow = styled(TbArrowBigDownLinesFilled)`
  z-index: 100;
  font-size: 30px;
  color: #ffffff;
`;

const Circle = styled.div`
  position: absolute;
  top:60%;
  width: 40px;
  height: 40px;

  background: rgba(0, 0, 0, 0.4);
  border: none;
  border-radius: 50%;

  &:before,
  &:after {
    content: '';
    position: absolute;
    
    background: #ffffff6b;
    width: 40px;
    height: 40px;
    margin: auto;
    border-radius: 50%;
    animation: waveAnimation 3s infinite linear;
  }
  &:after {
    opacity: 1;
    animation: waveAnimation 3s 1.5s infinite linear;
  }

@keyframes waveAnimation {
  0% {
    transform: scale(0);
    opacity: 1
  }
  100% {
    transform: scale(2);
    opacity: 0
  }
}
`;
