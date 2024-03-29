import React, { useState } from "react";
import logo from "../Assets/mylogoo.png";
import { RiMenu4Fill } from "react-icons/ri";
import { TfiClose } from "react-icons/tfi";
import {motion} from 'framer-motion';
import { Link } from "react-scroll";
export default function Navbar() {
  const home = "< Home >";
  const work = "< Projects >";
  const about = "< About >";
  const skills = "< Skills >";
  const certificate = "< Certificates >";
  const contact = "< Contact >";
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    console.log("botton clicked");
  };

  return (
    <motion.div className="fixed w-full h-[80px] flex justify-between z-40 items-center bg-[#0a192f] text-black "
    initial={{y:'-100vh'}}
    animate={{y:0}}
    transition={{duration:1, delay:0, type:"spring", stiffness:50}}
    >
      <div className="">
        <img src={logo} alt="dfsdf" className="w-32 h-24 pl-5" />
      </div>
      <div>
        <div className=" flex">
          <ul className="sm:flex mx-8 hidden">
            <li className="px-3 my-auto text-gray-300 text-lg hover:text-[#62f8d7]">
              <Link activeClass="active" to="home" smooth={true} duration={800}>
                Home
              </Link>
            </li>
            <li className="px-3 my-auto text-gray-300 text-lg hover:text-[#62f8d7]">
              <Link to="about" smooth={true} duration={800}>
                About
              </Link>
            </li>
            <li className="px-3 my-auto text-gray-300 text-lg font-semibold hover:text-[#62f8d7]">
              <Link activeClass="active" to="work" smooth={true} duration={800}>
                Projects
              </Link>
            </li>
            <li className="px-3 my-auto text-gray-300 text-lg hover:text-[#62f8d7]">
              <Link to="skills" smooth={true} duration={800}>
                Skills
              </Link>
            </li>
            <li className="px-3 my-auto text-gray-300 text-lg hover:text-[#62f8d7]">
              <Link to="certificates" smooth={true} duration={800}>
                Certificates
              </Link>
            </li>

            <li className="px-3 my-auto text-gray-300 text-lg hover:text-[#62f8d7]">
              <Link to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
            <a href="https://drive.google.com/file/d/1UBYBE_yhi4OYo_FyUYA4MA7WwllVV0qj/view?usp=sharing" target="_blank" className="border-2 hover:bg-pink-600 hover:text-gray-300 duration-500 border-[#62f8d7] px-10 flex items-center text-gray-300 py-2 rounded-full">
              Resume 
            </a>
          </ul>
        </div>
        {/* <RiMenu4Fill size={30} className="rounded-full text-[#62f8d7] absolute right-9 top-10 sm:hidden" /> */}
      </div>
      <div className=" sm:hidden" onClick={handleNav}>
        {nav ? (
          <TfiClose
            size={30}
            className="rounded-full  text-[#62f8d7] m-5 absolute top-0 right-0 z-50 "
          />
        ) : (
          <RiMenu4Fill
            size={30}
            className="rounded-full  text-[#62f8d7] m-5 absolute top-0 right-0 z-50 "
          />
        )}
      </div>
      {/* mobile menu  */}
      <div className="sm:hidden">
        <ul
          className={
            nav
              ? "flex flex-col absolute right-0 top-0 w-[100%] bg-[#0a192f] h-screen justify-center items-center  "
              : "fixed hidden"
          }
        >
          <li className=" my-8 text-gray-300 text-2xl">
            {" "}
            <Link onClick={handleNav} to="home" smooth={true} duration={800}>
              {home}
            </Link>
          </li>
          <li className=" my-8 text-gray-300 text-lg">
            {" "}
            <Link to="about" onClick={handleNav} smooth={true} duration={800}>
              {about}
            </Link>
          </li>
          <li className=" my-8  text-lg font-semibold text-[#62f8d7]">
            <Link onClick={handleNav} to="work" smooth={true} duration={800}>
              {work}
            </Link>
          </li>
          <li className=" my-8 text-gray-300 text-lg">
            <Link to="skills" onClick={handleNav} smooth={true} duration={800}>
              {skills}
            </Link>
          </li>
          <li className=" my-8 text-gray-300 text-lg">
            <Link
              to="certificates"
              onClick={handleNav}
              smooth={true}
              duration={800}
            >
              {certificate}
            </Link>
          </li>
          <li className=" my-8 text-gray-300 text-lg">
            <Link to="contact" onClick={handleNav} smooth={true} duration={800}>
              {contact}
            </Link>
          </li>
          <a href="https://drive.google.com/file/d/1UBYBE_yhi4OYo_FyUYA4MA7WwllVV0qj/view?usp=sharing" target='_blank' className="border-2 border-[#62f8d7] px-10 flex items-center text-gray-300 py-2 rounded-full">
            Resume 
          </a>
        </ul>
      </div>
    </motion.div>
  );
}
