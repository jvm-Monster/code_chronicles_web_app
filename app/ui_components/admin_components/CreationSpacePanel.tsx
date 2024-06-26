'use client';
import Chapter from "@/app/interfaces/Chapter";

const CreationSpacePanel = ({chapters}:{chapters:Array<Chapter>}) => {
    return (
        <>
            <div className={"space-y-5"}>
                <h1 className={"text-2xl"}>Story chapters</h1>
                <ul className={"space-y-5 max-h-96 overflow-x-scroll"}>
                    <li>
                        <button className={"btn w-fit h-fit btn-ghost hover:bg-transparent"}>
                            <div className="card bg-base-100 w-96 shadow-xl">
                                <div className="card-body text-start">
                                    <h2 className="card-title">Chapter Title</h2>
                                    <p>chapter number</p>
                                </div>
                            </div>
                        </button>
                    </li>
                </ul>
            </div>

        </>
    );
};
export default CreationSpacePanel;