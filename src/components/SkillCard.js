import React, { useState } from 'react'

const SkillCard = ({ title, skillPerc }) => {

  const [progressClass, setProgressClass] = useState(false)

  return (
    <div className="w-40 text-[#004c53] border-2 border-[#004c53] hover:bg-[#004c53] hover:text-white rounded-md dark:border-white dark:text-white" onMouseEnter={() => setProgressClass(true)} onMouseLeave={() => setProgressClass(false)}>
      <div className=" rounded-t-md px-3 py-2 font-bold text-xl ">
        {title}
      </div>
      <div class={`rounded-b-md rounded-r-md ${progressClass ? "bg-white" : "bg-[#004c53]"} h-2 dark:bg-white`} style={{ width: { skillPerc } }}></div>
      {/* <div class="w-40 bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
      </div> */}
    </div>
  )
}

export default SkillCard