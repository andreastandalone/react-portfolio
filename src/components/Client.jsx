const client = ({ name, url, logo }) => {
	return (
		<figure className='w-24 sm:w-28 md:w-32' data-aos='zoom-in'>
			<a className='' target='_blank' href={url}>
				<img
					src={logo}
					className='max-h-16 object-contain mx-auto transition duration-300 hover:opacity-70 hover:scale-110'
					alt={name}
				/>
			</a>
		</figure>
	)
}
export default client
