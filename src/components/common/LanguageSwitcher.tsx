import { useTranslation } from 'react-i18next'
import { langs } from '../../i18n'

const LanguageSwitcher = () => {
    const { i18n } = useTranslation()

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        i18n.changeLanguage(e.target.value)
    }

    return (
        <div className='flex justify-center items-center my-4'>
            <select
                className='bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg shadow-sm hover:border-gray-400 focus:outline-none focus:border-blue-500 transition-colors'
                value={i18n.language}
                onChange={handleLanguageChange}
            >
                {langs.map((lang) => (
                    <option key={lang} value={lang}>
                        {lang}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default LanguageSwitcher
