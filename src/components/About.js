import React from 'react'
import { BsGithub, BsTwitter, BsLinkedin, BsInstagram } from 'react-icons/bs';
import { TbPoint } from 'react-icons/tb';

const About = () => {
  return (
    <div className="dark:bg-[#004c53] bg-white dark:text-white py-1 px-6 sm:px-20 font-medium">
      <h2 className="custom-font text-4xl sm:text-5xl uppercase font-semibold text-center pt-16">About Me</h2>
      <div className="flex flex-col-reverse sm:flex-row sm:mt-6 items-center">
        <div className="space-y-3 sm:mx-16 sm:w-3/5">
          <h3 className="text-3xl font-medium custom-font">
            Hi, I &apos; m a Web Developer from Bangalore, India.
          </h3>
          <p className="text-base sm:text-lg">
            My passion for software lies with dreaming up ideas and making them come true with elegant interfaces. I take great care in the experience, architecture, and code quality of the things I build.
            I am also an <span className="font-semibold">open-source enthusiast</span> and <span className="font-semibold">maintainer</span>. I learned a lot from the open-source community and I love how collaboration and knowledge sharing happened through <span className="font-semibold">open-source</span> .
          </p>
          <p className="text-base sm:text-lg">
            Other than this I've also worked as a freelancer on <span className="font-semibold"> Upwork </span> from time to time. My main focus these days is building accessible, inclusive products and digital experiences at {" "}
            <a href="https://riskcovry.com/" className="font-semibold underline">
              Riskcovry
            </a>.
          </p>
          <div className="text-base sm:text-lg">
            Here are a few technologies I've been working with recently:
            <ul className="grid grid-cols-2 mt-3">
              <li className="flex items-center space-x-2">
                <TbPoint /> <span> JavaScript (ES6+)</span>
              </li>
              <li className="flex items-center space-x-2">
                <TbPoint /> <span> React</span>
              </li>
              <li className="flex items-center space-x-2">
                <TbPoint /> <span> Next.js</span>
              </li>
              <li className="flex items-center space-x-2">
                <TbPoint /> <span> Tailwind Css</span>
              </li>
              <li className="flex items-center space-x-2">
                <TbPoint /> <span> Redux</span>
              </li>
              <li className="flex items-center space-x-2">
                <TbPoint /> <span> Node.js</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-auto my-5 sm:w-2/5 sm:-ml-36">
          <img src="/assets/atultrp.jpg" alt="profile" className="w-56 rounded-full border-8 border-gray-100 mx-auto" />
          <p className="text-3xl text-center font-medium custom-font mt-2">Atul Tripathi</p>
          <div className="flex justify-center space-x-4 text-2xl my-3">
            <a href="https://github.com/atultrp" className="hover:scale-150 duration-200"><BsGithub /></a>
            <a href="https://www.twitter.com/atultrp_" className="hover:scale-150 duration-200"><BsTwitter /></a>
            <a href="https://www.linkedin.com/in/atultrp-/" className="hover:scale-150 duration-200"><BsLinkedin /></a>
            <a href="https://www.instagram.com/atultrp" className="hover:scale-150 duration-200"><BsInstagram /></a>
          </div>
        </div>
      </div>

      {/* Skill set */}

      <h2 className="custom-font text-3xl sm:text-4xl uppercase font-semibold pt-16">Technical Skills</h2>
      
    </div>
  )
}

export default About