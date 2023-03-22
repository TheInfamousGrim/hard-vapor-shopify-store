// Dependencies
import Head from 'next/head';
import Image from 'next/image';

// Components
import Button from '@/components/Button/Button';
import Navigation from '@/components/Navigation';

// Styles
import borderGlow from '@/styles/border.module.css';

// Images
import imgHero from '@/public/hero/Hard-Vapor-Neon-Logo.jpg';
import imgHeroVertical from '@/public/hero/hard-vapor-neon-logo-vertical.jpg';

// Logos
import logoHardVapor from '@/public/favicons/android-chrome-512x512.png';

export default function Home() {
  console.log(borderGlow.glow);

  return (
    <>
      <Head>
        <title>Hard Vapor Clothing</title>
        <meta
          name="description"
          content="The place to get all your schwifty, phantasmagoric, vaporwave inspired apparel."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="./favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="./favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="./favicons/site.webmanifest" />
      </Head>
      <Navigation />
      <main className="container mx-auto sm:px-6 lg:px-8">
        <section
          className={`${borderGlow.glow} relative z-10 mt-7 overflow-hidden rounded-3xl border-8 border-aquamarine`}
        >
          <div
            className={`mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8`}
          >
            <div className="px-6 pt-10 pb-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pt-48 lg:pb-56 xl:col-span-6">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <h1 className="mt-24 bg-gradient-to-r from-aquamarine via-sunglow to-bright-pink bg-clip-text font-newake text-4xl uppercase tracking-tight text-transparent sm:mt-10 sm:text-7xl">
                  The new wave of aesthetic is here
                </h1>
                <p className="mt-6 text-lg font-bold leading-8 text-gray-100">
                  Hard vapor is here to deliver the most phantasmagoric designs.
                  Check out our new arrivals today.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Button href="#" text="Shop New Arrivals" />
                </div>
              </div>
            </div>
            <div className="relative -z-10 lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
              <img
                className="lg:aspect-auto aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:h-full"
                src={imgHeroVertical.src}
                alt=""
              />
            </div>
          </div>
        </section>
        <h2 className="bg-gradient-to-r from-aquamarine to-bright-pink bg-clip-text font-newake text-7xl text-transparent">
          hello
        </h2>
        <p className="font-firasans text-6xl text-white">Big boy</p>
        <p className="text-5xl text-white">hey now</p>
      </main>
      <footer>hello</footer>
    </>
  );
}
