import React from "react";
import policeapp from "../Assets/projects/policeproject.PNG";
import netflixapp from "../Assets/projects/netflixproject.PNG";
import cryptoapp from "../Assets/projects/cryptoproject.PNG";
import work2 from "../Assets/projects/realestate.jpg";
import { FaExternalLinkAlt } from "react-icons/fa";
import { BsCodeSquare } from "react-icons/bs";
import WorkCard from "./WorkCard";
export default function Portfolio() {
 
  const descpoliceapp =
    " The main aim of this systems is to use facial recognition technologies in cctv live feeds and then try to recognize wanted personals or criminals. I used python to run face recognition via web-cam as a cctv simulator. The location of the spotted personal is the displayed on a web application which is this application. From here the police officer can the click on the marker to see the details of the suspects and also see the nearest Agent to the suspect location. This app demonstrated my ability to intergated 2 different technologies, my API skills and Vast KNOWLEDGE OF TYPESCRIPT and JAVASCRIPT LIBRARIES. ";
  const desccrypto="This is a watchlist dashboard for Crypto currencies, the appp allows you to search a currency and also save to your watchlist. The app uses Firebase Auth for Authentication and the data is being fetched from COIN GECKO API.  This application demonstrates my design skills as the app is 100% mobile responsive facilitated by media query. The app also has a DARK AND LIGHT THEME  demonstrating my React Context API knowlegde.";
  const descnetflix="this is a clone of a popular movies streaming web application NetFlix. This is application is only Front-End, with plans of build the back end using Spring Boot in the coming weeks. This application Uses Lazy loading making this web application loads 20% faster. This project demonstrates my design skills and my CSS skills"  
  
  
  const datapolice = {
    image: policeapp,
    title: {
      name: "Face Recognition and Geolocation",
      name2: "Criminal tracking system",
    },

    overview: "Intended for Zimbabwe Republic Police",
    description:descpoliceapp,
    demolink: "https://cctv2-dissertation.web.app/",
    codelink: "https://github.com/SirDylan98/Police-Criminal-tracking-app",
    skillstack: {
      skill1: "React",
      skill2: "Firebase",
      skill3: "TypeScript",
      skill4: "CSS",
    },
  };
  const datacryto = {
    image: cryptoapp,
    title: {
      name: "Crypto Currency",
      name2: "Watchlist Dashboard",
    },

    overview: "Display realtime Market Data",
    description:desccrypto,
    demolink: "https://crypto-watchlist-925c7.web.app",
    codelink: "https://github.com/SirDylan98/cryptoWatch-app",
    skillstack: {
      skill1: "React",
      skill2: "Firebase",
      skill3: "JavaScript",
      skill4: "CSS",
    },
  };
  const dataneflix = {
    image: netflixapp,
    title: {
      name: "Netflix",
      name2: "Rebuild",
    },

    overview: "Movie Streaming App",
    description:descnetflix,
    demolink: "https://netflix-app-5a239.web.app",
    codelink: "https://github.com/SirDylan98/netflix-clone-dylan",
    skillstack: {
      skill1: "React",
      skill2: "JavaScript",
      skill3: "HTML",
      skill4: " Tailwind CSS",
    },
  };
  const data = {
    image: netflixapp,
    title: {
      name: "Netflix",
      name2: "Rebuild",
    },

    overview: "Movie Streaming App",
    description:descnetflix,
    demolink: "https://netflix-app-5a239.web.app",
    codelink: "https://github.com/SirDylan98/netflix-clone-dylan",
    skillstack: {
      skill1: "React",
      skill2: "JavaScript",
      skill3: "HTML",
      skill4: " Tailwind CSS",
    },
  };
  return (
    <div
      name="work"
      className="w-full mt:20 sm:h-screen flex items-center text-gray-300"
    >
      <div className=" mx-auto mt:20 sm:mt-20 p-4 md:p-12 flex flex-col justify-center  w-full h-full">
        <div className="pb-8 flex-col flex justify-center items-center">
          <p className="text-4xl mt-36 font-bold inline border-b-4 text-gray-300 border-pink-600">
            Projects
          </p>
          <p className="py-4">Check out some of my recent Projects</p>
        </div>
        {/* grid */}
        <div className="grid  md:grid-cols-3 gap-4">
          {/* card item */}

          <WorkCard data={datapolice} />
          <WorkCard data={datacryto} />
          <WorkCard data={dataneflix} />
          <WorkCard data={data} />
          <WorkCard data={data} />
          <WorkCard data={data} />
        </div>
      </div>
    </div>
  );
}
