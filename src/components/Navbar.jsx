import { useState, useEffect } from 'react'
import { links } from '../data'

const Navbar = () => {
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const onScroll = () => {
			setScrolled(window.scrollY > 20) // attiva quando scrolli oltre 20px
		}
		window.addEventListener('scroll', onScroll)
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	return (
		<nav
			className={`sticky top-0 z-50 transition-all duration-300 ${
				scrolled ? 'bg-sky-100/80 backdrop-blur-md shadow-sm' : 'bg-sky-100'
			}`}>
			<div
				className={`align-element flex flex-col sm:flex-row sm:gap-x-16 items-center justify-between transition-all duration-300 ${
					scrolled ? 'py-3' : 'py-6 sm:py-8'
				}`}>
				<h3 className='text-2xl font-bold text-sky-400'>
					<a href='#top'>
						<span className='text-sky-800'>stand-alone</span>.it
					</a>
				</h3>
				<div className='flex gap-3'>
					{links.map(({ id, href, text }) => (
						<a
							key={id}
							href={href}
							className='capitalize text-base font-normal tracking-wide text-slate-600 hover:text-sky-700 transition duration-300'>
							{text}
						</a>
					))}
				</div>
			</div>
		</nav>
	)
}

export default Navbar
