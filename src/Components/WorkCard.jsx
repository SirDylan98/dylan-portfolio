import React, { useEffect } from 'react'
import work from '../Assets/projects/workImg.jpeg'
import work2 from '../Assets/projects/realestate.jpg'
import {FaExternalLinkAlt} from 'react-icons/fa'
import {BsCodeSquare} from 'react-icons/bs'
import AOS from 'aos';
import 'aos/dist/aos.css'

export default function WorkCard(props) {
    useEffect(()=>{
        AOS.init({duration:2000})
    },[])
  return (
    <>
    {/* card item */}
    <div >
    <div data-aos="flip-right" data-aos-once="true" style={{backgroundImage:`url(${props.image})`}} className=" shadow-lg hover:border-2 hover:scale-105  duration-500 shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
      {/* hover effect */}
      <div className="opacity-0 group-hover:opacity-100 w-full  mx-auto">
          <div className="flex  flex-col justify-center text-center items-center">
          <span className="text-2xl font-bold text-center items-center flex text-gray-300 tracking-wider" >{props.title}</span>  
         <p className="text-gray-300">{props.overview}</p>
          </div>
        
        <div className=" text-center w-full flex justify-center pt-8">
          <a href="/" className="rounded-3xl bg-transparent mx-auto py-2 px-8 border-2 flex hover:rounded-full hover: bg-pink-600 border-[#62f8d7] text-gray-300 my-5">Demo <FaExternalLinkAlt className="my-auto mx-2"/></a>
          <a href="/" className="rounded-3xl bg-transparent mx-auto  py-2 px-8 border-2 flex hover:rounded-full hover: bg-pink-600 border-[#62f8d7] text-gray-300  my-5"> Code <BsCodeSquare size={20} className="my-auto mx-2 font-bold "/></a>
        </div>
      </div>
    </div>
    </div>
  </>
  )
}
