
import React, {ReactNode} from "react";

type ButtonProperties={
    buttonText:string;
    children:ReactNode;
    customStyle?:string;
    onClick:()=>void;
    disabled:boolean;
};

const IconTextButton:React.FC<ButtonProperties> = ({buttonText, children, customStyle="btn-sm", onClick,disabled}) => {
    return (
        <>
            <button className={`btn ${customStyle} ${disabled?"disabled":""}`} onClick={onClick}>
                {buttonText}
                {children}
            </button>
        </>
    );
};

export default IconTextButton;
