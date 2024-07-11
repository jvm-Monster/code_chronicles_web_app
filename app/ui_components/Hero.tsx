import c1 from "@/assets/images/c1.jpeg";
import Image from "next/image";
const Hero = () => {
    return (
        <>
            <div className="hero  bg-base-200 p-5 rounded-2xl">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        alt={"hero image"}
                        src={c1.src}
                         className=" min-w-3 rounded-lg shadow-2xl animate-pulse" />
                    <div className={"max-w-2xl"}>
                        <h1 className="text-3xl sm:text-5xl  font-bold">Code Chronicles!</h1>
                        <p className="py-6">
                            {"Where programming gets a playful twist through entertaining stories. Dive into quirky narratives that bring a smile to every developer's face. Join us for a joy ride through the imaginative side of code. Let's have fun exploring the lighter side of programming together!"}
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Hero;