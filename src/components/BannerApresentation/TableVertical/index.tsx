import React from 'react';
import { BiTimeFive } from 'react-icons/bi';
import styles from './index.module.scss';

export const TableVertical = () => {

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
            <h4>Punter - Demo</h4>

            <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
            }}>
                <div className={styles.content}>
                    <div className={styles.box}>
                        <header>
                            <p>A-League <strong>Austrália</strong></p>
                        </header>
                        <main>
                            <label>
                                <div>
                                    <BiTimeFive color="#FDB90E" size={20} />
                                    <p style={{
                                        color: '#FDB90E',
                                        fontWeight: 500,
                                        marginLeft: '0.5rem'
                                    }}>2º T - 77’</p>
                                </div>
                            </label>
                            <label>
                                <div>
                                    <img src="/team/chelsea.png" alt="Chelsea" />
                                    <p>Chelsea</p>
                                </div>
                                <p className={styles.status}>2</p>
                            </label>
                            <label>
                                <div>
                                    <img src="/team/mancheste.png" alt="Chelsea" />
                                    <p>Mancheste United</p>
                                </div>
                                <p className={styles.status}>1</p>
                            </label>
                        </main>
                    </div>
                </div>
                <div className={styles.contentCut}>
                    <img src="/icons/hand_2.png" />
                    {results.map(item => (
                        <div style={
                            item.checked ? {backgroundColor: 'rgba(34, 210, 126, 0.2)'} : {backgroundColor: 'rgba(16, 16, 16, 0.2)'}
                        }>
                            <header>{item.name}</header>
                            <main>
                                <p style={
                                item.checked ? {color: 'rgba(34, 210, 126)'} : {color: '#fff'}
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
