import img from "../assets/right.png";
import img2 from "../assets/bg.png";
import { FaFacebook, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaGithub, FaArrowRight } from "react-icons/fa6";
import { GoDownload } from "react-icons/go";
import { motion } from "framer-motion";


const parent = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const children = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const HomeBody = () => {
 
  return (
    <div className=" w-full min-h-[85vh] gradient-1 ">
      <div className="flex text-white w-full px-6 bg-transparent min-h-[85vh] items-center justify-around relative">

        <motion.div variants={parent} initial="hidden" animate="show" className="min-w-[50%] lg:ps-24 ">
      <motion.div variants={children}>
        <motion.div  variants={children} >
          <motion.div  variants={children} className="space-y-2 linear__text__gradient">
            <h3 className="text-4xl font-semibold font-[Poppins]">Hey There,</h3>
            <h1 className="text-5xl pe-16 font-semibold">
              I'm <span className="font-[Poppins] text-[#c45908]">~Abubaker</span>
            </h1>
            <h4 className="text-[3.5vw] leading-[3.5vw]">
              <span className="text-[#969042] font-[Poppins] tracking-tighter">
                A Frontend Web Developer
              </span>
            </h4>
          </motion.div>
          <p className="text-gray-300 py-3 text-xl font-[poppins] max-w-[65%]">
            As an enthusiast, passionate and inventive Front-End Developer, I thrive on building Scaleable, responsive & aesthetically pleasing user experiences.
          </p>
      </motion.div>
      </motion.div>
      <motion.div variants={children}>
        <div>
        <div className="social-links flex mt-4 mb-6 gap-x-6">
              <a
                className="hover:scale-110 ease-in transition-all text-[#ddd34b]"
                href=""
              >
                <FaFacebook size={25} />
              </a>
              <a
                className="hover:scale-110 ease-in transition-all text-[#ddd34b]"
                href=""
              >
                <FaLinkedinIn size={25} />
              </a>
              <a
                className="hover:scale-110 ease-in transition-all text-[#ddd34b]"
                href=""
              >
                <FaInstagram size={25} />
              </a>
              <a
                className="hover:scale-110 ease-in transition-all text-[#ddd34b]"
                href=""
              >
                <FaXTwitter size={25} />
              </a>
            </div>
          <div className="flex items-center gap-x-3">
          <button className="bg-white/70 py-3 px-4 rounded-full font-[nunito] flex items-center gap-1 shadow-lg  text-black font-bold  transition-all ease-in hover:bg-white/40 ">
                Resume <GoDownload />
              </button>
              <button className="flex items-center justify-center gap-x-1 font-semibold  hover:text-white/80 font-[nunito]">
                Github <FaGithub />
              </button>
          </div>
        </div>
      </motion.div>
      <motion.div variants={children}>
        <div>
          <div></div>
          <div></div>
        </div>
      </motion.div>
    </motion.div>
       <div  className=" flex-col hidden lg:flex min-w-[40%] items-center gap-y-2 ">
          <h1 className="text-4xl text-transparent  bg-gradient-to-bl to-orange-300 from-yellow-200 via-slate-200 bg-clip-text   text-slate-300 font-[poppins] tracking-tighter">
            Let's Code the Imagination!
          </h1>
          < motion.img 
           animate={{opacity:1 , scale:[ 0, 1.2 , 1 ]   }}
           transition={{duration:2, delay:1, }}
           initial={{opacity:0 , scale:0,   }}
          src={img2} className="w-[30vw] backShadow" alt="" />
        
       </div>
        <p className=" text-slate-950 animate-pulse font-bold rotate-90 flex items-center gap-4 absolute bottom-24 right-1">
        Scroll <FaArrowRight />
      </p>
      </div>      
    </div>
  );
};

export default HomeBody;





 {/* <motion.div className="min-w-[50%] lg:ps-24 ">
          <div>
            <div className="space-y-2 linear__text__gradient ">
            <h3 className="text-4xl font-semibold font-[Poppins] ">Hey There,</h3>
            <h1 className="text-5xl  pe-16 font-semibold">
            I'm <span className="font-[Poppins] text-[#c45908 ]">~Abubaker</span>
            </h1>
            <h4 className="text-[3.5vw] leading-[3.5vw]">
              <span className=" text-[#969042] font-[Poppins] tracking-tighter ">
                A Frontend Web Developer
              </span>
            </h4>
            </div>
            <p className=" text-gray-300 py-3 text-xl font-[poppins] max-w-[65%]">
            As an enthusiast, passionate and inventive Front-End Developer, I thrive on building  Scaleable, responsive & aesthetically pleasing user experiences.
            </p>
          </div>
          <div>
            <div className="social-links flex mt-4 mb-6 gap-x-6">
              <a
                className="hover:scale-110 ease-in transition-all text-[#ddd34b]"
                href=""
              >
                <FaFacebook size={25} />
              </a>
              <a
                className="hover:scale-110 ease-in transition-all text-[#ddd34b]"
                href=""
              >
                <FaLinkedinIn size={25} />
              </a>
              <a
                className="hover:scale-110 ease-in transition-all text-[#ddd34b]"
                href=""
              >
                <FaInstagram size={25} />
              </a>
              <a
                className="hover:scale-110 ease-in transition-all text-[#ddd34b]"
                href=""
              >
                <FaXTwitter size={25} />
              </a>
            </div>
            <div className="flex items-center gap-x-3">
              <button className="bg-white/70 py-3 px-4 rounded-full font-[nunito] flex items-center gap-1 shadow-lg  text-black font-bold  transition-all ease-in hover:bg-white/40 ">
                Resume <GoDownload />
              </button>
              <button className="flex items-center justify-center gap-x-1 font-semibold  hover:text-white/80 font-[nunito]">
                Github <FaGithub />
              </button>
            
            </div>
          </div>
          <div className="">
            <div></div>
            <div></div>
          </div>
        </motion.div> */}