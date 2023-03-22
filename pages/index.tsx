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
        {/* Hero Section  */}
        <section
          className={`${borderGlow.glow} relative z-10 mx-4 mt-7 overflow-hidden rounded-3xl border-8 border-aquamarine`}
        >
          <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
            <div className="px-6 pt-10 pb-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pt-48 lg:pb-56 xl:col-span-6">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <h1 className="mt-0 bg-gradient-to-r from-aquamarine via-sunglow to-bright-pink bg-clip-text font-newake text-4xl uppercase tracking-tight text-transparent drop-shadow-md sm:mt-10 sm:text-7xl">
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
        {/* Category Section */}
        <section className="mt-7">
          <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-baseline sm:justify-between">
              <h2 className="bg-gradient-to-r from-sunglow to-bright-pink bg-clip-text py-2 font-newake text-5xl tracking-tight text-transparent drop-shadow-md">
                Shop by category
              </h2>
              <a
                href="#"
                className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
              >
                Browse all categories
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
              <div className="group aspect-w-2 aspect-h-1 overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/home-page-03-featured-category.jpg"
                  alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
                  className="object-cover object-center group-hover:opacity-75"
                />
                <div
                  aria-hidden="true"
                  className="bg-gradient-to-b from-transparent to-black opacity-50"
                />
                <div className="flex items-end p-6">
                  <div>
                    <h3 className="font-semibold text-white">
                      <a href="#">
                        <span className="absolute inset-0" />
                        New Arrivals
                      </a>
                    </h3>
                    <p aria-hidden="true" className="mt-1 text-sm text-white">
                      Shop now
                    </p>
                  </div>
                </div>
              </div>
              <div className="group aspect-w-2 aspect-h-1 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg"
                  alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
                  className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
                />
                <div
                  aria-hidden="true"
                  className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
                />
                <div className="flex items-end p-6 sm:absolute sm:inset-0">
                  <div>
                    <h3 className="font-semibold text-white">
                      <a href="#">
                        <span className="absolute inset-0" />
                        Accessories
                      </a>
                    </h3>
                    <p aria-hidden="true" className="mt-1 text-sm text-white">
                      Shop now
                    </p>
                  </div>
                </div>
              </div>
              <div className="group aspect-w-2 aspect-h-1 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-02.jpg"
                  alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."
                  className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
                />
                <div
                  aria-hidden="true"
                  className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
                />
                <div className="flex items-end p-6 sm:absolute sm:inset-0">
                  <div>
                    <h3 className="font-semibold text-white">
                      <a href="#">
                        <span className="absolute inset-0" />
                        Workspace
                      </a>
                    </h3>
                    <p aria-hidden="true" className="mt-1 text-sm text-white">
                      Shop now
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:hidden">
              <a
                href="#"
                className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Browse all categories
                <span aria-hidden="true"> &rarr;</span>
              </a>
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
