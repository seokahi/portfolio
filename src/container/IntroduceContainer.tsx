import styled from 'styled-components';
import IntroduceText from '../component/introduce/introduceText'

export default function MyIntroduce() {



    return (
        <>
            <IntroduceContainer>
                <ContentsWrapper>
                    <IntroduceText/>
                </ContentsWrapper>
            </IntroduceContainer>
        </>
    );
}



const IntroduceContainer = styled.div`
    width: 100%;
    background: black;
    height: 100vh;
    box-sizing: border-box;
    padding-top: 7rem;
    border-bottom-left-radius: 50vh;
    @media (max-width: 768px) {
        border-bottom-left-radius: 20vw;
        border-bottom-right-radius: 20vw;
    }
    @media (max-width: 576px) {
        padding-top: 8.5rem;
        height: 25rem;
    }
    /* padding-top: 7rem; */
    /* position: relative; */
    /* &::before {
        content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: linear-gradient(180deg,rgba(66, 65, 64, 0.8) 0,rgba(75, 74, 74, 0.8) 90%),url(https://cdn.pixabay.com/photo/2016/11/18/18/37/programming-1836330_960_720.png) 50% no-repeat;
    background: -o-linear-gradient(top,rgba(241, 238, 235, 0.8) 0,rgba(255, 255, 255, 0.8) 90%),url(https://cdn.pixabay.com/photo/2016/11/18/18/37/programming-1836330_960_720.png) 50% no-repeat;
    background-size: cover;
    z-index: -1;
} */
    
`;

const ContentsWrapper = styled.div`
    width: 750px;
    margin: 3rem auto;
    display: flex;
    justify-content: space-between;
    @media (min-height: 700px) {
        margin-top: calc(
            40vh - ${7 * 0.4}rem - ${520 * 0.4}px
        ); // header 부분 제외한 화면 크기의 위에서 40% 위치
    }
    @media (max-width: 768px) {
        width: unset;
    }
    @media (max-width: 576px) {
        margin: 1rem auto;
    }
`;
