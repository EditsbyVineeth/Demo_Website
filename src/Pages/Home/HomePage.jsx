import React, { useEffect, useState, useContext } from "react";
import profilePic from "../../Assets/ProfilePic22.png";
import { RoughNotation } from "react-rough-notation";
import { DataContext } from "../../DataContext";
// import Button from '../CustomComponents/Button'
import {motion} from 'framer-motion'

function HomePage() {
  const { darkMode, setDarkMode } = useContext(DataContext);

  const [highlightVisible, setHighlightVisible] = useState(false);

  const handleDownloadResume = () => {
    const resumePath = '../../Assets/VineethPV_Resume (3).pdf';
  
    // Create a temporary anchor element
    const anchorElement = document.createElement('a');
    anchorElement.href = resumePath;
    anchorElement.download = 'resume.pdf';
  
    // Add a temporary attribute to the anchor element
    anchorElement.setAttribute('target', '_blank');
    anchorElement.setAttribute('rel', 'noopener noreferrer');
  
    // Append the anchor element to the document body
    document.body.appendChild(anchorElement);
  
    // Simulate a click on the anchor element to trigger download
    anchorElement.click();
  };
  
  

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
    <motion.div
       initial={{opacity:0}}
       animate={{opacity:1}}
       transition={{ duration:2}}

      className={`${
        darkMode ? "text-white " : " text-black"
      } homeDiv transition-all duration-500 md:w-full p-6 md:h-full  gap-14 md:gap-1
          md:pt-14  flex flex-col-reverse md:flex-row items-start justify-evenly`}
    >
      <div className="  md:w-8/12 h-auto text-left md:text-lg flex flex-col ">
        <div className=" text-xl md:text-3xl font-bold opacity-90 ">
          <span className=" text-3xl md:text-6xl"> Hey I'm Vineeth </span>{" "}
          <br></br> <span className={`${darkMode && ' text-violet-600'} text-2xl md:text-4xl`}>ReactJs Developer</span>  based in India.
        </div>
        <br />
        <div className=" opacity-80">
          <div className=" ">
            I love building tools that are userfriendly simple and delightful.
          </div>
          <br />
          <div className="-mt-4  transition-all duration-1000">
            My expertise extends to working with a multitude of 
            <span className=" text-blue-800">technologies</span> and
             <span className=" text-blue-800"> frameworks</span>.
            <br />
            For the past 6 months I have been working on various frontend
            languages and tools.  I've been actively
            engaged in tasks involving HTML, CSS, and JavaScript, crafting
            <span className=" text-blue-800"> visually appealing </span> and <span className=" text-blue-800">responsive</span>  user interfaces.
            <a className=" text-blue-800" href="/">Read more Aboutme...</a>
          </div>
          <div className=" mt-2 ">
            {" "}
            I'm currently looking for a new job as a developer.
            {highlightVisible ? (
              <RoughNotation type="circle" show="true" color="red">
                Hire me?
              </RoughNotation>
            ) : (
              "Hire me?"
            )}
          </div>
          <br />
        </div>
        <div className=" flex flex-row">
          <button
            className={` box__shadow ${
              darkMode && " bg-white text-black"
            } h-10 w-36 md:w-40  border-black border-2 rounded-md m-2`}
            onClick={handleDownloadResume}
          >
            Resume
          </button>
          <button
            className={` box__shadow ${
              darkMode ? "bg-violet-700 text-white": " bg-black text-white"
            }
              h-10 w-36 md:w-40  rounded-md m-2`}
          >
            View GitHub
          </button>
        </div>
      </div>

      <motion.div className=" imgBox w-full md:w-72 md:h-72 mt-12 flex items-center justify-center"
        initial={{ y:-200, opacity:0}}
        animate={{ y:0, opacity:1}}
        transition={{duration:1,delay:1.6, type:'spring', stiffness:200}}
      >
        <img
          src={profilePic}
          alt="profilePic"
          className=" object-fit w-36 h-48 md:w-48 md:h-56 md:rounded-md transition-transform duration-700 hover:scale-105"
        />
      </motion.div>
    </motion.div>
  );
}

export default HomePage;
