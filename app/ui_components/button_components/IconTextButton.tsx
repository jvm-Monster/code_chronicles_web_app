
import React, {ReactNode} from "react";

type ButtonProperties={
    buttonText:string;
    children:ReactNode;
    customStyle?:string;
    onClick:()=>void;
};

const IconTextButton:React.FC<ButtonProperties> = ({buttonText, children, customStyle="btn-sm", onClick}) => {
    return (
        <>
            <button className={`btn ${customStyle}`} onClick={onClick}>
                {buttonText}
                {children}
            </button>
        </>
    );
};

export default IconTextButton;
