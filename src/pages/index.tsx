import Head from 'next/head'
import { ApresentationHome } from '../components/ApresentationHome'
import { Header } from '../components/Header'
import { HeaderSecondary } from '../components/Header/HeaderSecondary'
import { Main } from '../components/Main'
import { getContext } from '../context/context.global'
import styles from '../styles/Home.module.scss'
import { LINKS } from '../../constants/constants';
import { LoginRegister } from '../components/User/LoginRegister'

export default function Home() {

  // Buscando estados do contexto
  const {
    darkMode,
    isOpenLoginAndRegister,
  } = getContext();

  // Váriavel que verifica se o estado do login está em aberto
  const isVisibleLoginAndRegister = isOpenLoginAndRegister !== '';

  return (
    <div className={styles.container}>
      <div className={styles.substract}>
        <Head>
          <title>Home | GoodTrade</title>
        </Head>
        <Header haveBackground={false} />
        {isVisibleLoginAndRegister ? (
          <div style={{
            padding: '30px 60px 100px 60px'
          }}>
            <LoginRegister />
          </div>
        ) : (
          <main className={styles.content}>
            <div className={styles.apresentation}>
              <ApresentationHome />
            </div>
            <div className={styles.banner}>
              <img 
              className={styles.image} 
              src={!darkMode ?
              '/images/dark/dark_demo.png' :
              '/images/light/light_demo.png'} />
            </div>

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
        )}
        <HeaderSecondary />
        <Main />
      </div>
    </div>
  )
}
