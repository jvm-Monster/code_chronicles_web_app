"use client";
import React, {useRef} from "react";
import {SearchInput} from "@/app/ui_components/modal/SearchInput";
import SearchStoryLIst from "@/app/ui_components/modal/SearchStoryLIst";
const SearchModal = () => {
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

    return (
        <>
            <button className="btn btn-circle btn-ghost" onClick={openModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                    </svg>
            </button>
            <dialog id="my_modal_4" className="modal " ref={modalRef}>
                <div className="modal-box w-11/12 max-w-5xl space-y-5">
                    <h3 className="font-bold text-xl">CodeChronicles search engine</h3>
                    <SearchInput placeholder={"Search for stories here"}/>
                    <SearchStoryLIst/>
                    <div className="modal-action">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal}>✕</button>
                    </div>
                </div>
            </dialog>
        </>
    );
};
export default SearchModal;