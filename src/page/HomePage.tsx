// import { useEffect, useRef } from 'react';
// import AboutMeContainers from '../container/AboutMeContainer';
// import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import AboutMeContainer from '../container/AboutMeContainer';
import ArchivingContainer from '../container/ArchivingContainer';
import SkillContainer from '../container/SkillContainer';
import Projectontainer from '../container/ProjectsContainer';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { setCurrentHome } from '../modules/homeSlice';
import {RootState} from '../modules/RootReducer';

// import { setCurrent } from '../modules/homeSlice';
export default function HomePage() {
    const location = useLocation();
    console.log(location,"이거뭐야");
    const scrollRef = useRef<Array<React.RefObject<HTMLDivElement>>>([useRef(null), useRef(null), useRef(null), useRef(null)]);
    const current = useSelector((state:RootState)=> state.rootReducer.home.current);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCurrentHome(location.state?.title));
    }, [dispatch, location.state?.title]);

    useEffect(() => { 
        switch (current) {
            case 'Home':
                window.scrollTo(0, 0);
                break;
            case 'About me':
                scrollRef.current[0].current?.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'Skills':
                scrollRef.current[1].current?.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'Archiving':
                scrollRef.current[2].current?.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'Projects':
                scrollRef.current[3].current?.scrollIntoView({ behavior: 'smooth' });
                break;
            default:
                break;
        }
    
        return () => dispatch(setCurrentHome(''));
    }, [current, dispatch]);

    return (
        <HomePageWrapper>
            <AboutMeContainer mref={scrollRef.current[0]} />
            <SkillContainer mref={scrollRef.current[1]} />
            <ArchivingContainer mref={scrollRef.current[2]} />
            <Projectontainer mref={scrollRef.current[3]} />
        </HomePageWrapper>
    );
}

const HomePageWrapper = styled.div`
    /* box-sizing: border-box;
    -webkit-box-sizing: border-box;
    width: 100%;
    max-width: 71.25rem;
    padding: 4rem 2rem;
    margin: 0 auto; */
    display: grid;
    row-gap: 8rem;
    grid-template-columns: 100%;
    padding: 0 2rem;
    @media (max-width: 350px) {
        padding: 0 1rem;
    }
`;

