import styled from 'styled-components';


interface InfoType {
    content:string;
}

interface AboutMeListProps {
  infos: InfoType; // props 이름을 infos로 변경
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
    /* display: flex;
    display: -ms-flexbox;
    flex-flow: row nowrap;
    width: 100%;
    max-width: 14rem;
    margin: 0 auto;
    opacity: .8;
    border-radius: 8px;
    box-shadow:rgba(89, 91, 92, 0.2) 0px 8px 24px;
    margin-bottom: 3rem; */
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
    /* margin-bottom: .5rem;
    font-weight: 700;
    font-size: 1.25rem; */
`

const TitleShareImg = styled.img`
 /* width: 2rem;
    min-width: 2rem;
    height: 2rem;
    margin-top: .2rem;
    margin-right: 2rem; */
`