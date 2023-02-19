import React, { useContext, useEffect, useState } from "react"

// Create a Global  UseContext
const API_URL = `https://www.omdbapi.com/?apikey=65611696&s=batman`;

const AppContext = React.createContext()

const AppProvider = ({children})=>{
    const[isLoading,setIsLoading] = useState(true);
    const[movie,setMovie] = useState([]);
    const[isError,setIsError]=useState("")

    const getMovies = async(url)=>{
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            if(data.Response ==="True"){
                setIsLoading(false)
                setMovie(data.Search);
            }
        }catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getMovies(API_URL);
    },[])


    return <AppContext.Provider value={{isLoading,isError,movie}}>{children}</AppContext.Provider>
}

// Create custom hooks for GlobalContext

function UseGlobalContext(){
    return useContext(AppContext)
}


export {AppContext,AppProvider,UseGlobalContext}; 