import React from 'react'
import Part1 from '../Sections/Part1'
import Part2 from '../Sections/Part2'

import Img1 from './Images/Screenshot (259).png'
import Img2 from './Images/Screenshot (260).png'
import Img3 from './Images/Screenshot (262).png'
import Img4 from './Images/Screenshot (263).png'
import Img5 from './Images/Screenshot (266).png'
import Img6 from './Images/Screenshot (267).png'

export default function Movie() {
  return (
    <div className=' flex flex-col md:flex-row '>
        <Part1/>
        
        <Part2 
        projectTitle={'MovieFlix'}  
        projectDesc={'An unofficial Netflix clone where you can explore different movies and series'} 
         secDesc={'kfhdhf sodhfodoffsdfdfffffff dfd '}  
         aboutProject={''}  
         samImg1={Img1}  samImg2={Img2}  samImg3={Img3}  samImg4={Img4}  samImg5={Img5}  samImg6={Img6}
/>
      
    </div>
  )
}
