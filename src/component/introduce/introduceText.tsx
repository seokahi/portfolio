import styled from 'styled-components';
import { setCurrent } from '../../reducer/homeSlice';
import { useDispatch } from 'react-redux';
import { motion } from "framer-motion";
import TextTypingAni from '../../hook/textAnimation';
import { useEffect, useState } from 'react';
import { MoveButton } from '../common/Scroll';


export default function IntroduceText() {
    const dispatch = useDispatch();
    const [showButton, setShowButton] = useState(false);
    const [buttonClicked, setButtonClicked] = useState(false);

    const handleChildClick = () => {
        dispatch(setCurrent("ABOUT"));
        setButtonClicked(true);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowButton(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, [buttonClicked]);

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
            <TextTypingAni text={`KAHI\n PORTFOLIO`} />
            {showButton && <MoveButton onClick={handleChildClick}></MoveButton>}
        </TextWrapper>
    );
}



const TextWrapper = styled(motion.div)`
     font-family: "Lora", serif;
    position: absolute;
    width: 100%;
    top: 37vh;
    pointer-events: none;
    box-sizing: border-box;
`;

