'use client';
import {AdminPanelModal} from "@/app/ui_components/admin_components/AdminPanelModal";
import CreationSpacePanel from "@/app/ui_components/admin_components/CreationSpacePanel";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faA,
    faAdd,
    faBold,
    faDice,
    faDiceD20,
    faFileImage,
    faItalic,
    faShareSquare
} from "@fortawesome/free-solid-svg-icons";
import IconButton from "@/app/ui_components/button_components/IconButton";
import React, {useState} from "react";
import {EditorPanel} from "@/app/ui_components/admin_components/EditorPanel";
import Story from "@/app/interfaces/Story";
import IconTextButton from "@/app/ui_components/button_components/IconTextButton";
import Chapter from "@/app/interfaces/Chapter";
import chapter from "@/app/interfaces/Chapter";

const StoryCreationSpace = () => {
    const [story,setStory] = useState<Story>({
        author: "",
        content:[],
        datePublished: "",
        description: "",
        id: 0,
        title: ""
    });
    const [insert,setInsert] = useState<string>("");
    const [currentChapter,setCurrentChapter] = useState<Chapter>({
        id:0,
        title:"",
        content:"",
    });


    const handleEditorPanel = (ch:Chapter)=>{
        const chapt = {...currentChapter,ch};
        setCurrentChapter(chapt);
    };
    const addNewChapter = () => {
        const index = story.content.findIndex(chapter => chapter.id === currentChapter.id);
        if (index !== -1) {
            story.content[index] = { ...story.content[index], ...currentChapter };
        } else {
            story.content.push(currentChapter);
        }
        setStory(story);
    };




    const appendNewInsert = (insertType:string)=>{
         setInsert(insert.concat(insertType));
    }


    const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === ' ') {
            const textarea :HTMLTextAreaElement= event.target as HTMLTextAreaElement;
            const selectionStart = textarea.selectionStart;
            const selectionEnd = textarea.selectionEnd;
            if (selectionStart !== selectionEnd) {
                const newText = insert.substring(0, selectionStart) + insert.substring(selectionEnd);
                setInsert(newText);
            }
        }
    };
    return (
        <>

            <div className={"space-y-10"}>
                <h1 className={" flex justify-center text-2xl"}>Story Creation Space</h1>

                <div className={"container max-3xl bordered border-2 border-blue-600 p-20 space-y-10"}>

                    <div className={"space-y-2"}>
                        <div className={"flex justify-between"}>
                            <h1 className={"text-3xl"}>Story title</h1>
                            <AdminPanelModal/>
                        </div>
                        <p className={"text-lg"}>Story description</p>
                    </div>

                    <EditorPanel onClick={insertType => { appendNewInsert(insertType)}} onChange={() => {}} chapter={currentChapter}/>

                    <div className={"flex justify-between space-x-14"}>
                        <div className={"w-full space-y-5"}>
                            <textarea
                                className="textarea textarea-info w-full"
                                value={insert}
                                placeholder="Write a new chapter here!"
                                onKeyDown={handleKeyDown}
                                onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setInsert(event.target.value)}/>

                            <div className={"flex justify-end space-x-5"}>
                                <IconTextButton buttonText={"Add chapter"} onClick={() => {

                                }}>
                                    <FontAwesomeIcon icon={faAdd} className={"text-blue-600"}/>
                                </IconTextButton>

                                <IconTextButton buttonText={"Submit"} onClick={() => {
                                }} customStyle={"btn-sm btn-primary"}>
                                    <FontAwesomeIcon icon={faShareSquare}/>
                                </IconTextButton>
                            </div>


                        </div>

                        <CreationSpacePanel chapters={story.content}/>
                    </div>

                </div>
            </div>
        </>
    );
};

export default StoryCreationSpace;