
import "./modal.scss";
import styled from 'styled-components';

interface ModalProps {
    handleCloseModal:() => void; 
    isModal:boolean;
  }
   
export default function Modal({handleCloseModal,isModal}:ModalProps) {

    return (
        <AboutWrapper className={isModal ? 'show' : ''}>
            <Back className={isModal ? 'show' : ''}/>
            <AboutContainer >
                 <h1>ABOUT ME</h1>
                 <Close onClick={() => handleCloseModal()}>x</Close>
                <Card className='one'>
                        <div className='line'></div>
                        <div className='right'>Career.</div>
                        <Cardcontent>
                            <div className="title">실전문제연구단
                                <span className="date">2021.03~2022.02</span>
                            </div>
                            
                            <div className="detail">
                                인천대학교 주관의 현장맞춤형 공모활동
                            </div>
                        </Cardcontent>
                        <Cardcontent>
                        <div className="title">앱센터
                                <span className="date">2021.09~2022.05</span>
                            </div>
                            
                            <div className="detail">
                                인천대학교 전산원 소속 IT 동아리
                            </div>
                        </Cardcontent>
                        <Cardcontent>
                        <div className="title">멋쟁이사자처럼 프론트엔드스쿨
                                <span className="date">2022.03~2022.08</span>
                            </div>
                            
                            <div className="detail">
                                멋쟁이사자처럼에서 주관하는 프론트엔드 국비과정
                            </div>
                        </Cardcontent>
                        <Cardcontent>
                        <div className="title">멋쟁이 사자처럼 11기
                                <span className="date">2023.03~2023.12</span>
                            </div>
                            
                            <div className="detail">
                                대학생 창업 IT 동아리
                            </div>
                        </Cardcontent>
                </Card>
               {/* <Card className='two'>
                    <div className='line'></div>
                    <div className='right'>Career.</div>
                    <Cardcontent>
                        <div>인천대학교 임베디드시스템공학과</div>
                        <div>rydbrgud dlsxjs</div>
                    </Cardcontent>
                    <Cardcontent>
                        <div>정보처리기사</div>
                        <div>rydbrgud dlsxjs</div>
                    </Cardcontent>
                    <Cardcontent>
                        <div>우아한 형제들</div>
                        <div>rydbrgud dlsxjs</div>
                    </Cardcontent>
                    <Cardcontent>
                        <div>우아한 형제들</div>
                        <div>rydbrgud dlsxjs</div>
                    </Cardcontent>
               </Card> */}
               </AboutContainer>
        </AboutWrapper>
    );
}

// Define the About component
const AboutWrapper = styled.div.attrs({
    className: 'about' // Apply the 'about' class from SCSS
})`
    // Additional styled-components styles can be defined here if needed
`;

// Define the Back component
const Back = styled.div.attrs({
    className: 'back' // Apply the 'back' class from SCSS
})`
    // Additional styled-components styles can be defined here if needed
`;

// Define the Close component
const Close = styled.button.attrs({
    className: 'close' // Apply the 'close' class from SCSS
})`
    // Additional styled-components styles can be defined here if needed
`;

// Define the AboutContainer component
const AboutContainer = styled.div.attrs({
    className: 'about-container' // Apply the 'about-container' class from SCSS
})`
    // Additional styled-components styles can be defined here if needed
`;

// Define the Card component
const Card = styled.div.attrs({
    className: 'card' // Apply the 'card' class from SCSS
})`
    // Additional styled-components styles can be defined here if needed
`;

// Define the Cardcontent component
const Cardcontent = styled.div.attrs({
    className: 'card-content' // Apply the 'card-content' class from SCSS
})`
    // Additional styled-components styles can be defined here if needed
`;

// Export the styled components
export { AboutWrapper, Back, Close, AboutContainer, Card, Cardcontent };