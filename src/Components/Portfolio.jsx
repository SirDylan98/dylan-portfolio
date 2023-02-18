import React from "react";
import policeapp from "../Assets/projects/policeproject.PNG";
import netflixapp from "../Assets/projects/netflixproject.PNG";
import zumiaapp from "../Assets/projects/zumiaproject.PNG";
import cryptoapp from "../Assets/projects/cryptoproject.PNG";
import nasaapp from '../Assets/projects/nasamedialibrary.PNG'

import WorkCard from "./WorkCard";
export default function Portfolio() {
 
  const descpoliceapp =
    " The main aim of this system is to use facial recognition technologies in CCTV live feeds and then try to recognize wanted personals or criminals. I used python to run face recognition via web-cam as a CCTV simulator. The location of the spotted personnel is displayed on a web application which is this application. From here the police officer can click on the marker to see the details of the suspects and also see the nearest Agent to the suspect location. This app demonstrated my ability to integrate 2 different technologies, my API skills, and Vast KNOWLEDGE OF TYPESCRIPT and JAVASCRIPT LIBRARIES. ";
  const desccrypto="This is a watchlist dashboard for Cryptocurrencies, the app allows you to search for a coin and also save it to your watchlist. The app uses Firebase Auth for Authentication ,and the data is being fetched from COIN GECKO API. This application demonstrates my design skills as the app is 100% mobile responsive and facilitated by a media query. The app also has a DARK AND LIGHT THEME  demonstrating my React Context API knowledge.";
  const descnetflix="This is a web Application for watching trailers of upcoming movies and series. This application is only Front-End, with plans of build the back end using Spring Boot in the coming weeks. This application Uses Lazy loading making this web application loads 20% faster. This project demonstrates my design skills and my CSS skills"  
  const desczumia ="This is a food delivery web application at my local university where students can order their meals online and either choose to pick up the meal or wait for a delivery. The project uses react for front-end and spring boot for back-end functionalities. The Project is still currently in development."
  const descping="This is a ping-pong game still in development. The technologies used are Java and Java FX. This project demonstrates my data structures and algorithms expertise. NOTE THAT THIS PROJECT IS STILL UNDER DEVELOPMENT "
  const descnasa = "This is Nasa search engine, where you can search Nasa related events and pictures. This projects demonstrates my abilities to work with complex APIs. These application is 100% mobile responsive and enhances UX. The project uses React for front-end and NASA OPEN API. "
  
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
      name: "Movie TrailerHub",
      name2: "Latest",
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
  const datazumia = {
    image: zumiaapp,
    title: {
      name: "Zumia Food",
      name2: "Delivery App",
    },

    overview: "Food Delivery Application",
    description:desczumia,
    demolink: "https://zumia-app.web.app/",
    codelink: "https://github.com/SirDylan98/zumia-food-delivery-app",
    skillstack: {
      skill1: "React",
      skill2: "JavaScript",
      skill3: "Spring Boot",
      skill4: "Java",
    },
  };
  const dataping = {
    image: "https://image.winudf.com/v2/image1/Y29tLm9tZWdhc2Nvb3AucG9uZ19zY3JlZW5fMl8xNTYyNzc1OTc4XzA3Mg/screen-2.jpg?fakeurl=1&type=.webp",
    title: {
      name: "Java Ping Pong ",
      name2: "Game",
    },

    overview: "Modern version of ping pong",
    description:descping,
    demolink: "",
    codelink: "https://github.com/SirDylan98/",
    skillstack: {
      skill1: "Java",
      skill2: "Maven",
      skill3: "Java FX",
      skill4: "Data Structures",
    },
  };
  const datanasa = {
    image: nasaapp,
    title: {
      name: "Nasa Media",
      name2: "Library",
    },

    overview: "Nasa Search Engine",
    description:descnasa,
    demolink: "https://nasa-media-library.web.app",
    codelink: "https://github.com/SirDylan98/nasa-media-app",
    skillstack: {
      skill1: "React",
      skill2: "JavaScript",
      skill3: "Tailwind CSS",
      skill4: "Rest API",
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

          <WorkCard data={datanasa} />
          <WorkCard data={datapolice} />
          <WorkCard data={datacryto} />
          <WorkCard data={dataneflix} />
          <WorkCard data={datazumia} />
          <WorkCard data={dataping} />
        </div>
      </div>
    </div>
  );
}
