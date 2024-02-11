import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import ArchivingContainer from '../container/ArchivingContainer';
import SkillContainer from '../container/SkillContainer';
import ProjectContainer from '../container/ProjectsContainer';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrent } from '../reducer/homeSlice';


import AboutMe from '../container/about';
export default function HomePage() {
    const location = useLocation();
    const scrollRef = useRef<Array<React.RefObject<HTMLDivElement>>>([
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null)
    ]);
    const current = useSelector((state:any) => state.home.current);
    console.log(current);
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
            <AboutMe mref={scrollRef.current[0]} />
            <SkillContainer mref={scrollRef.current[1]} />
            <ProjectContainer mref={scrollRef.current[2]} />
            <ArchivingContainer mref={scrollRef.current[3]} />
        </HomePageWrapper>
    );
}

const HomePageWrapper = styled.div`
    width: 100vw;
    height: 100vh;
`;
