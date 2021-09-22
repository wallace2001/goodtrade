import Head from 'next/head'
import classNames from 'classnames';
import { ApresentationHome } from '../components/ApresentationHome'
import { BannerApresentation } from '../components/BannerApresentation'
import { Header } from '../components/Header'
import { HeaderSecondary } from '../components/Header/HeaderSecondary'
import { Main } from '../components/Main'
import { getContext } from '../context/context.global'
import styles from '../styles/Home.module.scss'

export default function Home() {

  return (
    <div className={styles.container}>
      <div className={styles.substract}>
        <Head>
          <title>Home | GoodTrade</title>
        </Head>
        <Header haveBackground={false} />
        <main className={styles.content}>
          <ApresentationHome />
          <BannerApresentation />
        </main>
        <HeaderSecondary />
        <Main />
      </div>
    </div>
  )
}
