import React, { useContext } from "react";
import { DataContext } from "../DataContext";

import { IoLogoReact } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { SiMui } from "react-icons/si";
import { IoLogoSass } from "react-icons/io5";
import { DiJavascript1 } from "react-icons/di";
import { TbApi } from "react-icons/tb";
import { SiJest } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";

function Skills() {
  const { darkMode, setDarkMode } = useContext(DataContext);

  return (
    <div
      className={`${
        darkMode ? "bg-gray-600 text-white" : "bg-white text-black"
      }  transition-all duration-1000 px-10 py-20 md:px-48 md:py-44`}
    >

      <span className="text-xl md:text-3xl font-bold font-sans ">Skills</span>

      <div className="w-full flex items-center justify-center">
        <div class="grid grid-cols-3 gap-2 items-center justify-center p-2">
          <div class=" transition-all duration-300 hover:scale-105 bg-black p-4 flex flex-col items-center justify-center md:h-32 md:w-36 text-5xl text-white ">
            <IoLogoReact />
            <span className="  absolute text-8 text-5xlxmd:l font-bold text-gray-400 opacity-10 font-sans ">
              O1
            </span>
            <span className=" text-sm md:text-lg text-white">React</span>
          </div>
          <div class=" transition-all duration-300 hover:scale-105 bg-gray-100 text-black  p-4 flex flex-col items-center justify-center md:h-32 md:w-36 text-5xl ">
            <SiTailwindcss />
            <span className="  absolute text-5xl md:text-8xl font-bold text-gray-400  opacity-10 font-sans ">
              O2
            </span>
            <span className=" text-sm md:text-lg text-black">TailwindCSS</span>
          </div>
          <div class=" transition-all duration-300 hover:scale-105 bg-black    p-4 flex flex-col items-center justify-center md:h-32 md:w-36 text-5xl text-white ">
            <FaBootstrap />
            <span className="  absolute text-5xl md:text-8xl font-bold text-gray-400  opacity-10 font-sans ">
              O3
            </span>
            <span className=" text-sm md:text-lg text-white">Bootstrap</span>
          </div>
          <div class=" transition-all duration-300 hover:scale-105 bg-gray-100 text-black  p-4 flex flex-col items-center justify-center md:h-32 md:w-36 text-5xl ">
            <SiMui />
            <span className="  absolute text-5xl md:text-8xl font-bold text-gray-400  opacity-10 font-sans ">
              O4
            </span>
            <span className=" text-sm md:text-lg text-black">MaterialUI</span>
          </div>
          <div class=" transition-all duration-300 hover:scale-105 bg-black    p-4 flex flex-col items-center justify-center md:h-32 md:w-36 text-5xl text-white ">
            <IoLogoSass />
            <span className="  absolute text-5xl md:text-8xl font-bold text-gray-400  opacity-10 font-sans ">
              O5
            </span>
            <span className=" text-sm md:text-lg text-white">SASS</span>
          </div>
          <div class=" transition-all duration-300 hover:scale-105 bg-gray-100 text-black  p-4 flex flex-col items-center justify-center md:h-32 md:w-36 text-5xl ">
            <TbApi />
            <span className="  absolute text-5xl md:text-8xl font-bold text-gray-400  opacity-10 font-sans ">
              O6
            </span>
            <span className=" text-sm md:text-lg text-black">API</span>
          </div>
          <div class=" transition-all duration-300 hover:scale-105 bg-black    p-4 flex flex-col items-center justify-center md:h-32 md:w-36 text-5xl text-white ">
            <SiJest />
            <span className="  absolute text-5xl md:text-8xl font-bold text-gray-400  opacity-10 font-sans ">
              O7
            </span>
            <span className=" text-sm md:text-lg text-white">Jest</span>
          </div>
          <div class=" transition-all duration-300 hover:scale-105 bg-gray-100 text-black  p-4 flex flex-col items-center justify-center md:h-32 md:w-36 text-5xl ">
            <DiJavascript1 />
            <span className="  absolute text-5xl md:text-8xl font-bold text-gray-400  opacity-10 font-sans ">
              O8
            </span>
            <span className=" text-sm md:text-lg text-black">JavaScript</span>
          </div>
          <div class=" transition-all duration-300 hover:scale-105 bg-black    p-4 flex flex-col items-center justify-center md:h-32 md:w-36 text-5xl text-white ">
            <TbBrandRedux />
            <span className="  absolute text-5xl md:text-8xl font-bold text-gray-400  opacity-10 font-sans ">
              O9
            </span>
            <span className=" text-sm md:text-lg text-white"> Redux</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
