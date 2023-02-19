import React, { useContext, useEffect, useState } from "react"
import useFetch from "./useFetch";
// Create a Global  UseContext

const AppContext = React.createContext()

const AppProvider = ({children})=>{
    const[query, setQuery] = useState("batman");
    const { isLoading, isError, movie } = useFetch(`&s=${query}`);


    


    return (
    <AppContext.Provider value={{isLoading,isError,movie,query,setQuery}}>
        {children}
        </AppContext.Provider>
    );
};

// Create custom hooks for GlobalContext

function UseGlobalContext(){
    return useContext(AppContext)
}


export {AppContext,AppProvider,UseGlobalContext}; 