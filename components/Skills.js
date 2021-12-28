import '../translation/i18n';
import { useTranslation } from 'react-i18next';
import Image from 'next/image'

function Skills() {
    const { t, i18n } = useTranslation();

    return (
        <div className="my-4">
            <h3 className="text-center text-3xl font-medium	">{t("skills.title")}</h3>
            <div className="flex flex-wrap items-center justify-around my-4">
                <div className="border-2 p-4 h-96 w-60 border-black rounded-md">
                    <h5 className="text-center text-lg font-medium">{t("skills.sk1.title")}</h5>
                    <ul className="py-2">
                        <li className="py-2">- {t("skills.sk1.item1")}</li>
                        <li className="py-2">- {t("skills.sk1.item2")}</li>
                        <li className="py-2">- {t("skills.sk1.item3")}</li>
                        <li className="py-2">- {t("skills.sk1.item4")}</li>
                    </ul>
                </div>
                <div className="border-2 p-4 h-96 w-60 border-black rounded-md">
                    <h5 className="text-center text-lg font-medium">{t("skills.sk2.title")}</h5>
                    <ul className="py-2">
                        <li className="py-2">- {t("skills.sk2.item1")}</li>
                        <li className="py-2">- {t("skills.sk2.item2")}</li>
                        <li className="py-2">- {t("skills.sk2.item3")}</li>
                    </ul>
                </div>
                <div className="border-2 p-4 h-96 w-60 border-black rounded-md">
                    <h5 className="text-center text-lg font-medium">{t("skills.sk3.title")}</h5>
                    <ul className="py-2">
                        <li className="py-2">- {t("skills.sk3.item1")}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills
