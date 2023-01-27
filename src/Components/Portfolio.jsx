import React from "react";
import policeapp from "../Assets/projects/policeproject.PNG";
import netflixapp from "../Assets/projects/netflixproject.PNG";
import zumiaapp from "../Assets/projects/zumiaproject.PNG";
import cryptoapp from "../Assets/projects/cryptoproject.PNG";

import WorkCard from "./WorkCard";
export default function Portfolio() {
 
  const descpoliceapp =
    " The main aim of this systems is to use facial recognition technologies in cctv live feeds and then try to recognize wanted personals or criminals. I used python to run face recognition via web-cam as a cctv simulator. The location of the spotted personal is the displayed on a web application which is this application. From here the police officer can the click on the marker to see the details of the suspects and also see the nearest Agent to the suspect location. This app demonstrated my ability to intergated 2 different technologies, my API skills and Vast KNOWLEDGE OF TYPESCRIPT and JAVASCRIPT LIBRARIES. ";
  const desccrypto="This is a watchlist dashboard for Crypto currencies, the appp allows you to search a currency and also save to your watchlist. The app uses Firebase Auth for Authentication and the data is being fetched from COIN GECKO API.  This application demonstrates my design skills as the app is 100% mobile responsive facilitated by media query. The app also has a DARK AND LIGHT THEME  demonstrating my React Context API knowlegde.";
  const descnetflix="This is a clone of a popular movies streaming web application NetFlix. This is application is only Front-End, with plans of build the back end using Spring Boot in the coming weeks. This application Uses Lazy loading making this web application loads 20% faster. This project demonstrates my design skills and my CSS skills"  
  const desczumia ="This is a food delivery  web application at my local university where students can order their meals online and either choose to pick up the meal or wait for a delivery. This project is using react for front end and spring boot for back end functionalities. The Project is still curently in developement"
  const descping="This is a  ping pong game still in development. Technologies used are Java and Java FX. This project demonstrates my data structures and algorithms expertise. NOTE THAT THIS PROJECT IS STILL UNDER DEVELOPEMENT "
  const descmusic = "This is a modern lookin music player just like spotify. It include features like week top 100 songs, trending songs, lyrics of songs and account creation. NOTE THAT THIS PROJECT IS STILL UNDER DEVELOPEMENT"

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
  const dataspotify = {
    image: "https://i.pcmag.com/imagery/reviews/042FW7hC9vrGnoDea9LArXI-32.fit_lim.size_1050x.png",
    title: {
      name: "Online Modern",
      name2: "Music Player",
    },

    overview: "Music player like spotify",
    description:descmusic,
    demolink: "",
    codelink: "https://github.com/SirDylan98/spotifyclone-frontend",
    skillstack: {
      skill1: "React",
      skill2: "JavaScript",
      skill3: "Spring Boot",
      skill4: "Java",
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
          <WorkCard data={datazumia} />
          <WorkCard data={dataspotify} />
          <WorkCard data={dataping} />
        </div>
      </div>
    </div>
  );
}
