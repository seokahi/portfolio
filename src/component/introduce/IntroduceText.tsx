// import styled from 'styled-components';
// import { setCurrent } from '../../reducer/homeSlice';
// import { useDispatch } from 'react-redux';
// import { motion } from "framer-motion";
// import TextTypingAni from '../../hook/textAnimation';
// import { useEffect, useRef, useState } from 'react';
// import { MoveButton } from '../common/Scroll';

// export default function IntroduceText() {
//     const dispatch = useDispatch();
//     const [check,setCheck]= useState(false);
//     const [showButton, setShowButton] = useState(false);
//     const [buttonClicked, setButtonClicked] = useState(false);
//     const timerRef = useRef<HTMLDivElement | null>(null); // 타이머 변수 추가
//     const txtRef = useRef<HTMLDivElement | null>(null); // 텍스트 요소 ref 추가

//     const handleChildClick = () => {
//         console.log("눌렷니");
//         dispatch(setCurrent("ABOUT"));
//         setButtonClicked(true);
//     };

   

//     useEffect(() => {
//         // Intersection Observer를 사용하여 스크롤 감지
//         const callback = (entries: IntersectionObserverEntry[]) => {
//             entries.forEach((entry) => {
//                 if (entry.isIntersecting) {
//                     // 요소가 뷰 포인트에 나타났을 때
//                     setCheck(true);
//                 }
//                 else {
//                     setCheck(false);
//                     setShowButton(false);
//                 }
//             });
//         };

//         const options = {
//             threshold: 0,
//         };

//         if (timerRef.current) {
//             const observer = new IntersectionObserver(callback, options);
//             observer.observe(timerRef.current);

//             return () => {
//                 observer.disconnect();
//             };
//         }
//     }, []);


//     useEffect(() => {
//         // 2초 후에 버튼 보이기
//         const showTimer = setTimeout(() => {
//             setShowButton(true);
//         }, 2000);

//         // 페이지에 돌아왔을 때 타이머 재설정
//         return () => {
//             clearTimeout(showTimer);
//         };
//     }, [check]);

//     return (
//         <TextWrapper ref={timerRef}>
            
//             {showButton && (
//                 <div>
//                     <MoveButton handleChildClick={handleChildClick}></MoveButton>
//                 </div>
//             )}
//         </TextWrapper>
//     );
// }

// const TextWrapper = styled(motion.div)`
//     font-family: "Lora", serif;
//     position: relative;
//     width: 100%;
//     top: 37vh;
//     box-sizing: border-box;
// `;

import styled from 'styled-components';
import { setCurrent } from '../../reducer/homeSlice';
import { useDispatch } from 'react-redux';
import { motion } from "framer-motion";
import TextTypingAni from '../../hook/textAnimation';
import { useEffect, useRef, useState } from 'react';
import { MoveButton } from '../common/Scroll';

export default function IntroduceText() {
    const dispatch = useDispatch();
    const [check,setCheck]= useState(false);
    const [showButton, setShowButton] = useState(false);
    const [buttonClicked, setButtonClicked] = useState(false);
    const timerRef = useRef<HTMLDivElement | null>(null); // 타이머 변수 추가
    const txtRef = useRef<HTMLDivElement | null>(null); // 텍스트 요소 ref 추가

    const handleChildClick = () => {
        console.log("눌렷니");
        dispatch(setCurrent("ABOUT"));
        setButtonClicked(true);
    };

   

    useEffect(() => {
        // Intersection Observer를 사용하여 스크롤 감지
        const callback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // 요소가 뷰 포인트에 나타났을 때
                    setCheck(true);
                }
                else {
                    setCheck(false);
                    setShowButton(false);
                }
            });
        };

        const options = {
            threshold: 0,
        };

        if (timerRef.current) {
            const observer = new IntersectionObserver(callback, options);
            observer.observe(timerRef.current);

            return () => {
                observer.disconnect();
            };
        }
    }, []);


    useEffect(() => {
        // 2초 후에 버튼 보이기
        const showTimer = setTimeout(() => {
            setShowButton(true);
        }, 2000);

        // 페이지에 돌아왔을 때 타이머 재설정
        return () => {
            clearTimeout(showTimer);
        };
    }, [check]);

    return (
        <TextWrapper ref={timerRef}>
            <Text>
                <Line>
                     <p>Developer</p>
                    <p>FrontEnd</p>
                </Line>
                <Line>
                     <p>Developer</p>
                    <p>FrontEnd</p>
                </Line>
                <Line>
                     <p>Developer</p>
                    <p>FrontEnd</p>
                </Line>
                
            </Text>

        </TextWrapper>
    );
}

const TextWrapper = styled(motion.div)`
    font-family: "Lora", serif;
    position: relative;
    width: 100%;
    top: 50%;
    box-sizing: border-box;
`;

const Text = styled.div`


     position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: Arial;
    font-size: 80px;
    font-weight: 900;
    letter-spacing: -2px;
    text-transform: uppercase;
    white-space: nowrap;
    color: transparent;
    -webkit-text-stroke: 2px #eeeeee;
    @keyframes text-anim {
    0% {
        transform: translate(0, 0);
    }
        50% {
        transform: translate(0, -50px);
    }
    100% {
        transform: translate(0, 0);
    }
    }


    p{
  transform: translate(0, -50px);
  animation-timing-function: cubic-bezier(1.000, 0.000, 0.000, 1.000);
  animation: text-anim 4s infinite;
}

`

const Line = styled.div`
  height: 50px;
  overflow: hidden;
  position: relative;

  p {
  margin: 0;
  height: 50px;
  line-height: 50px;
  transition: all 0.5s ease-in-out;
    }
 &:nth-child(odd) {
    transform: skew(60deg, -30deg) scaleY(0.667);
 }

 &:nth-child(even) {
    transform: skew(0deg, -30deg) scaleY(1.333);
 }

 &:nth-child(1) {
    left: 29px;
 }

 &:nth-child(2) {
    left: 58px;
 }

 &:nth-child(3) {
    left: 87px;
 }

 &:nth-child(4) {
    left: 116px;
 }

 &:nth-child(5) {
    left: 145px;
 }


 &:hover p {
    color: #eeeeee;
 }


`