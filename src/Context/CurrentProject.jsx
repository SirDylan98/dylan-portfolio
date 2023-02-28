import React, { createContext, useContext, useState } from 'react'

export const currentProject = createContext()

export const CurrentProjectProvider = ({children})=>{
    const [project,setProject]= useState({});


    const updateSelectedProject =(data)=>{
        localStorage.setItem("currentproject",JSON.stringify(data))
        setProject(data);
        console.log("this is context Data ",data)
    } 

    return <currentProject.Provider value={{project,updateSelectedProject}} >
        {children}

    </currentProject.Provider>

}
export const CurrProject = ()=>{ return useContext(currentProject);}

