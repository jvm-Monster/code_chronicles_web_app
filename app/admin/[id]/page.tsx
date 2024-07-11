import StoryCreationSpace from "@/app/ui_components/admin_components/StoryCreationSpace";


const AdminEditor = ({params}: { params: { id: string } }) => {

    return (
        <>
            <main className={"container mx-auto  pt-20"}>
                <StoryCreationSpace params={params}/>
            </main>

        </>
    );
};

export default AdminEditor;