import React from "react";
import {motion} from "framer-motion"
const Abouts = () => {
  return (
    <motion.div
      name="about"
      className="w-full h-[500px] mt-36 sm:mt-10 flex flex-col justify-center items-center bg-[#0a192f] text-gray-300"
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      exit={{opacity:0}}
      transition={{duration:1.5,delay:0.5,type:"spring" ,stiffness:50}}
    >
      <p className="text-4xl font-bold inline border-b-4 border-pink-600 my-5">
        About
      </p>

      <div className="p-24 md:p-16 w-full grid sm:grid-cols-2 gap-8 px-4">
        <div className=" text-center text-4xl font-bold">
          <p>
            Hi. I'm Dylan Dzvene, nice to meet you. Please take a look around.
          </p>
        </div>
        <div>
          <p>
            I specialize in developing mobile responsive front-end UI apps that
            connect with APIs and other backend technologies. I'm also good at
            developing server-side applications using
            <span className="font-bold text-[#62f8d7]">
              JAVA AND SPRING BOOT
            </span>{" "}
            .   Though I am most proficient in designing front-end applications with
            HTML, CSS,
            <span className="font-bold text-pink-600">
              JavaScript, TypeScript ,and React
            </span>{" "}
            , I am a quick learner who can quickly take up new tech stacks as
            needed. Being a great developer, in my opinion, is about finding the
            most optimum solution to a problem rather than employing a specific
            language. In <span className="font-bold text-[#62f8d7]"> 2018</span>
            , I began working in{" "}
            <span className="font-bold text-[#62f8d7]">
              web development and digital marketing
            </span>{" "}
            , Optimizing WordPress website for Search engine ranking(SEO). {" "}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Abouts;
