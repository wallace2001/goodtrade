import Head from 'next/head'
import { ApresentationHome } from '../components/ApresentationHome'
import { BannerApresentation } from '../components/BannerApresentation'
import { Header } from '../components/Header'
import { HeaderSecondary } from '../components/Header/HeaderSecondary'
import { Main } from '../components/Main'
import styles from '../styles/Home.module.scss'

export default function Home() {

  return (
    <div className={styles.container}>
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
  )
}
