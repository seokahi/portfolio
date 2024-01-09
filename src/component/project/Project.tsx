import { useCallback, useState } from 'react';
import styled from 'styled-components';
import Modal from './ProjectDetail';



interface InfoType {
  name: string;
  content: string;
  stack: string;
}

interface AboutMeListProps {
  infos: InfoType; // props 이름을 infos로 변경
}
 
export const ProjectInfo: React.FC<AboutMeListProps> = ({ infos }) => {
    const [isOpenModal, setOpenModal] = useState<boolean>(false);

    const onClickToggleModal = useCallback(() => {
      setOpenModal(!isOpenModal);
    }, [isOpenModal]);
    return (
      <TitleTextWrapper onClick={onClickToggleModal}>
        {isOpenModal && (
        <Modal onClickToggleModal={onClickToggleModal}>
          이곳에 children이 들어갑니다.
        </Modal>
      )}
        <button>
        <TitleText>{infos.name}</TitleText>
        <TitleText>{infos.content}</TitleText>
        <TitleText>{infos.stack}</TitleText>
        </button>
      </TitleTextWrapper>
    );
  };

  
const TitleTextWrapper = styled.div`
    display: flex;
    display: -ms-flexbox;
    flex-flow: row nowrap;
    width: 100%;
    max-width: 14rem;
    margin: 0 auto;
    opacity: .8;
`;

const TitleText = styled.div`
    margin-bottom: .5rem;
    font-weight: 700;
    font-size: 1.25rem;
`

const TitleShareImg = styled.img`
 width: 2rem;
    min-width: 2rem;
    height: 2rem;
    margin-top: .2rem;
    margin-right: 2rem;
`