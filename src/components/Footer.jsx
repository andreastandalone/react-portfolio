import { useLang } from '../context/LangContext'

const copy = {
	it: {
		tagline: <>Collaboro con agenzie e professionisti, condividendo la <br /> passione per tecnologia e comunicazione digitale.</>,
		cta: <>Se ti va di conoscerci meglio: <a href='mailto:andrea@stand-alone.it'><strong><em> scrivimi</em></strong></a>.</>,
		etymology: 'Stand-alone è un termine che può essere tradotto letteralmente in "sta in piedi da solo" e significa quindi "indipendente"',
	},
	en: {
		tagline: <>I work with agencies and professionals, sharing a passion <br /> for technology and digital communication.</>,
		cta: <>Want to get in touch? <a href='mailto:andrea@stand-alone.it'><strong><em> write me</em></strong></a>.</>,
		etymology: 'Stand-alone literally means "it stands on its own": independent.',
	},
}

const Footer = () => {
	const { lang } = useLang()
	const t = copy[lang]

	return (
		<>
			<section className='bg-gradient-brand py-24 align-elements' id='contacts'>
				<div className=''>
					<div className='text-center text-3xl '>
						<h2 className='subtitle font-light text-white/70 tracking-wide'>
							{t.tagline}
						</h2>
						<h2 className='title font-light text-white tracking-wide leading-loose'>
							{t.cta}
						</h2>
					</div>
				</div>
			</section>

			<footer className='footer align-elements py-24'>
				<div className=''>
					<div className='text-center text-slate-600 tracking-wide '>
						<p className='credits'>
							&copy; 2025 - stand-alone.it è <strong>Andrea Simoncini</strong> -{' '}
							<a href='mailto:andrea@stand-alone.it'>andrea@stand-alone.it</a>
							<br />
							<small>
								Via Battindarno 31 - 40133 Bologna - Italia - P.Iva: 02275470223
								- Tel: 328.2280781
							</small>
						</p>
					</div>
				</div>
				<aside className='text-center pt-16 text-slate-400 mt-8 leading-loose text-base tracking-wide'>
					<p>{t.etymology}</p>
				</aside>
			</footer>
		</>
	)
}
export default Footer
