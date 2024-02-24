 import styled from '@emotion/styled';
import { memo } from 'react';
import { Carousel } from './Carousel';
import { Content } from './Content';

export type ProjectNav = {
  projectImg: string;
  projectTitle: string;
  projectInfo: string;
  projectDetail: string;
  projectTag: string[];
};

export interface ProjectList {
  nav: ProjectNav;
  projectImg: string[];
  projectTitle: string;
  projectInfo: string;
  projectDetail: string;
  projectTag: string[];
  projectLink: string;
  projectGithub: string;
}

interface Props {
  project: ProjectList;
  className: string;
  handleDetailClose: () => void;
};

export const Detail = memo(({ project, className }: Props) => {
  // const { handleMove } = useMoveToSection();

  return (
    <DetailBox id='detail' className={className} >
      <div className='content'>
        <Carousel project={project} />
        <Content project={project} />
      </div>
      {/* <Button onClick={() => {
        handleMove('project');
        handleDetailClose();
      }} /> */}
    </DetailBox>
  );
});

const DetailBox = styled.section`
  padding-top: 84px;
  width: 99vw;
  height: calc(100vh - 84px);
  /* 🤔 ux 고민중으로 주석처리 합니다 */
  /* height: ${({ className }) => (className === 'open' ? 'calc(100vh - 84px)' : '0px')}; */
  /* visibility: ${({ className }) => (className === 'open' ? 'visible' : 'hidden')}; */
  /* transition: height 0.5s ease-in; */

  font-family: 'SUIT-Regular';

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
