import React from "react";

interface ButtonProperties{
    buttonText:string;
    onClick:()=>void;
    customStyle:string;
}

const Button:React.FC<ButtonProperties> = ({buttonText,onClick,customStyle="primary"}) => {
    return (
        <>
            <button className={`btn ${customStyle}`} onClick={onClick}>{buttonText}</button>
        </>
    );
};
export default Button;