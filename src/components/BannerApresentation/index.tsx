import React from 'react';
import { light } from '../../../constants/theme';
import { getContext } from '../../context/context.global';
import styles from './banner.module.scss';
import { TableHorizontal } from './TableHorizontal';
import { TableVertical } from './TableVertical';

export const BannerApresentation = () => {

    const {
        darkMode,
    } = getContext();

    return (
        <div
            style={
                !darkMode ?
                {...light.backgroundBoxHomeDark} :
                {...light.backgroundBoxHomeLight}
            }
            className={styles.container}
        >
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
                <h1 style={{
                    ...light.word,
                }} className={styles.title}>Apostas Exchange - DEMO</h1>
                <div className={styles.box}>
                    <div>
                        <input type="checkbox" id="comissao" />
                        <label style={{
                            ...light.word,
                        }} htmlFor="comissao">Com comissão</label>
                    </div>
                    <button type="button" style={{color: 'var(--white)'}}>CashOut + 1,33b</button>
                </div>
                <TableHorizontal />
                <TableVertical />
            </main>
        </div>
    )
}
