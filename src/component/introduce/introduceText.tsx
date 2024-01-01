
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { setCurrent } from '../../modules/homeSlice';
import { useDispatch } from 'react-redux';



export default function IntroduceText() {
    const dispatch = useDispatch();

    const handleChildClick = () => {
        dispatch(setCurrent("About me"));
    };
    return (
        <TextWrapper>
                <h1>- 서가희 -</h1>
                <h2>프론트엔드 개발자 포트폴리오</h2>
            {/* <span>공부가 제일 쉬웠어요.</span>
            <MoveButton>자세히 보기</MoveButton> */}
            <MoveButton onClick={handleChildClick}>자세히 보기</MoveButton>
        </TextWrapper>
    );
}

const TextWrapper = styled.div`
    width: 750px;
    color: white;
    margin:3rem auto;
    text-align: center;
    h1 {
        font-size: 3.5rem;
        font-weight: 700;
    }
    h2 {
        font-size: 2.5rem;
        font-weight: 600;
    }
    /* -webkit-box-sizing: border-box; */
    /* width: 100%;
    max-width: 71.25rem;
    margin: 0 auto;
    padding: 8.5rem 2rem 4rem;
    text-align: center;
    font-weight: 900;
    color:white; */
    /* @media (max-width: 768px) {
        text-align: center;
        margin: 0 auto;
    }
    @media (max-width: 576px) {
        width: 220px;
        min-width: 220px;
        h1 {
            font-size: 2.5rem;
        }
        h2 {
            font-size: 1.5rem;
            line-height: 1;
        }
    } */
`;

// const InfoText = styled.div`
//     /* text-align: center;
//     font-weight: 900;
//     font-size: 2.5rem; */
// `;

const MoveButton = styled.button`
    /* display: block;
    text-align: bottom;
    margin:2.5rem auto;
    padding:1rem;
    border-radius:20px;
    background-color: wheat;
    color:white;
    border: 2px solid wheat;
    font-size:1.3rem;
    font-family: 'GangwonEdu_OTFBoldA'; */
    background: rgba(133, 133, 133, 0.4);
    border: none;
    border-radius: 50%;
    color:white;
    &::before,&::after {
        content: '';
        
    background: #ffffff6b;
    
    margin: auto;
    border-radius: 50%;
    -webkit-animation: waveAnimation 3s infinite linear;
    animation: waveAnimation 3s infinite linear;
    }
`


