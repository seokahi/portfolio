import styled from 'styled-components';
import IntroduceText from '../component/introduce/introduceText'
import CanvasComponent from '../component/introduce/Canvas';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrent } from '../reducer/homeSlice';
import { MoveButton } from '../component/common/Scroll';
import { motion } from 'framer-motion';

export default function MyIntroduce() {
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
        <>
            <IntroduceContainer  ref={timerRef}>
                <IntroduceText/>
                {/* <CanvasComponent/> */}
                {showButton && (
                <div>
                    <MoveButton handleChildClick={handleChildClick}></MoveButton>
                </div>
            )}
            </IntroduceContainer>
        </>
    );
}



const IntroduceContainer = styled(motion.div)`
    height: 100vh;
    box-sizing: border-box;

    /* background-image: url;
    background-img: 'https://raw.githubusercontent.com/JulianLaval/canvas-particle-network/master/img/demo-bg.jpg', */
    /* background-size: 400% 400%;
    animation: colorChange 7s ease infinite; */


    /* @keyframes colorChange{
    0%{
        background-position: 0% 50%;
    }
    50%{
        background-position: 100% 50%;
    }
    100%{
        background-position: 0% 50%;
    }
} */

    @media (max-width: 768px) {
        border-bottom-left-radius: 20vw;
        border-bottom-right-radius: 20vw;
    }
    @media (max-width: 576px) {

    }
    
    
`;

