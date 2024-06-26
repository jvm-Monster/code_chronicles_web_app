import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBolt, IconDefinition} from "@fortawesome/free-solid-svg-icons";
import React from "react";

interface IconButtonProperties{
    icon:IconDefinition;
    iconProperties:string;
    onClick:()=>void;
}
const IconButton:React.FC<IconButtonProperties> = ({icon,onClick,iconProperties=""}) => {
    return (
        <>
            <button className={"btn btn-ghost btn-circle"} onClick={onClick}>
                <FontAwesomeIcon icon={icon} className={iconProperties}/></button>
        </>
    );
};

export default IconButton;