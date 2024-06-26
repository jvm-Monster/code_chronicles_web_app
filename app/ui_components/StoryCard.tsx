import Story from "@/app/interfaces/Story";
import React from "react";
import Link from "next/link";

const StoryCard:React.FC<Story> = ({id,title,description,datePublished,publishedBy}) => {
    return (
        <>
            <div className="card max-w-2xl bg-base-300">
                <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                             alt="car!"/></figure>
                <div className="card-body">
                    <h2 className="card-title">Life hack</h2>
                    <p>How to park your car at your garage?</p>
                    <div className="card-actions justify-end">
                        <Link href={`/stories/${id}`} className="btn btn-primary">Debug now!</Link>
                    </div>
                </div>
            </div>
        </>
    );
};
export default StoryCard;