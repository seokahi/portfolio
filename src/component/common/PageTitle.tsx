import styled from 'styled-components';
interface titleTYpe{
    title:string;
}
export const Title = (title:titleTYpe) => {
    return (
        <TitleWrapper>
                <TitleText>{title.title}</TitleText>
                </TitleWrapper>
    );
};

const TitleWrapper = styled.div`
    font-family: 'GangwonEdu_OTFBoldA';
    display: flex;
    padding-top: 120px;
    align-items: center;
    justify-content: center;
`;
const TitleText = styled.div`

    font-size: 2.7rem;
    font-weight: 900;
    color: #918e8b;
`;
