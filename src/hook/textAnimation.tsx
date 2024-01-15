import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface AnimationProps {
    text: string;
}

const TextTypingAni = ({ text }: AnimationProps) => {
    const [sequence, setSequence] = useState<string>("");
    const [textCount, setTextCount] = useState<number>(0);
    const [isTypingPaused, setIsTypingPaused] = useState<boolean>(false);

    useEffect(() => {
        const typingInterval = setInterval(() => {
            if (isTypingPaused) {
                clearInterval(typingInterval);
                // setTimeout(() => {
                //     setIsTypingPaused(false);
                //     setTextCount(0);
                //     setSequence("");
                // }, 5000); 
                return;
            }

            if (textCount >= text.length) { 
                setIsTypingPaused(true);
                return;
            }

            const nextChar = text[textCount];
            setSequence((prevSequence) => prevSequence + nextChar);

            if (nextChar === '\n') {
                setTextCount((prevCount) => prevCount + 2);
            } else {
                setTextCount((prevCount) => prevCount + 1);
            }
        }, 200); 

        return () => clearInterval(typingInterval); 
    }, [text, textCount, isTypingPaused]);

    return (
        <Title>
            {sequence}
            <span className='inline-block align-top w-0.5 h-[1em] bg-white ml-1 blink'/>
        </Title>
    );
};

const Title = styled.p`
        font-family: 'PartialSansKR-Regular';
        font-size:90px;
        position: relative;
        @media (max-width: 1075px) {
          font-size:75px;
        }

        @media (max-width: 576px) {
          font-size:30px;
        }
`

export default TextTypingAni;