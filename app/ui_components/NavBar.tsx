"use client";
import SearchModal from "@/app/ui_components/modal/SearchModal";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useContext} from "react";

import {faBell, faBolt, faSearch} from "@fortawesome/free-solid-svg-icons";
import IconButton from "@/app/ui_components/button_components/IconButton";
import {ThemeContext} from "@/app/context/ThemeContext";

const NavBar = () => {
    const pathname:string = usePathname();
    const {theme, changeTheme}= useContext(ThemeContext);
    return (
            <nav className="navbar bg-base-100 top-0 fixed z-50 shadow-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4 6h16M4 12h16M4 18h7"/>
                            </svg>
                        </div>
                        <ul tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                            <li><Link className={`${pathname === "/"?"bg-primary text-base-200":""}`} href={"/"}>Home</Link></li>
                            <li><Link className={`${pathname === "/stories"?"bg-primary text-base-200":""}`} href={"/stories"}>Stories</Link></li>
                            <li><Link className={`${pathname === "/about"?"bg-primary text-base-200":""}`} href={"/about"}>About</Link></li>
                            <li><Link className={`${pathname === "/contact"?"bg-primary text-base-200":""}`} href={"/contact"}>contact</Link></li>

                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <a className="btn btn-ghost text-3xl max-sm:text-xl">CodeChronicles</a>
                </div>
                <div className="navbar-end">
                    {pathname !== "/stories" && <SearchModal/>}
                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <FontAwesomeIcon icon={faBell}/>
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </button>

                    <IconButton icon={faBolt} onClick={() => changeTheme(theme)} iconProperties={""}/>
                </div>
            </nav>

    );
};
export default NavBar;