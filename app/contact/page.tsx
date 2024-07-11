const Contact= () => {
    return (
        <>


            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Feedback!</h1>
                        <p className="py-6">
                            We'd love to hear from you! Your feedback is invaluable in helping us improve Code
                            Chronicles
                            and
                            create
                            the best experience for our readers. Whether you have suggestions, questions, or just want
                            to
                            share
                            your
                            thoughts on our stories, we're all ears.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Feedback</span>
                                </label>
                                <textarea
                                    placeholder="Please write your feed back here"
                                    className="textarea textarea-bordered textarea-sm w-full max-w-xs"></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">OK</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Contact;