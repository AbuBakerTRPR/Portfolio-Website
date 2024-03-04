import React from 'react'

const AboutMe = () => {
  return (
    <div className='gradient-1 w-full h-screen py-12'>
      <h1 className="text-4xl font-[nunito] text-center mb-12 ">
        <span class="relative flex justify-center">
          <div class=" absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-100 to-transparent opacity-75"></div>

          <span class="relative bg-[#182224] text-white rounded-lg py-1 z-1 px-6">
            About Me
          </span>
        </span>
      </h1>
    </div>
  )
}

export default AboutMe