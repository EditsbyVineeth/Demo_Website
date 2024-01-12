import React,{createContext, useState} from "react";

export const DataContext = createContext();
export const DataProvider = ({children})=>{
    const[darkMode, setDarkMode]=useState(false);
    return(
        <DataContext.Provider value={{darkMode,setDarkMode}}>
            {children}
        </DataContext.Provider>
    );
}