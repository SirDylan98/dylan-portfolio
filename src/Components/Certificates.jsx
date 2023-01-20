import React, { useEffect } from "react";
import algocert from "../Assets/algocert.PNG";
import javacert from "../Assets/java.PNG";
import reactcert from "../Assets/reactcert.PNG";
import AOS from 'aos';
import 'aos/dist/aos.css'


export default function Certificates() {
  useEffect(()=>{
    AOS.init({duration:2000})
},[])
  return (
    <div name="certificates" className=" w-full flex flex-col sm:h-screen  items-center justify-center    ">
  
      <p className='text-2xl md:text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 mt-10 '>BootCamp Certificates</p>
      <div    className="grid gap-5 md:gap-10  md:grid-cols-3 w-[80%] ">
        
        <div data-aos="flip-right" data-aos-once="true" className="">
          <div className="w-full shadow-md shadow-[#040c16] hover:my-5  duration-500 rounded-xl my-10 ">
            <img
              src={algocert}
              alt=""
              className="rounded-lg  flex h-full  my-auto  items-center border-4  border-[#0a192f] "
            />
            <div className="flex justify-center py-2 items-center">
            <h1 className="mr-3 text-gray-300">Algorithmic Toolbox</h1>
            <a href="https://www.coursera.org/account/accomplishments/verify/URLESNKMQYJX" target="_blank" className="border-2 hover:scale-105 hover:bg-pink-600 hover:text-white hover:text-[#62f8d7] duration-500 bottom-10 border-[#62f8d7] px-10 text-[#62f8d7] py-2 rounded-full">Verify</a>
            
            
            </div>
            
          </div>
        </div >
        <div data-aos="flip-right" data-aos-once="true" >
          <div className="w-full shadow-lg hover:my-5  duration-500 shadow-[#040c16]  rounded-xl my-10 ">
            <img
              src={reactcert}
              alt=""
              className="rounded-lg  flex h-full  my-auto  items-center border-4  border-[#0a192f] "
            />
            <div className="flex justify-center py-2 items-center">
            <h1 className="mr-3 text-gray-300">ReactJS Fundamentals</h1>
            <a href="https://www.coursera.org/account/accomplishments/verify/83ZHEZ3RAZ8U" target="_blank" className="border-2 hover:scale-105 hover:bg-pink-600 hover:text-white hover:text-[#62f8d7] duration-500 bottom-10 border-[#62f8d7] px-10 text-[#62f8d7] py-2 rounded-full">Verify</a>
            
            
            </div>
            
          </div>
        </div>
        <div data-aos="flip-right" data-aos-once="true" >
          <div  className="w-full shadow-lg  hover:my-5  duration-500 shadow-[#040c16]  rounded-xl my-10 ">
            <img
              src={javacert}
              alt=""
              className="rounded-lg  flex h-full  my-auto  items-center border-4  border-[#0a192f] "
            />
            <div className="flex justify-center py-2 items-center">
            <h1 className="mr-3 text-gray-300">Java OOP Masterclass</h1>
            <a href="https://www.coursera.org/account/accomplishments/verify/TQ37WMULKX4P" target="_blank" className="border-2 hover:scale-105 hover:bg-pink-600 hover:text-white hover:text-[#62f8d7] duration-500 bottom-10 border-[#62f8d7] px-10 text-[#62f8d7] py-2 rounded-full">Verify</a>
            
            
            </div>
            
          </div>
        </div>
       
      </div>
    </div>
  );
}
