
import styled from "styled-components";
import { ProjectDetailList } from "../../resource/string/projectDetail";

const Modal = ({ onClickToggleModal, isOpenModal, index }: { onClickToggleModal: () => void; isOpenModal: boolean; index: number }) => {
  // 선택된 프로젝트 디테일 가져오기
  const projectDetail = ProjectDetailList[index];
  
  return (
    <ModalContainer isOpen={isOpenModal}>
      {isOpenModal && (
        <ModalContent>
          <button onClick={onClickToggleModal}>Close Modal</button>
          {/* 선택된 프로젝트 디테일 보여주기 */}
          <div>{projectDetail.title}</div>
          <div>{projectDetail.content}</div>
          <div>{projectDetail.link}</div>
        </ModalContent>
      )}
    </ModalContainer>
  );
};

const ModalContainer = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;


const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
`;


export default Modal;