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

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "col-span-4",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "md:col-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];