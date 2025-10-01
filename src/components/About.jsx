import aboutSvg from '../assets/about.svg'
import SectionTitle from './SectionTitle'
const About = () => {
	return (
		<section className='bg-white py-20' id='about'>
			<div className='align-element grid  md:grid-cols-2 items-center gap-16'>
				<img src={aboutSvg} className='w-full h-64' />
				<article className='text-slate-600 mt-8 leading-loose text-base tracking-wide'>
					<SectionTitle text='Chi sono' />
					<p className='mt-8'>
						Lavoro nel web dal 2006 e come consulente freelance dal 2013.
					</p>

					<p className='mt-8'>
						Ho lavorato a moltissimi <strong>siti web</strong>,{' '}
						<strong>e-commerce</strong>, <strong>web-app</strong> e{' '}
						<strong>servizi online</strong>, in collaborazione con{' '}
						<strong>web e design agencies</strong>, <strong>startup</strong>, e{' '}
						<strong>aziende</strong> di tutte le dimensioni.
					</p>
					<p className='mt-8'>
						Lavoro nel punto di contatto tra designer e developer, facendo
						dialogare gli aspetti tecnici con la visione legata all’identità
						online del progetto: la <strong>strategia</strong>, gli{' '}
						<strong>obiettivi</strong> e <strong>l’esperienza</strong> che vuole
						offrire all’utente.
					</p>
				</article>
			</div>
		</section>
	)
}
export default About
