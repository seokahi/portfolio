import styled, { keyframes } from 'styled-components';


import { skillList } from '../../resource/string/image';
import { useEffect, useRef, useState } from 'react';
import { SkillListDetail } from './skillListDetail';



 
export const SkillList = () => {
    const [isInViewport, setIsInViewport] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return; 
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInViewport(true);
        } else {
          setIsInViewport(false);
        }
      });
    };

    const options = { root: null, rootMargin: "0px", threshold: 0 };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);


    return (
        <SkillLists className={isInViewport ? "frame-in" : ""} ref={ref}>
            {skillList.map((info, index) => (
                <SkillListDetail key={index} info={info} />
            ))}
        </SkillLists>
    );
};

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

  
  const SkillLists = styled.div`
  -webkit-box-sizing: border-box;
  width: 100%;
  max-width: 59rem;
  padding: 4rem 2rem;
  margin: 0 auto;
  display: flex;
  display: -ms-flexbox;
  flex-flow: row wrap;
  justify-content: space-between;
  -webkit-box-pack: justify;
  flex: 1 1 40%;
  flex-direction: column;

  display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 100vh;

&.frame-in {
  animation: ${frameInAnimation} 2s forwards;
}

`;




