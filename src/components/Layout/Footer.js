import React from 'react'
import { BsGithub, BsTwitter, BsLinkedin, BsInstagram } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font border-t-2 border-gray-50 sm:pr-20">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900" href="/">
          <h1 className="text-xl font-bold uppercase cursor-pointer items-center custom-font tracking-widest text-white">{`<`}Atul Tripathi{`>`}</h1>
        </a>
        <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2022 StarIndustries —
          <a href="https://github.com/atultrp" className="text-gray-200 ml-1" rel="noopener noreferrer" target="_blank">@atultrp</a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <div className="flex justify-center space-x-4 text-2xl my-3 text-gray-200">
            <a href="https://github.com/atultrp" className="hover:scale-150 duration-200"><BsGithub /></a>
            <a href="https://www.twitter.com/atultrp_" className="hover:scale-150 duration-200"><BsTwitter /></a>
            <a href="https://www.linkedin.com/in/atultrp-/" className="hover:scale-150 duration-200"><BsLinkedin /></a>
            <a href="https://www.instagram.com/atultrp" className="hover:scale-150 duration-200"><BsInstagram /></a>
          </div>
        </span>
      </div>
    </footer>
  )
}

export default Footer