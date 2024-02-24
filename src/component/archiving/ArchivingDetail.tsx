import styled from 'styled-components';



interface InfoType {
  img: string; 
  archiving: string;
  link: string;
  title: string;
  describe: string[];
}

interface AboutMeListProps {
  infos: InfoType;
}

export const ArchivingInfoList: React.FC<AboutMeListProps> = ({ infos }) => {
  return (
    <TitleTextWrapper>
      <TitleShareImg src={infos.img} alt="share-icon"/>
      <div>
        <TitleText>{infos.archiving}</TitleText>
        <TitleText>{infos.link}</TitleText>
        <TitleText>{infos.title}</TitleText>
        {infos.describe.map((info,index)=> (
          <TitleText key={index}>{info}</TitleText>
        ))}
      </div>
    </TitleTextWrapper>
  );
};

const TitleTextWrapper = styled.div`
  display: flex;
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

// const ArchivingLists = styled.div`
//   -webkit-box-sizing: border-box;
//   width: 100%;
//   max-width: 59rem;
//   padding: 4rem 2rem;
//   margin: 0 auto;
//   display: flex;
//   flex-flow: row wrap;
//   justify-content: space-between;
//   flex: 1 1 40%;
// `;

// const AboutMeContainersLayout = styled.div`
//   display: grid;
//   grid-template-columns: 1fr;
//   row-gap: 15rem;
//   @media (max-width: 1800px) {
//       row-gap: 20rem;
//   }
//   @media (max-width: 1200px) {
//       row-gap: 15rem;
//   }
//   @media (max-width: 768px) {
//       row-gap: 10rem;
//   }
//   @media (max-width: 576px) {
//       row-gap: 5rem;
//   }
// `;

// const PageTitleBox = styled.div`
//   font-family: 'GangwonEdu_OTFBoldA';
//   padding-top: 150px;
//   @media (max-width: 1800px) {
//       padding-top: 100px;
//   }
//   @media (max-width: 576px) {
//       padding-top: 50px;
//   }
// `;
