import { useState, useEffect } from 'react'
import { links } from '../data'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useLang } from '../context/LangContext'

const Navbar = () => {
	const [scrolled, setScrolled] = useState(false)
	const [menuOpen, setMenuOpen] = useState(false)
	const { lang, toggleLang } = useLang()

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 20)
		window.addEventListener('scroll', onScroll)
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	return (
		<nav
			className={`sticky top-0 z-50 transition-all duration-300 ${
				scrolled ? 'bg-sky-100/20 backdrop-blur-lg ' : 'bg-sky-100'
			}`}>
			<div
				className={`align-element flex justify-between items-center transition-all duration-300 ${
					scrolled ? 'py-3' : 'py-6 sm:py-8'
				}`}>
				{/* Logo */}
				<h3 className='text-2xl font-bold text-sky-400'>
					<a href='/'>
						<span className='text-sky-800'>stand-alone</span>.it
					</a>
				</h3>

				{/* Menu desktop */}
				<div className='hidden sm:flex items-center gap-3'>
					{links.map(({ id, href, text }) => (
						<a
							key={id}
							href={href}
							className='capitalize text-base font-normal tracking-wide text-slate-600 hover:text-sky-700 transition duration-300'>
							{text}
						</a>
					))}
					<button
						onClick={toggleLang}
						className='ml-2 text-xs font-bold tracking-widest text-slate-500 hover:text-sky-700 border border-slate-300 hover:border-sky-700 px-2 py-1 transition duration-300'>
						{lang === 'it' ? 'EN' : 'IT'}
					</button>
				</div>

				{/* Menu toggle (mobile only) */}
				<button
					className='sm:hidden text-2xl text-slate-700'
					onClick={() => setMenuOpen(!menuOpen)}
					aria-label='Toggle menu'>
					{menuOpen ? <FaTimes /> : <FaBars />}
				</button>
			</div>

			{/* Menu mobile */}
			{menuOpen && (
				<div className='sm:hidden flex flex-col items-center gap-4 pb-6'>
					{links.map(({ id, href, text }) => (
						<a
							key={id}
							href={href}
							onClick={() => setMenuOpen(false)}
							className='capitalize text-base font-normal tracking-wide text-slate-600 hover:text-sky-700 transition duration-300'>
							{text}
						</a>
					))}
					<button
						onClick={toggleLang}
						className='text-xs font-bold tracking-widest text-slate-500 hover:text-sky-700 border border-slate-300 hover:border-sky-700 px-2 py-1 transition duration-300'>
						{lang === 'it' ? 'EN' : 'IT'}
					</button>
				</div>
			)}
		</nav>
	)
}

export default Navbar
