import styled from 'styled-components';


interface InfoType {
    content:string;
}

interface AboutMeListProps {
  infos: InfoType; 
}
 
export const AboutMeDetailList: React.FC<AboutMeListProps> = ({ infos }) => {
    return (
      <TitleTextWrapper>
        <div>
        <TitleText>{infos.content}</TitleText>
        </div>
      </TitleTextWrapper>
    );
  };

  
const TitleTextWrapper = styled.div`

    display:flex;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: start;
  justify-content: flex-start;

`;

const TitleText = styled.div`

`;
