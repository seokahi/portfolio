// // import React, { useEffect, useRef } from 'react';
// // import styled from 'styled-components';

// // import ArchivingContainer from '../container/ArchivingContainer';
// // import SkillContainer from '../container/SkillContainer';
// // import ProjectContainer from '../container/ProjectsContainer';
// // import { useLocation } from 'react-router-dom';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { setCurrent } from '../reducer/homeSlice';


// // import AboutMe from '../container/about';
// // import MyIntroduce from '../container/IntroduceContainer';
// // export default function HomePage() {
// //     const location = useLocation();
// //     const scrollRef = useRef<Array<React.RefObject<HTMLDivElement>>>([
// //         useRef(null),
// //         useRef(null),
// //         useRef(null),
// //         useRef(null)
// //     ]);
// //     const current = useSelector((state:any) => state.home.current);
// //     console.log(current);
// //     const dispatch = useDispatch();

// //     useEffect(() => {
// //         dispatch(setCurrent(location.state?.title));
// //     }, [dispatch, location.state?.title]);

// //     useEffect(() => {
// //         const returnFunction = () => {
// //             dispatch(setCurrent(""));
// //         }
// //         switch (current) {
// //             case 'INTRO':
// //                 window.scrollTo(0, 0);
// //                 break;
// //             case 'ABOUT':
// //                     scrollRef.current[0]?.current?.scrollIntoView({ behavior: 'smooth' });
// //                 break;
// //             case 'STACKS':
// //                     scrollRef.current[1]?.current?.scrollIntoView({ behavior: 'smooth' });
// //                 break;
// //             case 'WORKS':
// //                     scrollRef.current[2]?.current?.scrollIntoView({ behavior: 'smooth' });
// //                 break;
// //             case 'CONTACT':
// //                     scrollRef.current[3]?.current?.scrollIntoView({ behavior: 'smooth' });
// //                 break;
// //             default:
// //                 break;
// //         }

// //         return returnFunction;
// //     }, [current, dispatch]);

// //     return (
// //         <HomePageWrapper>
// //             <MyIntroduce/>
// //             <AboutMe mref={scrollRef.current[0]} />
// //             <SkillContainer mref={scrollRef.current[1]} />
// //             <ProjectContainer mref={scrollRef.current[2]} />
// //             <ArchivingContainer mref={scrollRef.current[3]} />
// //         </HomePageWrapper>
// //     );
// // }

// // const HomePageWrapper = styled.div`
// //     /* width: 100vw;
// //     height: 100vh; */
// // `;

// import React, { useEffect, useRef, useState } from 'react';
// import styled from 'styled-components';
// import { useLocation } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { setCurrent } from '../reducer/homeSlice';
// import AboutMe from '../container/about';
// import MyIntroduce from '../container/IntroduceContainer';
// import SkillContainer from '../container/SkillContainer';
// import ProjectContainer from '../container/ProjectsContainer';
// import ArchivingContainer from '../container/ArchivingContainer';

// export default function HomePage() {
//     const location = useLocation();
//     const scrollRef = useRef<Array<React.RefObject<HTMLDivElement>>>([
//         useRef(null),
//         useRef(null),
//         useRef(null),
//         useRef(null)
//     ]);
//     const [showScroll, setShowScroll] = useState(false); // 스크롤 허용 여부 상태
//     const current = useSelector((state:any) => state.home.current);
//     console.log(current);
//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(setCurrent(location.state?.title));
//     }, [dispatch, location.state?.title]);

//     useEffect(() => {
//         const returnFunction = () => {
//             dispatch(setCurrent(""));
//         }
//         switch (current) {
//             case 'INTRO':
//                 window.scrollTo(0, 0);
//                 break;
//             case 'ABOUT':
//                 scrollRef.current[0]?.current?.scrollIntoView({ behavior: 'smooth' });
//                 break;
//             case 'STACKS':
//                 scrollRef.current[1]?.current?.scrollIntoView({ behavior: 'smooth' });
//                 break;
//             case 'WORKS':
//                 scrollRef.current[2]?.current?.scrollIntoView({ behavior: 'smooth' });
//                 break;
//             case 'CONTACT':
//                 scrollRef.current[3]?.current?.scrollIntoView({ behavior: 'smooth' });
//                 break;
//             default:
//                 break;
//         }

//         return returnFunction;
//     }, [current, dispatch]);

//     // Intersection Observer를 이용하여 스크롤 허용 여부 변경
//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 setShowScroll(entry.isIntersecting);
//             },
//             { threshold: 0.5 } // 요소가 50% 이상 화면에 보일 때 감지
//         );

//         observer.observe(scrollRef.current[0]?.current); // MyIntroduce 컴포넌트를 감시

//         return () => {
//             observer.disconnect();
//         };
//     }, []);

//     return (
//         <HomePageWrapper>
//             <MyIntroduce/>
//             <AboutMe mref={scrollRef.current[0]} />
//             <SkillContainer mref={scrollRef.current[1]} />
//             <ProjectContainer mref={scrollRef.current[2]} />
//             <ArchivingContainer mref={scrollRef.current[3]} />
//             {/* 스크롤 허용 상태일 때만 스크롤 가능 */}
//             {showScroll && <ScrollIndicator>Scroll Down</ScrollIndicator>}
//         </HomePageWrapper>
//     );
// }

// const HomePageWrapper = styled.div`
//     /* width: 100vw;
//     height: 100vh; */
// `;

// const ScrollIndicator = styled.div`
//     position: fixed;
//     bottom: 20px;
//     left: 50%;
//     transform: translateX(-50%);
//     font-size: 14px;
//     color: white;
//     background-color: rgba(0, 0, 0, 0.5);
//     padding: 8px 16px;
//     border-radius: 20px;
//     z-index: 1000;
// `;

// // 나머지 부분은 그대로 유지

import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrent } from '../reducer/homeSlice';
import AboutMe from '../container/AboutContainer';
import MyIntroduce from '../container/IntroduceContainer';
import SkillContainer from '../container/SkillContainer';
import ProjectContainer from '../container/ProjectsContainer';
import ArchivingContainer from '../container/ArchivingContainer';
import HeaderContainer from '../container/HeaderContainer';

interface ScrollRefType extends Array<React.RefObject<HTMLDivElement>> {}

const HomePage: React.FC = () => {
    const location = useLocation();
    const scrollRef = useRef<ScrollRefType>([
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null)
    ]);
    const current: string = useSelector((state: any) => state.home.current);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCurrent(location.state?.title));
    }, [dispatch, location.state?.title]);

    useEffect(() => {
        const returnFunction = () => {
            dispatch(setCurrent(""));
        }
        switch (current) {
            case 'INTRO':
                window.scrollTo(0, 0);
                break;
            case 'ABOUT':
                scrollRef.current[0]?.current?.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'STACKS':
                scrollRef.current[1]?.current?.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'WORKS':
                scrollRef.current[2]?.current?.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'CONTACT':
                scrollRef.current[3]?.current?.scrollIntoView({ behavior: 'smooth' });
                break;
            default:
                break;
        }

        return returnFunction;
    }, [current, dispatch]);

    return (
        <HomePageWrapper>
            {/* <HeaderContainer/> */}
            <MyIntroduce/>
            <AboutMe mref={scrollRef.current[0]} />
            <SkillContainer mref={scrollRef.current[1]} />
            <ProjectContainer mref={scrollRef.current[2]} />
            <ArchivingContainer mref={scrollRef.current[3]} />
        </HomePageWrapper>
    );
}

const HomePageWrapper = styled.div`
    /* width: 100vw;
    height: 100vh; */
`;

export default HomePage;
