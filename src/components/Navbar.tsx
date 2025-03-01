import { useEffect, useState } from "react";
import icon from "../assets/images/navIcon.png";
import logo from "../assets/images/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Navbar({bgColor = "transparent"}:{bgColor?:string}) {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        setExpanded(false);
      }
    });

    return () => {
      window.removeEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          setExpanded(false);
        }
      });
    };
  }, []);

  return (
    <div>
      <nav className={`fixed top-0 left-0 z-[999] flex items-center justify-between w-full px-10 py-4 ${expanded ? "bg-black" : `bg-[${bgColor}]`}`}>
        <NavLink to={'/'}><img src={logo} alt="" className="h-14 w-fit"/> </NavLink>
        <img
          src={icon}
          alt=""
          className="h-16 w-fit cursor-pointer shadow-xl rounded-full"
          onClick={() => setExpanded(!expanded)}
        />
      </nav>
      <div
        className={`${
          expanded
            ? "h-screen w-screen rounded-none left-0 top-0"
            : "w-0 h-0 rounded-3xl -left-1/4 -top-1/4"
        } transition-transform duration-700 ease-&lsqb;cubic-bezier(0.77,0,0.175,1)&rsqb;ease-&lsqb;cubic-bezier(0.77,0,0.175,1)&rsqb;  bg-black fixed z-[49] overflow-hidden`}
      >
        <ul
          className={`${
            expanded ? "opacity-100" : "opacity-0"
          } text-4xl md:text-5xl lg:text-6xl ease-in-out duration-700 flex flex-col items-center justify-center w-full h-full gap-8`}
        >
          <li className="hover:text-white text-gray-600 transition-all duration-300 cursor-pointer">
          <NavLink to={'/'} className="text-4xl md:text-5xl lg:text-6xl">Home</NavLink>
          </li>
          <li className="hover:text-white text-gray-600 transition-all duration-300 cursor-pointer">
          <NavLink to={'/case-studies'} className="text-4xl md:text-5xl lg:text-6xl">Case Studies</NavLink>
          </li>
          <li className="hover:text-white text-gray-600 transition-all duration-300 cursor-pointer">
          <NavLink to={'/blogs'} className="text-4xl md:text-5xl lg:text-6xl">Blogs</NavLink>
          </li>
          <li className="hover:text-white text-gray-600 transition-all duration-300 cursor-pointer">
          <NavLink to={'/contact-us'} className="text-4xl md:text-5xl lg:text-6xl">Contact Us</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

// import { useEffect, useState } from "react";
// import icon from "../assets/images/navIcon.png";
// import logo from "../assets/images/logo.png";

// export default function Navbar() {
//   const [expanded, setExpanded] = useState(false);

//   useEffect(() => {
//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (e.key === "Escape") setExpanded(false);
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, []);

//   return (
//     <div>
//       <nav className="fixed top-0 left-0 z-50 flex items-center justify-between w-full px-10 py-4">
//         <img src={logo} alt="Logo" className="h-14 w-fit" />
//         <img
//           src={icon}
//           alt="Menu Icon"
//           className="h-16 w-fit cursor-pointer shadow-xl rounded-full"
//           onClick={() => setExpanded(!expanded)}
//         />
//       </nav>
//       <div
//         className={`fixed top-0 left-0 w-screen h-screen bg-black z-[49] transition-transform duration-700 ease-&lsqb;cubic-bezier(0.77,0,0.175,1)&rsqb;ease-&lsqb;cubic-bezier(0.77,0,0.175,1)&rsqb; ${
//           expanded ? "scale-100 opacity-100" : "scale-0 opacity-0"
//         }`}
//       >
//         <ul className="flex flex-col items-center justify-center w-full h-full gap-8 text-4xl md:text-5xl lg:text-6xl transition-opacity duration-700 ease-in-out">
//           {["HOME", "SOLUTIONS", "BLOGS", "CONTACT US"].map((item, index) => (
//             <li
//               key={index}
//               className="text-gray-600 hover:text-white transition-colors duration-300 cursor-pointer"
//             >
//               {item}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }
