import React from 'react';
import { BsPlus } from 'react-icons/bs';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { BEST_TIPSTER, COUNTRIES, GAME, HEADER_GAME, MY_LEAGUES } from '../../../constants/constants';
import { Box } from './Box';
import { GameScrollList } from './GameScrollList';
import styles from './index.module.scss';

export const Main = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.left}>
                    <Box
                        title="Minhas Ligas"
                        icon='/icons/myliga.svg'
                        item={MY_LEAGUES}
                        more={false}
                    />
                    <Box
                        title="Minhas Ligas"
                        icon='/icons/tipster.svg'
                        item={BEST_TIPSTER}
                        more={true}
                    />
                    <Box
                        title="Minhas Equipes"
                        icon='/icons/myliga.svg'
                        button={{
                            title: '+ Adicionar Nova Equipe',
                            type: 'button'
                        }}
                        more={false}
                    />
                    <button className={styles.calculator}>
                        <img src="/icons/calculator.svg" alt="Calculator" />
                        <p>Calculadora de Apostas</p>
                    </button>
                    <Box
                        title="Minhas Equipes"
                        icon='/icons/countrie.svg'
                        item={COUNTRIES}
                        button={{
                            title: 'Pesquisar',
                            type: 'search'
                        }}
                        more={true}
                    />
                </div>
                <div className={styles.right}>
                    <header>
                        <div className={styles.headerGame}>
                            {HEADER_GAME.map(item => (
                                <button key={item.name}>
                                    <p key={item.name}>{item.name}</p>
                                    {item.name === 'Todos' && <div />}
                                </button>
                            ))}
                            <label>
                                <BsPlus color="var(--white)"/>
                            </label>
                        </div>
                        <div className={styles.date}>
                            <label>
                                <MdKeyboardArrowLeft />
                            </label>
                            <p>28/08 Qua</p>
                            <label>
                                <MdKeyboardArrowRight />
                            </label>
                        </div>
                        <div></div>
                    </header>
                    <main>
                        <GameScrollList
                            title="Partidas Ao Vivo"
                            item={GAME}
                        />
                    </main>
                </div>
            </div>
        </div>
    )
}
