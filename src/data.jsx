import { nanoid } from 'nanoid'
import { FaCode, FaRandom, FaPuzzlePiece } from 'react-icons/fa'

import projStnd from './assets/projects/standalone2025.png'
import projAdb from './assets/projects/screen-adb22.png'
import projJarvis from './assets/projects/jarvis.png'
import projDeNigris from './assets/projects/denigris.png'
import projFarma from './assets/projects/farmaermann.png'
import projRinascimento from './assets/projects/rinascimento.png'

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
		title: 'Coding',
		icon: <FaCode className='faIcon h-20 w-20 text-cyan-400' />,
		delay: '0',
		text: 'Trasformo i layout in codice web responsive, accessibile e ottimizzato per le performance con HTML, CSS e JavaScript, garantendo usabilità su ogni dispositivo.',
	},
	{
		id: nanoid(),
		title: 'Flessibilità ',
		icon: <FaRandom className='faIcon h-20 w-20 text-cyan-500' />,
		delay: '150',
		text: 'Mi adatto rapidamente a diversi ambienti, CMS, framework e linguaggi di templating, integrandomi senza problemi nei flussi di lavoro e nelle pratiche del team.',
	},
	{
		id: nanoid(),
		title: 'Dialogo',
		icon: <FaPuzzlePiece className='faIcon h-20 w-20 text-cyan-600' />,
		delay: '300',
		text: 'Ho esperienza con agenzie di design e UX, comprendo le esigenze dei designer, curo i dettagli visivi e lavoro in autonomia, gestendo anche il rapporto diretto con i clienti.',
	},
]

export const projects = [
	{
		id: nanoid(),
		client: 'Portfolio 2025',
		agency: 'Io',
		img: projStnd,
		url: 'https://www.stand-alone.it/',
		urlText: 'stand-alone.it',
		text: 'Mi serviva un nuovo sito',
		stack: 'React, Vite, TailwindCSS, Netlify',
	},
	{
		id: nanoid(),
		client: 'Aeroporto di Bologna',
		agency: 'Tangible.is',
		img: projAdb,
		url: 'https://www.bologna-airport.it/',
		urlText: 'bologna-airport.it',
		text: 'Creazione, manutenzione e restyling della pattern library del sito. Foundations, componenti e pagine intere, con attenzione particolare all’accessibilità e alle performance.',
		stack: 'Fractal JS, Twig, SASS, Gulp',
	},
	{
		id: nanoid(),
		client: 'Rinascimento',
		agency: 'Endurance',
		img: projRinascimento,
		url: 'https://www.rinascimento.com/',
		urlText: 'rinascimento.com',
		isOffline: true,
		text: 'Coding dei layout del sito web, versione mobile e sito b2b, con attenzione particolare alla resa su dispositivi mobili e alle performance.',
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
		text: 'Sito della startup per smart home. Coding dei layout e animazioni allo scroll con GSAP',
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
		text: 'Sito web e-commerce per azienda alimentare. Coding dei layout del sito web, su Craft CMS e Craft Commerce, con attenzione alla modularità dei layout',
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
		text: 'Coding dei layout del sito web, con attenzione particolare alla navigazione e all resa su dispositivi mobili.',
		stack: 'HTML, CSS, JS',
	},
]

export const clients = [
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
