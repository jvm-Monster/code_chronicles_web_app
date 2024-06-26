"use client";
import React, {useRef} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight, faCheck} from "@fortawesome/free-solid-svg-icons";
import TextFieldComponent from "@/app/ui_components/TextFieldComponent";
import {TextAreaComponent} from "@/app/ui_components/TextAreaComponent";
import IconTextButton from "@/app/ui_components/button_components/IconTextButton";

export const AdminPanelModal = () => {
    const modalRef :React.RefObject<HTMLDialogElement>= useRef<HTMLDialogElement>(null);
    const openModal = ()=>{
        if(modalRef.current){
            modalRef.current.showModal();
            console.log("opening modal")
        }
    }

    const closeModal = ()=>{
        if(modalRef.current){
            modalRef.current.close();
        }
    }
    return (
        <>
            <div>
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn" onClick={openModal}>Set story information</button>
                <dialog id="my_modal_3" className="modal" ref={modalRef}>
                    <div className="modal-box">
                        <form method="dialog space-y-5">
                            {/* if there is a button in form, it will close the modal */}

                            <div className={"space-y-5"}>
                                <h1 className={"text-2xl"}>Create a new story</h1>
                                <TextFieldComponent type={"text"} placeHolder={"Story title"} customStyle={"input-info"}/>

                                <TextFieldComponent type={"url"} placeHolder={"Story cover image"} customStyle={"input-info"}/>

                                <TextAreaComponent type={""} placeHolder={"Story description here"} customStyle={""}/>

                                <div className={"flex justify-end"}>
                                    <IconTextButton buttonText={"Continue"} onClick={() => {}}>
                                        <FontAwesomeIcon icon={faArrowRight} className={"text-primary"}/>
                                    </IconTextButton>
                                </div>


                            </div>


                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                                    onClick={closeModal}>✕
                            </button>

                        </form>
                    </div>
                </dialog>
            </div>

        </>
    );
};