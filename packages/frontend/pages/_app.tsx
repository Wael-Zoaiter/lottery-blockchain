import '../styles/globals.css';
import Layout from '../components/layout/Layout';
import { DAppProvider } from '@usedapp/core';
import type { AppProps } from 'next/app';
import { getDappConfig } from '../conf/config';
import Head from '../components/layout/Head';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <DAppProvider config={getDappConfig()}>
      <Head />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DAppProvider>
  );
}

export default MyApp;
