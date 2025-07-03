import SkillsItme from '../skills/SkillsItme'

import '../../style/skills/skills.scss'
import 'aos/dist/aos.css';

function Skills() {
  return (
    <div className='skills_container'>
      <h2 className='skills' data-aos="fade-up">Skills</h2>
      <SkillsItme/>
    </div>
  )
}

export default Skills