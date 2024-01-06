
import styled from 'styled-components';
import { setCurrent } from '../../reducer/homeSlice';
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
`

const MoveButton = styled.button`

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


