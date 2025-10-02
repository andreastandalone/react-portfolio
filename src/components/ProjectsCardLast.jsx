import nextImg from '../assets/projects/next.png'
const ProjectsCard = () => {
	return (
		<article className='bg-white rounded-lg shadow-md block hover:shadow-xl duration-300'>
			<div className='relative bg-sky-100 h-full'>
				<img
					src={nextImg}
					alt='Facciamo insieme il prossimo?'
					className='w-full h-80 object-cover object-center rounded-t-lg'
				/>
				<div className='absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-900/50 to-transparent rounded-t-lg'></div>
			</div>
			<div className='min-h-[285px] p-8 text-lg text-center font-semibold text-slate-700 tracking-wide h-full flex flex-col items-center justify-center'>
				<h2>Facciamo insieme il prossimo?</h2>
				<a
					href='mailto:andrea@stand-alone.it'
					className='mt-4 inline-block px-6 py-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors duration-200'>
					Scrivimi
				</a>
			</div>
		</article>
	)
}
export default ProjectsCard
