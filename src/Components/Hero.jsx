import React from 'react'
import {BsGithub,BsLinkedin,BsWhatsapp,BsArrowRightCircleFill} from 'react-icons/bs'
import{SiLeetcode} from 'react-icons/si'
import {AiOutlineMail} from 'react-icons/ai'
import Typed from 'react-typed'

export default function Hero() {
  return (
    <div name="home" className='w-full flex  h-screen  '>
        <div className='w-[80%] md:w-[60%] mx-auto flex  justify-center items-center'>
            <div className='flex flex-col justify-between items-centers'>
            <h1 className='text-[#62f8d7] font-semibold text-lg'>Hi my name is </h1>
            <h1 className=' py-2 text-gray-300 text-3xl md:text-5xl font-bold'>Dylan Dzvene</h1>
            <h1 className='py-2 text-gray-400 text-3xl md:text-5xl font-bold'>I am   <Typed
                strings={[
                    ' a Full stack Web Developer',
                    ' a Master of ReactJS ',
                    ' Good in Java and JavaScript']}
                    typeSpeed={40}
                    backSpeed={100}
                    className='mt-10'
                   
                    loop /></h1>
            <p className='py-2 text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ea illo quia labore fugiat commodi, obcaecati fuga dicta numquam illum nemo, error suscipit voluptatibus. In a earum quia debitis officia.</p>
            <div className='flex flex-col mt-4'>
                <div>
                <button className='bg-[#62f8d7] group rounded-lg px-4 flex py-2'>View Portfolio<span className='group-hover:rotate-90 duration-500'><BsArrowRightCircleFill size={20} className='my-auto ml-3'/></span>  </button>
                </div>
            
          
            </div>
            
                  
                
            
            </div>
            
            
        </div>
        <div className=' fixed flex-col  left-0 top-[38%] hidden md:flex'>
            <ul >
                <li className='w-[160px] h-[60] ml-[-100px] hover:ml-[-1px] duration-300 my-2'><a href="https://github.com/SirDylan98"  target="_blank" className='flex justify-between px-1 hover:text-pink-600  text-[#62f8d7]'>GitHub<BsGithub size={30}/></a></li>
                <li className='w-[160px] h-[60] ml-[-100px] hover:ml-[-1px] duration-300 my-2'><a href="https://www.linkedin.com/in/dylan-dzvene-004b0615a/" target="_blank"  className='flex justify-between px-1  hover:text-pink-600 text-[#62f8d7]'>LinkedIn<BsLinkedin size={30}/>  </a></li>
                <li className='w-[160px] h-[60] ml-[-100px] hover:ml-[-1px] duration-300 my-2'><a href="https://leetcode.com/dylandzvenetashinga/" target="_blank"  className='flex justify-between px-1 hover:text-pink-600  text-[#62f8d7]'>LeetCode<SiLeetcode size={30}/>  </a></li>
                <li className='w-[160px] h-[60] ml-[-100px] hover:ml-[-1px] duration-300 my-2'><a href="mailto:dylandzvenetashinga@gmail.com" target="_blank"  className='flex justify-between px-1 hover:text-pink-600  text-[#62f8d7]'>Email<AiOutlineMail size={30}/> </a></li>
                <li className='w-[160px] h-[60] ml-[-100px] hover:ml-[-1px] duration-300 my-2'><a href="https://wa.link/ber2y3" target="_blank"  className='flex justify-between px-1 hover:text-pink-600  text-[#62f8d7]'>WhatsApp<BsWhatsapp size={30}/> </a></li>
            
            </ul>
        </div>

    </div>
  )
}
