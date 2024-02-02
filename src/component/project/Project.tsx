import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

import { ProjectList } from '../../resource/string/project';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Modal from './ProjectDetail';
import { Hologram } from '../../resource/string/projectImg';



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
    <Container>
      <Waaa>
      <ProjectTitle>홀로그램</ProjectTitle>
      <ProjectInformation>
        2022.06&nbsp;
        <span>(4人 팀 프로젝트)</span>
      </ProjectInformation>
      <ContainerTwo>
      <SwiperWrapper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        rewind={true}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        centeredSlides={true}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        
      {Hologram.map((imageUrl, index) => (
          <CustomSlide key={index}>
            <TitleImg src={imageUrl} alt="" />
          </CustomSlide>
         
      ))}
      </SwiperWrapper>
      <ProjectDetail>
            <p>
            Hologram은 혼자 사는 사람들의 일상 공유, 자신만의 팁, 고민거리 찬반투표 등 다양한 커뮤니티 활동을 할 수 있는 SNS입니다.
            Hologram의 주요 기능
            일상 공유, 자신만의 팁, 고민거리 찬반투표 등 게시글을 작성하여 유저들 간의 소통을 할 수 있습니다.
            마음에 드는 게시물이 있다면 상대방을 팔로우하여 소식을 받고 게시글에 댓글을 달고 '좋아요'를 할 수 있습니다.
            상품 판매를 할 수 있으며 판매자의 상품을 확인하고 채팅으로 이동할 수 있습니다.
            </p>
      </ProjectDetail>     
      </ContainerTwo>     
      </Waaa>    
       <Waaa>
       <ProjectTitle>홀로그램</ProjectTitle>
      <ProjectInformation>
        2022.06&nbsp;
        <span>(4人 팀 프로젝트)</span>
      </ProjectInformation>
      <ContainerTwo>
      <SwiperWrapper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        rewind={true}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        centeredSlides={true}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        
      {Hologram.map((imageUrl, index) => (
          <CustomSlide key={index}>
            <TitleImg src={imageUrl} alt="" />
          </CustomSlide>
         
      ))}
      </SwiperWrapper>
      <ProjectDetail>
            <p>
            Hologram은 혼자 사는 사람들의 일상 공유, 자신만의 팁, 고민거리 찬반투표 등 다양한 커뮤니티 활동을 할 수 있는 SNS입니다.
            Hologram의 주요 기능
            일상 공유, 자신만의 팁, 고민거리 찬반투표 등 게시글을 작성하여 유저들 간의 소통을 할 수 있습니다.
            마음에 드는 게시물이 있다면 상대방을 팔로우하여 소식을 받고 게시글에 댓글을 달고 '좋아요'를 할 수 있습니다.
            상품 판매를 할 수 있으며 판매자의 상품을 확인하고 채팅으로 이동할 수 있습니다.
            </p>
      </ProjectDetail>     
      </ContainerTwo>         
       
       </Waaa>

      
      {/* <Modal isOpenModal={isOpenModal} onClickToggleModal={onClickToggleModal} index={selectedProjectIndex} /> */}
    </Container>
    
  );
};

const SwiperWrapper =styled(Swiper)`
display: flex;
  flex-wrap: wrap;
  justify-content: center;
  
  &.swipper {
    width: 500px;
  }
`

const Waaa=styled.div`
 padding: 3rem;
    margin: 0 auto 4rem;
    border-radius: 1rem;
    background-color: #fff;
    box-shadow: 1rem 1rem 1rem 1rem rgba(3, 3, 3, 0.2);
    -webkit-box-shadow: 1rem 1rem 1rem 1rem rgba(3, 3, 3, 0.2);
`

const ContainerTwo = styled.div`
    display: flex;`;

const CustomSlide = styled(SwiperSlide)`
  /* display: flex;
    display: -ms-flexbox;
    flex-flow: row wrap;
    justify-content: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    width: 391px;
    &.swiper-slide {
    width: 391px; 
  } */
  display: flex;
    display: -ms-flexbox;
    flex-flow: row wrap;
    justify-content: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    width: 100%; /* 또는 필요한 너비로 조정 */
  &.swiper-initialized.swiper-horizontal.swiper-backface-hidden {
    /* 원하는 스타일을 여기에 추가하세요 */
    width: 301px;
  }
`;



const Container = styled.div`
 
`

const ProjectTitle = styled.div`
    padding-bottom: .5rem;
    font-family: Black Han Sans, sans-serif;
    font-weight: 400;
    font-size: 2.5rem;
    color: #222;
    text-align: center;
`;

const ProjectInformation = styled.div`
  margin-bottom: 2rem;
    font-weight: 400;
    font-size: 1rem;
    color: #6c757d;
    text-align: center;
    opacity: .8;
`
const ProjectDetail = styled.div`
   width: 100%;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  p {
    margin: 0; /* p 태그의 기본 마진을 제거하여 정확한 위치에 표시되도록 함 */
  }
`;
const Content = styled.div`
  width: fit-content;
`
// const TitleText = styled.p`
//   margin-bottom: 0.5rem;
//   font-weight: 700;
//   font-size: 1.25rem;
// `;
const TitleImg = styled.img`
text-align: center;
margin: 0 auto;
width: 200px;

height: 20vw;
`



export default ProjectInfo;