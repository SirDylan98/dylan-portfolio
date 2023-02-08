import React from "react";
import {
  BsGithub,
  BsLinkedin,
  BsWhatsapp,
  BsArrowRightCircleFill,
} from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import { AiOutlineMail } from "react-icons/ai";
import Typed from "react-typed";
import { Link } from "react-scroll";
import {motion} from 'framer-motion'

export default function Hero() {
  return (
    <div name="home" className="w-full flex  h-screen  ">
      <div className="w-[80%] md:w-[60%] mx-auto flex  justify-center items-center">
        <div className="flex flex-col justify-between items-centers">
          <h1 className="text-[#62f8d7] text-center font-semibold text-lg">
            <span className="text-pink-600"></span> Hi{" "}
            <span className="text-pink-600">my</span> name
            <span className="text-pink-600"> is</span>{" "}
          </h1>
          <h1 className=" py-2 text-gray-300 text-center text-3xl md:text-5xl font-bold">
            Dylan Dzvene
          </h1>
          <h1 className="py-2 text-gray-400 text-3xl text-center md:text-5xl font-bold">
            I am{" "}
            <Typed
              strings={[
                ' <strong className="text-[#62f8d7]">a Full stack Web Developer</strong>',
                " a Master of Front-End ",
                " Good at Java and JavaScript",
              ]}
              typeSpeed={40}
              backSpeed={100}
              className="mt-10"
              loop
            />
          </h1>
          <p className="py-2 text-gray-300">
            I focus on building mobile responsive web application for
            individuals and business. Am capable of doing both Front-End
            Development and Back-End Developement Solving real-world problems
            with programming is my strongest attribute.{" "}
          </p>
          <div className="flex flex-col mt-4">
            <motion.div className="flex justify-center items-center"
           
              whileHover={{}}
              transition={{}}
            >
              <Link activeClass="active" to="work" smooth={true} duration={800}>
                <a
                  href="work"
                  className="bg-[#62f8d7] group rounded-full font-bold my-auto text-xl px-8 flex py-3"
                >
                  My Work{" "}
                  <motion.span className="group-hover:rotate-90 duration-500"
                   animate={{scale:1.3}}
                   transition={{duration:1,delay:0,repeat:Infinity}}>
                    <BsArrowRightCircleFill
                   
                      size={30}
                      className="my-auto ml-3"
                    />
                  </motion.span>{" "}
                </a>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
      <div className=" fixed flex-col z-10 left-0 top-[38%] hidden md:flex">
        <motion.ul
        initial={{x:-200}}
        animate={{x:0}}
        transition={{duration:1, type:"spring" , stiffness:100}}
        >
          <motion.li className="w-[160px] h-[60] ml-[-100px] hover:ml-[-1px] duration-300 my-2"
          initial={{}}
          animate={{}}
          transition={{}}
          >
            <a
              href="https://github.com/SirDylan98"
              target="_blank"
              className="flex justify-between px-1 hover:text-pink-600  text-[#62f8d7]"
            >
              GitHub
              <BsGithub size={30} />
            </a>
          </motion.li>
          <li className="w-[160px] h-[60] ml-[-100px] hover:ml-[-1px] duration-300 my-2">
            <a
              href="https://www.linkedin.com/in/dylan-dzvene-004b0615a/"
              target="_blank"
              className="flex justify-between px-1  hover:text-pink-600 text-[#62f8d7]"
            >
              LinkedIn
              <BsLinkedin size={30} />{" "}
            </a>
          </li>
          <li className="w-[160px] h-[60] ml-[-100px] hover:ml-[-1px] duration-300 my-2">
            <a
              href="https://leetcode.com/dylandzvenetashinga/"
              target="_blank"
              className="flex justify-between px-1 hover:text-pink-600  text-[#62f8d7]"
            >
              LeetCode
              <SiLeetcode size={30} />{" "}
            </a>
          </li>
          <li className="w-[160px] h-[60] ml-[-100px] hover:ml-[-1px] duration-300 my-2">
            <a
              href="mailto:dylandzvenetashinga@gmail.com"
              target="_blank"
              className="flex justify-between px-1 hover:text-pink-600  text-[#62f8d7]"
            >
              Email
              <AiOutlineMail size={30} />{" "}
            </a>
          </li>
          <li className="w-[160px] h-[60] ml-[-100px] hover:ml-[-1px] duration-300 my-2">
            <a
              href="https://wa.link/ber2y3"
              target="_blank"
              className="flex justify-between px-1 hover:text-pink-600  text-[#62f8d7]"
            >
              WhatsApp
              <BsWhatsapp size={30} />{" "}
            </a>
          </li>
        </motion.ul>
      </div>
    </div>
  );
}
