import '../translation/i18n';
import { useTranslation } from 'react-i18next';

function Header() {
    const { t, i18n } = useTranslation();

    return (
        <header className="flex items-center justify-between sticky top-0 z-50 bg-white shadow-md p-4 md:px-10">
            <h1><a href="">{t("app.firstname")} {t("app.lastname")}</a></h1>
            <nav className="hidden md:flex">
                <ul className="flex">
                    <li><a href="" className="px-4 py-2">{t("nav.about")}</a></li>
                    <li><a href="" className="px-4 py-2">{t("nav.projects")}</a></li>
                    <li><a href="" className="px-4 py-2">{t("nav.experiences")}</a></li>
                    <li><a href="" className="px-4 py-2">{t("nav.contact")}</a></li>
                </ul>
            </nav>
            <nav className="flex">
                <ul className="flex">
                    <li className="px-4 py-2 cursor-pointer" onClick={() => i18n.changeLanguage("fr")}>Français</li>
                    <li className="px-4 py-2 cursor-pointer" onClick={() => i18n.changeLanguage("en")}>English</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
