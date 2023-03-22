import Head from 'next/head';
import Image from 'next/image';
import { Fira_Sans } from 'next/font/google';
import Navigation from '@/components/Navigation';

export default function Home() {
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
      <main className="h-screen bg-amaranth-pink">
        <h2 className="font-newake text-7xl text-white">hello</h2>
        <p className="font-firasans text-6xl text-white">Big boy</p>
        <p className="text-5xl text-white">hey now</p>
      </main>
    </>
  );
}
