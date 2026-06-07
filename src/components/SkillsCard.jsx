import { useLang } from '../context/LangContext'

const SkillsCard = ({ icon, title, text, badges, delay }) => {
	const { lang } = useLang()
	const label = typeof title === 'object' ? title[lang] : title
	const body = typeof text === 'object' ? text[lang] : text

	return (
		<article>
			<span className='h-20 w-20' data-aos='fade-up' data-aos-delay={delay}>
				{icon}
			</span>
			<h4
				className='mt-6 font-normal tracking-wide leading-loose'
				data-aos='fade-up'
				data-aos-delay={delay}>
				{label}
			</h4>
			<p
				className='mt-2 text-slate-500 tracking-wide text-lg'
				data-aos='fade-up'
				data-aos-delay={delay}>
				{body}
			</p>
			{badges?.length > 0 && (
				<div
					className='mt-4 flex flex-wrap gap-2'
					data-aos='fade-up'
					data-aos-delay={delay}>
					{badges.map((badge) => (
						<span
							key={badge}
							className='text-xs font-mono uppercase tracking-wider px-2 py-0.5 border border-slate-300 text-slate-500'>
							{badge}
						</span>
					))}
				</div>
			)}
		</article>
	)
}

export default SkillsCard
