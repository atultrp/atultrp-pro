import React, { useEffect, useState } from 'react'
import { HiSun, HiMoon, HiMenuAlt1 } from 'react-icons/hi';
import { GiCrossedBones } from 'react-icons/gi';
import NavTag from './NavTag';
import { useTheme } from 'next-themes'

const Header = () => {

	const [activeButtonIndex, setActiveButtonIndex] = useState(1); // For NavTag
	
	// Modal state
	const [modal, setModal] = useState(false);
	
	// For theme : dark & light
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	const {systemTheme, theme, setTheme} = useTheme()

	const renderThemeChanger = () => {
	if (!mounted) { return null; }
		const currentTheme = theme === 'system' ? systemTheme : theme;
		if (currentTheme === 'dark') {
			return (<HiSun className="fixed bottom-5 right-5 text-4xl sm:text-5xl text-[#FFF80A] cursor-pointer" role="button" onClick={() => setTheme('light')} />)
		}
		else {
			return (<HiMoon className="fixed bottom-5 right-5 text-4xl sm:text-5xl text-[#004c53] cursor-pointer" role="button" onClick={() => setTheme('dark')} />)
		}
	}

	return (
		<>
			{/* Desktop Version */}
			<nav className="hidden sm:flex justify-around py-4 border-b-2 border-gray-300 sticky top-0 z-30 bg-[#004c53] text-white items-center	 dark:text-white">
				<ul className="flex space-x-10 text-lg items-center">
					<NavTag
						tagTitle="Home"
						urlPath={"/"}
						onClick={() => {
							setActiveButtonIndex(1)
						}}
						classes={activeButtonIndex === 1 ? "shadow-md bg-gray-100 text-black" : ""}
					/>
					<NavTag
						tagTitle="About Me"
						urlPath="#about"
						onClick={() => {
							setActiveButtonIndex(2)
						}}
						classes={activeButtonIndex === 2 ? "shadow-md bg-gray-100 text-black" : ""}
					/>
				</ul>

				<h1 className="text-3xl font-bold uppercase cursor-pointer items-center custom-font tracking-widest text-white">{`<`}Atul Tripathi{`>`}</h1>

				<ul className="flex space-x-10 text-lg items-center">
					<NavTag
						tagTitle="Projects"
						urlPath="#projects"
						onClick={() => {
							setActiveButtonIndex(3)
						}}
						classes={activeButtonIndex === 3 ? "shadow-md bg-gray-100 text-black" : ""}
					/>
					<NavTag
						tagTitle="Contact"
						urlPath="#contact"
						onClick={() => {
							setActiveButtonIndex(4)
						}}
						classes={activeButtonIndex === 4 ? "shadow-md bg-gray-100 text-black" : ""}
					/>
				</ul>
			</nav>

			{/* Mobile Version */}
			<nav className="sm:hidden bg-[#004c53] py-3 px-4 border-b-2 border-gray-300 sticky top-0 z-30 items-center">
				<div className=" flex justify-between items-center">
					<h1 className="text-2xl font-bold uppercase cursor-pointer items-center custom-font tracking-widest text-white">Atul Tripathi{`>`}</h1>
					<HiMenuAlt1 className="text-4xl text-white" onClick={() => { modal ? setModal(false) : setModal(true) }} />
				</div>
				<ul className={`${modal ? 'block' : 'hidden'} absolute right-2 px-4 py-4 shadow-md rounded bg-white dark:bg-[#1b1b1b] dark:text-white dark:shadow-white dark:shadow-none dark:border dark:border-gray-600`}>
					<NavTag
						tagTitle="Home"
						urlPath={"/"}
						onClick={() => {
							setActiveButtonIndex(1)
							setModal(false)
						}}
						classes={activeButtonIndex === 1 ? "shadow-md bg-[#004c53] text-white" : ""}
					/>
					<NavTag
						tagTitle="About"
						urlPath="#about"
						onClick={() => {
							setActiveButtonIndex(2)
							setModal(false)
						}}
						classes={activeButtonIndex === 2 ? "shadow-md bg-[#004c53] text-white" : ""}
					/>
					<NavTag
						tagTitle="Projects"
						urlPath="#projects"
						onClick={() => {
							setActiveButtonIndex(3)
							setModal(false)
						}}
						classes={activeButtonIndex === 3 ? "shadow-md bg-[#004c53] text-white" : ""}
					/>
					<NavTag
						tagTitle="Contact"
						urlPath="#contact"
						onClick={() => {
							setActiveButtonIndex(4)
							setModal(false)
						}}
						classes={activeButtonIndex === 4 ? "shadow-md bg-[#004c53] text-white" : ""}
					/>
				</ul>
			</nav>

			{renderThemeChanger()}

		</>
	)
}

export default Header