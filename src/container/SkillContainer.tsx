import styled from 'styled-components';
import { Title } from '../component/common/PageTitle';
import { RefObject } from 'react';
import Skill from '../component/skill/skillList';


interface SkillContainerProps {
    mref: RefObject<HTMLDivElement>;
}

export default function SkillContainer({ mref }: SkillContainerProps) {




    return (
        <AboutMeContainersLayout ref={mref}>
            <PageTitleBox>
                <Title title='Skills' />
                    <Skill/>
            </PageTitleBox>
        </AboutMeContainersLayout>
    );
}


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
