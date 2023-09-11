import styled from 'styled-components';


interface InfoType {
  img: string;
  info: string;
  detail: string;
}

interface AboutMeListProps {
  infos: InfoType; // props 이름을 infos로 변경
}
 
export const AboutMeList: React.FC<AboutMeListProps> = ({ infos }) => {
    return (
      <TitleTextWrapper>
        <TitleShareImg src={infos.img} alt="share-icon"/>
        <div>
        <TitleText>{infos.info}</TitleText>
        <TitleText>{infos.detail}</TitleText>
        </div>
      </TitleTextWrapper>
    );
  };

  
const TitleTextWrapper = styled.div`
    display: flex;
    display: -ms-flexbox;
    flex-flow: row nowrap;
    width: 100%;
    max-width: 14rem;
    margin: 0 auto;
    opacity: .8;
`;

const TitleText = styled.div`
    margin-bottom: .5rem;
    font-weight: 700;
    font-size: 1.25rem;
`

const TitleShareImg = styled.img`
 width: 2rem;
    min-width: 2rem;
    height: 2rem;
    margin-top: .2rem;
    margin-right: 2rem;
`