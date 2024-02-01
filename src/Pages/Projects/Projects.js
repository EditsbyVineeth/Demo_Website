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
        className={` ${darkMode && 'text-violet-700 '} w-full text-3xl md:text-6xl  px-20 font-bold`}>
        projects.
      </span>
      <div className='flex flex-wrap mt-8 md:mt-10'>
      <div className=' flex flex-wrap '>

           <Link to='/movieApp' > <ProjectTiles  sampleImg={movieapp} content={'A movie app that helps you to explore movies and series of different categories'}/></Link>
           <Link to='/globalChronicle'>  <ProjectTiles  sampleImg={newsapp} content={'Get real time world news at your finger tip'}/>   </Link>
           <Link to='/savora'>  <ProjectTiles  sampleImg={foodapp} content={'Restaurant website to explore and order the food of your tastes'}/>   </Link>
           <Link to='/eduMentor'>  <ProjectTiles  sampleImg={elearning} content={'Elearning website with various courses - "Learn Anytime Anywhere'}/>   </Link>
           <Link to='/spaceTour'>  <ProjectTiles  sampleImg={spaceTourism} content={'Website based on space tourism- explore different planets , technologies here.'}/>    </Link>
          
        </div>
    </div>
    </div>
  );
}

export default Projects;
