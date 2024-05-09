import styled, { keyframes } from 'styled-components';
import { useScrollAnimation } from '../../hook/useScrollAnimation';
interface titleTYpe{
    title:string;
}
export const Title = (title:titleTYpe) => {
    const options = {
        rootMargin: '-30% 0px',
    };
    const { ref, isInViewport } = useScrollAnimation(options);
    return (
        <TitleWrapper ref={ref} className={isInViewport ? "frame-in" : ""} >
                <TitleText>{title.title}</TitleText>
        </TitleWrapper>
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
const TitleWrapper = styled.div`
    font-family: 'GangwonEdu_OTFBoldA';
    padding: 80px 0px 120px;
    width: 100%;
    font-family: "Cormorant Garamond", serif;
    font-weight: 600;
    color: rgb(255, 255, 255);
    opacity: 1;
    &.frame-in {
    animation: ${frameInAnimation} 2s forwards;
  }
`;
const TitleText = styled.div`
    font-size: 2.7rem;
    font-weight: 900;
`;
