import React, { useState } from 'react'

const SkillCard = ({ skillData }) => {

  const [progressClass, setProgressClass] = useState(false)

  return (
    <div className="shadow shadow-gray-900 m-2 sm:m-2 w-32 sm:w-40 text-[#004c53] border-2 border-[#004c53] hover:bg-[#004c53] hover:text-white rounded-md dark:border-white dark:text-white" onMouseEnter={() => setProgressClass(true)} onMouseLeave={() => setProgressClass(false)}>
      <div className=" rounded-t-md px-2 py-1 sm:px-3 sm:py-2 font-bold text-lg sm:text-xl ">
        {skillData.title}
      </div>
      <div class={`rounded-b-md rounded-r-md ${progressClass ? "bg-white" : "bg-[#004c53]"} h-2 dark:bg-white`} style={{ width: "100%" }}></div>
    </div>
  )
}

export default SkillCard