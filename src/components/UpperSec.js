import React from 'react'

const UpperSec = () => {
  return (
    <div className="sm:grid grid-cols-2 px-10 dark:bg-[#004c53] dark:text-white bg-white text-[#004c53e5] pb-10 sm:pb-0">
      <div className="">
        <img src="/assets/headerImg.png" alt="Image" className="dark:hidden" />
        <img src="/assets/headerImg.svg" alt="Image" className="hidden dark:block" />
      </div>
      <div className="items-center my-auto">
        <p className="text-lg sm:text-xl font-medium py-1 sm:py-2 italic">Hi, my name is</p>
        <h2 className="custom-font leading-snug uppercase font-bold dark:text-white">
          <p className="text-4xl sm:text-5xl py-1 sm:py-2">Atul Tripathi.</p>
          <p className="text-4xl sm:text-5xl py-1 sm:py-2">I love to learn & create stuff.</p>
        </h2>
        <p className="text-lg sm:text-xl font-medium text-start dark:text-white py-1 sm:py-2">
          I'm a Fullstack JavaScript Developer. I love learning new things and challenging myself. Currently I'm focused on developing and maintaining awesome interfaces & experiences at {" "}
          <a href="https://riskcovry.com/" className="font-semibold underline">
            Riskcovry
          </a>{" "}for insurTech industry.
        </p>
        <button className="px-3 py-2 bg-white border border-[#004c53] hover:bg-[#004c53] hover:text-white font-semibold my-2 rounded dark:bg-[#004c53] dark:border-white dark:hover:bg-white dark:hover:text-[#004c53]">
          Get In Touch!
        </button>
      </div>
    </div>
  )
}

export default UpperSec