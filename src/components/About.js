import React from 'react'
import { BsGithub, BsTwitter, BsLinkedin, BsInstagram } from 'react-icons/bs';


const About = () => {
  return (
    <div className="dark:bg-[#004c53] bg-white dark:text-white py-1 px-20" id="about">
      <h2 className="custom-font text-5xl uppercase font-semibold text-center mt-20">About Me</h2>

      <div className="flex mt-6 items-center">
        <div className="space-y-2 mx-16 w-3/5">
          <h3 className="text-3xl font-medium custom-font">
            Hi, I'm a Web Developer from Bangalore, India
          </h3>
          <p>
            {/* I am a web developer. I'm pursuing Bachelors of Science from University of Delhi and in the lockdown I taught myself many skills of computer science. I love tea because I'm an Indian, ha ha!! If you wanna know more about myself then keep reading. */}
            I'm a Fullstack JavaScript Developer. I love learning new things and challenging myself. Currently I'm focused on developing and maintaining awesome interfaces & experiences at Riskcovry for insurTech industry.
            </p>
          <p>
            My passion for software lies with dreaming up ideas 🤓️ and making them come true with elegant interfaces 👨‍💻️. I take great care in the experience, architecture, and code quality of the things I build.
            I am also an open-source enthusiast 👐️ and maintainer. I learned a lot from the open-source community and I love ❤️ how collaboration and knowledge sharing happened through open-source 📃️.
          </p>
        </div>
        <div className="mx-auto my-auto w-2/5 -ml-36">
          <img src="/assets/atultrp.jpg" alt="profile" className="w-48 rounded-full border-8 border-gray-100 mx-auto" />
          <p className="text-3xl text-center font-medium custom-font mt-2">Atul Tripathi</p>
          <div className="flex justify-center space-x-3 text-2xl my-3">
            <a href=""><BsGithub /></a>
            <a href=""><BsTwitter /></a>
            <a href=""><BsLinkedin /></a>
            <a href=""><BsInstagram /></a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About