import c5 from "@/assets/images/c5.jpeg";
const ComingSoon = () => {
    return (
        <>
            <section className={"space-y-5 rounded-2xl"}>
                <h1 className={"flex justify-center max-lg:justify-start text-4xl max-lg:p-5 "}>Watch out for this Chronicles, coming soon!</h1>
                <div className={"flex xl:justify-between bg-base-200 max-lg:flex-col-reverse p-5 xl:p-24  rounded-2xl"}>
                    <div className={"space-y-10"}>
                        <h1 className={"text-5xl max-lg:text-3xl font-bold mt-5"}>The Curious Case of the Missing Semicolon</h1>
                        <p>Give a feedback</p>
                        <textarea className="textarea textarea-info mb-10"
                                  placeholder="What do you feel or think about this!"></textarea>
                        <div>
                            <button className="btn btn-primary">Send Feedback!</button>
                        </div>
                    </div>

                    <img src={c5.src} className={"max-w-lg rounded-lg"}/>
                </div>
            </section>

        </>
    );
};

export default ComingSoon;