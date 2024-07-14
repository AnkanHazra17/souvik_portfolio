import { RiHome5Fill } from "react-icons/ri";
import { TbMessage2 } from "react-icons/tb";
import { IoBagRemoveOutline } from "react-icons/io5";
import { TbStairsUp } from "react-icons/tb";
import { FaEnvelope } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { IconType } from "react-icons";

interface SideBarProps {
  label: string,
  route: string,
  icon: IconType,
}

interface ContactDetailsProps {
  id: number,
  title: string,
  data: string,
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

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/AnkanHazra17",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/AnkanHazra17",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/AnkanHazra17",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/AnkanHazra17",
  },
];

export const contactDetails: ContactDetailsProps[] = [
  {
    id: 1,
    title: "My Address",
    data: "Changrachak, Moyna, Purba Medinipur, 721644",
    icon: IoLocation
  },
  {
    id: 2,
    title: "Email Me",
    data: "souvikmaiti391@gmail.com",
    icon: MdOutlineAlternateEmail
  },
  {
    id: 3,
    title: "Call Me",
    data: "+91 8768275487",
    icon: IoIosCall
  }
]