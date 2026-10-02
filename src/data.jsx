import { nanoid } from 'nanoid'
import { FaCode, FaRobot, FaLayerGroup } from 'react-icons/fa'

import projBugiardini from './assets/projects/ibugiardini.webp'
import projTrakkem from './assets/projects/trakkem2026.webp'
import projHeadroom from './assets/projects/headroom.webp'
import projVivace from './assets/projects/vivace.webp'
import projModula from './assets/projects/modulanp.webp'
import projAdb from './assets/projects/screen-adb22.webp'
import projJarvis from './assets/projects/jarvis.webp'
import projDeNigris from './assets/projects/denigris.webp'
import projFarma from './assets/projects/farmaermann.webp'
import projRinascimento from './assets/projects/rinascimento.webp'

import clientDp from './assets/clients/digitalpaths.png'
import clientModo from './assets/clients/modo.svg'
import clientTangible from './assets/clients/tangible.svg'
import clientIaad from './assets/clients/iaad.png'
import clientEtnograph from './assets/clients/etnograph.svg'
import clientCba from './assets/clients/cba.svg'
import clientEndurance from './assets/clients/endurance.png'
import clientHousatonic from './assets/clients/housatonic.svg'
import clientHibo from './assets/clients/hibo.svg'
import clientEng from './assets/clients/eng.svg'
import clientLdb from './assets/clients/ldb.svg'
import clientLostudio from './assets/clients/lostudio.png'
import clientDsign from './assets/clients/dsign.svg'

export const links = [
	{ id: nanoid(), href: '#skills', text: 'skills' },
	{ id: nanoid(), href: '#about', text: 'about' },
	{ id: nanoid(), href: '#portfolio', text: 'portfolio' },
	{ id: nanoid(), href: '#clients', text: 'clients' },
	{ id: nanoid(), href: '#contacts', text: 'contacts' },
]

export const skills = [
	{
		id: nanoid(),
		title: { it: 'Prodotti web completi', en: 'Full-stack products' },
		icon: <FaCode className='faIcon h-20 w-20 text-cyan-400' />,
		delay: '0',
		text: {
			it: 'Costruisco prodotti web completi in autonomia: interfacce performanti, backend, API, database e deploy. Dalla UI al server, ogni livello è curato quanto il design.',
			en: 'I build complete web products end to end: performant interfaces, backend, APIs, database, and deployment. From UI to server, every layer gets the same care as the design.',
		},
		badges: ['React', 'Vite', 'Node.js', 'Python', 'SQLite', 'Nginx', 'PM2'],
	},
	{
		id: nanoid(),
		title: { it: 'AI e automazioni', en: 'AI and automations' },
		icon: <FaRobot className='faIcon h-20 w-20 text-cyan-500' />,
		delay: '150',
		text: {
			it: 'Progetto pipeline AI che automatizzano ricerca, produzione di contenuti e flussi ripetitivi. Scraping, workflow multi-modello e integrazioni LLM su misura.',
			en: 'I design AI pipelines that automate research, content production, and repetitive workflows. Scraping, multi-model orchestration, and custom LLM integrations.',
		},
		badges: ['Claude API', 'Gemini API', 'Python', 'web scraping'],
	},
	{
		id: nanoid(),
		title: { it: 'UX e design', en: 'UX and design' },
		icon: <FaLayerGroup className='faIcon h-20 w-20 text-cyan-600' />,
		delay: '300',
		text: {
			it: 'Progetto interfacce, design system e component library accessibili. Lavoro nel punto di contatto tra designer e developer, curando identità visiva e dettagli tecnici.',
			en: 'I design interfaces, design systems, and accessible component libraries. I work at the intersection of design and engineering, balancing visual identity with technical precision.',
		},
		badges: ['Figma', 'design systems', 'accessibility', 'Tailwind'],
	},
]

