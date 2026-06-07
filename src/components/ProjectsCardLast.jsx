import nextImg from '../assets/projects/next.png'
import { useLang } from '../context/LangContext'

const ProjectsCardLast = () => {
	const { lang } = useLang()
	return (
		<article className='bg-white rounded-lg shadow-md block hover:shadow-xl duration-300 mb-4'>
			<div className='relative bg-sky-100 h-full'>
				<img
					src={nextImg}
					alt={lang === 'it' ? 'Facciamo insieme il prossimo?' : 'Shall we build the next one?'}
					className='w-full h-80 object-cover object-center rounded-t-lg'
				/>
				<div className='absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-900/50 to-transparent rounded-t-lg'></div>
			</div>
			<div className='min-h-[285px] p-8 text-lg text-center font-semibold text-slate-700 tracking-wide h-full flex flex-col items-center justify-center'>
				<h2>{lang === 'it' ? 'Facciamo insieme il prossimo?' : 'Shall we build the next one?'}</h2>
				<a
					href='mailto:andrea@stand-alone.it'
					className='mt-4 inline-block px-6 py-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors duration-200'>
					{lang === 'it' ? 'Scrivimi' : 'Write me'}
				</a>
			</div>
		</article>
	)
}
export default ProjectsCardLast
