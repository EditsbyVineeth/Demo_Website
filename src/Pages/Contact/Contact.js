import React,{useContext} from 'react'
import ContactForm from './ContactForm'
import SocialMedias from './SocialMedias'
import { DataContext } from '../../DataContext'


function Contact() {
const{darkMode} = useContext(DataContext);

  return (

    <div className={`${darkMode && 'bg-red-600 text-yellow-400'} transition-colors duration-500 mt-10 md:mt-24 w-full mb-4`}>
        <span className='w-full text-3xl md:text-6xl font-bold mt-20 px-6 md:px-24'>contact.</span>

       <div className=' w-full flex  flex-col-reverse md:flex-row  '>
           <div className=' flex flex-col w-full md:w-2/3 items-center justify-center mt-8 md:mt-20 '>
               <ContactForm/>
               <SocialMedias/>     
          </div>
          <div className=' text-xl md:text-4xl font-bold flex  tracking-widest flex-col items-center justify-center gap-2  w-full md:w-max mt-4 md:m-10 md:p-4'>
            <span className=' cursor-pointer'><a href='/' target='_newpage'> GitHub   </a> </span>
            <span className=' cursor-pointer'><a href='/' target='_newpage'> LinkedIn </a> </span>
            <span className=' cursor-pointer'><a href='/' target='_newpage'> Twitter  </a> </span>
          </div>
           
       </div>

       <div className='w-full text-center mt-10 text-md md:text-xl'>Copyright © 2024. All Rights Reserved.</div>
    </div>
  )
}

export default Contact