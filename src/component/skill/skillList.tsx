import styled from "styled-components";
import { FRONTEND, BACKEND, ETC } from "../../resource/string/image";

export type SkillInfo = {
  name: string,
  image: string,
  content: string
};

type SkillSet = [string, SkillInfo[]];
const Skill = () => {
  const skills: SkillSet[] = [["frontend", FRONTEND], ["backend", BACKEND], ["etc", ETC]];
  return (
    <>
      {skills.map((stack, index)=> (
        <StackWrapper key={index} className={`${stack[0]}`}>
            {stack[0] === "frontend" ? <div className="subTitle"><span>#FRONT-END SKILL</span></div>:
            stack[0] === "backend"? <div className="subTitle"><span>#BACK-END SKILL</span></div>:
            <div className="subTitle"><span>#USING-TOOL</span></div>
            }
            <StackContainer>
              <ul>
              {stack[1].map((skill, index1) => (
                <li key={index1}> {/* key 프로퍼티 추가 */}
                  <img src={skill.image} alt={skill.name} /> {/* 이미지에 대한 alt 속성 추가 */}
                  <div>
                    <p>{skill.name}</p>
                    <p>{skill.content}</p>
                  </div>
                </li>
              ))}

              </ul>
            </StackContainer>
        </StackWrapper>
    ))} 
    </>
  )
}

const StackWrapper = styled.div`
  .subTitle {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 80px;
    margin-bottom: 15px;
  }

  .subTitle span {
    position: relative;
    padding: 6px 25px;
    margin-left: 30px;
    text-align: center;
    font-weight: 300;
    font-size: 14px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 25px;
    border: 1px solid rgb(50, 50, 60);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
    transform: scale(1.3);
    transition: 700ms ease;
    color:white;
  }
`

const StackContainer =styled.div`

  display: flex;
    justify-content: flex-start;
    align-items: center;
    min-height: 130px;
    padding: 0 30px;

    ul {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 35px;
    }

    ul li {
      position: relative;
      align-items: center;
      justify-content: center;
      display: flex;
      width: 90px;
      height: 90px;
      background-color: #000000;
      border-radius: 0px;
      border: 1px solid rgb(30, 30, 35);
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
      overflow: hidden;
      transition: 300ms ease;


    }

    ul li img {
      width: 50px;
    }

    ul li div {
      position: absolute;
      width: 180px;
      left: calc(100% + 5px); /* 변경된 부분 */
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      overflow: hidden;
      opacity: 0;
      color: white;
      transition: left 250ms ease, opacity 400ms ease;
      cursor: pointer;
    }

    ul li div p:first-child {
      font-weight: 700;
      font-size: 1.1rem;
      color: white;
    }

    ul li div p:last-child {
      font-weight: 300;
      font-size: 0.8rem;
      padding-right: 15px;
      margin:0;
    }

    ul li:hover div {
      left: calc(100% - 180px); /* 변경된 부분 */
      opacity: 1;
    }

    ul li:hover {
      padding-right: 180px;
      height: 120px;
    }
`



export default Skill;