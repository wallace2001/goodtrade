import React, { useState } from 'react';
import Head from 'next/head'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import styles from '../styles/gestao_banca.module.scss';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { HeaderSecondary } from '../components/Header/HeaderSecondary';
import { TableGestao } from '../components/TableGestao';
import { getContext } from '../context/context.global';
import { light } from '../../constants/theme';

export default function GestaoBanca(){
    const [typeGestao, setTypeGestao] = useState<boolean>(false);

    const {
        darkMode,
    } = getContext();

    const changeTypeGestao = (status: boolean) => {
        setTypeGestao(status);
    }

    return (
        <div className={styles.container}>
                <Head>
                <title>Gestão | GoodTrade</title>
                </Head>
                <Header haveBackground={false} />
                <HeaderSecondary />
            <div className={styles.content}>

                <div className={styles.buttonsHeader}>
                    <div style={{
                        justifyContent: 'flex-start'
                    }}>
                        <div className={styles.actions}>
                            <p>Início</p>
                            <p>Histórico</p>
                            <p>Ações</p>
                        </div>
                        <div
                            style={{
                                marginLeft: 10
                            }}
                            className={styles.type}
                        >
                            {typeGestao && (
                                <button onClick={() => changeTypeGestao(false)}>
                                    <MdKeyboardArrowLeft />
                                </button>
                            )}
                            {typeGestao ?
                                (
                                    <>
                                        <p style={{
                                            color: '#00C165'
                                        }}>Automático</p>
                                        <div></div>
                                    </>
                                ) :
                                (
                                    <>
                                        <div></div>
                                        <p>Manual</p>
                                    </>
                                )
                            }
                            {!typeGestao && (
                                <button onClick={() => changeTypeGestao(true)}>
                                    <MdKeyboardArrowRight />
                                </button>
                            )}
                        </div>
                    </div>
                    <div style={{
                        justifyContent: 'flex-end'
                    }}>
                        <div className={styles.box}>
                            <div>
                                <img src="/icons/dark/coins.svg" />
                            </div>
                            <label>
                                <p>Banca</p>
                                <p>R$ 1.000</p>
                            </label>
                        </div>
                        <div 
                            style={{
                                marginLeft: 10
                            }}
                            className={styles.box}
                        >
                            <div>
                                <img src='/icons/dark/tria.svg' />
                            </div>
                            <label>
                                <p>Unidade</p>
                                <p>R$ 1.000</p>
                            </label>
                        </div>
                    </div>
                </div>

                <div className={styles.titleheader}>
                    <img
                        loading="lazy"
                        src={darkMode ? "/images/light/background_title.svg" : "/images/dark/background_title.svg"}
                        alt="header"
                    />
                    <div style={
                        darkMode ?
                        {...light.imageBackgroundTitleGameLight} :
                        {...light.imageBackgroundTitleGameDark}
                            }>
                        <p>FUTEBOL GESTÃO DE BANCA</p>
                    </div>
                </div>

                <TableGestao
                    style={{
                        marginTop: 20,
                    }}
                />
            </div>
        <Footer />
        </div>
    )
}
