import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '@styles/GlobalStyles.css';
import { defaultTheme, darkTheme } from 'stitches.config';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>OPub</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        value={{
          light: defaultTheme.className,
          dark: darkTheme.className,
        }}
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
