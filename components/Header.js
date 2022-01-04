import '../translation/i18n';
import { useTranslation } from 'react-i18next';
import Image from 'next/image'

function Header() {
    const { t, i18n } = useTranslation();

    return (
        <header className="flex items-center justify-center h-20">
            <div className="flex items-center justify-between w-4/5">
                <h1><a href="">{t("app.firstname")} {t("app.lastname")}</a></h1>

            </div>
        </header>
    )
}

export default Header
