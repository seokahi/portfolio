import styled from 'styled-components';
import { Title } from '../component/common/PageTitle';
import  { RefObject } from 'react';
import { ArchivingList } from '../resource/string/archiving';
import { ArchivingInfoList } from '../component/archiving/ArchivingDetail';

interface ArchivingContainerProps {
    mref: RefObject<HTMLDivElement>;
  }
  
 export default function ArchivingContainer({ mref }: ArchivingContainerProps) {
    return (
        <AboutMeContainersLayout ref={mref}>
            <PageTitleBox>
                <Title title='Archiving' />
                <ArchivingLists>
                    {ArchivingList.map((info, index) => (
                        <ArchivingInfoList key={index} infos={info} />
                    ))}
                </ArchivingLists>
            </PageTitleBox>
        </AboutMeContainersLayout>
    );
}

const ArchivingLists = styled.div`
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
