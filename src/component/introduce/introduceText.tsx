import styled, { keyframes } from 'styled-components';
import { setCurrent } from '../../reducer/homeSlice';
import { useDispatch } from 'react-redux';
import { motion } from "framer-motion";
import TextTypingAni from '../../hook/textAnimation';
import { useEffect, useState } from 'react';

export default function IntroduceText() {
    const dispatch = useDispatch();
    const [showButton, setShowButton] = useState(false);
    const [buttonClicked, setButtonClicked] = useState(false);

    const handleChildClick = () => {
        dispatch(setCurrent("About me"));
        setButtonClicked(true);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowButton(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, [buttonClicked]); // 버튼이 클릭되면 showButton을 다시 false로 설정하기 위해 buttonClicked를 의존성으로 설정

    useEffect(() => {
        if (!showButton && !buttonClicked) {
            const showTimer = setTimeout(() => {
                setShowButton(true);
            }, 5000); // 5초 후에 다시 true로 설정

            return () => clearTimeout(showTimer);
        }
    }, [showButton, buttonClicked]);

    return (
        <TextWrapper>
            <TextTypingAni text={'KAHI \n PORTFOLIO'}/>
            {showButton && <MoveButton onClick={handleChildClick}>저를 좀 더 알고싶으신가요?</MoveButton>}
        </TextWrapper>
    );
}



const TextWrapper = styled(motion.div)`
    width: 750px;
    color: white;
    text-align: center;
    padding-left: 5.5rem;
    box-sizing: border-box;
`

const MoveButton = styled.button`
    border-color: #ffffff;
    border-width: 2px;
    border-style: solid;
    border-radius: 980px;
    background-color: #000000;
    height: 52px;
    padding-left: 1rem;
    padding-right: 1rem;
    cursor: pointer;
    color:white;
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

    animation: fadeIn 1s ease-in-out; 

`;