export const projects = [
	{
		id: nanoid(),
		client: "Trakk'em",
		isPersonalProject: true,
		img: projTrakkem,
		url: 'https://trakkem.app',
		urlText: 'trakkem.app',
		isOffline: false,
		text: {
			it: "Piattaforma SaaS di file sharing privato per professionisti dell'audio: condivisione di tracce e file con player, statistiche avanzate di ascolto e audio live streaming in real-time.",
			en: 'SaaS platform for private file sharing built for audio professionals: track and file sharing with a built-in player, advanced listening analytics, and real-time live audio streaming.',
		},
		stack: 'React + Vite / Node.js + Express / SQLite / VPS Ubuntu 24.04 + Nginx + PM2',
	},
	{
		id: nanoid(),
		client: 'i Bugiardini',
		img: projBugiardini,
		url: 'https://www.bugiardini.it/',
		urlText: 'bugiardini.it',
		isOffline: false,
		text: {
			it: "E-commerce per compagnia di improvvisazione teatrale con personalizzazioni avanzate: gestione di spettacoli, biglietteria, ordini e controllo dell'accesso in cassa tramite biglietti con QR code.",
			en: 'E-commerce for an improv theatre company with advanced customisations: management of shows, ticketing, orders, and box office entry control with QR code tickets.',
		},
		stack: 'WordPress, WooCommerce, Docker, CSS, JavaScript',
	},
	{
		id: nanoid(),
		client: 'The Headroom',
		isPersonalProject: true,
		img: projHeadroom,
		url: 'https://creativesum.com/headroom/',
		urlText: 'creativesum.com/headroom',
		isOffline: false,
		text: {
			it: 'Newsletter settimanale automatizzata per produttori musicali. Un pipeline AI scrape fonti dedicate, Gemini genera la bozza come junior writer e Claude Sonnet la revisiona come editor.',
			en: 'Automated weekly newsletter for music producers. An AI pipeline scrapes dedicated sources, Gemini drafts the content as junior writer, and Claude Sonnet reviews it as editor.',
		},
		stack: 'Python / Claude API / Gemini API / web scraping',
	},
	{
		id: nanoid(),
		client: 'Aeroporto di Bologna',
		agency: 'Tangible.is',
		img: projAdb,
		url: 'https://www.bologna-airport.it/',
		urlText: 'bologna-airport.it',
		text: {
			it: "Creazione e manutenzione del front-end e della pattern library del sito. Foundations, componenti e pagine intere, con particolare attenzione all’accessibilità e alle performance.",
			en: "Creation and maintenance of the site's front end and pattern library. Foundations, components, and full pages, with a focus on accessibility and performance.",
		},
		stack: 'Fractal JS, Twig, SASS, Gulp',
	},
	{
		id: nanoid(),
		client: 'WAB web agency bologna',
		img: projVivace,
		url: 'https://web-agency-bologna.it/',
		urlText: 'web-agency-bologna.it',
		isOffline: false,
		text: {
			it: 'Landing page promozionale per una web agency, moderna e animata.',
			en: 'Modern, animated promotional landing page for a web agency.',
		},
		stack: 'HTML, CSS, JS',
	},
	{
		id: nanoid(),
		client: 'MODULA Neutro Plurale',
		agency: 'Digital Paths',
		img: projModula,
		url: 'https://modulaneutroplurale.it/',
		urlText: 'modulaneutroplurale.it',
		text: {
			it: 'E-commerce di abbigliamento. Customizzazione tema e struttura Shopify. Interventi su layout, importazione catalogo prodotti e gestione dei contenuti multilingua.',
			en: 'Clothing e-commerce. Shopify theme and structure customisation. Layout work, product catalogue import, and multilingual content management.',
		},
		stack: 'Shopify',
	},
	{
		id: nanoid(),
		client: 'Rinascimento',
		agency: 'Endurance',
		img: projRinascimento,
		url: 'https://www.rinascimento.com/',
		urlText: 'rinascimento.com',
		isOffline: true,
		text: {
			it: 'Coding dei layout del sito web, versione mobile e sito b2b, con attenzione particolare alla resa su dispositivi mobili e alle performance.',
			en: 'Frontend coding of the website layouts, mobile version, and B2B site, with a focus on mobile rendering and performance.',
		},
		stack: 'HTML, CSS, JavaScript',
	},
	{
		id: nanoid(),
		client: 'Jarvis',
		agency: 'Tangible.is',
		img: projJarvis,
		url: 'https://www.hellojarvis.it/',
		urlText: 'hellojarvis.it',
		isOffline: false,
		text: {
			it: 'Sito della startup per smart home. Coding dei layout e animazioni allo scroll con GSAP.',
			en: 'Smart home startup website. Frontend coding and scroll animations with GSAP.',
		},
		stack: 'GSAP, HTML, CSS, JS',
	},
	{
		id: nanoid(),
		client: 'De Nigris',
		agency: "CB'A Design",
		img: projDeNigris,
		url: 'https://www.denigris.it/',
		urlText: 'denigris.it',
		isOffline: true,
		text: {
			it: 'Sito web e-commerce per azienda alimentare. Coding dei layout su Craft CMS e Craft Commerce, con attenzione alla modularità dei layout.',
			en: 'E-commerce website for a food company. Frontend coding on Craft CMS and Craft Commerce, with a focus on layout modularity.',
		},
		stack: 'Craft CMS, Craft Commerce',
	},
	{
		id: nanoid(),
		client: 'FarmaErmann: Farmacia online',
		agency: 'Etnograph',
		img: projFarma,
		url: 'https://www.farmaermann.it/',
		urlText: 'farmaermann.it',
		isOffline: false,
		text: {
			it: 'Coding dei layout del sito web, con attenzione particolare alla navigazione e alla resa su dispositivi mobili.',
			en: 'Frontend coding of the website, with a focus on navigation and mobile rendering.',
		},
		stack: 'HTML, CSS, JS',
	},
]

