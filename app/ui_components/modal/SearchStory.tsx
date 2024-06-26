import React from "react";
interface Story{
    title:string;
    image:string;
    brief:string;
    datePublished:string;
}
const SearchStory : React.FC<Story> = ({title,image,brief,datePublished}) => {
    return (
        <>

            <section className="collapse collapse-arrow bg-base-300 ">

                <input type="radio" name="my-accordion-2" defaultChecked/>

                <div className="collapse-title text-sm font-medium">
                    <div className={"flex justify-between space-x-5"}>
                            <h1 className={""}>{title}</h1>
                        <p className={"text-sm"}>{datePublished}</p>
                    </div>
                </div>

                <div className="collapse-content">
                <p>{brief}</p>
                </div>

            </section>
        </>
    );
};
export default SearchStory;