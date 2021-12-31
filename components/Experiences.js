import '../translation/i18n';
import { useTranslation } from 'react-i18next';
import Image from 'next/image'

function Experiences({title, url, text, subtitle, link}) {
    const { t, i18n } = useTranslation();

    return (
        <div className="p-10">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <Image className="w-full" src={url} alt={title} width={80} height={40} layout={"responsive"}/>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{title}</div>
                        <p className="text-gray-700 text-base">
                            {text}
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{subtitle}</span>
                        <a href={link}>Show more</a>
                    </div>
            </div>
        </div>
    )
}

export default Experiences
