import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import '../translation/i18n';
import { useTranslation } from 'react-i18next';
import Typical from 'react-typical'

export default function Home() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <Head>
        <title>Clément LEFIEF - Développeur Web et Mobile</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        {/* Hero */}
        <div className="w-4/5 mx-auto h-screen flex flex-col sm:w-2/3 md:w-1/2 flex-row items-center bg-yellow-400">
          {/* Left */}
          <div className="flex flex-col justify-center w-1/2b bg-red-400">
            <h1 className="text-6xl">{t("hero.h1")}</h1>
            <p>{t("hero.p")}</p>
          </div>
          {/* Right */}
          <div className="w-1/2 bg-green-400">
            <Image 
              src="/assets/img/me.jpg"
              alt="Me at university"
              width={400}
              height={400}
            />
          </div>
        </div>
      </main>

    </div>
  )
}
