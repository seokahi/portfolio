
import styled from 'styled-components';
import { AboutMeTitle } from '../component/home/AboutMeTitle';

export default function AboutUsContainer() {
    return (
        <AboutUsContainerLayout>
            <div>
                <PageTitleBox>
                    <AboutMeTitle title='About ME' />
                </PageTitleBox>
            </div>
        </AboutUsContainerLayout>
    );
}

const AboutUsContainerLayout = styled.div`
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
    padding-top: 150px;
    @media (max-width: 1800px) {
        padding-top: 100px;
    }
    @media (max-width: 576px) {
        padding-top: 50px;
    }
`;


