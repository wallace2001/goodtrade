import React from 'react';
import styles from './banner.module.scss';
import { TableHorizontal } from './TableHorizontal';
import { TableVertical } from './TableVertical';

export const BannerApresentation = () => {
    return (
        <div className={styles.container}>
            <header>
                <div className={styles.wrapper_01}>
                    <span />
                    <span />
                    <span />
                </div>
                <div className={styles.wrapper_02}>
                    <div>
                        <img src="/images/user.png" alt="Wallace" />
                    </div>
                    <p>Username</p>
                </div>
            </header>
            <main className={styles.content}>
                <h1 className={styles.title}>Aposta Trades DEMO</h1>
                <div className={styles.box}>
                    <div>
                        <input type="checkbox" id="comissao" />
                        <label htmlFor="comissao">Com comissão</label>
                    </div>
                    <button type="button" style={{color: 'var(--white)'}}>CashOut + 1,33b</button>
                </div>
                <TableHorizontal />
                <TableVertical />
            </main>
        </div>
    )
}
