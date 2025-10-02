import { links } from '../data'

const Navbar = () => {
	return (
		<nav className='bg-sky-100 '>
			<div className='align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 items-center sm: justify-between sm:py-8'>
				<h3 className='text-2xl font-bold text-sky-400'>
					<span className='text-sky-800'>stand-alone</span>.it
				</h3>
				<div className='flex gap-3'>
					{links.map((link) => {
						const { id, href, text } = link
						return (
							<a
								key={id}
								href={href}
								className='capitalize text-base font-normal tracking-wide text-slate-600 hover:text-sky-700 transition duration-300'>
								{text}
							</a>
						)
					})}
				</div>
			</div>
		</nav>
	)
}
export default Navbar
