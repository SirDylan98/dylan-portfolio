import React from "react";

export default function Contact() {
  return (
    <div
      name="contact"
      className="flex flex-col w-full justify-center h-screen items-center p-4"
    >
      
            <p className="text-4xl text-center text-gray-300 border-b-4 border-pink-600 font-bold">
              Contact
            </p>
            <p className="text-gray-300 my-4">
              //
              <span className="font-bold text-[#62f8d7]"> WhatsApp </span> via
              the Social Icons or Email <span className="font-bold text-[#62f8d7]">dylandzvenetashinga@gmail.com</span> 
            </p>
          
        <form className="w-full max-w-[600px] flex flex-col gap-4  " action="https://getform.io/f/0acd65e9-4522-4804-b4f8-41005400343b" method="POST">
    
          <input type="text" className="flex rounded-lg   pl-4 py-3" placeholder="Name" name="name" />
          <input type="text" className="py-3  rounded-lg  pl-4" placeholder="Email" name="email" />
          <textarea name="message" className=" rounded-lg  pl-4 py-3" id="" placeholder="Message" cols="30" rows="7"></textarea>
          <button className=" border-2 hover:text-white text-lg border-[#62f8d7] rounded-sm py-2 px-10 hover:scale-105 duration-300 text-[#62f8d7] hover:bg-pink-600 flex justify-center mx-auto">Get in Touch</button>
        </form>

       
  
    </div>
  );
}
