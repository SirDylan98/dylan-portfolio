import React from "react";
import mypic from "../Assets/mypic3.png";

export default function About() {
  return (
    <div className=" w-full  flex ">
      <div className="w-[80%] md:w-[60%]  mt-0  mx-auto  flex flex-col justify-start">
        <h1 className="text-gray-300 border-b-4 border-b-[#62f8d7] mx-auto text-3xl ">
          {" "}
          About
        </h1>
        <div className="grid gap-10 mt-4 md:grid-cols-2">
          <div>
            <p className="text-gray-400 text-lg text-center mt-8">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. A in
              quidem quo delectus molestiae aut et, expedita inventore
              excepturi! Quas eius eligendi ab consequuntur temporibus illo
              tenetur culpa hic est?
            </p>
            <p className="text-gray-400 text-lg text-center mt-8">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. A in
              quidem quo delectus molestiae aut et, expedita inventore
              excepturi! Quas eius eligendi ab consequuntur temporibus illo
              tenetur culpa hic est?
            </p>
           
          </div>
          <div>
            <img
              src={mypic}
              alt=""
              className="rounded-lg h-[200px] md:h-[350px] my-auto mt-14 object-cover items-center border shadow-2xl  mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
