import aboutSvg from '../assets/about.svg'
import SectionTitle from './SectionTitle'
import { useLang } from '../context/LangContext'

const copy = {
	it: {
		title: 'About me',
		p1: 'Lavoro nel web dal 2006 e come freelance dal 2013. Ho realizzato siti web, e-commerce, web app e prodotti digitali completi, collaborando con agenzie di design, startup e aziende di varie dimensioni.',
		p2: 'Negli ultimi anni ho esteso il lavoro a backend, infrastruttura e AI: progetto e sviluppo applicazioni web complete in autonomia, dalla UI al database fino al deploy, e costruisco pipeline di automazione basate su modelli LLM.',
		p3: "Se lavori in un'agenzia o uno studio, mi integro nel tuo team e nel tuo flusso di lavoro senza attrito. Se hai un'idea e cerchi qualcuno che la porti in produzione da solo, sono il punto di contatto unico che ti serve.",
	},
	en: {
		title: 'About me',
		p1: 'I have been building for the web since 2006 and freelancing since 2013. I have built websites, e-commerce platforms, web apps, and complete digital products, working with design agencies, startups, and companies of various sizes.',
		p2: 'Over the last few years I have expanded into backend, infrastructure, and AI: I design and build complete web products end to end, from UI to database to deployment, and I build automation pipelines powered by LLMs.',
		p3: 'If you work at an agency or studio, I integrate into your team and workflow with no friction. If you have an idea and need someone to take it to production solo, I am the single point of contact you need.',
	},
}

const About = () => {
	const { lang } = useLang()
	const t = copy[lang]

	return (
		<section className='bg-white py-20' id='about'>
			<div className='align-element grid md:grid-cols-2 items-center gap-16'>
				<div className='hidden md:block'>
					<img src={aboutSvg} className='w-full h-64' data-aos='fade-up' />
				</div>
				<article
					className='text-slate-600 mt-8 leading-loose text-base tracking-wide'
					data-aos='fade-up'
					data-aos-delay='300'
					data-aos-easing='ease-in-sine'>
					<SectionTitle text={t.title} />
					<p className='mt-8'>{t.p1}</p>
					<p className='mt-8'>{t.p2}</p>
					<p className='mt-8'>{t.p3}</p>
				</article>
			</div>
		</section>
	)
}

export default About
