import React from "react";
import sampleVideo from '../MovieApp/Images/movieApp_preview.gif';
// import samImg from "../../Assets/Space Tourism.png";

function Part2({ projectTitle,projectDesc,secDesc,aboutProject,samImg1,samImg2,samImg3,samImg4,samImg5,samImg6

}) {
  return (
    <div className="scroll_bar w-full h-screen bg-red-500 p-4 px-10 md:overflow-y-scroll ">
      <div className=" bg-teal-600 flex flex-col  gap-6">
        <img src="../../Assets/elearning.png" alt="sampleImg" />
        <div className=" text-4xl font-bold">{projectTitle}</div>
        <div className=" opacity-60 text-lg">
         {projectDesc}
        </div>
        <div className=" mt-14 font-bold text-xl"> What can Website do ? </div>
        <div>{secDesc}</div>
        <div>
          {aboutProject}
        </div>
        <ul className=" w-2/3 flex flex-col list-disc ml-20">
          <li>We tailored the app to Macy's </li>
          <li>We tailored the app to Macy's </li>
          <li>We tailored the app to Macy's </li>
          <li>We tailored the app to Macy's </li>
        </ul>
        <div className=" max-w-2/3 bg-red-800">
          <h2 className=" text-xl font-bold mt-8">Preview</h2>
          <embed src={sampleVideo} className=" w-full" />
        </div>

        <div>Screens</div>

        <div className="grid grid-cols-2 gap-1">
          <div className="bg-yellow-500 ">
            <img src={samImg1} alt="Image 1" className="w-full h-auto " />
          </div>
          <div className="bg-yellow-500 ">
            <img src={samImg2} alt="Image 2" className="w-full h-auto " />
          </div>
          <div className="bg-yellow-500 ">
            <img src={samImg3} alt="Image 3" className="w-full h-auto " />
          </div>
          <div className="bg-yellow-500 ">
            <img src={samImg4} alt="Image 4" className="w-full h-auto " />
          </div>
          <div className="bg-yellow-500  ">
            <img src={samImg5} alt="Image 5" className="w-full h-auto " />
          </div>
          <div className="bg-yellow-500 ">
            <img src={samImg6} alt="Image 6" className="w-full h-auto " />
          </div>
        </div>

        <ul className=" w-2/3 flex flex-col list-disc ml-20">
          {" "}
          Dependencies
          <li>We tailored the app to Macy's </li>
          <li>We tailored the app to Macy's </li>
          <li>We tailored the app to Macy's </li>
          <li>We tailored the app to Macy's </li>
        </ul>

        <h1 className=" font-bold text-xl mt-10">Getting Started</h1>
        <div className=" w-10/12 flex flex-col gap-4 rounded-lg overflow-x-scroll bg-gray-200 p-4">
          <span>git clone https://github.com/mitulsavani/react-native-macysExpress.git</span>
          <span> npm install </span>
          <span> npm install </span>
          <span> npm install </span>
          
        </div>

        <div className=" flex flex-col gap-4 p-4">
            <span className=" font-bold text-2xl">Feedback</span>
            <span className="">
              In case you have any feedback or questions, 
              feel free to open a new issues on this repo or reach out to me 
            </span>
        </div>
      </div>
    </div>
  );
}

export default Part2;
