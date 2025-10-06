import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import SectionTitle from './SectionTitle'
import { projects } from '../data'
import ProjectsCard from './ProjectsCard'
import ProjectsCardLast from './ProjectsCardLast'

const Projects = () => {
	return (
		<section
			className='pt-20 pb-10 bg-gradient-to-r from-slate-100 to-slate-50'
			id='portfolio'>
			<div className='align-element'>
				<SectionTitle text='alcuni progetti realizzati' />

				<Swiper
					className='mt-16'
					modules={[Pagination, Navigation]}
					navigation
					pagination={{
						dynamicBullets: true,
					}}
					autoHeight={false}
					spaceBetween={40}
					slidesPerView={1}
					breakpoints={{
						640: {
							slidesPerView: 1.6,
							spaceBetween: 80,
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
						<SwiperSlide>
							<ProjectsCardLast />
						</SwiperSlide>
					</div>
				</Swiper>
			</div>
		</section>
	)
}
export default Projects
