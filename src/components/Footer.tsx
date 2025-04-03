import { Link } from "react-router-dom";

const Footer = ({ setShowModal }): JSX.Element => {
  return (
    <footer className="bg-secondary text-primary py-24 px-6 md:px-20 lg:px-14 text-sm">
      <div className="grid-cols-1 md:grid-cols-3 gap-8 hidden lg:grid">
        {/* Left Section */}
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-light font-julius">LET'S GET TO WORK</h2>
          <button
            onClick={() => setShowModal(true)}
            className="bg-primary text-secondary px-6 py-2 rounded-lg shadow-md w-fit text-xl font-semibold"
          >
            LET’ TALK
          </button>
          <div className="mt-12 ">
            <h3 className="text-lg  text-gray-400">QUICK LINKS</h3>
            <ul className="mt-2 space-y-1 text-xl">
              <li>
                <a href="#" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Middle Section */}
        <div>
          <ul className="space-y-2 text-xl">
            {[
              { name: "Home", to: "/" },
              { name: "Solutions", to: "/case-studies" },
              { name: "Blogs", to: "/blogs" },
            ].map((text) => (
              <li key={text.name}>
                <Link
                  to={typeof text.to === "string" ? text.to : ""}
                  onClick={typeof text.to === "function" ? text.to : undefined}
                  className="hover:underline hover:text-accent text-primary duration-50 transition-all"
                >
                  {text.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <h3 className="text-lg text-gray-400">Follow Us</h3>
            <a href="#" className="hover:underline text-xl font-julius">
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="text-right text-lg">
          <h2 className="text-4xl font-light font-julius">VERITECH INC.</h2>
          <p className="text-lg text-gray-400 font-julius">
            INTERACTION INTELLIGENCE ELEVATED BY AI
          </p>
          <p className="mt-8 text-gray-400">896 S STATE ST. UNIT #1151</p>
          <p className="text-gray-400">DOVER, DE 19901, USA</p>
          <p className="mt-1">connect@veritech.ai</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:px-36 lg:hidden">
        {/* Left Section */}
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-light font-julius">LET'S GET TO WORK</h2>
          <button className="bg-white text-[#000B5E] px-6 py-2 rounded-lg shadow-md w-fit text-xl font-semibold">
            LET’ TALK
          </button>
        </div>

        {/* <div className="flex justify-between">
          <div className="">
            <h3 className="text-lg  text-gray-400">QUICK LINKS</h3>
            <ul className="mt-2 space-y-1 text-xl">
              <li>
                <a href="#" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
            <div className="md:mt-10 mt-4">
              <h3 className="text-lg text-gray-400">FOLLOW US</h3>
              <a href="#" className="hover:underline text-xl font-julius">
                LINKEDIN
              </a>
            </div>
          </div>

          <div>
            <ul className="text-xl text-right">
              <li>
                <a href="#" className="hover:underline">
                  HOME
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  SOLUTIONS
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  BLOGS
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  CONTACT US
                </a>
              </li>
            </ul>

            <div className="text-right text-lg">
              <p className="mt-8 text-gray-400">896 S STATE ST. UNIT #1151</p>
              <p className="text-gray-400">DOVER, DE 19901, USA</p>
              <p className="mt-1">CONNECT@VERITECHAI</p>
            </div>
          </div>
        </div> */}

        {/* Right Section */}
      </div>

      {/* Divider */}
      <div className="mt-8 border-t-4 border-gray-500"></div>

      {/* Bottom Text */}
      <p className="text-xs mt-4">© 2024 VERITECH INC. ALL RIGHTS RESERVED.</p>
    </footer>
  );
};

export default Footer;

// const Footer = (): JSX.Element => {
//   return (
//     <footer className="bg-[#000B5E] text-white py-24 px-6 md:px-20 lg:px-28 text-sm">
//       <div className="grid-cols-1 md:grid-cols-3 gap-8 lg:px-36 hidden lg:grid">
//         {/* Left Section */}
//         <div className="flex flex-col gap-4">
//           <h2 className="text-4xl font-light font-julius">LET'S GET TO WORK</h2>
//           <button className="bg-white text-[#000B5E] px-6 py-2 rounded-lg shadow-md w-fit text-xl font-semibold">
//             LET'S TALK
//           </button>
//           <div className="mt-12">
//             <h3 className="text-lg text-gray-400">QUICK LINKS</h3>
//             <ul className="mt-2 space-y-1 text-xl">
//               <li>
//                 <a href="#" className="hover:underline">
//                   TERMS & CONDITIONS
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:underline">
//                   PRIVACY POLICY
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Rest of the component remains the same... */}
//       </div>
//       {/* ... */}
//     </footer>
//   );
// };

// export default Footer;
