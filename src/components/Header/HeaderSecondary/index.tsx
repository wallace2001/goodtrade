import React from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';

import { HEADERS, OTHERS, SECONDARY_HEADER_MOBILE } from '../../../../constants/constants';
import styles from './index.module.scss';
import { getContext } from '../../../context/context.global';
import { Dropdown } from '../../Dropdown';

export const HeaderSecondary = () => {

    const {
        darkMode,
        changeCategories,
        changeDarkmode,
    } = getContext();

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.cardBox}>
                    {HEADERS.map((item, idx) => (
                        <div
                            onClick={() => changeCategories(item.value)}
                            className={styles.box}
                            key={idx}
                        >
                            <img loading="lazy" src={darkMode ? item.iconLight : item.iconDark} alt={item.name} />
                            <p>{item.name}</p>
                        </div>
                    ))}
                </div>
                <div className={styles.contentRight}>
                    <div style={{
                        marginRight: '1rem'
                    }}>
                        <Dropdown
                            iconExists={true}
                            showArrow={true}
                            valueActualy='outros'
                            options={OTHERS}
                            type='tools'
                            width={750}
                            right={0}
                            colorTitle='var(--light)'
                            colorArrow='var(--light)'
                            justifyContent='flex-start'
                            widthContent='auto'
                        />
                    </div>
                    <div className={styles.options}>
                        <BiSearchAlt2
                            size={25}
                            cursor="pointer"
                            color="var(--button-color-gear)" />
                        <img
                            loading="lazy"
                            style={{margin: '0 1rem'}}
                            src={darkMode ? "/icons/light/gear.svg" : "/icons/dark/gear.svg"}
                            alt="Options"
                        />
                        <img
                            loading="lazy"
                            style={{width: '21px', height: '21px'}}
                            src={darkMode ? "/icons/light/dark.svg" : "/icons/dark/light.svg"}
                            onClick={changeDarkmode}
                        />
                        <img
                            loading="lazy"
                            style={{width: '22px', marginLeft: '1rem', height: '22px', marginRight: '7px'}}
                            src={darkMode ? "/icons/light/sound_mude_light.svg" : "/icons/dark/sound_mude_dark.svg"}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.contentMobile}>
                {SECONDARY_HEADER_MOBILE.map((item, idx) => {
                    return (
                        <div key={idx} className={styles.contentBox}>
                            <div>
                                <img loading="lazy" src={darkMode ? item.iconLight : item.iconDark} />
                                <p>{item.name}</p>
                            </div>
                            {SECONDARY_HEADER_MOBILE.length - 1 !== idx && <label />}
                        </div>
                    );
                })}
            </div>
        </div>
    )
};
