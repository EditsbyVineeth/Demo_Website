import React from 'react'
import Part1 from '../Sections/Part1'
import Part2 from '../Sections/Part2'


import preview1 from './Images/preview.gif'


import Img1 from './Images/Screenshot (272).png'
import Img2 from './Images/Screenshot (271).png'
import Img3 from './Images/Screenshot (270).png'
import Img4 from './Images/Screenshot (273).png'
import Img5 from './Images/Screenshot (276).png'
import Img6 from './Images/Screenshot (275).png'
import Img7 from './Images/Screenshot (274).png'
import Img8 from './Images/Screenshot (276).png'
import Img9 from './Images/Screenshot (275).png'

import SavoraData from '../../Data/Savora.json'



function Savora() {

  return (
    <div className=' flex flex-col md:flex-row '>
    <Part1
     title={'Savora'} description={'Explore delicious food of your taste and cultu.re with Savora'}/>
    
    <Part2 
    projectTitle={'Savora'}  
     previewVideo1={preview1}
    projectDesc={'The choice of your taste'} 
    //  secDesc={'kfhdh dkfh dsfnkdshf jsdjld '}  
    //  aboutProject={''}  
     samImg1={Img1}  samImg2={Img2}  samImg3={Img3} 
      samImg4={Img4}  samImg5={Img5}  samImg6={Img6} 
     samImg7={Img7} samImg8={Img8} samImg9={Img9} 
     data={SavoraData}
/>
  
</div>
  )
}

export default Savora