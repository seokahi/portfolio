import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import ArchivingContainer from '../container/ArchivingContainer';
import SkillContainer from '../container/SkillContainer';
import ProjectContainer from '../container/ProjectsContainer';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrent } from '../modules/homeSlice';
import { RootState } from '../modules/RootReducer';

import AboutMe from '../container/AboutmeContainer';
export default function HomePage() {
    const location = useLocation();
    const scrollRef = useRef<Array<React.RefObject<HTMLDivElement>>>([
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null)
    ]);
    const current = useSelector((state: RootState) => state.home.current);
    console.log(current);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCurrent(location.state?.title));
    }, [dispatch, location.state?.title]);

    useEffect(() => {
        const returnFunction = () => {
            dispatch(setCurrent('null'));
        }
        switch (current) {
            case 'Home':
                window.scrollTo(0, 0);
                break;
            case 'About me':
                    scrollRef.current[0]?.current?.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'Skills':
                    scrollRef.current[1]?.current?.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'Archiving':
                    scrollRef.current[2]?.current?.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'Projects':
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
            <ArchivingContainer mref={scrollRef.current[2]} />
            <ProjectContainer mref={scrollRef.current[3]} />
        </HomePageWrapper>
    );
}

const HomePageWrapper = styled.div`
    display: grid;
    row-gap: 8rem;
    grid-template-columns: 100%;
    padding: 0 2rem;

    @media (max-width: 350px) {
        padding: 0 1rem;
    }
`;
