import styled from 'styled-components';
import { AboutMeList } from '../component/aboutme/AboutmeDetail';
import { infoList } from '../resource/string/info';
import { Title } from '../component/common/PageTitle';
import  { RefObject } from 'react';
interface AboutMeContainerProps {
    mref: RefObject<HTMLDivElement>;
  }
  
  export default function AboutMe({ mref }: AboutMeContainerProps) {
    return (
        <AboutMeContainersLayout ref={mref}>
            <PageTitleBox>
                <Title title='About Me' />
                <AboutMeLists>
                    {infoList.map((info, index) => (
                        <AboutMeList key={index} infos={info} />
                    ))}
                </AboutMeLists>
            </PageTitleBox>
        </AboutMeContainersLayout>
    );
}

const AboutMeLists = styled.div`
    -webkit-box-sizing: border-box;
    width: 100%;
    max-width: 59rem;
    padding: 4rem 2rem;
    margin: 0 auto;
    display: flex;
    display: -ms-flexbox;
    flex-flow: row wrap;
    justify-content: space-between;
    -webkit-box-pack: justify;
    flex: 1 1 40%;
`;

const AboutMeContainersLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 15rem;
    @media (max-width: 1800px) {
        row-gap: 20rem;
    }
    @media (max-width: 1200px) {
        row-gap: 15rem;
    }
    @media (max-width: 768px) {
        row-gap: 10rem;
    }
    @media (max-width: 576px) {
        row-gap: 5rem;
    }
`;

const PageTitleBox = styled.div`
    font-family: 'GangwonEdu_OTFBoldA';
    padding-top: 150px;
    @media (max-width: 1800px) {
        padding-top: 100px;
    }
    @media (max-width: 576px) {
        padding-top: 50px;
    }
`;
