'use client';
import {Context, createContext, useContext, useEffect, useState} from "react";
interface ThemeContextType{
    theme:boolean;
    changeTheme:(themeMode:boolean)=>void;
}
export const ThemeContext:Context<ThemeContextType> = createContext<ThemeContextType>({theme:false,changeTheme:themeMode=>{}});

export const ThemeProvider = ({children}:any)=>{
    const [theme,setTheme] = useState<boolean>(false);// light -> false & dark -> true;
    const [isMounted,setIsMounted] = useState<boolean>(false);

    const confirmMode = (mode:boolean):string=>mode?"light":"dark";

    useEffect(() => {
        setIsMounted(true);
        const storedTheme:string = localStorage.getItem("theme")||"light";//storing the data in cache on the client side
        console.log(`loaded the theme ${storedTheme}`);
        setTheme(storedTheme === "dark");
    },[])

    if(!isMounted){
        return <div>Loading..</div>
    }

    const changeTheme = (themeMode:boolean)=>{
        setTheme(!themeMode);
        localStorage.setItem("theme",confirmMode(themeMode));
        console.log("changed the theme");
    }

    return (
         <ThemeContext.Provider value={{theme,changeTheme}} >{children}</ThemeContext.Provider>
    );
}
