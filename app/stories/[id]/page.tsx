'use client';
import React, {useState} from "react";
import Story from "@/app/interfaces/Story";
import CreationSpacePanel from "@/app/ui_components/admin_components/CreationSpacePanel";
import {useFetch} from "@/app/usefetch";
import {formatZoneDateTime} from "@/app/zoned_date_time_formater";
import {AStoryHeader} from "@/app/ui_components/a_story_components/AStoryHeader";
import {AStoryContent} from "@/app/ui_components/a_story_components/AStoryContent";

const AStory= ({ params }:{ params:{id:string} }) => {
    const [selectedChapterIndex,onSetSelectedChapterIndex] = useState(0);
    const story = useFetch<Story>(`stories/${params.id}`);


    return (
        <>
            <main className={"container mx-auto  pt-20 space-y-10"}>
                {story.data&& <div className={"space-y-5"}>
                    <AStoryHeader imageUrl={story.data.imageUrl} title={story.data.title} datePublished={story.data.datePublished} author={story.data.author} chapters={story.data.content.length}/>
                    <AStoryContent chapters={story.data.content}/>
                </div>}

            </main>
        </>
    );
};
export default AStory;