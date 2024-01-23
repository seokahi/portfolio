
import styled, { keyframes } from 'styled-components';
import { setCurrent } from '../../reducer/homeSlice';
import { useDispatch } from 'react-redux';
import { motion } from "framer-motion";
import TextTypingAni from '../../hook/textAnimation';
import { useEffect, useState } from 'react';


export default function IntroduceText() {
    const dispatch = useDispatch();
    const [showButton, setShowButton] = useState(false);
    const handleChildClick = () => {
        dispatch(setCurrent("About me"));
    };
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowButton(true);
        }, 5000); // 5초 후에 버튼 표시
        return () => clearTimeout(timer);
    }, []);
    
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
    /* padding-top: 20%; */
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
`


