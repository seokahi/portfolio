import  { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

interface AnimationProps {
    text: string;
}

const TextTypingAni = ({ text }: AnimationProps) => {
    const [sequence, setSequence] = useState<string>("");
    const [textCount, setTextCount] = useState<number>(0);
    const [isTypingPaused, setIsTypingPaused] = useState<boolean>(false);
    const txtRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const callback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setTextCount(0);
                    setSequence("");
                    setIsTypingPaused(false);
                }
            });
        };

        const options = {
            threshold: 0,
        };

        if (txtRef.current) {
            const observer = new IntersectionObserver(callback, options);
            observer.observe(txtRef.current);

            return () => {
                observer.disconnect();
            };
        }
    }, []);

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
        <Title ref={txtRef}>
            {sequence}
        </Title>
    );
};

const Title = styled.h1`
     font-family: "DM Serif Display", serif;
    font-size: 100px;
      text-align: center;
      color: white;
      white-space: pre-line; 

      @media  (max-width: 480px) {

        font-size: 3rem;

}
    @media  (max-width: 768px) {

            font-size: 3.375rem;

    }
    @media (max-width: 992px) {

            font-size: 5rem;

    }
    @media (max-width: 1200px) {

            font-size: 5.625rem;

    }

`;

export default TextTypingAni;