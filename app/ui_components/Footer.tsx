import {LogoSvg} from "@/app/ui_components/LogoSvg";
import qoonnectTextLogo from "../../assets/images/qoonnecttextlogo.png";
const Footer = () => {
    return (
        <div className={"min-w-full bg-base-300 h-screen mt-20"}>
            <div className={"container mx-auto"}>
                <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                    <p>Copyright © 2024 - All right reserved by</p>
                    <aside className={"flex"}>
                        <img src={qoonnectTextLogo.src} className={"max-w-40"}/>
                        <LogoSvg scale={40}/>
                    </aside>

                </footer>
            </div>
        </div>


    );
};
export default Footer;