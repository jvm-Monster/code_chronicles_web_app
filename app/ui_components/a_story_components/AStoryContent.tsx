import CreationSpacePanel from "@/app/ui_components/admin_components/CreationSpacePanel";
import React, {useState} from "react";
import Chapter from "@/app/interfaces/Chapter";

export const AStoryContent = ({chapters}:{chapters:Array<Chapter>}) => {
    const [selectedChapterIndex,onSetSelectedChapterIndex] = useState(0);
    return (
        <>
            <div className={"border-base-300 bg-base-200 flex  justify-between rounded-2xl  p-2 xl:p-5 space-x-5"}>

                <div key={chapters[selectedChapterIndex].id} className={"space-y-5"}>

                    <h1 className={"text-2xl max-xl:text-2xl font-bold flex justify-center max-xl:pt-5"}>{chapters[selectedChapterIndex].title}</h1>


                    <div className={"xl:max-h-96 overflow-y-scroll"}>
                        <p className={"text-xl leading-loose p-2 xl:p-6 text-justify"}>{chapters[selectedChapterIndex].content}</p>
                    </div>

                </div>

                <CreationSpacePanel chapters={chapters} onSelectChapter={chapterIndex => {
                    onSetSelectedChapterIndex(chapterIndex);
                }} hoverIndex={selectedChapterIndex}/>

            </div>
        </>
    );
};