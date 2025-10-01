const ProjectsCard = ({ url, img, github, title, text }) => {
	return (
		<article className='bg-white rounded-lg shadow-md block hover:shadow-xl duration-300'>
			<img
				src={img}
				alt={title}
				className='w-full object-cover rounded-t-lg h-64 '
			/>
			<div className='p-8 text-base text-slate-700 tracking-wide'>
				{/* <h2 className='text-xl tracking-wide font-medium'>{title}</h2>
				<p className='mt-4 text-slate-700 leading-loose'>{text}</p> */}
				<p className='mb-2'>
					<span className='uppercase text-sm tracking-wider'>Client:</span>{' '}
					<strong>Aeroporto di Bologna</strong>
				</p>
				<p className='mb-2'>
					<span className='uppercase text-sm tracking-wider'>Agenzia:</span>{' '}
					<strong>Tangible.is</strong>
				</p>
				<p className='mb-2'>
					<span className='block uppercase text-sm tracking-wider'>Task:</span>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
					aperiam porro impedit tenetur quo hic omnis doloribus dolores enim
					deleniti.
				</p>
				<p className='mb-2'>
					<span className='uppercase text-sm tracking-wider'>Stack:</span>{' '}
					<strong>coding, frontend, react</strong>
				</p>
				<p className=''>
					<span className='uppercase text-sm tracking-wider'>Link:</span>{' '}
					<a
						href='https://www.bologna-airport.it/'
						className=' hover:underline'>
						bologna-airport.it
					</a>
				</p>
			</div>
		</article>
	)
}
export default ProjectsCard
