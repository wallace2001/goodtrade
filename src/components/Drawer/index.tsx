import React from 'react';
import styles from './index.module.scss';

interface DrawerCustomProps{
    visibility: boolean;
}

export const DrawerCustom = ({visibility}: DrawerCustomProps) => {
    return (
        <div
            className={styles.container}
        >
            <p>droga</p>
        </div>
    )
}
