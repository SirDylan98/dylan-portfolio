import React, { useEffect } from "react";
import { CurrProject } from "../Context/CurrentProject";
import { FaExternalLinkAlt } from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function WorkCard(props) {
  const { updateSelectedProject } = CurrProject();

  const handleClick = async () => {
    updateSelectedProject(props.data);
  };

  useEffect(() => {
    AOS.init({ duration: 2000 });
    //setImggg(props.image)
  }, []);
  return (
    <>
      {/* card item */}
      <div onClick={handleClick}>
        <div
          data-aos="flip-right"
          data-aos-once="true"
          style={{ backgroundImage: `url(${props.data.image})` }}
          className="  shadow-lg hover:border-2 hover:scale-105  duration-500 shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
        >
          {/* hover effect */}
          <div className="opacity-0 group-hover:opacity-90 hover:mb-6 duration-500 w-full  mx-auto">
            <div className="flex  flex-col justify-center text-center items-center">
              <span className="text-lg md:text-xl flex-col font-bold text-center items-center flex text-gray-300 tracking-wider">
                {props.data.title.name}
                <p>{props.data.title.name2}</p>
              </span>
              <p className=" text-[#62f8d7]">{props.data.overview}</p>
            </div>

            <div className=" text-center w-full flex justify-center pt-8">
              <button
                onClick={handleClick}
                onMouseEnter={handleClick}
                className="rounded-3xl bg-transparent mx-auto py-2 px-8 border-2 flex hover:rounded-full hover: bg-pink-600 border-[#62f8d7] text-gray-300 my-5"
              >
                {/* {Button link overview} */}
                <Link className="flex" to="/project">
                  Project OverView
                  <FaExternalLinkAlt className="my-auto mx-2" />
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
