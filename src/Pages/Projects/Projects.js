import React,{useContext} from 'react'
import ProjectTiles from './ProjectTiles'
import movieapp from '../../Assets/Movieflix.png'
import newsapp from'../../Assets/globalChronicle.png'
import foodapp from'../../Assets/savora.png'
import  elearning from '../../Assets/elearning.png'
import spaceTourism from '../../Assets/Space Tourism.png'
import { DataContext } from '../../DataContext'

import { CgGitFork } from "react-icons/cg";
import { IoStar } from "react-icons/io5";

function Projects() {

  const { darkMode, setDarkMode } = useContext(DataContext);


  return (
    <div className={`${darkMode && 'bg-red-600'} transition-colors duration-500 mt-12 md:mt-32 flex flex-col items-center px-4 md:px-16  `}>
        <span className={` ${darkMode && 'text-yellow-400  text-'} w-full text-3xl md:text-6xl font-bold `}> projects.</span>
        <div className=' flex flex-wrap  mt-8 md:mt-14 '>
            <ProjectTiles  sampleImg={movieapp} content={'A movie app that helps you to explore movies and series of different categories'}/>
            <ProjectTiles  sampleImg={newsapp} content={'Get real time world news at your finger tip'}/>
            <ProjectTiles  sampleImg={foodapp} content={'Restaurant website to explore and order the food of your tastes'}/>
            <ProjectTiles  sampleImg={elearning} content={'Elearning website with various courses - "Learn Anytime Anywhere'}/>
            <ProjectTiles  sampleImg={spaceTourism} content={'Website based on space tourism- explore different planets , technologies here.'}/>
          
        </div>

        <div  className=' w-full mt-16 md:mt-28 '>
          
          <span className={`${darkMode && 'text-yellow-400'} w-full text-3xl md:text-6xl font-bold `}> contributions.</span>
                <div className={` ${darkMode && 'text-white bg-gradient-to-br from-gray-400 to-gray-200'} box__shadow rounded-2xl mt-8 md:mt-14 w-full md:w-1/2 h-auto p-6 md:p-10`}> 
                <h1 className=' md:text-2xl font-bold'>Anushka-Bhowmick / Supnits-Classes</h1>
                <ul className='list-disc  opacity-90'>
                  <li className=' md:mt-8'>It is a generalised website for an educational institute</li>
                  <li>It comprises of different articles, sections, courses, mentors 
                    and testimonials provided by the institute</li>
                </ul>
                <div className='gap-10 mt-6 flex flex-row'>
                  <span className='flex flex-row font-bold'><CgGitFork size={25}/> 17</span>
                  <span className='flex flex-row font-bold'><IoStar size={20}/> 17</span>
                </div>
                </div>
        </div>

    </div>
  )
}

export default Projects