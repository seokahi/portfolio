import styled from 'styled-components';

export default function MyInfoText() {
    return (
        <TextWrapper>
            <InfoText>
            - 서가희 -
            <br/>
            프론트엔드 개발자 포트폴리오
            </InfoText>
            <span>공부가 제일 쉬웠어요.
            </span>
        </TextWrapper>
    );
}

const TextWrapper = styled.div`
    font-family:'DNFBitBitv2';
    -webkit-box-sizing: border-box;
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
    font-family:'DNFBitBitv2';

    font-weight: 400;
    font-size: 4rem;
    color: #fff;
    word-break: keep-all;
`