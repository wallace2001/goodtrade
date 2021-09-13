import '../styles/globals.scss'
import 'antd/dist/antd.css';
import type { AppProps } from 'next/app'
import { Provider } from '../context/context.global'
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  )
}
export default MyApp
