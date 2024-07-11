"use client";
import React, {useRef, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import TextFieldComponent from "@/app/ui_components/TextFieldComponent";
import {TextAreaComponent} from "@/app/ui_components/TextAreaComponent";
import IconTextButton from "@/app/ui_components/button_components/IconTextButton";
import Story from "@/app/interfaces/Story";
import axios from "@/app/axios";

export const AdminPanelModal = () => {
    const [story, setStory] = useState<Story>({
        title: "",
        imageUrl: "",
        description: "",
        id: 0,
        datePublished: "",
        content: [],
        link: "",
        author: ""
    });
    const [loading, setLoading] = useState(false);
    const [done, setDone] = useState<boolean | null>(null);
    const modalRef: React.RefObject<HTMLDialogElement> = useRef<HTMLDialogElement>(null);

    const openModal = () => {
        if (modalRef.current) {
            modalRef.current.showModal();
            console.log("opening modal")
        }
    }

    const closeModal = () => {
        setStory({
            title: "",
            imageUrl: "",
            description: "",
            id: 0,
            datePublished: "",
            content: [],
            link: "",
            author: ""
        });
        setDone(null);
        if (modalRef.current) {
            modalRef.current.close();
        }
    }

    const createStory = async () => {
        setLoading(true);
        try {
            const response = await axios.post<Story | null>("/admin", {
                title: story.title,
                description: story.description,
                imageUrl: story.imageUrl,
                author:story.author
            });
            if (response.status == 200) {
                setDone(true);
                console.log("Story created successfully");
                /*closeModal();*/
            } else {
                setDone(false);
                console.error("Failed to create story");
            }
        } catch (error) {

            console.error("Error creating story", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <div className={"flex justify-center"}>
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn" onClick={openModal}>Create new story</button>
                <dialog id="my_modal_3" className="modal" ref={modalRef}>
                    <div className="modal-box">
                        {/* if there is a button in form, it will close the modal */}
                        <div className="space-y-5">
                            <h1 className="text-2xl">Create a new story</h1>
                            <TextFieldComponent
                                type="text"
                                placeHolder="Story title"
                                customStyle="input-info"
                                onChange={(value) => setStory(prev => ({...prev, title: value}))}
                                value={story?.title || ""}
                            />
                            <TextFieldComponent
                                type="url"
                                placeHolder="Story cover image"
                                customStyle="input-info"
                                onChange={(value) => setStory(prev => ({...prev, imageUrl: value}))}
                                value={story?.imageUrl || ""}
                            />
                            <TextFieldComponent
                                type="text"
                                placeHolder="Author's name"
                                customStyle="input-info"
                                onChange={(value) => setStory(prev => ({...prev, author: value}))}
                                /*value={story?.description || ""}*/
                                value={story?.author||""}/>

                            <TextAreaComponent
                                type="text"
                                placeHolder="Story description here"
                                customStyle=""
                                onChange={(value) => setStory(prev => ({...prev, description: value}))}
                                /*value={story?.description || ""}*/
                            />


                            <div className="flex justify-end">
                                <IconTextButton
                                    buttonText="Create"
                                    onClick={createStory}
                                    disabled={loading}
                                >
                                    <FontAwesomeIcon icon={faArrowRight} className="text-primary"/>
                                </IconTextButton>
                            </div>
                            {done !== null && <div>{done ? <p>story created successfully</p> :
                                <p>Could not create story</p>}</div>
                            }
                        </div>
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                                onClick={closeModal}>✕
                        </button>

                    </div>
                </dialog>
            </div>
        </>
    );
};
