import React from "react";

interface About{
    title:string;
    message:string;
}
export const AboutCard : React.FC<About>= ({title,message}) => {
    return (
        <>
            <div className="card bg-base-100 w-96 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{message}</p>

                </div>
            </div>
        </>
    );
};