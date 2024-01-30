import React,{useContext} from 'react'
// import sampleImg from '../Assets/Movieflix.png'
import { DataContext } from '../../DataContext';


function ProjectTiles({sampleImg, content}) {
  const { darkMode } = useContext(DataContext);


  return (
    <div className={` ${darkMode && ' bg-gray-800'} box__shadow flex flex-col hover:shadow-2xl shadow-black
           w-10/12 md:w-96 md:h-auto m-2 md:m-4 pb-12`}
       >
        {/* <img src={sampleImg} alt='projectPic' className='project_pic w-1/2 md:w-full z-0 '/> */}

        <div className=' bg-blue-700 object-cover'>
          <img src={sampleImg} alt='projectPic' className='project_pic z-0  '/>
          </div>
       

        <span className='px-2 flex items-center tracking-wide text-2xl font-semibold'>
            {content}
        </span>

    </div>
  )
}

export default ProjectTiles