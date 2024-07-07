import { RiHome5Fill } from "react-icons/ri";
import { TbMessage2 } from "react-icons/tb";
import { IoBagRemoveOutline } from "react-icons/io5";
import { TbStairsUp } from "react-icons/tb";
import { FaEnvelope } from "react-icons/fa";
import { IconType } from "react-icons";

interface SideBarProps {
    label: string,
    route: string,
    icon: IconType,
}

export const sideBarLinks: SideBarProps[] = [
    {
        label: "Home",
        route: "/",
        icon: RiHome5Fill
    },
    {
        label: "About",
        route: "/about",
        icon: TbMessage2
    },
    {
        label: "Projects",
        route: "/projects",
        icon: IoBagRemoveOutline
    },
    {
        label: "Experience",
        route: "/experience",
        icon: TbStairsUp
    },
    {
        label: "Contact",
        route: "/contact",
        icon: FaEnvelope
    }
]