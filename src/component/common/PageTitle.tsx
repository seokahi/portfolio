import styled from 'styled-components';
import img from "../../resource/img/share-icon.png"
interface titleTYpe{
    title:string;
}
export const Title = (title:titleTYpe) => {
    return (
        <TitleTextWrapper>
                <TitleText>{title.title}</TitleText>
        </TitleTextWrapper>
    );
};

const TitleTextWrapper = styled.div`
    display: table;
    position: relative;
    padding:0px 2rem;
    font-family: 'GangwonEduPowerExtraBoldA';
`;

const TitleText = styled.div`
    font-weight: 400;
    font-size: 3rem;
    line-height: 1.5;
`

const TitleShareImg = styled.img`
    position: absolute;
    top: 50%;
    left: -3rem;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    width: 2rem;
    height: 2rem;
    opacity: .5;
    cursor: pointer;
`