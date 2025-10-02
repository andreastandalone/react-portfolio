import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import ProjectsCard from './ProjectsCard'
import { projects } from '../data'
import SectionTitle from './SectionTitle'

const Projects = () => {
	return (
		<section
			className='py-20 bg-gradient-to-r from-slate-100 to-slate-50'
			id='portfolio'>
			<div className='align-element'>
				<SectionTitle text='alcuni progetti realizzati' />

				<Swiper
					className='mt-16'
					modules={[Navigation]}
					navigation
					autoHeight={false}
					spaceBetween={60}
					slidesPerView={1.2}
					breakpoints={{
						640: {
							slidesPerView: 1.7,
						},
					}}>
					<div className='py-16 grid lg:grid-cols-1 xl:grid-cols-2 gap-16'>
						{projects.map((project) => {
							return (
								<SwiperSlide>
									<ProjectsCard key={project.id} {...project} />
								</SwiperSlide>
							)
						})}
					</div>
				</Swiper>
			</div>
		</section>
	)
}
export default Projects
