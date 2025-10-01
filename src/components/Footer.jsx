const Footer = () => {
	return (
		<>
			<section className='bg-gradient-brand py-24 align-elements' id='contacts'>
				<div className=''>
					<div className='text-center text-3xl '>
						<h2 className='subtitle font-light text-white/70 tracking-wide'>
							Collaboro con agenzie e professionisti, condividendo la <br />
							passione per tecnologia e comunicazione digitale.
						</h2>
						<h2 className='title font-light text-white tracking-wide leading-loose'>
							Se ti va di conoscerci meglio,
							<a href='mailto:andrea@stand-alone.it'>
								<strong>
									<em> scrivimi</em>
								</strong>
							</a>
							.
						</h2>
					</div>
				</div>
			</section>

			<footer className='footer align-elements py-24'>
				<div className=''>
					<div className='text-center text-slate-600 tracking-wide '>
						<p className='credits'>
							&copy; 2025 - stand-alone.it è <strong>Andrea Simoncini</strong> -{' '}
							<a href='mailto:andrea@stand-alone.it'>andrea@stand-alone.it</a>
							<br />
							<small>
								Via Battindarno 31 - 40133 Bologna - Italia - P.Iva: 02275470223
								- Tel: 328.2280781
							</small>
						</p>
					</div>
				</div>
				<aside className='text-center pt-16 text-slate-400 mt-8 leading-loose text-base tracking-wide'>
					<p>
						Stand-alone è un termine che può essere tradotto letteralmente in
						“sta in piedi da solo” e significa quindi “indipendente”
					</p>
				</aside>
			</footer>
		</>
	)
}
export default Footer
