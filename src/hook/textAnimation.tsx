import  { useEffect, useState } from 'react';
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
        }, 100); 

        return () => clearInterval(typingInterval); 
    }, [text, textCount, isTypingPaused]);

    return (
        <Title>
            {sequence}
        </Title>
    );
};

const Title = styled.h1`
        font-family: 'PartialSansKR-Regular';
        font-size:90px;
        font-weight: 900;
        text-align: center;
        color: white;
        @media (max-width: 1075px) {
          font-size:75px;
        }

        @media (max-width: 576px) {
          font-size:30px;
        }
`;

export default TextTypingAni;