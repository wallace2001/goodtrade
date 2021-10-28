import 'antd/dist/antd.css';
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import Head from 'next/head';


import { GlobalProvider } from '../context/context.global'
import { CallApisProvider } from '../context/callaAisPublics'
import { store } from '../store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GlobalProvider>
        <CallApisProvider>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap" rel="stylesheet" />
        </Head>
        <Component {...pageProps} />
        </CallApisProvider>
      </GlobalProvider>
    </Provider>
  )
}
export default MyApp
