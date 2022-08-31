import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className="dark:bg-[#1b1b1b] py-20 px-5">
      <h2 className="custom-font text-5xl uppercase font-semibold text-center">About</h2>

      <div className="grid grid-cols-2 mt-10">
        <div className="space-y-2 mx-16">
          <h3 className="text-3xl font-medium custom-font">
            Hi, I'm a Web Developer from Bangalore, India
          </h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil fugiat illo fuga, dolorem ab aperiam nam sunt voluptatum? Dolore omnis quibusdam, odio animi molestias harum blanditiis esse repellendus tempore. Velit id harum ab quidem aut perferendis quod est, qui voluptas incidunt voluptates hic dolorum repudiandae soluta aliquid rem illum earum.
          </p>
          <p>
            Aut quaerat voluptates nobis, delectus itaque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, voluptates quia voluptatem fugit eum consequatur minus expedita magnam porro iure ab repellendus, suscipit fuga quod voluptate! Tenetur non
          </p>
        </div>
        <div className="mx-auto my-auto">
          <img src="/assets/atultrp.jpg" alt="profile" className="w-48 rounded-full border-8 border-gray-100"/>
          <p className="text-3xl text-center font-medium custom-font mt-2">Atul Tripathi</p>
        </div>
      </div>

    </div>
  )
}

export default About