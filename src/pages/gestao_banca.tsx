import React, { useState, useRef, useEffect } from 'react';
import Head from 'next/head'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import styles from '../styles/gestao_banca.module.scss';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { HeaderSecondary } from '../components/Header/HeaderSecondary';
import { TableGestao } from '../components/TableGestao';
import { getContext } from '../context/context.global';
import { light } from '../../constants/theme';
import { Dropdown } from '../components/Dropdown';


// Dropdown das ações
export const DropDownAction = (title: string) => {
    const [openDropdown, setOpenDropdown] = useState<boolean>(false);
    const [handleActiveFees, setHandleActiveFees] = useState<boolean>(false);

    // Função para trocar o estado do botão de juros
    const handleChangeStatusActiveFees = () => {
        setHandleActiveFees(prevState => !prevState);
    }

    return (
        <>
            <p
                style={{marginTop: '1rem'}}
                onClick={() => setOpenDropdown(prevState => !prevState)}
            >
                {title}
            </p>
            {openDropdown && (
                <div className={styles.contentDropdown}>
                    <img style={{marginBottom: '1rem'}} src='/icons/dark/gear.svg'/>
                    <label style={{
                        marginBottom: '1rem'
                    }}>
                        <a>Porcentagem da Stake</a>
                        <input type="text" />
                    </label>
                    <label>
                        <a>Juros compostos</a>
                        <img
                            onClick={handleChangeStatusActiveFees}
                            style={{marginRight: '1.8rem', cursor: 'pointer'}}
                            src={handleActiveFees ? "/icons/startactive.svg" : "/icons/start.svg"} alt=""
                        />
                    </label>
                </div>
            )}
        </>
    );
};

export default function GestaoBanca(){
    // Estado que verifica se está em manual ou em automático
    const [typeGestao, setTypeGestao] = useState<boolean>(false);
    const [statusDropdown, setStatusDropdown] = useState<boolean>(false);
    const ref = useRef(null) as any;

    const columns = [
        {id: 1, name: 'Por data'},
        {id: 2, name: 'Por jogo/Jogador'},
        {id: 3, name: 'País'},
        {id: 4, name: 'Campeonato'},
        {id: 5, name: 'Categoria'},
        {id: 6, name: 'Tipo de aposta'},
        {id: 7, name: 'Mercado'},
        {id: 8, name: 'ODD'},
        {id: 9, name: 'Stake'},
        {id: 10, name: 'Green'},
        {id: 11, name: 'Red'},
    ];

    // Recuperando estados do contextAPI
    const {
        darkMode,
    } = getContext();

    // Função para verificar se é manual ou automático
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
                        <div 
                            style={!darkMode ? 
                                {...light.backgroundBoxGameDetailsDark} : 
                                {...light.backgroundBoxGameDetailsLight}} 
                            className={styles.actions}
                        >
                            <p className={styles.active}>Início</p>
                            <div>
                                <Dropdown
                                    width='auto'
                                    iconExists={false}
                                    showArrow={false}
                                    valueActualy='Histórico'
                                    options={columns}
                                    colorTitle='var(--light_select)'
                                    colorArrow='var(--light_select-arrow)'
                                    justifyContent='flex-start'
                                    top={260}
                                    left={100}
                                />
                            </div>
                            {DropDownAction('Ações')}
                        </div>
                        <div
                            style={!darkMode ? 
                                {...light.backgroundBoxGameDetailsDark, marginLeft: 10} : 
                                {...light.backgroundBoxGameDetailsLight, marginLeft: 10}} 
                            className={styles.type}
                        >
                            {typeGestao && (
                                <div>
                                    <button onClick={() => changeTypeGestao(false)}>
                                        <MdKeyboardArrowLeft />
                                    </button>
                                </div>
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
                                <div>
                                    <button onClick={() => changeTypeGestao(true)}>
                                        <MdKeyboardArrowRight />
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                    <div style={{
                        justifyContent: 'flex-end'
                    }}>
                        <div 
                            style={!darkMode ? 
                                {...light.backgroundBoxGameDetailsDark, marginLeft: 10} : 
                                {...light.backgroundBoxGameDetailsLight, marginLeft: 10}} 
                            className={styles.box}>
                            <div>
                                <img src="/icons/dark/coins.svg" />
                            </div>
                            <label>
                                <p>Banca</p>
                                <p>R$ 1.000</p>
                            </label>
                        </div>
                        <div 
                            style={!darkMode ? 
                                {...light.backgroundBoxGameDetailsDark, marginLeft: 10} : 
                                {...light.backgroundBoxGameDetailsLight, marginLeft: 10}} 
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
