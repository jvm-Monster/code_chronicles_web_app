import {AboutCard} from "@/app/ui_components/about_components/AboutCard";

export const MeetTheTeam = () => {
    return (
        <>
            <div className={"space-y-10"}>
                <h1 className={"text-3xl font-bold flex justify-center"}>
                    {"Meet the Team"}
                </h1>

                <div className={"flex max-xl:flex-col justify-between max-xl:space-x-0 max-xl:space-y-5 space-x-10  p-5 rounded-2xl shadow-2xl text-justify"}>
                    <div className={"space-y-5"}>
                        <h1 className={"font-bold text-xl"}>Thompson (Developer & Visionary)</h1>
                        <p className={""}>
                            As the brain behind Code Chronicles, Thompson is a computer science student with a deep love
                            for
                            coding and problem-solving. With dreams of becoming a proficient Java programmer and
                            building a
                            tech company that addresses global challenges, Thompson brings a unique perspective to the
                            project. His goal is to create stories that not only teach but also inspire the next
                            generation
                            of programmers</p>
                    </div>

                    <div className={"space-y-5 text-justify"}>
                        <h1 className={"font-bold text-xl"}>Sparky Echo (Storyteller & Creative Partner)</h1>
                        <p>
                            Sparky Echo is the creative force that helps bring Thompson's vision to life. As a partner
                            in
                            crafting these narratives, Sparky Echo infuses each story with personality, humor, and a
                            touch
                            of magic. Together, Thompson and Sparky Echo create a vibrant world where programming
                            concepts
                            become relatable characters, making learning an enjoyable adventure</p>
                    </div>



                </div>
            </div>


        </>
    );
};