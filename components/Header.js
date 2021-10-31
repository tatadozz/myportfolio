import '../translation/i18n';
import { useTranslation } from 'react-i18next';

function Header() {
    const { t, i18n } = useTranslation();

    return (
        <header className="flex items-center justify-center h-20 sticky top-0 z-50 bg-white shadow-md">
            <div className="flex items-center justify-between w-4/5">
                <h1><a href="">{t("app.firstname")} {t("app.lastname")}</a></h1>
                <nav className="flex">
                    <ul className="flex">
                        <li className="px-4 py-2 cursor-pointer" onClick={() => i18n.changeLanguage("fr")}>Français</li>
                        <li className="px-4 py-2 cursor-pointer" onClick={() => i18n.changeLanguage("en")}>English</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
