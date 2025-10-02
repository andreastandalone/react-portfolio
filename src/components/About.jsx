import aboutSvg from '../assets/about.svg'
import SectionTitle from './SectionTitle'
const About = () => {
	return (
		<section className='bg-white py-20' id='about'>
			<div className='align-element grid  md:grid-cols-2 items-center gap-16'>
				<img src={aboutSvg} className='w-full h-64' />
				<article className='text-slate-600 mt-8 leading-loose text-base tracking-wide'>
					<SectionTitle text='About me' />
					<p className='mt-8'>
						Lavoro nel web dal 2006 e come freelance dal 2013.
					</p>

					<p className='mt-8'>
						Ho realizzato <strong>siti web</strong>, <strong>e-commerce</strong>
						, <strong>web-app</strong> e <strong>servizi online</strong>, quasi
						sempre lavorando con <strong>agenzie web</strong>,{' '}
						<strong>studi di design</strong> e <strong>marketing</strong>, , ma
						anche <strong>startup</strong>, e <strong>aziende</strong> di varie
						dimensioni.
					</p>
					<p className='mt-8'>
						Lavoro nel punto di contatto tra designer e developer, facendo{' '}
						<strong>
							dialogare gli aspetti tecnici con la visione e l’identità del
							progetto
						</strong>
						: la strategia, gli obiettivi e l’esperienza da offrire all’utente.
					</p>
				</article>
			</div>
		</section>
	)
}
export default About
