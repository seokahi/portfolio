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
                <Title title='STACKS' />
                    <Skill/>
            </PageTitleBox>
        </AboutMeContainersLayout>
    );
}


const AboutMeContainersLayout = styled.div`
    background-color: rgb(27, 29, 32);
    border-top: 2px solid rgba(99, 99, 99, 0.349);
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
    position: relative;
    max-width: 900px;
    min-height: 100vh;
    padding: 0px 25px;
    padding-bottom: 130px;
    margin: 0 auto;
    box-sizing: border-box;
    /* overflow: visible;
    @media (max-width: 1800px) {
        padding-top: 100px;
    }
    @media (max-width: 576px) {
        padding-top: 50px;
    }*/
`;
