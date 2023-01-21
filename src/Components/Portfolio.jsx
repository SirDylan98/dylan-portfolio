import React from "react";
import work from '../Assets/projects/workImg.jpeg'
import work2 from '../Assets/projects/realestate.jpg'
import {FaExternalLinkAlt} from 'react-icons/fa'
import {BsCodeSquare} from 'react-icons/bs'
import WorkCard from "./WorkCard";
export default function Portfolio() {
  return (
    <div name="work" className="w-full sm:h-screen flex items-center text-gray-300">
      <div className=" mx-auto sm:mt-20 p-12 flex flex-col justify-center  w-full h-full">
        <div className="pb-8 flex-col flex justify-center items-center">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">Projects</p>
          <p className="py-4">Check out some of my recent Projects</p>
        </div>
          {/* grid */}
        <div  className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* card item */}
          
          <WorkCard image={work} title="React Project" overview="sfsfdfsd<br/>fsfsdfsd"/>
          <WorkCard image={work2} title="React Project" overview="Ecommerce website with React js and Spring boot"/>
          <WorkCard image={work} title="React Project" overview="sfsfdfsd<br/>fsfsdfsd"/>
          <WorkCard image={work2} title="React Project" overview="sfsfdfsd<br/>fsfsdfsd"/>
          <WorkCard image={work} title="React Project" overview="sfsfdfsd<br/>fsfsdfsd"/>
          <WorkCard image={work2} title="React Project" overview="sfsfdfsd<br/>fsfsdfsd"/>
          
        </div>
       
      </div>
    </div>
  );
}
