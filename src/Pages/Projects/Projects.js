import React, { useContext } from 'react';
import ProjectTiles from './ProjectTiles';
import movieapp from '../../Assets/Movieflix.png';
import newsapp from '../../Assets/globalChronicle.png';
import foodapp from '../../Assets/savora.png';
import elearning from '../../Assets/elearning.png';
import spaceTourism from '../../Assets/Space Tourism.png';
import { DataContext } from '../../DataContext';
import { CgGitFork } from "react-icons/cg";
import { IoStar } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';



function Projects() {
  const { darkMode, setDarkMode } = useContext(DataContext);



  return (
    <div className={`transition-colors duration-500 mt-12 md:mt-32 flex flex-col items-center justify-center px-10`}>
        <span
        className={` ${darkMode && 'text-violet-700 '} w-full text-3xl md:text-5xl  px-20 font-bold`}>
        projects.
      </span>
      <div className='flex flex-wrap mt-8 md:mt-10'>
      <div className=' flex-wrap gap-1 grid grid-cols-1 md:grid-cols-3 '>

          <div> <Link to='/movieApp' > <ProjectTiles  sampleImg={movieapp} content={'An unofficial Netflix clone '}/></Link>   </div>
          <div> <Link to='/globalChronicle'>  <ProjectTiles  sampleImg={newsapp} content={'Real time news website'}/>   </Link></div>
          <div> <Link to='/savora'>  <ProjectTiles  sampleImg={foodapp} content={'Restaurant website '}/>   </Link></div>
          <div className=' md:col-span-2'> <Link to='/eduMentor'>  <ProjectTiles  sampleImg={elearning} content={'EduMentor - "Learn Anytime Anywhere'}/>   </Link></div>
          <div> <Link to='/spaceTour'>  <ProjectTiles  sampleImg={spaceTourism} content={'Space Tour website'}/> </Link> </div>
          
        </div>
    </div>
    </div>
  );
}

export default Projects;
