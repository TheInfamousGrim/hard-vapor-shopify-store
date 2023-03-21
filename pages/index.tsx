import Head from 'next/head';
import Image from 'next/image';
import { Fira_Sans } from 'next/font/google';

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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen bg-black">
        <h2 className="font-newake text-7xl text-white">hello</h2>
        <p className="font-firasans text-6xl text-white">Big boy</p>
        <p className="text-5xl text-white">hey now</p>
      </main>
    </>
  );
}
