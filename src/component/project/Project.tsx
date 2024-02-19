
import { useState, useRef, MouseEvent } from 'react';


import { HologramSummary, PortfolioSummary, INTIPSummary } from '../../resource/string/projectSummary';
import { Hologram, Portfolio, INTIP } from '../../resource/string/project';
import { Detail } from './ProjectDetail';
import styled from 'styled-components';
import { useMoveToSection } from '../../hook/useMoveToDetail';

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

export interface ProjectType {
    project:ProjectList[];
}
interface CardProps {
    boxData: {
      left: number;
      top: number;
      centerX: number;
      centerY: number;
      d: number;
    };
  }
  
const Project = () => {
  const [openDetail, setOpenDetail] = useState({ isOpen: false, index: 0 });
  const [isMouseEnter, setIseMouseEnter] = useState(false);
  const [boxData, setBoxData] = useState({
    left: 0,
    top: 0,
    centerX: 0,
    centerY: 0,
    d: 0,
  });

  const Hologramprojectlist: ProjectList[] = [
    {
      nav: HologramSummary,
      ...Hologram
    }
  ];

  const Portfolioprojectlist: ProjectList[] = [
    {
      nav: PortfolioSummary,
      ...Portfolio
    }
  ];

  const Intipprojectlist: ProjectList[] = [
    {
      nav: INTIPSummary,
      ...INTIP
    }
  ];

  const data: ProjectType = {
    project: [...Hologramprojectlist, ...Portfolioprojectlist, ...Intipprojectlist]
  };
  console.log(data,"data형태");
  const rectRef = useRef<HTMLDivElement>(null);
  const frame = rectRef.current;
  const { handleMove } = useMoveToSection();

  const onMouseMove = (e: MouseEvent) => {
    if (!frame || !isMouseEnter) return;

    let { x, y, width, height } = frame.getBoundingClientRect();

    const left = e.clientX - x;
    const top = e.clientY - y;
    const centerX = left - width / 2;
    const centerY = top - height / 2;
    const d = Math.sqrt(centerX ** 2 + centerY ** 2);

    setBoxData({ left, top, centerX, centerY, d });
  };

  const handleMouseEnter = () => {
    setIseMouseEnter(true);
  };

  const handleMouseLeave = () => {
    setIseMouseEnter(false);
    setBoxData({
      left: 0,
      top: 0,
      centerX: 0,
      centerY: 0,
      d: 0,
    });
  };

  const handleDetailOpen = (index: number) => {
    setOpenDetail({ isOpen: true, index });
  };

  const handleDetailClose = () => {
    setOpenDetail({ ...openDetail, isOpen: false });
  };

  return (
    <ProjectBox id='project'>
      <Frame ref={rectRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onMouseMove={onMouseMove} >
      {data.project.map((el, index) => (
          <CardBox
            onClick={() => {
              handleDetailOpen(index);
              handleMove('detail');
            }}>
            {index === 1 ? <p className='text'><span className='strong'>클릭</span>하면 프로젝트를 자세히 볼 수 있어요!</p> : <p className='text'>&nbsp;</p>}
            <Card key={index} boxData={boxData}>
              <Light boxData={boxData} />
              <img
                src={el.nav.projectImg}
                alt='프로젝트 이미지'
                className='image'
                width={310}
                height={200}
              />
              <div className='header'>
                <h6>{el.nav.projectTitle}</h6>
                <p>{el.nav.projectInfo} project</p>
              </div>
              <div className='content'>
                <p>{el.nav.projectDetail}</p>
                <div>Stack</div>
                <p>{el.nav.projectTag}</p>
              </div>
            </Card>
          </CardBox>
        ))}
      </Frame>
      <Detail
        className={openDetail.isOpen ? 'open' : ''}
        project={data.project[openDetail.index]}
        handleDetailClose={handleDetailClose} />
    </ProjectBox>
  )
}

const ProjectBox = styled.section`
  position: relative;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;



  /* background: linear-gradient(0deg, #ffffff 0%, #dfffd847 60%, #b5f1ccde 100%); */
`;

const Frame = styled.div`
  width: 99vw;

  position: relative;

  transition: transform 200ms;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  -ms-flex-direction: row;
  @media (max-width: 900px) {
        padding-top: 100px;
        -ms-flex-direction: column;
        flex-direction: column;
        width: 300px;
    }
`;

const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div<CardProps>`
  width: 310px;
  height: max-content;
  margin: 0 3vw;
  position: relative;

  font-family: 'SUIT-Regular';
  cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>👀</text></svg>") 16 0, auto;

  border-radius: 3%;
  background-color: white;
  box-shadow: ${({ boxData }) => `${-boxData.centerX / 15}px ${-boxData.centerY / 15}px 20px 1px rgba(0, 0, 0, 0.08)`};

  transform: ${({ boxData }) =>
    `rotate3d(${-boxData.centerY / 100}, ${boxData.centerX / 100},0, ${-boxData.d / 15}deg)`};
  
  transition: transform 250ms box-shadow 250ms ease-out;

  .image {
    border-radius: 3% 3% 50% 50%;
  }

  .header {
    padding: 1.9rem 1.4rem 1.5rem 1.4rem;

    h6 {
      display: inline;
      font-size: 1.8rem;
      font-weight: 600;
      margin-right: 8px; 
      color: #000000c8;
    }
    p {
      display: inline;
      color: #565656;
    }
  }

  .content {
    padding: 0 1.4rem;
    color:black;
    div {
      font-size: 0.95rem;
      background-color: #8f8f8fae;
      width:fit-content;
      padding: 3px 6px;
      margin-bottom: 6px;
      border-radius: 8px;
      color:black;
    }
    p {
      font-size: 0.95rem;
      line-height: 1.2rem;
      color: #565656;
      margin-bottom: 0.8rem;
    }
  }

  @media (max-width: 900px) {
        width:600px;
        .image {
            width:100%;
            border-radius:0px;
         }
    }
  `;

const Light = styled.div<CardProps>`
  position: absolute;
  z-index: -1;
  
  width: 100%;
  height: 100%;
  border-radius: 3%;

  background: ${({ boxData }) =>
    `radial-gradient(circle at ${boxData.left}px ${boxData.top}px, #00000010, #ffffff, #ffffff60)`};
`;

export default Project;
