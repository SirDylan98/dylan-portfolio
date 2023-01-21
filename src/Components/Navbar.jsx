import React, { useState } from "react";
import logo from "../Assets/DD.png";
import { BiMenuAltRight } from "react-icons/bi";
import { RiMenu4Fill } from "react-icons/ri";
import { FaRegWindowClose } from "react-icons/fa";
import { TfiClose } from "react-icons/tfi";
import { MdDownload } from "react-icons/md";
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
    <div className="fixed w-full h-[80px] flex justify-between z-40 items-center bg-[#0a192f] text-black ">
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
              <Link
                activeClass="active"
                to="about"
                smooth={true}
                duration={800}
              >
                About
              </Link>
            </li>
            <li className="px-3 my-auto text-gray-300 text-lg font-semibold hover:text-[#62f8d7]">
              <Link activeClass="active" to="work" smooth={true} duration={800}>
                Projects
              </Link>
            </li>
            <li className="px-3 my-auto text-gray-300 text-lg hover:text-[#62f8d7]">
              <Link
                activeClass="active"
                to="skills"
                smooth={true}
                duration={800}
              >
                Skills
              </Link>
            </li>
            <li className="px-3 my-auto text-gray-300 text-lg hover:text-[#62f8d7]">
              <Link
                activeClass="active"
                to="certificates"
                smooth={true}
                duration={800}
              >
                Certificates
              </Link>
            </li>

            <li className="px-3 my-auto text-gray-300 text-lg hover:text-[#62f8d7]">
              <Link
                activeClass="active"
                to="contact"
                smooth={true}
                duration={500}
              >
                Contact
              </Link>
            </li>
            <button className="border-2 hover:bg-pink-600 hover:text-gray-300 duration-500 border-[#62f8d7] px-10 flex items-center text-gray-300 py-2 rounded-full">
              Resume <MdDownload size={20} className="text-[#62f8d7]" />{" "}
            </button>
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
            <Link
              onClick={handleNav}
              activeClass="active"
              to="home"
              smooth={true}
              duration={800}
            >
              {home}
            </Link>
          </li>
          <li className=" my-8 text-gray-300 text-lg">
            {" "}
            <Link
              activeClass="active"
              to="about"
              onClick={handleNav}
              smooth={true}
              duration={800}
            >
              {about}
            </Link>
          </li>
          <li className=" my-8  text-lg font-semibold text-[#62f8d7]">
            <Link
              onClick={handleNav}
              activeClass="active"
              to="work"
              smooth={true}
              duration={800}
            >
              {work}
            </Link>
          </li>
          <li className=" my-8 text-gray-300 text-lg">
            <Link
              activeClass="active"
              to="skills"
              onClick={handleNav}
              smooth={true}
              duration={800}
            >
              {skills}
            </Link>
          </li>
          <li className=" my-8 text-gray-300 text-lg">
            <Link
              activeClass="active"
              to="certificates"
              onClick={handleNav}
              smooth={true}
              duration={800}
            >
              {certificate}
            </Link>
          </li>
          <li className=" my-8 text-gray-300 text-lg">
          <Link
              activeClass="active"
              to="contact"
              onClick={handleNav}
              smooth={true}
              duration={800}
            >
            {contact}
            </Link></li>
          <button className="border-2 border-[#62f8d7] px-10 flex items-center text-gray-300 py-2 rounded-full">
            Resume <MdDownload size={20} className="text-[#62f8d7]" />
          </button>
        </ul>
      </div>
    </div>
  );
}
