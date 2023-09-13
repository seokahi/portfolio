import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setCurrent } from '../../modules/homeSlice';


export default function MyInfoText() {
    const dispatch = useDispatch();

    const handleTouch = () => {
        dispatch(setCurrent("About SKH"));
    }


    return (
        <TextWrapper>
            <InfoText>
                - 서가희 -
                <br/>
                프론트엔드 개발자 포트폴리오
            </InfoText>
            <span>공부가 제일 쉬웠어요.</span>
            <MoveButton onClick={handleTouch}>자세히 보기</MoveButton>
        </TextWrapper>
    );
}

const TextWrapper = styled.div`
    /* -webkit-box-sizing: border-box; */
    width: 100%;
    max-width: 71.25rem;
    margin: 0 auto;
    padding: 8.5rem 2rem 4rem;
    text-align: center;
    font-weight: 900;
    @media (max-width: 768px) {
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
    }
`;

const InfoText = styled.div`
    text-align: center;
    font-weight: 900;
    font-size: 2.5rem;
`;

const MoveButton = styled.button`
    display: block;
    text-align: bottom;
    margin:2.5rem auto;
    padding:1rem;
    border-radius:20px;
    background-color: wheat;
    color:white;
    border: 2px solid wheat;
    font-size:1.3rem;
    font-family: 'GangwonEdu_OTFBoldA';

`