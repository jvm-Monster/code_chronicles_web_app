'use client';
import {ReactNode, useContext} from "react";
import {ThemeContext} from "@/app/context/ThemeContext";

const ClientThemeWrapper = ({children}:{children:ReactNode}) => {

    const {theme} = useContext(ThemeContext);
    return (
        <>
             <div data-theme={!theme?"light":"dark"}>{children}</div>
        </>
    );
};
export default ClientThemeWrapper;