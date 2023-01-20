import React from 'react';

const Abouts = () => {
  return (
    <div name='about' className='w-full h-[500px] flex flex-col justify-center items-center bg-[#0a192f] text-gray-300'>
      <p className='text-4xl font-bold inline border-b-4 border-pink-600 my-5'>
              About
            </p>
      
     
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-center text-4xl font-bold'>
              <p>Hi. I'm Dylan Dzvene, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. I also love solving problems
               hence I am a LeetCoder. Fully capable of doing remote Work. </p>  
            </div>
          </div>
     
    </div>
  );
};

export default Abouts;
