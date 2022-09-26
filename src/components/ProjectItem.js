import { BiLinkExternal } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';

const ProjectItem = ({ projectInfo }) => {
  return (
    <div className="sm:w-[320px] p-4 hover:scale-110 hover:transition-transform duration-200 ease-in-out delay-150">
      <div className="flex relative">
        <img alt="project Image" className="absolute inset-0 w-full h-[198px] object-cover object-center rounded-3xl shadow-md shadow-gray-900 border-2 border-[#004c53]" src={projectInfo.imgSrc} />
        <div className="px-4 py-3 relative z-10 w-full h-[198px] border-2 border-gray-200 bg-[#004c53] text-white opacity-0 hover:opacity-100 backdrop-blur-2xl transition-opacity duration-300 rounded-3xl">
          <h1 className="title-font text-lg font-semibold uppercase mb-2">{projectInfo.name}</h1>
          <p className="leading-relaxed text-sm">{projectInfo.description}</p>
          <div className="flex mt-3">
            <a href={projectInfo.projectSrc} className={`hover:scale-150 duration-200 mr-4 text-2xl ${!projectInfo.projectSrc && "hidden"}`} target="_blank">
              <BiLinkExternal />
            </a>
            <a href={projectInfo.githubSrc} className="hover:scale-150 duration-200 text-2xl" target="_blank">
              <BsGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem