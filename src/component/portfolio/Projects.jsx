import { useState } from 'react'

import TabMenu from '../projects/TabMenu'
import ProjectItem from '../projects/ProjectItem';
import projects from '../../json/projects.json';

import '../../style/projects/projects.scss'

function Projects() {
  const [selectedTab, setSelectedTab] = useState(0);

  const team = projects.filter(p => p.team > 1);
  const personal = projects.filter(p => p.team === 1);

  return (
    <div className='projects_container'>
      <h2 className='projects_title'>Projects</h2>
      <div className='projects_content'>
        <TabMenu onTabChange={setSelectedTab}/>
        {
          selectedTab === 0 ?
          //팀
          <ProjectItem selectedTab={selectedTab} data={team}/>
          :
          //개인
          <ProjectItem selectedTab={selectedTab} data={personal}/>
        }
      </div>
    </div>
  )
}

export default Projects