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
	// const { theme, setTheme } = useTheme('dark')

	useEffect(() => {
		setMounted(true)
	}, [])

	// ------------

	const {systemTheme, theme, setTheme} = useTheme()

	console.log("systemTheme",systemTheme)
	console.log("theme",theme);

	const renderThemeChanger = () => {
	if (!mounted) { return null; }
		const currentTheme = theme === 'system' ? systemTheme : theme;
		console.log("currentTheme",currentTheme)
		if (currentTheme === 'dark') {
			return (<HiSun className="text-3xl sm:text-5xl text-[#FFF80A] cursor-pointer" role="button" onClick={() => setTheme('light')} />)
		}
		else {
			return (<HiMoon className="text-3xl sm:text-5xl text-[#161B22] cursor-pointer" role="button" onClick={() => setTheme('dark')} />)
		}
	}
	// ------------


	// if (!mounted) { return null; }

	return (
		<>
			{/* Desktop Version */}
			<nav className="hidden sm:flex justify-around py-4 border-b-2 border-gray-300 sticky top-0 z-30 bg-white items-center dark:bg-[#161B22] dark:text-white">
				<ul className="flex space-x-10 text-lg items-center">
					<NavTag
						tagTitle="Home"
						urlPath={"/"}
						onClick={() => {
							setActiveButtonIndex(1)
						}}
						classes={activeButtonIndex === 1 ? "shadow-md bg-blue-500 text-white" : ""}
					/>
					<NavTag
						tagTitle="About"
						urlPath="#about"
						onClick={() => {
							setActiveButtonIndex(2)
						}}
						classes={activeButtonIndex === 2 ? "shadow-md bg-blue-500 text-white" : ""}
					/>
				</ul>

				<h1 className="text-3xl font-bold uppercase cursor-pointer items-center custom-font tracking-widest">Atul Tripathi</h1>

				<ul className="flex space-x-10 text-lg items-center">
					<NavTag
						tagTitle="Projects"
						urlPath="#projects"
						onClick={() => {
							setActiveButtonIndex(3)
						}}
						classes={activeButtonIndex === 3 ? "shadow-md bg-blue-500 text-white" : ""}
					/>
					<NavTag
						tagTitle="Contact"
						urlPath="#contact"
						onClick={() => {
							setActiveButtonIndex(4)
						}}
						classes={activeButtonIndex === 4 ? "shadow-md bg-blue-500 text-white" : ""}
					/>
				</ul>
			</nav>

			{/* Mobile Version */}
			<nav className="sm:hidden bg-white dark:bg-[#161B22] dark:text-white py-2 px-3 border-b-2 border-gray-300 sticky top-0 z-30 items-center">
				<div className=" flex justify-between items-center">
					<h1 className="text-xl font-bold uppercase cursor-pointer items-center custom-font tracking-widest">Atul Tripathi{`>`}</h1>
					<HiMenuAlt1 className="text-2xl" onClick={() => { modal ? setModal(false) : setModal(true) }} />
				</div>
				<ul className={`${modal ? 'block' : 'hidden'} absolute right-2 px-3 py-2 shadow-md rounded bg-white dark:bg-[#161B22] dark:text-white dark:shadow-white dark:shadow-none dark:border dark:border-gray-600`}>
					<NavTag
						tagTitle="Home"
						urlPath={"/"}
						onClick={() => {
							setActiveButtonIndex(1)
							setModal(false)
						}}
						classes={activeButtonIndex === 1 ? "shadow-md bg-blue-500 text-white" : ""}
					/>
					<NavTag
						tagTitle="About"
						urlPath="#about"
						onClick={() => {
							setActiveButtonIndex(2)
							setModal(false)
						}}
						classes={activeButtonIndex === 2 ? "shadow-md bg-blue-500 text-white" : ""}
					/>
					<NavTag
						tagTitle="Projects"
						urlPath="#projects"
						onClick={() => {
							setActiveButtonIndex(3)
							setModal(false)
						}}
						classes={activeButtonIndex === 3 ? "shadow-md bg-blue-500 text-white" : ""}
					/>
					<NavTag
						tagTitle="Contact"
						urlPath="#contact"
						onClick={() => {
							setActiveButtonIndex(4)
							setModal(false)
						}}
						classes={activeButtonIndex === 4 ? "shadow-md bg-blue-500 text-white" : ""}
					/>
				</ul>
			</nav>

			{/* Theme Toggle */}
			{/* <div className="absolute bottom-5 right-5">
				<HiMoon className={`text-3xl sm:text-5xl text-[#161B22] cursor-pointer ${theme !== 'light' ? 'hidden' : 'block'}`} onClick={() => { setTheme("dark") }} />
				<HiSun className={`text-3xl sm:text-5xl text-[#FFF80A] cursor-pointer ${theme !== 'dark' ? 'hidden' : 'block'}`} onClick={() => { setTheme("light") }} />
			</div> */}

			{renderThemeChanger()}

		</>
	)
}

export default Header