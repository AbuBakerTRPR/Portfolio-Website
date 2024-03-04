import React from "react";
import img3 from "../assets/html.svg";
import img2 from "../assets/css.svg";
import img4 from "../assets/bootstrap.svg";
import img6 from "../assets/javascript.svg";
import img from "../assets/react.svg";
import img5 from "../assets/tailwind-css.svg";
import img7 from "../assets/redux.svg";
import img8 from "../assets/typescript.svg";
import img9 from "../assets/framerMotion.svg";
import {motion} from "framer-motion"
const data = [
  {
    title: "HTML5",
    image: img3,
    bg:false
  },
  {
    title: "CSS3",
    image: img2,
    bg:true
  },
  {
    title: "BootStrap5",
    image: img4,
    bg:false
  },
  {
    title: "JavaScript(ES6)",
    image: img6,
    bg:false
  },
  {
    title: "TypeScript",
    image: img8,
    bg:false
  },
  {
    title: "React",
    image: img,
    bg:true
  },
  {
    title: "TailwindCSS",
    image: img5,
    bg:false
  },
  {
    title: "Redux-TK",
    image: img7,
    bg:false
  },
  {
    title: "Framer-Motion",
    image: img9,
    bg:false
  },
];

const parent = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration:1,
      staggerChildren: 0.1,
    },
  },
};

const children = {
  hidden: { opacity: 0, scale:0 , y:100},
  show: {
    opacity: 1,
    scale: 1,
    y:0,
    transition: {
      // duration: 0.8,
    },
  },
};

const SkillList = () => {
  return (
    <div className="py-8 text-white mx-auto flex w-full flex-col items-center justify-center ">
      <h1 className="text-4xl font-[nunito] text-center mb-12  w-full">
        <span class="relative flex justify-center">
          <div class="-z-10 absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-100 to-transparent opacity-75"></div>

          <span class="relative bg-[#2d4045] rounded-lg py-1 z-1 px-6">
            My Skills
          </span>
        </span>
      </h1>
      <motion.div  variants={parent} initial="hidden" animate ='show' className="grid col-span-12 place-items-center gap-16">
        {data.map((item) => (
          <motion.div
          variants={children}
            key={item.title}
            className="flex flex-wrap col-span-1  hover:bg-white/10 transition-all ease-in-out  hover:shadow-xl duration-300  rounded-md  p-3 flex-col items-center justify-center"
          >
            <img src={item.image} className= { item?.bg? 'w-[4vw]  lg:w-[3.3vw]' : 'w-[3.3vw]'} alt="" />
            <p className="font-semibold text-center text-sm text-gray-400">
              {item.title}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillList;
