import React,{useContext} from 'react'
import { DataContext } from '../../DataContext'

function MajorSkills() {

    const{darkMode} = useContext(DataContext)

  return (
    <div className={`${darkMode && 'text-white'}  w-full`}>
          <span>Explore Skills and Interests here  </span> <br></br>

<div>
    <span className=' text-xl'># Frontend Development</span>
    <ul className=' flex flex-wrap'>
       <li className={`bg-gray-200 text-black skills`}>Html</li>
       <li className={`bg-gray-200 text-black skills`}>CSS</li>
       <li className={`bg-gray-200 text-black skills`}>Scss</li>
       <li className={`bg-gray-200 text-black skills`}>JavaScript</li>
       <li className={`bg-gray-200 text-black skills`}>ReactJs</li>
       <li className={`bg-gray-200 text-black skills`}>TypeScript</li>
   
    </ul>
</div>

<div className=' mt-6'>
    <span className=' text-xl'># UI Frameworks</span>
    <ul className=' flex flex-wrap'>
       <li className=' bg-gray-200 text-black skills'>TailwindCSS</li>
       <li className=' bg-gray-200 text-black skills'>MaterialUI</li>
       <li className=' bg-gray-200 text-black skills'>Bootstrap</li>
   </ul>
</div>

<div className=' mt-6'>
    <span className=' text-xl'># State Management</span>
    <ul className=' flex flex-wrap'>
       <li className=' bg-gray-200 text-black skills'>Redux</li>                
    </ul>
</div>
<div className=' mt-6'>
    <span className=' text-xl'># Testing</span>
    <ul className=' flex flex-wrap'>
       <li className=' bg-gray-200 text-black skills'>Jest</li>                
    </ul>
</div>


    </div>
  )
}

export default MajorSkills