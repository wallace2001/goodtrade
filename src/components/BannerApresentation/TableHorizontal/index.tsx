import React from 'react';
import { light } from '../../../../constants/theme';
import { getContext } from '../../../context/context.global';
import styles from './index.module.scss';

export const TableHorizontal = () => {

    const {
        darkMode,
    } = getContext();

    const results = [
        {
            name: 'Internacional',
            status: 'b 10,00',
            red: true,
            border: !darkMode ? true : undefined,
            valueUp: '3.19',
            valueDown: '3,19'
        },
        {
            name: 'Atlético-MG',
            status: 'b 10,00',
            red: false,
            border: !darkMode ? false : undefined,
            valueUp: '3.19',
            valueDown: '3,19'
        },
        {
            name: 'Empate',
            status: 'b 10,00',
            red: true,
            border: !darkMode ? true : undefined,
            valueUp: '3.19',
            valueDown: '3,19'
        },
    ]

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <p style={{
                    ...light.word,
                }}>Back All</p>
                <p style={{
                    ...light.word,
                }}>Lay All</p>
            </div>

            <div className={styles.content}>
                {/* <img src="/icons/hand.png" /> */}
                {results.map((item, idx) => (
                    <div key={idx} className={styles.box}>
                        <div>
                            <div>
                                <label style={
                                    item.border === undefined ?
                                    {backgroundColor: 'var(--white)'} :
                                    item.red ?
                                    {backgroundColor: 'var(--red-800)'} :
                                    {backgroundColor: 'var(--green-100)'}
                                    }
                                />
                            </div>
                            <div>
                                <p style={{
                                    ...light.word
                                }}>{item.name}</p>
                                <p style={item.red ? {color: 'var(--red-800)'} : {color: 'var(--green-100)'}}>{item.status}</p>
                            </div>
                        </div>
                        <div>
                            <button style={
                                darkMode ?
                                {color: 'var(--white)'} :
                                {color: 'var(--green-700)'}
                            }>{item.valueUp}</button>
                            <button style={
                                darkMode ?
                                {color: 'var(--white)'} :
                                {color: 'var(--red-800)'}
                            }>{item.valueDown}</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
