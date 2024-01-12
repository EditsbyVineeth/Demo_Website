import React, { useContext } from 'react';
import { DataContext } from '../DataContext';
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

function Navbar() {
    const{darkMode, setDarkMode}=useContext(DataContext);

    const handleMode=()=>{
     setDarkMode((PrevState)=>!PrevState);
     console.log('mode Clicked', darkMode)
    }

  return (
    <div className={`${darkMode?' bg-black text-white':'bg-white text-black'} transition-all duration-700 h-20 flex items-center justify-around`}>

        <div className={' hidden md:block  font-semibold tracking-wider text-3xl italic opacity-55 font-sans '}>VINEETH P V</div>
        <div className=' flex flex-row'>
            <ul className=' hidden md:flex flex-row gap-6 text-xl font-bold font-sans'>
                <li>Home </li>
                <li>Projects </li>
                <li>Skills</li>
                <li>Contact </li>                              
            </ul>

            <div className=' ml-20'>
                {darkMode ?
                (<span className=' absolute text-2xl' onClick={handleMode}>  <MdDarkMode/> </span>) :
                (<span className=' absolute text-2xl' onClick={handleMode} > <MdLightMode/> </span> ) }
            </div>
           
        </div>
        
    </div>
  )
}

export default Navbar