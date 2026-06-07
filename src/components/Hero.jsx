import heroImg from '../assets/hero-black.png'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import { useLang } from '../context/LangContext'

const copy = {
	it: {
		headline: 'Ciao, sono Andrea',
		role: 'Digital Products Developer',
		subline: 'Progetto e costruisco prodotti web: dalla UX al coding, dalle integrazioni AI fino al deploy.',
		second: "Collaboro con agenzie e studi di design, e con chi ha un'idea e vuole vederla diventare un prodotto reale.",
	},
	en: {
		headline: "Hi, I'm Andrea",
		role: 'Digital Products Developer',
		subline: 'I design and build web products, from UX to AI integrations to deployment.',
		second: 'I work with design agencies and studios, and with anyone who has an idea and wants to see it become a real product.',
	},
}

const Hero = () => {
	const { lang } = useLang()
	const t = copy[lang]

	return (
		<section className='bg-sky-100 pt-16 pb-8 md:pb-0 relative'>
			<div className='align-element grid md:grid-cols-2 items-center gap-8'>
				<article className='pr-10'>
					<h1 className='text-4xl font-black tracking-wider bg-gradient-to-r from-cyan-500 to-blue-500'>
						{t.headline}
					</h1>
					<p className='mt-2 text-3xl text-slate-700 capitalize tracking-wide'>
						{t.role}
					</p>
					<p className='mt-2 text-lg text-slate-700 tracking-wide'>
						{t.subline}
					</p>
					<p className='mt-1 text-lg text-slate-500 tracking-wide'>
						{t.second}
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

				<article className='hidden md:block'>
					<img src={heroImg} className='h-80 lg:h-130' />
				</article>
			</div>
			<div className='absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-500/20 to-transparent rounded-t-lg'></div>
		</section>
	)
}
export default Hero
