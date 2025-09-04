import { createContext, useEffect, useState } from "react";


export const UIContext = createContext();

export const UIProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    useEffect(()=>{
        const loggedInStatus = localStorage.getItem("isLoggedIn");
        setIsLoggedIn(loggedInStatus === "true");
    }, [])

    useEffect(()=>{
        localStorage.setItem("isLoggedIn", isLoggedIn);
    }, [isLoggedIn]); 
    return (
        <UIContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </UIContext.Provider>
    );
}