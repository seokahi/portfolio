import styled from "styled-components";
import { FRONTEND,BACKEND,ETC } from "../../resource/string/image";


export type SkillInfo = {
  stack: string;
  name: string;
  value: number;
  className: string;
  content: string;
};


type SkillSet = [SkillInfo[]];

const Skill = () => {
  const skills: SkillSet[] = [[FRONTEND],[BACKEND],[ETC]];
  return (
    <SkillBox>
      {skills.map((stack)=>{
        
      })}
    </SkillBox>
  )
}

const SkillBox = styled.div`
  
`

export default Skill;