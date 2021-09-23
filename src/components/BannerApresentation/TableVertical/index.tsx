import React from 'react';
import { BiTimeFive } from 'react-icons/bi';
import { light } from '../../../../constants/theme';
import { getContext } from '../../../context/context.global';
import styles from './index.module.scss';

export const TableVertical = () => {

    const {
        darkMode,
    } = getContext();

    const results = [
        {
            name: '1',
            value: '3,19',
            checked: true,
        },
        {
            name: 'X',
            value: '1,65',
            checked: false,
        },
        {
            name: '2',
            value: '1,65',
            checked: false,
        },
        {
            name: 'Mais',
            value: '1,65',
            checked: false,
        },
        {
            name: 'Menos',
            value: '1,65',
            checked: false,
        },
        {
            name: 'Sim',
            value: '1,65',
            checked: false,
        },
        {
            name: 'Não',
            value: '1,65',
            checked: false,
        },
    ];

    return (
        <div className={styles.container}>
            <h4 style={{
                ...light.word,
            }}>Apostas Punter - DEMO</h4>

            <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
            }} className={styles.wrapper}>
                <div className={styles.content}>
                    <div className={styles.box}>
                        <header>
                            <p>A-League <strong>Austrália</strong></p>
                        </header>
                        <main>
                            <label>
                                <div>
                                    <BiTimeFive color={`${darkMode ? '#ED2939' : '#FDB90E'}`} size={20} />
                                    <p style={{
                                        color: `${darkMode ? '#ED2939' : '#FDB90E'}`,
                                        fontWeight: 500,
                                        marginLeft: '0.5rem'
                                    }}>2º T - 77’</p>
                                </div>
                            </label>
                            <label>
                                <div>
                                    <img loading="lazy" src="/team/chelsea.png" alt="Chelsea" />
                                    <p style={{
                                        ...light.word
                                    }}>Chelsea</p>
                                </div>
                                <p className={styles.status}>2</p>
                            </label>
                            <label>
                                <div>
                                    <img loading="lazy" src="/team/mancheste.png" alt="Chelsea" />
                                    <p style={{
                                        ...light.word,
                                    }}>Mancheste United</p>
                                </div>
                                <p className={styles.status}>1</p>
                            </label>
                        </main>
                    </div>
                </div>
                <div className={styles.contentCut}>
                    {/* <img src="/icons/hand_2.png" /> */}
                    {results.map((item, idx) => (
                        <div key={idx} style={
                            darkMode ?
                            item.checked ? 
                            {backgroundColor: 'rgba(34, 210, 126, 0.9)'} : 
                            {backgroundColor: 'rgba(16, 16, 16, 0.2)'} :
                            item.checked ?
                            {backgroundColor: 'rgba(34, 210, 126, 0.2)'} : 
                            {backgroundColor: 'rgba(16, 16, 16, 0.2)'}
                        }>
                            <header>{item.name}</header>
                            <main>
                                <p style={
                                darkMode ?
                                item.checked ?
                                {color: '#fff'} :
                                {color: 'var(--white)'} :
                                item.checked ?
                                {color: 'rgba(34, 210, 126)'} :
                                {color: 'var(--white)'}
                                }
                            >{item.value}</p>
                            </main>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
