import styled from 'styled-components';


interface InfoType {
   skill: string;
    img:{img:string}[];
}

interface SkillListProps {
    info: InfoType;
}
 
export const SkillListDetail: React.FC<SkillListProps> = ({ info }) => {
    return (
        <TitleTextWrapper>
        <TitleText>{info.skill}</TitleText>
        <SkillImages>
            {info.img.map((image, index) => (
                <TitleShareImg key={index} src={image.img} alt={`Skill Image ${index}`} />
            ))}
        </SkillImages>
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
    transform: perspective(2500px) rotateY(0);
`;

const TitleText = styled.div`

    /* 스타일 */
`;

const SkillImages = styled.div`
    /* 스타일 */
`;

const TitleShareImg = styled.img`
width: 30px;
height: 30px;
    /* 스타일 */
`;