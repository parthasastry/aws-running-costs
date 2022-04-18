import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  return (
    <div className="fixed w-full flex justify-between items-center h-24 max-w[1240px] mx-auto px-4 bg-zinc-300 drop-shadow-lg">
      <h1 className="w-full text-3xl font-bold">AWS Running Costs</h1>
      <ul className="flex justify-between uppercase font-bold">
        <li className="p-4">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="p-4">
          <Link to="download" smooth={true} duration={500}>
            Download
          </Link>
        </li>
        <li className="p-4">
          <Link to="faq" smooth={true} duration={500}>
            FAQ
          </Link>
        </li>
      </ul>
    </div>
  );
  //   return (
  //     <div className="flex justify-between items-center h-24 max-w[1240px] mx-auto px-4 bg-gray-200">
  //       <div className="px-2 flex justify-between items-center w-full h-full">
  //         <div className="flex items-center">
  //           <h1 className="w-full text-3xl font-bold">AWS Running Costs</h1>
  //           <ul className="flex items-center uppercase font-bold">
  //             <li className="py-4">
  //               <Link to="home" smooth={true} duration={500}>
  //                 Home
  //               </Link>
  //             </li>
  //             <li className="py-4">
  //               <Link to="download" smooth={true} duration={500}>
  //                 Download
  //               </Link>
  //             </li>
  //           </ul>
  //         </div>
  //       </div>
  //     </div>
  //   );
};

export default Navbar;
