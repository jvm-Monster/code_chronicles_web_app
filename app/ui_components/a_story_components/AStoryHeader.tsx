import React, {FC} from "react";
import {formatZoneDateTime} from "@/app/zoned_date_time_formater";

interface AStoryHeader {
    imageUrl:string;
    title:string;
    datePublished:string;
    author:string;
    chapters:number;
}
export const AStoryHeader:React.FC<AStoryHeader>= ({imageUrl,title,datePublished,author,chapters}) => {
    return (
        <>
            <div className={"border-base-300 bg-base-200 flex max-xl:flex-col justify-between rounded-2xl p-5 max-xl:space-y-2"}>

                <div className="avatar max-xl:flex max-xl:justify-center">
                    <div className="rounded-lg">
                        <img src={imageUrl} className={""}/>
                    </div>
                </div>

                <div className={" flex flex-col items-center justify-center space-y-5"}>
                    <h1 className={"max-xl:text-3xl text-6xl font-bold"}>{title}</h1>
                    <h2>{chapters} {" chapters"}</h2>
                    <div className={"space-x-2 flex"}><h1>by</h1> <h1 className={"font-bold "}>{author}</h1>
                    </div>
                </div>

                <div className={"max-xl:flex max-xl:justify-center"}>
                    <p>{"Date Published: "}{formatZoneDateTime(datePublished)}</p>
                </div>
            </div>
        </>
    );
};