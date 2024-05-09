import styled from 'styled-components';


interface InfoType {
    content:string;
}

interface AboutMeListProps {
  infos: InfoType; 
}
 
export default function Detail() {
    return (
      <TitleTextWrapper>
        <li>안녕하세요. 프론트엔드 개발자를 꿈꾸는 서가희입니다.</li>
        <li className="word">"끈기: [명사]단념하지 않고 끈질기게 견뎌 나가는 기운"</li>
        <li>이 단어는 저를 제일 잘 표현해주는 단어입니다.</li>
        <li>문제를 발견하고 해결함으로써 성취감을 느끼는 것을 좋아하며</li>
        <li>목적을 위해 밤을 세우는 것을 두려워하지 않습니다.</li>
        <li>사용자들의 일상에서 마주하는 불편함을 해결하기 위해 끈임없이 고민합니다.</li>
        <li>새로운 도전에 두려움을 느까지 않고, 오히려 그것을 기회로 삼아 배우고 성장하는 것을 즐깁니다,</li>
        <li>저의 열정과 도전적인 자세를 바탕으로 팀에 가치를 더하고 함께 성장할 수 있는  기회를 기다리고 있습니다!</li>
      </TitleTextWrapper>
    );
  };

  
const TitleTextWrapper = styled.ul`

    /* display:flex;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: start;
  justify-content: flex-start; */
  @font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
  li {
    font-family: 'GmarketSansMedium';
    margin-bottom:6px;
    &.word {
      margin-left: 8px;
    color: rgb(255, 236, 149);
    font-size: 0.9rem;
    }
  }
`;

const TitleText = styled.div`

`;
