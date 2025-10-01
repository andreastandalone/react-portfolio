import ProjectsCard from './ProjectsCard'
import { projects } from '../data'
import SectionTitle from './SectionTitle'

const Projects = () => {
	return (
		<section className='py-20 align-element' id='portfolio'>
			<SectionTitle text='alcuni progetti realizzati' />
			<div className='py-16 grid lg:grid-cols-1 xl:grid-cols-2 gap-8'>
				{projects.map((project) => {
					return <ProjectsCard key={project.id} {...project} />
				})}
			</div>
		</section>
	)
}
export default Projects
