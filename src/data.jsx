import { nanoid } from 'nanoid'
import { FaCode, FaRandom, FaPuzzlePiece } from 'react-icons/fa'

export const links = [
	{ id: nanoid(), href: '#home', text: 'home' },
	{ id: nanoid(), href: '#skills', text: 'skills' },
	{ id: nanoid(), href: '#portfolio', text: 'portfolio' },
	{ id: nanoid(), href: '#about', text: 'about' },
	{ id: nanoid(), href: '#clients', text: 'clients' },
	{ id: nanoid(), href: '#contacts', text: 'contacts' },
]

export const skills = [
	{
		id: nanoid(),
		title: 'Coding',
		icon: <FaCode className='faIcon h-20 w-20 text-sky-500' />,
		text: 'Trasformo i layout in codice web responsive, accessibile e ottimizzato per le performance con HTML, CSS e JavaScript, garantendo usabilità su ogni dispositivo.',
	},
	{
		id: nanoid(),
		title: 'Flessibilità ',
		icon: <FaRandom className='faIcon h-20 w-20 text-sky-500' />,
		text: 'Mi adatto rapidamente a diversi ambienti, CMS, framework e linguaggi di templating, integrandomi senza problemi nei flussi di lavoro e nelle pratiche del team.',
	},
	{
		id: nanoid(),
		title: 'Dialogo',
		icon: <FaPuzzlePiece className='faIcon h-20 w-20 text-sky-500' />,
		text: 'Ho esperienza con agenzie di design e UX, comprendo le esigenze dei designer, curo i dettagli visivi e lavoro in autonomia, gestendo anche il rapporto diretto con i clienti.',
	},
]

export const projects = [
	{
		id: nanoid(),
		img: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
		url: 'https://react-projects.netlify.app/',
		github: 'https://github.com/john-smilga',
		title: 'first project',
		text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
	},
	{
		id: nanoid(),
		img: 'https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800',
		url: 'https://react-projects.netlify.app/',
		github: 'https://github.com/john-smilga',
		title: 'second project',
		text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
	},
	{
		id: nanoid(),
		img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
		url: 'https://react-projects.netlify.app/',
		github: 'https://github.com/john-smilga',
		title: 'third project',
		text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
	},
]
export const clients = [
	{
		id: nanoid(),
		name: 'MODO',
		url: 'https://modo.md/',
		logo: 'https://stand-alone.it/wp-content/themes/stnd2016/svg/modo.svg',
	},
	{
		id: nanoid(),
		name: 'Tangible',
		url: 'https://tangible.is/',
		logo: 'https://stand-alone.it/wp-content/themes/stnd2016/svg/tangible.svg',
	},
	{
		id: nanoid(),
		name: 'IAAD - Istituto d’Arte Applicata e Design',
		url: 'https://www.iaad.it/',
		logo: 'https://stand-alone.it/wp-content/themes/stnd2016/svg/iaad.png',
	},
	{
		id: nanoid(),
		name: 'Etnograph',
		url: 'https://etnograph.com/',
		logo: 'https://stand-alone.it/wp-content/themes/stnd2016/svg/etnograph.svg',
	},
	{
		id: nanoid(),
		name: "CB'A Design",
		url: 'https://cba-design.com/',
		logo: 'https://stand-alone.it/wp-content/themes/stnd2016/svg/cba.svg',
	},
	{
		id: nanoid(),
		name: 'Endurance',
		url: 'https://www.endurance.it/',
		logo: 'https://stand-alone.it/wp-content/themes/stnd2016/svg/endurance.png',
	},
	{
		id: nanoid(),
		name: 'Housatonic - We Make It Easy',
		url: 'https://www.housatonic.eu/',
		logo: 'https://stand-alone.it/wp-content/themes/stnd2016/svg/housatonic.svg',
	},
	{
		id: nanoid(),
		name: 'HIBO',
		url: 'https://www.hibo.it/',
		logo: 'https://stand-alone.it/wp-content/themes/stnd2016/svg/hibo.svg',
	},
	{
		id: nanoid(),
		name: 'Engineering Ingegneria Informatica',
		url: 'https://www.eng.it/',
		logo: 'https://stand-alone.it/wp-content/themes/stnd2016/svg/eng.svg',
	},
	{
		id: nanoid(),
		name: 'LDB Advertising',
		url: 'https://www.ldbadvertising.com/',
		logo: 'https://stand-alone.it/wp-content/themes/stnd2016/svg/ldb.svg',
	},
	{
		id: nanoid(),
		name: 'LOstudio',
		url: 'https://lostudio.it/',
		logo: 'https://stand-alone.it/wp-content/themes/stnd2016/svg/lostudio.png',
	},
	{
		id: nanoid(),
		name: 'D-sign',
		url: 'https://dsign.it/',
		logo: 'https://stand-alone.it/wp-content/themes/stnd2016/svg/dsign.svg',
	},
]
