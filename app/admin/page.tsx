
import {AdminPanelModal} from "@/app/ui_components/admin_components/AdminPanelModal";
import StoryCreationSpace from "@/app/ui_components/admin_components/StoryCreationSpace";
import {StoryChaptersContext, StoryChaptersContextProvider} from "@/app/context/StoryChaptersContext";
import AdminBooks from "@/app/ui_components/admin_components/AdminBooks";

const Admin = () => {
         return (
        <>
                <main className={"mx-auto pt-20"}>
                    <AdminPanelModal/>
                    <AdminBooks/>
                </main>

        </>
         );
};

export default Admin;