'use client';
import Story from "@/app/interfaces/Story";
import React from "react";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit} from "@fortawesome/free-solid-svg-icons";
import {usePathname} from "next/navigation";
import moment from "moment-timezone";
import Image from "next/image";

const StoryCard:React.FC<Story> = ({id,title,description,datePublished,imageUrl,author}) => {
    const path = usePathname();

    const formatZoneDateTime = (dateString:string)=>{
        const date = moment(dateString);

        // Get the user's timezone
        const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

        // Convert to user's timezone
        const userZonedDate = date.tz(userTimeZone);

        // Formatting the date
        return userZonedDate.format("yyyy-MM-DD HH:mm");
    }
    return (
        <>

            <div className="p-5 rounded-2xl shadow-xl flex flex-col justify-between">
                <div className={"space-y-2"}>
                    <div className={``}>
                        <p className={"font-bold text-xl "}>{title}</p>
                        {path === "/admin" &&
                            <Link href={`admin/${id}`} className="flex justify-end"><FontAwesomeIcon
                                icon={faEdit}/></Link>}
                    </div>


                    <p>by {author}</p>

                    {/*<img className={"rounded-2xl min-w-52 max-h-52"} src={imageUrl} alt={"story cover image"}/>
*/}
                    <Image src={imageUrl} alt={"story cover image"} width={"1000"} height={"1000"} className={"rounded-lg"}/>

                    <div className="">
                        <p className={""}>{description}</p>
                    </div>
                </div>

                <div className={"flex justify-between items-center"}>
                    <p className={"text-gray-600"}>{formatZoneDateTime(datePublished)}</p>
                    <Link href={`/stories/${id}`} className={"btn primary"} onClick={event => {
                    }}>Read</Link>
                </div>


            </div>

        </>
    )
        ;
};
export default StoryCard;