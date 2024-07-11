import IconButton from "@/app/ui_components/button_components/IconButton";
import {faA, faBold, faFileImage, faItalic} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import TextFieldComponent from "@/app/ui_components/TextFieldComponent";
import Chapter from "@/app/interfaces/Chapter";
import chapter from "@/app/interfaces/Chapter";

export const EditorPanel = ({onClick,setChapterTitle,chapterTitle}:{onClick:(insertType:string)=>void,setChapterTitle:(chapterTitle:string)=>void,chapterTitle:string}) => {
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
                        {/*<TextFieldComponent type={"number"} placeHolder={"chapter number"} onChange={value => {}} textFieldId={1}/>
                       */} <TextFieldComponent  type={"text"} placeHolder={"chapter title"} onChange={value => {setChapterTitle(value)}}  value={chapterTitle}/>
                       {/* <TextFieldComponent type={"text"} placeHolder={"author's name"}/>*/}
                    </div>

                </div>
        </>
    );
};