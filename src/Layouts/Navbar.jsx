import { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { createElement } from "react";
import {TbSmartHome} from "react-icons/tb";
import {BiUser} from "react-icons/bi";
import {RiServiceLine} from "react-icons/ri";
import {MdOutlinePermContactCalendar} from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
const nav=  [
    {
        link: "#home",
        icon: TbSmartHome,
    },
    {
        link: "#price",
        icon: FaShoppingCart,
    },
    {
        link: "#author",
        icon: BiUser,
    },
    {
        link: "#services",
        icon: RiServiceLine,
    },
    {
        link: "#schedule",
        icon: MdDateRange,
    },
    {
        link: "#contact",
        icon: MdOutlinePermContactCalendar,
    },
]

const Navbar = () => {
  // const { nav } = content;
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(0);

  return (
    <div className="w-full flex justify-center">
      <div
        className="sm:cursor-pointer fixed top-10 left-10 z-[999] rounded-lg bg-white/40 p-2"
        onClick={() => setShowMenu(!showMenu)}
      >
        <HiMenuAlt2 size={34} />
      </div>
      <nav
        className={`fixed  z-[999] flex items-center gap-5 bg-slate-200/60 px-6 py-3 backdrop-blur-md rounded-full text-dark_primary duration-300 ${
          showMenu ? "bottom-10" : "bottom-[-100%]"
        }`}
      >
        {nav.map((item, i) => (
          <a
              key={i}
            href={item.link}
            onClick={() => setActive(i)}
            className={`text-xl p-2.5 rounded-full sm:cursor-pointer 
     ${i === active && "bg-dark_primary text-white"} `}
          >
            {createElement(item.icon)}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
