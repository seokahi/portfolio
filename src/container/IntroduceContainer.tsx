import styled from 'styled-components';
import IntroduceText from '../component/introduce/introduceText'

export default function MyIntroduce() {



    return (
        <>
            <IntroduceContainer>
                    <IntroduceText/>
            </IntroduceContainer>
        </>
    );
}



const IntroduceContainer = styled.div`
    position:relative;
    width: 100%;

    height: 100vh;
    box-sizing: border-box;
    padding-top: 70px;
    background: linear-gradient(-45deg, #040A26, #918e8b, #040A26);
    background-size: 400% 400%;
    animation: colorChange 7s ease infinite;


    @keyframes colorChange{
    0%{
        background-position: 0% 50%;
    }
    50%{
        background-position: 100% 50%;
    }
    100%{
        background-position: 0% 50%;
    }
}

    @media (max-width: 768px) {
        border-bottom-left-radius: 20vw;
        border-bottom-right-radius: 20vw;
    }
    @media (max-width: 576px) {
        padding-top: 8.5rem;
        height: 25rem;
    }
    
    
`;

// const ContentsWrapper = styled.div`
//     width: 750px;
//     margin: 3rem auto;
//     display: flex;
//     justify-content: space-between;
//     @media (min-height: 700px) {
//         margin-top: calc(
//             40vh - ${7 * 0.4}rem - ${520 * 0.4}px
//         ); // header 부분 제외한 화면 크기의 위에서 40% 위치
//     }
//     @media (max-width: 768px) {
//         width: unset;
//     }
//     @media (max-width: 576px) {
//         margin: 1rem auto;
//     }
// `;
