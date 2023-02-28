import React from "react";
import { Link } from "react-router-dom";

import { CurrProject } from "../Context/CurrentProject";
export default function ProjectOverview() {
  const {project}=CurrProject();
  const projectDetails = JSON.parse( localStorage.getItem("currentproject"))
  console.log(projectDetails)
  return (
    <>
    <div className="w-full mb-10">
    
     <div className="w-full h-screen mx-auto   mb-4 relative">
      
      <div className="w-full h-[40%]  md:h-[50%] relative">
        {/* Overlay */}
        <div className="w-full top-0 left-0 p-4 px-1 h-full rounded-xl text-gray-200 flex flex-col justify-center bg-black/50 absolute">
          <h1 className="px-4 text-2xl sm:text-3xl z-10 lg:text-5xl font-bold ">
            {" "}
             <span className="text-pink-600 z-10 my-4">{project?.title?.name===undefined?projectDetails.title.name:project?.title?.name}</span>
          </h1>
          <h1 className="px-4 text-xl sm:text-2xl z-10 lg:text-4xl  font-bold text-[#62f8d7] my-4">{project?.title?.name2===undefined?projectDetails.title.name2:project?.title?.name2}
            <span className=" text-gray-200"></span>
          </h1>
        </div>
        <div className='absolute w-full h-[100%] md:h-[100%]  bg-gradient-to-r from-black'></div>
        <img
          src={project?.image===undefined?projectDetails.image:project?.image}
          className="object-cover w-full h-[100%] rounded-xl"
          alt=""
        />
      </div>
      <div className="  text-center flex flex-col w-[90%] md:w-[50%] rounded-xl shadow-lg shadow-black  transform borderborder-gray-600 inset-x-0  mx-auto justify-center items-center  ">
        <p className="text-2xl text-gray-300 font-semibold border-b-2 border-pink-600">
          Technologies
        </p>
        <div className="md:flex  justify-between my-2">
          <p className="flex  font-semibold text-lg py-1 mx-1 text-gray-300">
            | {project?.skillstack?.skill1===undefined?projectDetails.skillstack?.skill2:project?.skillstack?.skill2} |
          </p>
          <p className="flex  font-semibold text-lg py-1 mx-1 text-gray-300">
           
          |   {project?.skillstack?.skill2===undefined?projectDetails.skillstack?.skill2:project?.skillstack?.skill2} |
          </p>
          <p className="flex  font-semibold text-lg py-1 mx-1 text-gray-300">
         
           | {project?.skillstack?.skill3===undefined?projectDetails.skillstack?.skill3:project?.skillstack?.skill3} |
          </p>
          <p className="flex  font-semibold text-lg py-1 mx-1 text-gray-300">
            | {project?.skillstack?.skill4===undefined?projectDetails.skillstack?.skill4:project?.skillstack?.skill4} |
          </p>
        </div>
      </div>
      <div className="w-[90%] md:w-[70%] mx-auto text-gray-300 mt-5">
        <p className="text-sm md:text-lg">
          {project?.description===undefined?projectDetails.description:project?.description}
        </p>
        <a href={project?.demolink===undefined?projectDetails.demolink:project?.demolink} target="_blank" className="rounded-full border-2 hover:scale-100 hover:bg-[#62f8d7] hover:text-black hover:font-semibold px-5 py-2  border-pink-600 text-[#62f8d7]">Demo</a>
        <a href={project?.codelink===undefined?projectDetails.codelink:project?.codelink} target="_blank" className="rounded-full border-2 hover:scale-100 hover:bg-[#62f8d7] hover:text-black hover:font-semibold px-5 py-2 ml-2 border-pink-600 text-[#62f8d7]">Code</a>
        <Link to='/'>
        <button className="rounded-full border-2 px-5 py-2 ml-2 border-pink-600 text-[#62f8d7]">Back</button>
        </Link>
        
       
      </div>
    </div>
    
    </div>
    
    </>
   
  );
}
