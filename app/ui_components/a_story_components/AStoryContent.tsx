import CreationSpacePanel from "@/app/ui_components/admin_components/CreationSpacePanel";
import React, {useRef, useState} from "react";
import Chapter from "@/app/interfaces/Chapter";

export const AStoryContent = ({chapters}:{chapters:Array<Chapter>}) => {
    const modalRef:React.RefObject<HTMLDialogElement> = useRef<HTMLDialogElement>(null); // Define modalRef with type HTMLDialogElement

    const openModal = () => {
        if (modalRef.current) {
            modalRef.current.showModal();
        }
    };

    const closeModal = () => {
        if (modalRef.current) {
            modalRef.current.close();
        }
    };

    const [selectedChapterIndex,onSetSelectedChapterIndex] = useState(0);
    return (
        <>
            <button className="btn btn-sm btn-accent rounded-full fixed bottom-5 right-1.5 xl:hidden"
                    onClick={openModal}>Chapter {selectedChapterIndex + 1}</button>
            <dialog id="my_modal_3" className="modal" ref={modalRef}>
                <div className="modal-box">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal}>✕
                    </button>
                    <CreationSpacePanel chapters={chapters} onSelectChapter={chapterIndex => {
                        onSetSelectedChapterIndex(chapterIndex);
                    }} hoverIndex={selectedChapterIndex}/>
                </div>
            </dialog>
            <div className={"border-base-300 bg-base-200 flex  justify-between rounded-2xl  p-2 xl:p-5 space-x-5"}>

                <div key={chapters[selectedChapterIndex].id} className={"space-y-5"}>


                    <h1 className={"text-2xl max-xl:text-2xl font-bold flex justify-center max-xl:pt-5"}>{chapters[selectedChapterIndex].title}</h1>


                    <div className={"xl:max-h-screen overflow-y-scroll"}>
                        <p className={"text-xl leading-loose p-2 xl:p-6 text-justify"}>{chapters[selectedChapterIndex].content}</p>
                    </div>

                </div>


                <div className={"max-lg:hidden"}>
                    <CreationSpacePanel chapters={chapters} onSelectChapter={chapterIndex => {
                        onSetSelectedChapterIndex(chapterIndex);
                    }} hoverIndex={selectedChapterIndex}/>
                </div>

            </div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
        </>
    );
};