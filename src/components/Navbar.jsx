import { motion } from "framer-motion";
import React from "react";

const list = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 90 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};
const parent = {
  hidden: { opacity: 0 ,  y:-100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration:1,
      staggerChildren: 0.4,
    },
  },
};

const children = {
  hidden: { opacity: 0, y:-100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};



const Navbar = () => {    
   return (
    // <div ref={scope} className="left-0 sticky top-0 gradient-3">
    //   <nav id="navbar" className="flex z-10 rounded-xl  lg:rounded-none w-full  bg-white/25 lg:bg-transparent  text-white items-center justify-between lg:ps-32"
    //   >
    //     <div id="logo" className="left">
    //       <b className="lg:text-3xl md:text-2xl text-[3.5vw]  lg:bg-white/10 py-5 px-6 lg:shadow-lg lg:rounded-b-xl font-[nunito]">
    //         Abubaker <span>Portfolio</span>
    //       </b>
    //     </div>

    //     <div className="right flex items-center lg:gap-x-28 lg:bg-white/10 lg:rounded-l-lg lg:shadow-lg lg:pe-12 pe-2 lg:ps-4 py-4">
    //       <ul id="listItems" className="gap-x-6 hidden lg:flex font-[poppins] items-center justify-between"
    //       >
    //         <li >
    //           <a href="/">Home</a>
    //         </li>
    //         <li >
    //           <a href="/">Projects</a>
    //         </li>
    //         <li >
    //           <a href="/">Services</a>
    //         </li>
    //         <li >
    //           <a href="/">About</a>
    //         </li>
    //       </ul>
    //       <button className="bg-white/70 py-3 px-4 rounded-full font-[nunito] flex items-center  text-black font-bold  transition-all ease-in hover:bg-white/40 ">
    //         Contact Me
    //       </button>
    //     </div>
    //   </nav>
    // </div>
    <div className="left-0 sticky top-0 z-10 gradient-3">
      <motion.nav
        initial='hidden'
        animate='show'
        variants={parent}
        // initial={{ y: -100, opacity: 0 }}
        // animate={{ y: 0, opacity: 1 }}
        // transition={{ duration: 1 , staggerChildren:1}}
        className="flex z-10 rounded-xl  lg:rounded-none w-full  bg-white/25 lg:bg-transparent  text-white items-center justify-between lg:ps-32"
      >
        <div variants={children}  className="left" >
          <b className="lg:text-3xl md:text-2xl text-[3.5vw]  lg:bg-white/10 py-5 px-6 lg:shadow-lg lg:rounded-b-xl font-[nunito]">
            Abubaker <span>Portfolio</span>
          </b>
        </div>

        <div variants={children}  className="right flex items-center lg:gap-x-28 lg:bg-white/10 lg:rounded-l-lg lg:shadow-lg lg:pe-12 pe-2 lg:ps-4 py-4">
          <motion.ul
            variants={list}
            initial="hidden"
            animate="show"
            className="gap-x-6 hidden lg:flex font-[poppins] items-center justify-between"
          >
            <motion.li variants={item}>
              <a href="/">Home</a>
            </motion.li>
            <motion.li variants={item}>
              <a href="/">Projects</a>
            </motion.li>
            <motion.li variants={item}>
              <a href="/">Services</a>
            </motion.li>
            <motion.li variants={item}>
              <a href="/">About</a>
            </motion.li>
          </motion.ul>
          <button className="bg-white/70 py-3 px-4 rounded-full font-[nunito] flex items-center  text-black font-bold  transition-all ease-in hover:bg-white/40 ">
            Contact Me
          </button>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
