import React from "react";

const Offerings = () => {
  return (
    <div className="w-full  gradient-2 text-white py-12">
      <h1 className="text-4xl font-[nunito] text-center mb-12 ">
        <span class="relative flex justify-center">
          <div class="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>

          <span class="relative bg-[#172428] rounded-lg py-1 z-1 px-6">
            What I Offer?
          </span>
        </span>
      </h1>
      <div className="flex items-center  gap-x-5 justify-center  px-3 w-full">
        <div className="object-cover">
        
          <img
            className="h-[25vw]"
            src="https://images.unsplash.com/photo-1708852154434-d6436655b99d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
          />
        </div>
        <div className=" max-w-[70%]">
          <p className="text-[1.9vw] linear__text__gradient text-gray-400 font-[poppins] leading-[2.1vw]">
            As Being A <b>Front-End developer</b>, <b>Graphic Designer</b> &{" "}
            <b>Web Designer</b>, my role involves crafting user-friendly
            interfaces to enhance your online experience. I'm well-versed in{" "}
            <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>, ensuring that the
            websites and applications I develop are not only visually appealing
            but also responsive and compatible across various browsers. I
            prioritize accessibility and optimize performance for quick loading
            times. You can expect interactive elements like animations and
            dynamic content to create engaging user interactions. Staying
            updated on emerging technologies and design trends, I strive to
            deliver modern and intuitive interfaces. Collaboration is key, and I
            work seamlessly with cross-functional teams, facilitating clear
            communication between design and development phases.
          </p>
        </div>
      </div>
      <h2>I'm Abubaker.</h2>
      <p>
        I'm a Front-End WEB-Developer, Web Designer and Graphics Designer with
        the experience of 3+ years in these fields. I've been deploying website
        since 2022.
      </p>
    </div>
  );
};

export default Offerings;
