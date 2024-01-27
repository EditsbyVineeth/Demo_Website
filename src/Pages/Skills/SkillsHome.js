import React ,{useContext} from 'react'
import Toolbox from './Toolbox'
import Skills from './Skills.css'
import MajorSkills from './MajorSkills'
import DevelopmentSkills from './DevelopmentSkills'
import { DataContext } from '../../DataContext'




function SkillsHome() {

  const {darkMode} = useContext(DataContext)
  // const { darkMode, setDarkMode } = useContext(DataContext);

  return (
    <div className={`transition-colors duration-500 md:mt-24 py-16 px-10 md:px-20`}>
        <nav  className={`${darkMode && 'text-violet-600'} text-3xl md:text-6xl font-bold`}>skills and Interests.</nav>
        <div className=' flex flex-col md:flex-row  md:mt-10 mx-h-56'>

            <div className=' md:w-1/2 md:border-r-2 border-gray-500 flex flex-col items-center py-12'> 
                <MajorSkills/>
            </div>
            <div className=' w-full md:w-1/2 flex flex-wrap justify-center items-center'> 

              <DevelopmentSkills developmentSkill={'Web Designing'}/>
              <DevelopmentSkills developmentSkill={'Frontend Development'}/>
              <DevelopmentSkills developmentSkill={'Bug Fixing'}/>
              <DevelopmentSkills developmentSkill={'Testing'}/>
                {/* <Toolbox/> */}

            </div>

        </div>

    </div>
  )
}

export default SkillsHome