import { useEffect, useRef } from 'react';
import AboutMeContainers from '../container/AboutMeContainer';
import { useDispatch, useSelector } from 'react-redux';
import AboutSKHContainers from '../container/AboutSKH';
import styled from 'styled-components';
import { setCurrent } from '../modules/homeSlice';
export default function HomePage() {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const current = useSelector((state) => state.rootReducer.home.current);
    console.log(current);
    const dispatch = useDispatch();
    useEffect(() => {

        if (scrollRef.current && current === "About SKH") {
            scrollRef.current.scrollIntoView({ behavior: 'smooth' });

        }
    }, [current]);

    useEffect(() => {
        dispatch(setCurrent(current));
    }, [dispatch, current]);

    return (
        <HomePageWrapper>
            {/* AboutMeContainers에 ref 속성으로 scrollRef를 직접 전달 */}
            <AboutMeContainers mref={scrollRef} />
            {/* <AboutSKHContainers mref={scrollRef}/> */}
        </HomePageWrapper>
    );
}
const HomePageWrapper = styled.div`
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    width: 100%;
    max-width: 71.25rem;
    padding: 4rem 2rem;
    margin: 0 auto;
`;

