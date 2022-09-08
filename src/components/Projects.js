import React from 'react'
import ProjectItem from './ProjectItem'

const Projects = () => {

  const projectInfo = [
    {
      id: '2',
      imgSrc: 'project/worldRank.png',
      name: 'World Rank App',
      description: 'This ranks countries by their populations, name, area and shows all the important details of the individual country with theme functionality.',
      projectSrc: 'https://world-rank.atultrp.vercel.app/',
      githubSrc: 'https://github.com/atultrp/World-Rank-App'
    },
    {
      id: '4',
      imgSrc: 'project/starBookGallery.png',
      name: 'Starbook Gallery',
      description: 'You can upload you pictures collection by clicking the upload button. Click on images to overview the full image.',
      projectSrc: 'https://starbook-gallery-app.vercel.app/',
      githubSrc: 'https://github.com/atultrp/Starbook-Gallery-App'
    },
    {
      id: '3',
      imgSrc: 'project/starBlog.png',
      name: 'Star Blog',
      description: 'A blogging website where you can post your thoughts, your daily life routine and whatever you want to share the world. Easy Peasy!!',
      projectSrc: '',
      githubSrc: 'https://github.com/atultrp/Star-Blog'
    },
    {
      id: '1',
      imgSrc: 'project/bearPro.png',
      name: 'Bear Pro',
      description: 'This application is simply made to link your wallet to metamask and help you to mint the token with in seconds.',
      projectSrc: 'https://bearpro.vercel.app/',
      githubSrc: 'https://github.com/atultrp/BearPro'
    },
    {
      id: '5',
      imgSrc: 'project/textStar.png',
      name: 'Text Star',
      description: 'TextStar is a word counter and a character counting utility which can be used to manipulate your text in the way you want.',
      projectSrc: 'https://text-star-app-by-next-js.vercel.app/',
      githubSrc: 'https://github.com/atultrp/TextStar-App-By-NextJs'
    },
    {
      id: '6',
      imgSrc: 'project/coinStar.png',
      name: 'Coinstar',
      description: 'CoinStar App - Price of all cryptocurrency like bitcoin, ethereum, dogecoin and many more.',
      projectSrc: 'https://coin-star.vercel.app/',
      githubSrc: 'https://github.com/atultrp/CoinStar'
    },
  ]

  return (
    <div className="dark:bg-[#004c53] bg-white dark:text-white py-1 px-6 sm:px-20 font-medium">
      <h2 className="custom-font text-4xl sm:text-5xl uppercase font-semibold text-center pt-16">Projects</h2>
      <div className="flex flex-wrap justify-center mt-5 ">
        {projectInfo?.map(item => {
          return <ProjectItem
            projectInfo={item}
          />
        })}
      </div>

    </div>
  )
}

export default Projects