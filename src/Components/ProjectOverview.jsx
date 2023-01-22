import React from "react";
import {
  AiOutlineDeploymentUnit,
  AiOutlineMenu,
  AiOutlineMenuFold,
} from "react-icons/ai";
import { BsFillDice3Fill } from "react-icons/bs";

export default function ProjectOverview() {
  return (
    <div className="w-full h-screen mx-auto p-4 relative">
      <div className="w-full  h-[50%] relative">
        {/* Overlay */}
        <div className="w-full top-0 left-0 p-4 h-full rounded-xl text-gray-200 flex flex-col justify-center bg-black/90 absolute">
          <h1 className="px-4 text-4xl sm:text-4xl  lg:text-6xl font-bold ">
            {" "}
            Criminal <span className="text-pink-600 my-4">Tracking</span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-4xl lg:text-6xl  font-bold text-[#62f8d7] my-4">
            Meals <span className=" text-gray-200">Delivered</span>
          </h1>
        </div>
        <img
          src="https://images.pexels.com/photos/38271/ipad-map-tablet-internet-38271.jpeg?auto=compress&cs=tinysrgb&w=600"
          className="object-cover w-full h-[100%] rounded-xl"
          alt=""
        />
      </div>
      <div className="  text-center flex flex-col w-[40%] md:w-[50%] rounded-xl shadow-lg shadow-black  transform borderborder-gray-600 inset-x-0  mx-auto justify-center items-center  ">
        <p className="text-2xl text-gray-300 font-semibold border-b-2 border-pink-600">
          Technologies
        </p>
        <div className="md:flex justify-between my-2">
          <p className="flex  font-semibold text-lg py-1 mx-1 text-gray-300">
            | App Security |
          </p>
          <p className="flex  font-semibold text-lg py-1 mx-1 text-gray-300">
            {" "}
            App Security |
          </p>
          <p className="flex  font-semibold text-lg py-1 mx-1 text-gray-300">
            {" "}
            App Security |
          </p>
          <p className="flex  font-semibold text-lg py-1 mx-1 text-gray-300">
            JavaScript |
          </p>
        </div>
      </div>
      <div className="w-[60%] mx-auto text-gray-300 mt-5">
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        vitae quo dolorem quos delectus expedita nam laboriosam excepturi
        voluptatem, consectetur error odit tempora voluptatum a, autem totam!
        Atque, aliquid dolorum.
        </p>
        <button className="rounded-full border px-5 py-2  border-pink-600 text-[#62fe82]">Demo</button>
        <button className="rounded-full border px-5 py-2 ml-2 border-pink-600 text-[#62fe82]">Code</button>
       
      </div>
    </div>
  );
}
