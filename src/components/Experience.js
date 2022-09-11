import React from 'react'

const Experience = () => {
  return (
    <section className="dark:text-white ">
      <div className="container px-5 py-14 mx-auto">
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <img src="assets/riskcovryLogo.jpg" alt="Riskcovry" className="rounded-full" />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="dark:text-white sm:text-lg text-xl font-semibold  ">Frontend Developer</h2>
            <h2 className="dark:text-white sm:text-base text-lg font-medium mb-2 ">
              <a href="https://riskcovry.com/" className="underline">
                Riskcovry
              </a>{" "}
              - Intern (Jan 2022 - Apr 2022)
            </h2>
            <p className="leading-relaxed text-base">
              Bengaluru, Karnataka, India
            </p>
            <p className="leading-relaxed text-base">
              🔹 A full stack insurance distribution platform. <br />
              🔹 Worked on React products. <br />
              🔹 Developed and implement reusable components. <br />
              🔹 Learnt many new things in React.<br />
            </p>
          </div>
        </div>
        <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="dark:text-white sm:text-lg text-xl font-semibold  ">Frontend Developer</h2>
            <h2 className="dark:text-white sm:text-base text-lg font-medium mb-2 ">
              <a href="https://riskcovry.com/" className="underline">
                Riskcovry
              </a>{" "}
              - Full-time (July 2022 - Present)
            </h2>
            <p className="leading-relaxed text-base">
              Bengaluru, Karnataka, India
            </p>
            <p className="leading-relaxed text-base">
              🔹 Working on React products <br />
              🔹 Developing and implementing highly-responsive user interface components using React concepts. <br />
              🔹 Monitoring and improving front-end performance. <br />
              🔹 Documenting application changes and developing updates.
            </p>
          </div>
          <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <img src="assets/riskcovryLogo.jpg" alt="riskcovry" className="rounded-full" />
          </div>
        </div>
        {/* <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">The 400 Blows</h2>
            <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
            <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Experience