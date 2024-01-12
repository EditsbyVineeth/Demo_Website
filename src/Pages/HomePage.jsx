import React ,{useEffect, useState, useContext} from "react";
import profilePic from "../Assets/ProfilePic22.png";
import { RoughNotation } from "react-rough-notation";
import { DataContext } from "../DataContext";
// import Button from '../CustomComponents/Button'

function HomePage() {

  const{darkMode, setDarkMode}=useContext(DataContext);

  const[highlightVisible, setHighlightVisible]=useState(false)

 
  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightVisible((prevState) => !prevState);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let timeout;
    if (highlightVisible) {
      timeout = setTimeout(() => {
        setHighlightVisible(false); // Turn off highlighting after 9 seconds (4 seconds for highlighting, 5 seconds without highlighting)
      }, 5000); 
    }

    return () => clearTimeout(timeout);
  }, [highlightVisible]);

  return (
    <div className={`${darkMode?'bg-gray-600 text-white': 'bg-white text-black'} homeDiv transition-all duration-1000 w-full p-8 md:h-full 
          md:pt-14 gap-10 flex flex-col-reverse md:flex-row items-start justify-center`}>
        <div className=" w-full md:w-1/2 h-auto text-left md:text-lg flex flex-col">
            <div className=" text-xl md:text-3xl font-bold font-sans">
              Hello! I'm Vineeth, a ReactJs developer based in India.
            </div>
            <br />
            <div className=" opacity-80">
              <div className=" ">
                I love building tools  that are userfriendly simple and delightful.
                For the past 6 months i have been learning the fundamentals of
                web development and dedicated my time to explore and practice
                different libraries and tools. 
              </div>
              <br />
              <div className="-mt-4  transition-all duration-1000">
                  During this time I made different websites  both simle & complex. 
                  My expertise extends to working with a multitude of technologies including  
                  {highlightVisible?
                  (<RoughNotation type='' show="true" color="pink">  Redux</RoughNotation>)
                  :('  Redux') },
                  {highlightVisible?
                  (<RoughNotation type='highlight' show="true" color="pink">  Context API</RoughNotation>)
                  :('  Context API') },
                  {highlightVisible?
                  (<RoughNotation type='underline' show="true" color="yellow">  Rest API  </RoughNotation>)
                  :('  Rest API  ') },
                  {highlightVisible?
                  (<RoughNotation type='highlight' show="true" color="yellow">     MaterialUI</RoughNotation>)
                  :('     MaterialUI ') }
                  {highlightVisible?
                  (<RoughNotation type='underline' show="true" color="pink">  TailwindCSS </RoughNotation>)
                  :('  TailwindCSS ') },
                  {highlightVisible?
                  (<RoughNotation type='highlight' show="true" color="yellow">  Bootstrap  </RoughNotation>)
                  :('  Bootstrap  ') }
                 <a href="/">Read more Aboutme...</a>
              </div>
              <div className=" mt-2 "> I'm currently looking for a new job as a developer. 
              {highlightVisible?
                  (<RoughNotation type="circle" show="true" color="red">Hire me?</RoughNotation>)
                  :('Hire me?') }
              </div>       
              <br />
           </div>
              <div className=" flex flex-row">
                <button className={` ${darkMode?' bg-white text-black':'bg-black text-white'} h-10 w-36 md:w-48  border-black border-2 rounded-md m-2 hover:bg-white hover:text-black`}>
                  Resume
                </button>
                <button className={` ${darkMode?'bg-black text-white':'bg-white text-black'} h-10 w-36 md:w-48  border-black  border-2  rounded-md m-2 hover:bg-black hover:text-white`}>
                  View GitHub
                </button>
              </div>
            
          </div>

      <div className=" imgBox w-full md:w-56 md:h-72 mt-12 flex items-center justify-center">
      
        <img
          src={profilePic}
          alt="profilePic"
          className=" object-fit w-36 h-44 md:w-56 md:h-72 rounded-md transition-transform duration-700 hover:scale-105"
        />
      </div>
    </div>
  );
}

export default HomePage;
