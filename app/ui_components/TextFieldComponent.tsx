import React from "react";
import Chapter from "@/app/interfaces/Chapter";
type TextFieldProperties = {
   type:string;
   placeHolder:string;
   customStyle?:string;
   onChange:(value:Chapter)=>void;
   value:string;
}
const TextFieldComponent:React.FC<TextFieldProperties> = ({type,placeHolder,customStyle="",onChange,value}) => {
    return (
        <>
            <input
                type="text"
                placeholder={placeHolder}
                value={value}
                className={`input   w-full ${customStyle}`} onChange={event => {

            }}/>
        </>
    );
};
export default TextFieldComponent;