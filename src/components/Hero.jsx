import heroImg from '../assets/hero.svg'
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'
const Hero = () => {
	return (
		<section className='bg-sky-100 py-24'>
			<div className='align-element grid md:grid-cols-2 items-center gap-8'>
				<article>
					<h1 className='text-4xl font-black tracking-wider bg-gradient-to-r from-blue-600 to-violet-600'>
						Ciao, sono Andrea
					</h1>
					<p className='mt-2 text-3xl text-slate-700 capitalize tracking-wide'>
						Front-End Developer
					</p>
					<p className='mt-2 text-lg text-slate-700 tracking-wide'>
						Sono uno sviluppatore web freelance,
						<br />
						con esperienza in UX e visual design.
					</p>
					<div className='flex gap-x-4 mt-4'>
						<a
							href='https://github.com/andreastandalone'
							target='_blank'
							rel='noreferrer'>
							<FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
						</a>
						<a
							href='https://www.linkedin.com/in/andreasimoncini/'
							target='_blank'
							rel='noreferrer'>
							<FaLinkedin className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
						</a>
					</div>
				</article>

				<article className='hidden md:block '>
					<img src={heroImg} className='h-80 lg:h-96' />
				</article>
			</div>
		</section>
	)
}
export default Hero
