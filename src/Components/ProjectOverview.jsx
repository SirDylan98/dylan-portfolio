import React from "react";
import { Link } from "react-router-dom";
import { overview } from "./WorkCard";
export default function ProjectOverview() {
  return (

    <>
    <div className="w-full mb-10">
    
     <div className="w-full h-screen mx-auto   mb-4 relative">
      
      <div className="w-full h-[40%]  md:h-[50%] relative">
        {/* Overlay */}
        <div className="w-full top-0 left-0 p-4 px-1 h-full rounded-xl text-gray-200 flex flex-col justify-center bg-black/70 absolute">
          <h1 className="px-4 text-2xl sm:text-3xl z-10 lg:text-5xl font-bold ">
            {" "}
             <span className="text-pink-600 z-10 my-4">{overview.title.name}</span>
          </h1>
          <h1 className="px-4 text-xl sm:text-2xl z-10 lg:text-4xl  font-bold text-[#62f8d7] my-4">{overview.title.name2}
            <span className=" text-gray-200"></span>
          </h1>
        </div>
        <div className='absolute w-full h-[100%] md:h-[100%]  bg-gradient-to-r from-black'></div>
        <img
          src={overview.image}
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
            | {overview.skillstack.skill1} |
          </p>
          <p className="flex  font-semibold text-lg py-1 mx-1 text-gray-300">
           
          |   {overview.skillstack.skill2} |
          </p>
          <p className="flex  font-semibold text-lg py-1 mx-1 text-gray-300">
         
           | {overview.skillstack.skill3} |
          </p>
          <p className="flex  font-semibold text-lg py-1 mx-1 text-gray-300">
            | {overview.skillstack.skill4} |
          </p>
        </div>
      </div>
      <div className="w-[90%] md:w-[70%] mx-auto text-gray-300 mt-5">
        <p className="text-sm md:text-lg">
          {overview.description}
        </p>
        <a href={overview.demolink} target="_blank" className="rounded-full border-2 hover:scale-100 hover:bg-[#62f8d7] hover:text-black hover:font-semibold px-5 py-2  border-pink-600 text-[#62f8d7]">Demo</a>
        <a href={overview.codelink} target="_blank" className="rounded-full border-2 hover:scale-100 hover:bg-[#62f8d7] hover:text-black hover:font-semibold px-5 py-2 ml-2 border-pink-600 text-[#62f8d7]">Code</a>
        <Link to='/'>
        <button className="rounded-full border-2 px-5 py-2 ml-2 border-pink-600 text-[#62f8d7]">Back</button>
        </Link>
        
       
      </div>
    </div>
    
    </div>
    
    </>
   
  );
}
