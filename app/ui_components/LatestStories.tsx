import StoryCard from "@/app/ui_components/StoryCard";

const LatestStories = () => {
    return (
        <>
            <section className={"space-y-5"}>
                <h1 className={"flex justify-center max-lg:justify-start text-3xl max-lg:p-5 "}>Check out the latest
                    stories to debug!</h1>
                <div className={"container mx-auto bg-base-200 xl:p-24 p-10"}>
                    <div
                        className={"grid max-lg:grid-cols-1 grid-cols-3 justify-items-center lg:grid-cols-2 xl:grid-cols-3 gap-y-10 gap-x-10"}>
                        <StoryCard id={1} title={""} description={""} datePublished={""} publishedBy={""} story={""}/>
                        <StoryCard id={2} title={""} description={""} datePublished={""} publishedBy={""} story={""}/>
                        <StoryCard id={3} title={""} description={""} datePublished={""} publishedBy={""} story={""}/>
                    </div>
                </div>
            </section>
        </>
    );
};
export default LatestStories;