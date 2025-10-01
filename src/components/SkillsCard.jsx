const SkillsCard = ({ icon, title, text }) => {
	return (
		<article>
			<span className='h-20 w-20'>{icon}</span>
			<h4 className='mt-6 font-normal tracking-wide leading-loose'>{title}</h4>
			<p className='mt-2 text-slate-500 tracking-wide text-lg '>{text}</p>
		</article>
	)
}
export default SkillsCard