export const clients = [
	{
		id: nanoid(),
		name: 'Digital Paths',
		url: 'https://www.digitalpaths.it/',
		logo: clientDp,
	},
	{
		id: nanoid(),
		name: 'MODO',
		url: 'https://modo.md/',
		logo: clientModo,
	},
	{
		id: nanoid(),
		name: 'Tangible',
		url: 'https://tangible.is/',
		logo: clientTangible,
	},
	{
		id: nanoid(),
		name: 'IAAD - Istituto d’Arte Applicata e Design',
		url: 'https://www.iaad.it/',
		logo: clientIaad,
	},
	{
		id: nanoid(),
		name: 'Etnograph',
		url: 'https://etnograph.com/',
		logo: clientEtnograph,
	},
	{
		id: nanoid(),
		name: "CB'A Design",
		url: 'https://cba-design.com/',
		logo: clientCba,
	},
	{
		id: nanoid(),
		name: 'Endurance',
		url: 'https://www.endurance.it/',
		logo: clientEndurance,
	},
	{
		id: nanoid(),
		name: 'Housatonic - We Make It Easy',
		url: 'https://www.housatonic.eu/',
		logo: clientHousatonic,
	},
	{
		id: nanoid(),
		name: 'HIBO',
		url: 'https://www.hibo.it/',
		logo: clientHibo,
	},
	{
		id: nanoid(),
		name: 'Engineering Ingegneria Informatica',
		url: 'https://www.eng.it/',
		logo: clientEng,
	},
	{
		id: nanoid(),
		name: 'LDB Advertising',
		url: 'https://www.ldbadvertising.com/',
		logo: clientLdb,
	},
	{
		id: nanoid(),
		name: 'LOstudio',
		url: 'https://lostudio.it/',
		logo: clientLostudio,
	},
	{
		id: nanoid(),
		name: 'D-sign',
		url: 'https://dsign.it/',
		logo: clientDsign,
	},
]
