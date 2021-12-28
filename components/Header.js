import '../translation/i18n';
import { useTranslation } from 'react-i18next';
import Image from 'next/image'

function Header() {
    const { t, i18n } = useTranslation();

    return (
        <header className="flex items-center justify-center h-20">
            <div className="flex items-center justify-between w-4/5">
                <h1><a href="">{t("app.firstname")} {t("app.lastname")}</a></h1>
                <nav className="flex">
                    <ul className="flex">
                        <li className="px-2 py-2 cursor-pointer">
                            <Image
                                src="/assets/logo/fr.svg"
                                alt="Traduire en français"
                                width={32}
                                height={32}
                                onClick={() => i18n.changeLanguage("fr")}
                            />
                        </li>
                        <li className="px-2 py-2 cursor-pointer">
                            <Image
                                src="/assets/logo/uk.svg"
                                alt="Translate to english"
                                width={32}
                                height={32}
                                onClick={() => i18n.changeLanguage("en")}
                            />
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
