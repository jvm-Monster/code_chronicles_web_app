import {SearchInput} from "@/app/ui_components/modal/SearchInput";
import StoryCard from "@/app/ui_components/StoryCard";
import {getCurrentPaginationPage, handleNextPage, handlePreviousPage} from "@/app/pagination_functions";
import Story from "@/app/interfaces/Story";
import {useFetch} from "@/app/usefetch";
import {AdminPanelModal} from "@/app/ui_components/admin_components/AdminPanelModal";

export const StoryGrid = ({query,handlePreviousPage,handleNextPage,start}:{query:string,handlePreviousPage:()=>void,handleNextPage:()=>void,start:number}) => {
    // Fetch data based on the current state
    const paginatedData = useFetch<Story[]>(query);
    return (
        <>
            <main className={" pt-20 pb-20 space-y-5"}>

                <div className={"flex justify-center items-center"}>
                 {/*   <div className={"p-5 min-w-96 "}>
                        <SearchInput placeholder={"You bored? then just read this fun stories, search"}/>
                    </div>*/}

                </div>

                <section className={" bg-base-200 xl:p-24 p-10"}>
                    <div
                        className={"grid max-lg:grid-cols-1 grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-y-10 gap-x-10"}>
                        {paginatedData.data &&
                            paginatedData.data.map((latestStory) => (
                                <StoryCard
                                    key={latestStory.id}
                                    id={latestStory.id}
                                    title={latestStory.title}
                                    description={latestStory.description}
                                    imageUrl={latestStory.imageUrl}
                                    link={latestStory.link}
                                    datePublished={latestStory.datePublished}
                                    author={latestStory.author}
                                 content={[]}/>
                            ))}
                    </div>
                </section>

                <div className="join flex justify-center">
                    <button className="join-item btn" onClick={handlePreviousPage} disabled={start === 0}>«
                    </button>
                    <button className="join-item btn">Page {getCurrentPaginationPage({start: start})}</button>
                    <button className="join-item btn" onClick={handleNextPage}>»
                    </button>
                </div>
            </main>
        </>
    );
};