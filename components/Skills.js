import '../translation/i18n';
import { useTranslation } from 'react-i18next';
import Image from 'next/image'

function Skills({title, url, text}) {
    const { t, i18n } = useTranslation();

    return (
        <div className="bg-white p-10 rounded-lg shadow-md">
            <div className="flex justify-between">
                <h3 className="text-xl font-bold pr-2">{title}</h3>
            </div>
            <p className="py-4">{text}</p>
        </div>
    )
}

export default Skills
