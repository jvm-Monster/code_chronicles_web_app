import React from "react";

type TextFieldProperties = {
    type:string;
    placeHolder:string;
    customStyle:string;
}
export const TextAreaComponent:React.FC<TextFieldProperties> = ({type,placeHolder,customStyle=""}) => {
    return (
        <>
             <textarea
                 placeholder={placeHolder}
                 className={`textarea textarea-bordered textarea-lg w-full ${customStyle}`}></textarea>
        </>
    );
};