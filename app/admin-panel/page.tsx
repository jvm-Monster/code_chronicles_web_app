
import {AdminPanelModal} from "@/app/ui_components/admin_components/AdminPanelModal";
import StoryCreationSpace from "@/app/ui_components/admin_components/StoryCreationSpace";

const AdminPanel = () => {
         return (
        <>
            <main className={"container mx-auto h-screen pt-20"}>
                <StoryCreationSpace/>
            </main>
        </>
    );
};

export default AdminPanel;