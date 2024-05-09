import styled from 'styled-components';


interface ButtonProps {
  handleOpenModal:() => void; 
}
 
export default function Button({handleOpenModal}:ButtonProps) {
    return (
      <Wrapper>
      <button onClick={() => handleOpenModal()}>자세히 보기</button>
      </Wrapper>
    );
  };

const Wrapper = styled.div`
    max-width: 580px;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.9rem;
    opacity: 1;
    transition: 600ms ease;
    z-index: 10;

button {
  display: inline-block;
    margin-top: 40px;
    padding: 8px 35px;
    font-size: 0.9rem;
    font-weight: 500;
    color: rgb(255, 255, 255);
    background-color:rgba(0, 0, 0, 0.233);
    /* transition: opacity 600ms ease, background-color 400ms ease; */

}
button:hover {
  background-color: rgba(46, 46, 46, 0.055); /* 호버 시 배경색 변경 */
}
`

  