// import styled from 'styled-components';

import styled from "styled-components";


// interface InfoType {
//    skill: string;
//     img:{img:string}[];
// }

// interface SkillListProps {
//     info: InfoType;
// }
 
// export const SkillListDetail: React.FC<SkillListProps> = ({ info }) => {
//     return (
//         <TitleTextWrapper>
//         <TitleText>{info.skill}</TitleText>
//         <SkillImages>
//             {info.img.map((image, index) => (
//                 <TitleShareImg key={index} src={image.img} alt={`Skill Image ${index}`} />
//             ))}
//         </SkillImages>
//     </TitleTextWrapper>
//     );
//   };

  
// const TitleTextWrapper = styled.div`
//     display: flex;
//     display: -ms-flexbox;
//     flex-flow: row nowrap;
//     width: 100%;
//     max-width: 14rem;
//     margin: 0 auto;
//     opacity: .8;
//     transform: perspective(2500px) rotateY(0);
// `;

// const TitleText = styled.div`

//     /* 스타일 */
// `;

// const SkillImages = styled.div`
//     /* 스타일 */
// `;

// const TitleShareImg = styled.img`
// width: 30px;
// height: 30px;
//     /* 스타일 */
// `;



interface ProgressProps {
  name?: string;
  value: number;
  open?: boolean;
}

const RADIUS = 54;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export const ProgressCircle = ({ value, name, open }: ProgressProps) => {

  return (
    <ProgressBox>
      <div className='progress-wrap' >
        <StyledProgress value={value} name={name} open={open}>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#f7f6f1" />
              <stop offset="50%" stop-color="#9c9c9c" />
              <stop offset="90%" stop-color="#95DAC1" />
            </linearGradient>
          </defs>
          <circle className='frame' cx={60} cy={60} r={RADIUS} strokeWidth="6" />
          <circle className={`bar ${open ? 'animate' : ''}`} cx={60} cy={60} r={RADIUS} strokeWidth="6" />
        </StyledProgress>
        <strong className='text'>{name}</strong>
      </div>
    </ProgressBox>
  )
}

const ProgressBox = styled.div`
  position: relative;
  
  .progress-wrap {
    width: 120px;
    height: 120px;
    transform: rotate(-90deg);
  }
  .text {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    text-align: center;
    color: #3d3d3d;
    font-size: 18px;
    font-weight: 600;
    line-height: 120px;
    transform: rotate(90deg);
}
`;

const StyledProgress = styled.svg<ProgressProps> `
  width: 120px;
  height: 120px;
  .frame {
    fill: white;
    stroke: #f5f5f5b2;
  }
  .bar {
    fill: transparent;
    stroke: url(#gradient);
    stroke-linecap: round;
    /* stroke-dashoffset: ${({ name, value }) => name ? CIRCUMFERENCE * (1 - value / 100) : CIRCUMFERENCE};
    stroke-dasharray: ${CIRCUMFERENCE};
    transition: 1.8s ease-in-out; */
  }
  .animate {
    stroke-dashoffset: ${({ value }) => CIRCUMFERENCE * (1 - value / 100)};
  }
`;