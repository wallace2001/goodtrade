import React from 'react';
import { LINKS } from '../../../constants/constants';
import styles from './apresentation.module.scss';

export const ApresentationHome = () => {
    return (
        <div className={styles.container}>
            <p className={styles.title}>
                Amplie seus <br /> <strong>Resultados</strong> <br /> com nossos bots!
            </p>

            <p className={styles.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

            <div className={styles.boxBot}>
                <img src='/icons/button_home.png' />
                <p>QUERO TESTAR</p>
            </div>

            <div className={styles.links}>
                {LINKS.map((item, index) => {
                    return(
                        <a href={`#${item.name}`} key={index}>
                            <img key={index} src={item.icon} />
                        </a>
                    );
                })}
            </div>
        </div>
    )
}
