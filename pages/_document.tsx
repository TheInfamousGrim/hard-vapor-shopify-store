import { Html, Head, Main, NextScript } from 'next/document';
import Navigation from '@/components/Navigation';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-amaranth-pink">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
