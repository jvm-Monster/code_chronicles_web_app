'use client';
import Chapter from "@/app/interfaces/Chapter";
import React, {useContext, useState} from "react";
import {StoryChaptersContext} from "@/app/context/StoryChaptersContext";

const CreationSpacePanel = ({chapters,onSelectChapter,hoverIndex}:{chapters:Array<Chapter>,onSelectChapter:(chapterIndex:number)=>void, hoverIndex?:number}) => {

    return (

        <>
                <ul className={"space-y-5 lg:min-w-96 xl:min-w-96 max-xl:pt-5 "}>
                    <h1 className={"text-2xl"}>Chapters</h1>

                    <div className={"xl:max-h-96 xl:overflow-y-scroll space-y-5 "}>
                        {chapters.map((chapter, index) => <li key={chapter.id}>
                            <button
                                className={`btn btn-lg w-fit h-fit   ${hoverIndex === index ? "btn-primary text-black" : "btn-ghost"}    shadow-xl`}
                                onClick={event => {
                                    onSelectChapter(index);
                                }}>
                                <div className={``}>
                                    <div className="text-start">
                                        <div className={"flex justify-between space-x-20"}>
                                            <h2 className="flex justify-between">{chapter.title}</h2>
                                            {/* <h2 className="card-title flex justify-between">{chapter.id}</h2>*/}
                                        </div>
                                    </div>
                                </div>
                            </button>
                        </li>)}
                    </div>


                </ul>


        </>
    );
};
export default CreationSpacePanel;