import React from 'react'
import {FaJava,FaPython,FaReact,FaEnvira,FaAws} from 'react-icons/fa'
export default function Footer() {
  return (
    <div className="flex mt-20 w-full h-20">
      {/* Start of grid */}
      <div className=" w-[90%] h-36 my-10 mx-auto grid gap-10 lg:grid-cols-2 ">
        <div className="col-span-2 text-white">
          <h1 className="p-4 text-gray-300 text-2xl md:text-4xl font-bold">
            Dylan Dzvene
          </h1>
          <p className='hidden md:flex'>
          First, solve the problem. Then, write the code. Make it work, make it right, make it fast. Any fool can write code that a computer can understand. Good programmers write code that humans can understand.
          </p>
          <div className=' flex justify-between  pt-2 '>
          <FaJava size={40}/>
          <FaPython size={40}/>
          <FaReact size={40}/>
          <FaEnvira size={40}/>
          <FaAws size={40}/>
          </div>
          
        </div>
        
       
      </div>
    </div>
  )
}
