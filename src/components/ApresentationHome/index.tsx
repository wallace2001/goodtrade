import React from 'react';
import { LINKS } from '../../../constants/constants';
import { light } from '../../../constants/theme';
import { getContext } from '../../context/context.global';
import styles from './apresentation.module.scss';

export const ApresentationHome = () => {

    const {
        darkMode,
    } = getContext();

    return (
        <div className={styles.container}>
            <div>
                <p style={{
                    ...light.word,
                }} className={styles.title}>
                    Amplie seus <br /> <strong style={{
                        ...light.word
                    }}>Resultados</strong> <br /> com nossos bots!
                </p>

                <p
                    className={styles.description}
                    style={{
                        ...light.word,
                    }}
                >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>    
            </div>

            <div className={styles.boxBot}>
                <img loading="lazy" src='/icons/button_home.png' />
                <p>QUERO TESTAR</p>
            </div>

            <div className={styles.links}>
                {LINKS.map((item, index) => {
                    return(
                        <a href={`#${item.name}`} key={index}>
                            <img loading="lazy" key={index} src={!darkMode ? item.iconDark : item.iconLight} />
                        </a>
                    );
                })}
            </div>
        </div>
    )
}
