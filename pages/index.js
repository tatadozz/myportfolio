import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import '../translation/i18n';
import { useTranslation } from 'react-i18next';

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
        <div className="container mx-auto h-screen flex flex-col md:flex-row items-center bg-gray-300">
          {/* Left */}
          <div className="flex flex-col w-full lg:w-1/2 justify-center bg-yellow-700">
            <h1 className="text-6xl">{t("hero.h1")}</h1>
            <p>{t("hero.p")}</p>
          </div>
          {/* Right */}
          <div className="w-full lg:w-1/2 text-center bg-green-700">
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
