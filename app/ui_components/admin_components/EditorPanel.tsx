import IconButton from "@/app/ui_components/button_components/IconButton";
import {faA, faBold, faFileImage, faItalic} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import TextFieldComponent from "@/app/ui_components/TextFieldComponent";
import Chapter from "@/app/interfaces/Chapter";
import chapter from "@/app/interfaces/Chapter";

export const EditorPanel = ({onClick,onChange,chapter}:{onClick:(insertType:string)=>void,onChange:(value:Chapter)=>void,chapter:Chapter}) => {
    return (
        <>
                <div className={"flex justify-between max-w-4xl bg-base-200 shadow-2xl rounded-lg p-2"}>

                        <IconButton icon={faA} iconProperties={""} onClick={() => {
                            onClick("***")
                        }}/>
                        <IconButton icon={faBold} iconProperties={""} onClick={() => {
                            onClick("**bold***");
                        }}/>
                        <IconButton icon={faItalic} iconProperties={""} onClick={() => {
                            onClick("*/italic/*")
                        }}/>
                        <IconButton icon={faFileImage} iconProperties={""} onClick={() => {
                            onClick("....image-url....")
                        }}/>

                    <div className={"flex space-x-5"}>
                        <TextFieldComponent type={"text"} placeHolder={"chapter title"} onChange={onChange} value={chapter.id.toString()}/>
                        <TextFieldComponent type={"text"} placeHolder={"chapter number"} onChange={onChange} value={chapter.title}/>
                       {/* <TextFieldComponent type={"text"} placeHolder={"author's name"}/>*/}
                    </div>


                </div>
        </>
    );
};