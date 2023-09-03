import styled from 'styled-components';
interface titleTYpe{
    title:string;
}
export const AboutMeTitle = (title:titleTYpe) => {
    return (
        <TitleTextWrap>
                {title.title}
        </TitleTextWrap>
    );
};

const TitleTextWrap = styled.div`
    text-transform: uppercase;
`;
