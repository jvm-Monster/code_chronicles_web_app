import React from "react";
import Chapter from "@/app/interfaces/Chapter";
type TextFieldProperties = {
   type:string;
   placeHolder:string;
   customStyle?:string;
   onChange:(value: string)=>void;
   value:string;
}
const TextFieldComponent:React.FC<TextFieldProperties> = ({type,placeHolder,customStyle="",onChange,value}) => {
    return (
        <>
            <input
                value={value}
                type={type}
                placeholder={placeHolder}
                className={`input   w-full ${customStyle}`} onChange={event => {
                    onChange(event.target.value);
            }}/>
        </>
    );
};
export default TextFieldComponent;