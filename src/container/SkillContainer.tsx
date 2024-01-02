import styled,{ keyframes } from 'styled-components';
import { Title } from '../component/common/PageTitle';
import { RefObject, useEffect, useRef, useState } from 'react';
import { SkillList } from '../component/skill/skillList';

interface SkillContainerProps {
    mref: RefObject<HTMLDivElement>;
}

export default function SkillContainer({ mref }: SkillContainerProps) {

//     const [isInViewport, setIsInViewport] = useState(false);
//   const ref = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     if (!ref.current) return; 
//     const callback = (entries: IntersectionObserverEntry[]) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           setIsInViewport(true);
//         } else {
//           setIsInViewport(false);
//         }
//       });
//     };

//     const options = { root: null, rootMargin: "0px", threshold: 0 };

//     const observer = new IntersectionObserver(callback, options);
//     observer.observe(ref.current);

//     return () => {
//       observer.disconnect();
//     };
//   }, []);


    return (
        <AboutMeContainersLayout ref={mref}>
            <PageTitleBox>
                <Title title='Skills' />
                    <SkillList/>
                {/* <SkillLists className={isInViewport ? "frame-in" : ""} ref={ref}>
                    {skillList.map((info, index) => (
                        <SkillListDetail key={index} info={info} />
                    ))}
                </SkillLists> */}
            </PageTitleBox>
        </AboutMeContainersLayout>
    );
}
// const frameInAnimation = keyframes`
//   0% {
//     opacity: 0;
//     transform: translateX(-100%);
//   }

//   100%{
//     opacity: 1;
//     transform: translateX(0%);
//   }
// `;

// const SkillLists = styled.div`
//     -webkit-box-sizing: border-box;
//     width: 100%;
//     max-width: 59rem;
//     padding: 4rem 2rem;
//     margin: 0 auto;
//     display: flex;
//     display: -ms-flexbox;
//     flex-flow: row wrap;
//     justify-content: space-between;
//     -webkit-box-pack: justify;
//     flex: 1 1 40%;
//     flex-direction: column;

//     display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   height: 100vh;

//   &.frame-in {
//     animation: ${frameInAnimation} 2s forwards;
//   }

// `;

const AboutMeContainersLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 15rem;
    @media (max-width: 1800px) {
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
    }
`;

const PageTitleBox = styled.div`
    font-family: 'GangwonEdu_OTFBoldA';
    padding-top: 150px;
    @media (max-width: 1800px) {
        padding-top: 100px;
    }
    @media (max-width: 576px) {
        padding-top: 50px;
    }
`;
