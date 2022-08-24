import type { AppProps } from 'next/app';
import Head from 'next/head';
import { globalStyles } from '@styles/GlobalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <>
      <Head>
        <title>OPub</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
