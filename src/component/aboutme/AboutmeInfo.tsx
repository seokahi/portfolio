import styled from 'styled-components';


interface InfoType {
  img: string;
  info: string;
  detail: string;
}

interface AboutMeListProps {
  infos: InfoType; 
}

export const AboutMeList: React.FC<AboutMeListProps> = ({ infos }) => {
    return (
      <TitleTextWrapper>
        <TitleShareImg src={infos.img} alt="share-icon"/>
        <div>
        <TitleText className='type'>{infos.info}</TitleText>
        <TitleText>{infos.detail}</TitleText>
        </div>
      </TitleTextWrapper>
    );
  };

  
const TitleTextWrapper = styled.div`
    display: flex;
    display: -ms-flexbox;
    flex-flow: row nowrap;
    width: 300px;
    min-width: 200px;
    margin: 2rem auto 0;
    opacity: .8;
    border-radius: 8px;
    box-shadow:rgba(89, 91, 92, 0.2) 0px 8px 24px;
    padding:26px;
`;

const TitleText = styled.div`

&.type {
  font-weight: 700;
}
    margin-bottom: .5rem;

    font-size: 1.25rem;
`;

const TitleShareImg = styled.img`
    width: 2rem;
    min-width: 2rem;
    height: 2rem;
    margin-top: .2rem;
    margin-right: 2rem;
`;