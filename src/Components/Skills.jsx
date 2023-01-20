import React, { useEffect } from "react";

import HTML from "../Assets/html.png";
import CSS from "../Assets/css.png";
import JavaScript from "../Assets/javascript.png";
import ReactImg from "../Assets/react.png";
import Node from "../Assets/node.png";
import FireBase from "../Assets/firebase.png";
import GitHub from "../Assets/github.png";
import Tailwind from "../Assets/tailwind.png";
import Mongo from "../Assets/mongo.png";
import java from "../Assets/javalogo.png";
import typescript from "../Assets/typescript.png";
import spring from "../Assets/springlogo.png";
import aws from "../Assets/aws.png";

import AOS from "aos";
import "aos/dist/aos.css";
import { FaJava, FaPython, FaReact, FaEnvira, FaAws } from "react-icons/fa";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div
      name="skills"
      className="w-full sm:h-screen flex items-center bg-[#0a192f] mt-10 text-gray-300"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto mt-10 p-4 flex flex-col items-center justify-center   w-full h-full">
        <div className=" flex flex-col items-center justify-center ">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-4">// These are the technologies I've worked with</p>
        </div>

        <div
          data-aos="flip-right"
          data-aos-once="true"
          className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8"
        >
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-32 mx-auto" src={java} alt="HTML icon" />
            <p className="my-4">JAVA</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={spring} alt="HTML icon" />
            <p className="my-4">SPRING BOOT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Mongo} alt="HTML icon" />
            <p className="my-4">MONGO DB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={aws} alt="HTML icon" />
            <p className="my-4">AWS CLOUD</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="HTML icon" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={typescript} alt="HTML icon" />
            <p className="my-4">TYPESCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="HTML icon" />
            <p className="my-4">CSS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
