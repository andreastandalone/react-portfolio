import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import About from './components/About'
import Projects from './components/Projects'
import Clients from './components/Clients'
import Footer from './components/Footer'

const App = () => {
	useEffect(() => {
		AOS.init({
			duration: 300,
			once: false,
			offset: 100,
		})
	}, [])
	return (
		<div id='top'>
			<Navbar />
			<Hero />
			<Skills />
			<About />
			<Projects />
			<Clients />
			<Footer />
		</div>
	)
}

export default App
