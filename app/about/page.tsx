import {AboutCard} from "@/app/ui_components/about_components/AboutCard";
import {MeetTheTeam} from "@/app/ui_components/about_components/MeetTheTeam";

const About = () => {
    return (
        <>

            <main className={"container mx-auto pt-20 space-y-20"}>
                <h1 className={"text-6xl"}>Get To Know Us!</h1>
                <div className={"grid grid-cols-3 gap-10"}>
                    <AboutCard title={"About Code Chronicles"} message={"Welcome to Code Chronicles!\n" +
                        "\n" +
                        "At Code Chronicles, we believe that programming is more than just code; it's a journey, a story waiting to be told. Our mission is to bring programming concepts to life through engaging and relatable narratives. Whether you're a beginner or an experienced coder, we hope our stories inspire you and spark your creativity."}/>
                    <AboutCard title={"Our Story"}
                               message={"Code Chronicles was born out of a passion for coding and storytelling. Thompson, a dedicated computer science student and avid programmer from Osun State, Nigeria, envisioned a platform where complex programming concepts could be explained through captivating stories. With a vision to make learning fun and accessible, Thompson set out to create a world where code comes to life."}/>
                    <AboutCard title={"Our Vision"} message={"We aim to build a community of learners and storytellers who see the beauty and creativity in code. By transforming programming concepts into engaging stories, we hope to make coding accessible to everyone, regardless of their background or experience level. Join us on this journey, and let's explore the fascinating world of code together."}/>

                </div>
                <div>
                    <MeetTheTeam/>
                </div>

                <div className={"shadow-2xl p-5 rounded-2xl"}>
                    <p>Thank you for being a part of Code Chronicles. Let's write the future of programming, one story at a time.</p>
                </div>

            </main>
        </>
    );
};
export default About;