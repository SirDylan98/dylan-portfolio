import React, { useEffect, useState } from "react";
import Footer from "./Components/Footer";
import ProjectOverview from "./Components/ProjectOverview";
import FrontPage from "./Components/FrontPage";
import { Route, Routes } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 2500);
  }, []);
  return (
    <>
    { loading?
    <div className="flex flex-col justify-center items-center w-full h-screen my-auto ">

      <HashLoader
      color={'#62f8d7'}
      loading={loading}
      
      size={70}
      aria-label="Loading Spinner"
      data-testid="loader"/>
      <p className="text-lg md:text-2xl text-[#62f8d7]">Come in , <span className="text-pink-600">let me </span>show you  <span className="text-pink-600">around</span></p>
    </div>
    
    :(<div>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/project" element={<ProjectOverview />} />
      </Routes>

      <Footer />
    </div>)}
    
    </>
  );
}

export default App;
