import { useState } from "react";
import { Link } from "react-scroll";

export default function MainNavigate() {
  let links = [
    { name: "Home", link: "home", off: 0 },
    { name: "Services", link: "services", off: -130 },
    { name: "About", link: "about", off: -200 },
    { name: "Testimonials", link: "testimonials", off: 0 },
  ];

  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="dt:flex items-center justify-between bg-green-800 opacity-80 py-1 dt:px-10 px-10">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <span className="mr-1 pt-2 mb-2">
            <img src="TNR.png" alt="logo" />
          </span>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer dt:hidden"
        >
          <img src={open ? "close.png" : "menu.png"} alt="" />
        </div>

        <ul
          className={`dt:flex dt:items-center dt:pb-0 pb-12 absolute dt:static bg-green-800 dt:z-auto z-[-1] left-0 w-full 
        dt:w-auto dt:pl-0 pl-9 transition-all ${open ? "top-17" : "top-[-470px]"}`}
        >
          {links.map((link) => (
            <li key={link.name} className="dt:ml-8 text-xl dt:my-0 my-7">
              <Link
                to={link.link}
                spy={true}
                smooth={true}
                offset={link.off}
                duration={500}
                className="text-white font-medium hover:text-teal-400 duration-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
