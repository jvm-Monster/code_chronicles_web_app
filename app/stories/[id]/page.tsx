import React from "react";

const AStory= ({ params }:{ params:{id:string} }) => {
    return (
        <>
            <main className={"container mx-auto h-screen mt-20"}>
                <h1>Search for stories {params.id}</h1>
            </main>
        </>
    );
};
export default AStory;