import React from 'react';
import styles from './index.module.scss';

export const TableHorizontal = () => {

    const results = [
        {
            name: 'Internacional',
            status: 'b 10,00',
            red: true,
            valueUp: '3.19',
            valueDown: '3,19'
        },
        {
            name: 'Atlético-MG',
            status: 'b 10,00',
            red: false,
            valueUp: '3.19',
            valueDown: '3,19'
        },
        {
            name: 'Empate',
            status: 'b 10,00',
            red: true,
            valueUp: '3.19',
            valueDown: '3,19'
        },
    ]

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <p>Back All</p>
                <p>Lay All</p>
            </div>

            <div className={styles.content}>
                <img src="/icons/hand.png" />
                {results.map((item, idx) => (
                    <div key={idx} className={styles.box}>
                        <div>
                            <div>
                                <label style={item.red ? {backgroundColor: 'var(--red-800)'} : {backgroundColor: 'var(--green-100)'}} />
                            </div>
                            <div>
                                <p>{item.name}</p>
                                <p style={item.red ? {color: 'var(--red-800)'} : {color: 'var(--green-100)'}}>{item.status}</p>
                            </div>
                        </div>
                        <div>
                            <button>{item.valueUp}</button>
                            <button>{item.valueDown}</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
