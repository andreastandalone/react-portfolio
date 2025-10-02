const SkillsCard = ({ icon, title, text, delay }) => {
	return (
		<article>
			<span className='h-20 w-20' data-aos='fade-up' data-aos-delay={delay}>
				{icon}
			</span>
			<h4
				className='mt-6 font-normal tracking-wide leading-loose'
				data-aos='fade-up'
				data-aos-delay={delay}>
				{title}
			</h4>
			<p
				className='mt-2 text-slate-500 tracking-wide text-lg '
				data-aos='fade-up'
				data-aos-delay={delay}>
				{text}
			</p>
		</article>
	)
}
export default SkillsCard
