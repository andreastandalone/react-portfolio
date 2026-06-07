import { createContext, useContext, useState } from 'react'

const LangContext = createContext()

export const LangProvider = ({ children }) => {
	const [lang, setLang] = useState(
		() => localStorage.getItem('stand-alone-lang') || 'it'
	)

	const toggleLang = () => {
		const next = lang === 'it' ? 'en' : 'it'
		localStorage.setItem('stand-alone-lang', next)
		setLang(next)
	}

	return (
		<LangContext.Provider value={{ lang, toggleLang }}>
			{children}
		</LangContext.Provider>
	)
}

export const useLang = () => useContext(LangContext)
