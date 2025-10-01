import Client from './Client'
import { clients } from '../data'

const Clients = () => {
	return (
		<>
			<section className='py-20 bg-gradient-grey' id='clients'>
				<div className='align-element'>
					<div className=''>
						<h2 className='text-3xl text-center text-white font-medium tracking-wider '>
							Ho <strong>collaborato</strong> con:
						</h2>
					</div>

					<div className='pt-20 max-w-3xl mx-auto flex flex-wrap justify-center items-center gap-x-12 gap-y-10'>
						{clients.map((client) => {
							return <Client key={client.id} {...client} />
						})}
					</div>
				</div>
			</section>
		</>
	)
}
export default Clients
