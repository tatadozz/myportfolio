import '../translation/i18n';
import { useTranslation } from 'react-i18next';
import Image from 'next/image'

function Experiences() {
    const { t, i18n } = useTranslation();

    return (
        <div className="my-4">
            <h3 className="text-center text-3xl font-medium	">{t("exp.title")}</h3>
            <div className="flex items-center justify-around my-4">
                <div className="border-2 p-4 h-96 border-black rounded-md">
                    <h5 className="text-center text-lg font-medium">{t("exp.exp2.title")}</h5>
                    <h6 className="py-2 text-center text-md font-medium">{t("exp.exp2.company")}</h6>
                    <ul className="py-2">
                        <li className="py-2">- {t("exp.exp2.item1")}</li>
                        <li className="py-2">- {t("exp.exp2.item2")}</li>
                        <li className="py-2">- {t("exp.exp2.item3")}</li>
                        <li className="py-2">- {t("exp.exp2.item4")}</li>
                    </ul>
                </div>
                <div className="border-2 p-4 h-96 border-black rounded-md">
                    <h5 className="text-center text-lg font-medium">{t("exp.exp1.title")}</h5>
                    <h6 className="py-2 text-center text-md font-medium">{t("exp.exp1.company")}</h6>
                    <ul className="py-2">
                        <li className="py-2">- {t("exp.exp1.item1")}</li>
                        <li className="py-2">- {t("exp.exp1.item2")}</li>
                        <li className="py-2">- {t("exp.exp1.item3")}</li>
                        <li className="py-2">- {t("exp.exp1.item4")}</li>
                        <li className="py-2">- {t("exp.exp1.item5")}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Experiences
