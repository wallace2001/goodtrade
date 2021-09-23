import Head from 'next/head'
import { ApresentationHome } from '../components/ApresentationHome'
import { BannerApresentation } from '../components/BannerApresentation'
import { Header } from '../components/Header'
import { HeaderSecondary } from '../components/Header/HeaderSecondary'
import { Main } from '../components/Main'
import { getContext } from '../context/context.global'
import styles from '../styles/Home.module.scss'
import { LINKS } from '../../constants/constants';

export default function Home() {

  const {
    darkMode,
  } = getContext();

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

          <div className={styles.boxBot}>
                <img loading="lazy" src='/icons/button_home.png' />
                <p>QUERO TESTAR</p>
            </div>

            <div className={styles.links}>
                {LINKS.map((item, index) => {
                    return(
                        <a href={`#${item.name}`} key={index}>
                            <img loading="lazy" key={index} src={!darkMode ? item.iconDark : item.iconLight} />
                        </a>
                    );
                })}
            </div>

        </main>
        <HeaderSecondary />
        <Main />
      </div>
    </div>
  )
}
