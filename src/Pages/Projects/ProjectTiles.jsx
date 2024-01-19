import React from 'react'
// import sampleImg from '../Assets/Movieflix.png'

function ProjectTiles({sampleImg, content}) {
  return (
    <div className='box__shadow flex flex-row md:flex-col hover:shadow-2xl shadow-black bg-gray-100
       w-full md:w-60 h-44 md:h-72 m-2 md:m-4 rounded-tr-2xl'>
        <img src={sampleImg} alt='projectPic' className='project_pic w-1/2 md:w-full z-0  md:rounded-tr-2xl'/>

        <span className='  px-2 flex items-center'>
            {content}
        </span>

    </div>
  )
}

export default ProjectTiles