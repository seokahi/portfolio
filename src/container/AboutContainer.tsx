import styled,{keyframes} from 'styled-components';
// import { AboutMeList } from '../component/aboutme/AboutmeInfo';
// import { infoList } from '../resource/string/skill';
import { Title } from '../component/common/PageTitle';
import  { MutableRefObject, RefObject, useEffect, useState } from 'react';
// import { Button } from '../component/common/Scroll';
// import { useDispatch } from 'react-redux';
// import { DetailList } from '../resource/string/detail';
// import { AboutMeDetailList } from '../component/aboutme/AboutmeDetail';

// import { setCurrent } from '../reducer/homeSlice';
import MyImg from "../../src/resource/img/ny-img.png";
import  Detail  from '../component/aboutme/Detail';
import Button from '../component/aboutme/Button';
import Modal from '../component/aboutme/Modal';
import {useScrollAnimation} from '../hook/useScrollAnimation';

interface AboutMeContainerProps {
    mref: RefObject<HTMLDivElement>;
  }
  
  export default function AboutMe({ mref }: AboutMeContainerProps) {

    const [isModal,setIsModal] = useState(false);
    // }; 
    const options = {
      rootMargin: '-10% 0px',
  };
  const { ref, isInViewport } = useScrollAnimation(options);
  
  useEffect(()=> {
      console.log(isModal);
    },[isModal])

    const handleOpenModal = () => {
      console.log("gght");
      setIsModal(true);
    }

    const handleCloseModal = () => {
      console.log("gght")
      setIsModal(false);
  }

    return (
      <>
      <AboutMeContainersLayout  ref={mref} >
        <Title   title={"ABOUT"}/>
          <Container ref={ref} className={isInViewport ? "frame-in" : ""}>
            <Detail/>
            <Button  handleOpenModal={handleOpenModal}/>
          </Container>
          {isModal && <Modal handleCloseModal={handleCloseModal} isModal={isModal}/> }
      </AboutMeContainersLayout>
      </>
    );
}
const frameInAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100%{
    opacity: 1;
    transform: translateX(0%);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;


  &.frame-in {
    animation: ${frameInAnimation} 3s forwards;
  }
`;

const AboutBox =  styled.div<{ $view: boolean }>`
        position: relative;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    max-width: 1410px;
    min-height: calc(100vh - 140px);
    margin: 0px auto;
    padding: 70px 25px;
    box-sizing: border-box;
    gap:30px;
    img {
      width: 500px;
    }

    .visible {
      opacity: 1;
      right: 0;
      position: fixed;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5); /* 배경을 반투명하게 만듭니다. */
      z-index: 9999; /* 다른 요소 위에 표시합니다. */
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .back {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: transparent; /* 배경을 투명하게 합니다. */
    }

    .close {
      position: absolute;
      top: 20px;
      right: 20px;
    }

    .aboutcontainer {
      background-color: white;
      padding: 20px;
      border-radius: 10px;
      max-width: 80%;
      max-height: 80%;
      overflow: auto; /* 모달 내용이 넘칠 경우 스크롤 표시합니다. */
    }
`;
const Attbg = styled.div`
position: absolute;
width: 500px;
height: 100%;
min-height: 600px;
background: url(../../src/resource/img/my-img.jpg) 22% 0% no-repeat;
background-size: 900px auto;
background-attachment: fixed;
filter: brightness(80%);
z-index: 0;
`

const Emoji = styled.div`
cursor: pointer;
    position: relative;
    .emoji-box {
      position: absolute;
    background-color: rgb(57, 62, 70);
    padding: 0.5rem 1.5rem;
    font-weight: 800;
    font-size: 1.5rem;
    border-radius: 2rem;
    color: rgb(238, 238, 238);
    left: -1rem;
    top: 1.8rem;
    transform: rotate(-10deg);
    border: 0.2rem solid white;
    }
    img {
      position: absolute;
    left: 4rem;
    top: 4rem;
    width: 190px;
    height: 178px;
    fill: none;
    border-radius: 50%;
    }

    .circle {
      width: 15rem;
    height: 15rem;
    border-radius: 50%;
    background-color: rgb(0, 173, 181);
    }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
// const AboutMeInfos = styled.div`
//     /* -webkit-box-sizing: border-box;
//     max-width: 59rem;
//     padding: 4rem 2rem;
//     margin: 0 auto;
//     display: flex;
//     display: -ms-flexbox;
//     flex-flow: row wrap;
//     justify-content: space-between;
//     -webkit-box-pack: justify;
//     /* flex: 1 1 40%; */
//   /*  flex-direction:column;
//     margin-bottom: 3rem; */
//     /* display:flex;
//     -ms-flex-direction: column;
//     flex-direction: column;
//     -webkit-box-align: center;
//     -ms-flex-align: center;
//     align-items: center;
//     -webkit-box-pack: start;
//   justify-content: flex-start; */
// `;


// const AboutMeLists = styled.div`
//     /* -webkit-box-sizing: border-box;
//     max-width: 59rem;
//     padding: 4rem 2rem;
//     margin: 0 auto;
//     display: flex;
//     display: -ms-flexbox;
//     flex-flow: row wrap;
//     justify-content: space-between;
//     -webkit-box-pack: justify;
//     /* flex: 1 1 40%; */
//    /* flex-direction:column;
//     margin-bottom: 3rem; */

// `;

const AboutMeContainersLayout = styled.div`
/* background-color: rgb(27, 29, 32);
height: 100vh;
color:white;
display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%; */
    margin: 60px auto 0;
    width: 80%;
    height: calc(100vh - 60px);
    position:relative;
    @media screen and (max-width: 480px) {
        height: 100%;
    }
    /* display: flex; */
    /* grid-template-columns: 1fr;
    row-gap: 15rem; */
    /* min-height: calc(100vh - 84px);
  width: fit-content;
  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
background-color: black;

  .about-box {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 7rem;

    @media (max-width: 900px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      ul {
        margin:  2rem 0;
      }
      li {
        width: 80vw;
        margin: auto;
        text-align: center;
        font-size: 1.2rem;
      }
      .strong {
        font-size: 1.3rem;
      }
    }
}
ul {
    font-family: 'HakgyoansimWoojuR';
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
  li {
    width: 30vw;
    font-size: 2rem;
    line-height: 3rem;
    margin: 2rem 8rem 4rem 8rem;
  }
  .strong {
    font-size: 2.5rem;
    font-weight: 800;
  }
  .underline {
    background-image: linear-gradient(90deg, #95DAC1, #fffd7f);
    background-position: bottom;
    background-size: 100% 30%;
    background-repeat: no-repeat;
  }
  .card-container { 
    margin-bottom: 3rem;

    display: flex;
    justify-content: center;
    flex-direction: column;
  } */


    /* @media (max-width: 1800px) {
        row-gap: 20rem;
    }
    @media (max-width: 1200px) {
        row-gap: 15rem;
    }
    @media (max-width: 768px) {
        row-gap: 10rem;
    }
    @media (max-width: 576px) {
        row-gap: 5rem;
    } */
`;
