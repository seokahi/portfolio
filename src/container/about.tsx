import styled from 'styled-components';
// import { AboutMeList } from '../component/aboutme/AboutmeInfo';
// import { infoList } from '../resource/string/skill';
import { Title } from '../component/common/PageTitle';
import  { RefObject } from 'react';
// import { Button } from '../component/common/Scroll';
// import { useDispatch } from 'react-redux';
// import { DetailList } from '../resource/string/detail';
// import { AboutMeDetailList } from '../component/aboutme/AboutmeDetail';

// import { setCurrent } from '../reducer/homeSlice';
interface AboutMeContainerProps {
    mref: RefObject<HTMLDivElement>;
  }
  
  export default function AboutMe({ mref }: AboutMeContainerProps) {
    // const dispatch = useDispatch();
    // const [buttonClicked, setButtonClicked] = useState(false);

    // const handleChildClick = () => {
    //     dispatch(setCurrent("STACKS"));
    //     setButtonClicked(true);
    // }; 
    return (
        <AboutMeContainersLayout ref={mref}>
                <Title title='ABOUT' />
                <AboutBox>

                    {/* <AboutMeInfos>
                        {DetailList.map((info, index) => (
                            <AboutMeDetailList key={index} infos={info} />
                        ))}
                    </AboutMeInfos> */}
                     <ul >
                        <li>
                            <span className='underline'><span className='strong'>문제</span>에서 기회를 포착</span>하고, <br /><span className='strong'>해결</span>을 통한 <span className='strong'>성취감</span>을 좋아합니다.</li>
                        <li>
                            일상에서 마주한 불편함으로, <br /> 더 나은 <span className='underline'><span className='strong'>사용자 경험</span>에 대해 고민</span>합니다. </li>
                        </ul>

                    {/* <AboutMeLists>
                        {infoList.map((info, index) => (
                            <AboutMeList key={index} infos={info} />
                        ))}
                    </AboutMeLists> */}
                    {/* <Button onClick={handleChildClick}></Button> */}
                </AboutBox>
        </AboutMeContainersLayout>
    );
}

const AboutBox = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

// const AboutMeInfos = styled.div`
//     /* -webkit-box-sizing: border-box;
//     max-width: 59rem;
//     padding: 4rem 2rem;
//     margin: 0 auto;
//     display: flex;
//     display: -ms-flexbox;
//     flex-flow: row wrap;
//     justify-content: space-between;
//     -webkit-box-pack: justify;
//     /* flex: 1 1 40%; */
//   /*  flex-direction:column;
//     margin-bottom: 3rem; */
//     /* display:flex;
//     -ms-flex-direction: column;
//     flex-direction: column;
//     -webkit-box-align: center;
//     -ms-flex-align: center;
//     align-items: center;
//     -webkit-box-pack: start;
//   justify-content: flex-start; */
// `;


// const AboutMeLists = styled.div`
//     /* -webkit-box-sizing: border-box;
//     max-width: 59rem;
//     padding: 4rem 2rem;
//     margin: 0 auto;
//     display: flex;
//     display: -ms-flexbox;
//     flex-flow: row wrap;
//     justify-content: space-between;
//     -webkit-box-pack: justify;
//     /* flex: 1 1 40%; */
//    /* flex-direction:column;
//     margin-bottom: 3rem; */

// `;

const AboutMeContainersLayout = styled.div`
background-color: rgb(27, 29, 32);
height: 100%;
color:white;

    /* display: flex; */
    /* grid-template-columns: 1fr;
    row-gap: 15rem; */
    /* min-height: calc(100vh - 84px);
  width: fit-content;
  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
background-color: black;

  .about-box {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 7rem;

    @media (max-width: 900px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      ul {
        margin:  2rem 0;
      }
      li {
        width: 80vw;
        margin: auto;
        text-align: center;
        font-size: 1.2rem;
      }
      .strong {
        font-size: 1.3rem;
      }
    }
}
ul {
    font-family: 'HakgyoansimWoojuR';
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
  li {
    width: 30vw;
    font-size: 2rem;
    line-height: 3rem;
    margin: 2rem 8rem 4rem 8rem;
  }
  .strong {
    font-size: 2.5rem;
    font-weight: 800;
  }
  .underline {
    background-image: linear-gradient(90deg, #95DAC1, #fffd7f);
    background-position: bottom;
    background-size: 100% 30%;
    background-repeat: no-repeat;
  }
  .card-container { 
    margin-bottom: 3rem;

    display: flex;
    justify-content: center;
    flex-direction: column;
  } */


    /* @media (max-width: 1800px) {
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
    } */
`;
