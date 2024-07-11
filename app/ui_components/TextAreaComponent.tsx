import React from "react";

type TextFieldProperties = {
    type:string;
    placeHolder:string;
    customStyle:string;
    onChange:(value:string)=>void;
}
export const TextAreaComponent:React.FC<TextFieldProperties> = ({type,placeHolder,customStyle="",onChange}) => {
    return (
        <>
             <textarea
                 placeholder={placeHolder}
                 onChange={event => onChange(event.target.value)}
                 className={`textarea textarea-bordered textarea-lg w-full ${customStyle}`}></textarea>
        </>
    );
};