import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

import { ProjectList } from '../../resource/string/project';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Modal from './ProjectDetail';



const ProjectInfo: React.FC = () => {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number>(-1);


  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  const onSelectProject = useCallback((index: number) => {
    setSelectedProjectIndex(index);
    setOpenModal(true);
  }, []);

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {ProjectList.map((project, index) => (
          <SwiperSlide key={index}>
            <ProjectWrapper onClick={() => onSelectProject(index)}>
              <TitleText>{project.name}</TitleText>
              <TitleText>{project.content}</TitleText>
              <TitleText>{project.stack}</TitleText>
            </ProjectWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
      <Modal isOpenModal={isOpenModal} onClickToggleModal={onClickToggleModal} index={selectedProjectIndex} />
    </>
  );
};


const ProjectWrapper = styled.div`
  cursor: pointer;
`;

const TitleText = styled.p`
  margin-bottom: 0.5rem;
  font-weight: 700;
  font-size: 1.25rem;
`;



export default ProjectInfo;