const ProjectsCard = ({
	client,
	agency,
	url,
	urlText,
	isOffline,
	img,
	title,
	text,
	stack,
}) => {
	return (
		<article className='bg-white rounded-lg shadow-md block hover:shadow-xl duration-300'>
			<div className='relative'>
				<img
					src={img}
					alt={title}
					className='w-full h-80 object-cover object-top rounded-t-lg'
				/>
				{/* Overlay gradiente */}
				<div className='absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-900/50 to-transparent rounded-t-lg'></div>
			</div>
			<div className='min-h-[285px] p-8 text-base text-slate-700 tracking-wide'>
				{/* <h2 className='text-xl tracking-wide font-medium'>{title}</h2>
				<p className='mt-4 text-slate-700 leading-loose'>{text}</p> */}
				<p className='mb-2'>
					<span className='uppercase text-sm tracking-wider'>Client:</span>{' '}
					<strong>{client}</strong>
				</p>
				<p className='mb-2'>
					<span className='uppercase text-sm tracking-wider'>Agenzia:</span>{' '}
					<strong>{agency}</strong>
				</p>
				<p className='mb-2 '>
					<span className='block uppercase text-sm tracking-wider'>Task:</span>
					<span className='font-normal'>{text}</span>
				</p>
				<p className='mb-2'>
					<span className='uppercase text-sm tracking-wider'>Stack:</span>{' '}
					<strong>{stack}</strong>
				</p>
				<p className=''>
					<span className='uppercase text-sm tracking-wider'>Link:</span>{' '}
					<a
						href={isOffline ? undefined : url}
						target={isOffline ? undefined : '_blank'}
						rel={isOffline ? undefined : 'noreferrer'}
						className={
							isOffline
								? 'line-through italic text-gray-400 font-normal cursor-not-allowed'
								: 'hover:underline font-normal'
						}>
						{isOffline ? 'currently offline' : urlText}
					</a>
				</p>
			</div>
		</article>
	)
}
export default ProjectsCard
