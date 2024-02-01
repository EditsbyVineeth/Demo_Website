import React, { useEffect } from 'react'
import Part1 from '../Sections/Part1'
import Part2 from '../Sections/Part2'

import preview1 from './Images/SpaceTour_preview.gif'
import preview2 from './Images/preview_2.gif'


import Img1 from './Images/Screenshot (278).png'
import Img2 from './Images/Screenshot (280).png'
import Img3 from './Images/Screenshot (281).png'
import Img4 from './Images/Screenshot (282).png'
import Img5 from './Images/Screenshot (283).png'
import Img6 from './Images/Screenshot (285).png'
import Img7 from './Images/Screenshot (286).png'
import Img8 from './Images/Screenshot (287).png'
import Img9 from './Images/Screenshot (288).png'

import SpaceTourData from '../../Data/SpaceTour.json'

import {motion} from 'framer-motion'


export default function SpaceTour() {

  useEffect(()=>{
     window.scrollTo(0,0)
  })
  return (
    <motion.div className=' flex flex-col md:flex-row '
    initial={{opacity:0.4, transitionDuration:2, width:0}}
    animate={{opacity:1, transitionDuration:10, width:'100%'}}
    transition={{ duration:1}}
    exit={{opacity:0.4, transitionDuration: 2, width:0}}
  >        <Part1
         title={'Movieflix'} description={'Explore latest movies and series of all geners'}
         gitCode={'https://github.com/callmeVineeth/SpaceTour'}  liveSite={' https://callmevineeth.github.io/SpaceTour/'}
         />
        
        <Part2 
        projectTitle={'MovieFlix'}   previewVideo1={preview1}  previewVideo2={preview2}
        projectDesc={'An unofficial Netflix clone where you can explore different movies and series'} 
         secDesc={'kfhdhf sodhfodoffsdfdfffffff dfd '}  
         aboutProject={''}  
         samImg1={Img1}  samImg2={Img2}  samImg3={Img3}  samImg4={Img4}  samImg5={Img5}  samImg6={Img6} 
         samImg7={Img7} samImg8={Img8} samImg9={Img9} data={SpaceTourData}
/>
      
    </motion.div>
  )
}
