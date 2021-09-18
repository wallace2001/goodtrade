import React from 'react';
import { Select } from 'antd';
import { BiSearchAlt2 } from 'react-icons/bi';

import { HEADERS } from '../../../../constants/constants';
import styles from './index.module.scss';
import { getContext } from '../../../context/context.global';

export const HeaderSecondary = () => {

    const {
        changeCategories,
    } = getContext();

    return (
        <div className={styles.container}>
            <div className={styles.cardBox}>
                {HEADERS.map((item, idx) => (
                    <div
                        onClick={() => changeCategories(item.value)}
                        className={styles.box}
                        key={idx}
                    >
                        <img src={item.icon} alt={item.name} />
                        <p>{item.name}</p>
                    </div>
                ))}
            </div>
            <Select
                value="Outros"
                onChange={() => {}}
                dropdownStyle={{
                    backgroundColor: 'rgba(255,255,255,.7)',
                }}
                style={{
                    marginRight: '1rem',
                    marginLeft: '4rem'
                }}
            >
                {HEADERS.map(item => (
                    <Select.Option
                        key={item.name}
                        value={item.name}
                    >
                        {item.name}
                    </Select.Option>
                ))}
            </Select>
            <div className={styles.options}>
                <BiSearchAlt2
                    size={25}
                    cursor="pointer"
                    color="var(--white)" />
                <img style={{margin: '0 1rem'}} src="/icons/gear.svg" alt="Options" />
                <img style={{width: '34px', height: '34px'}} src="/icons/light.svg" />
            </div>
        </div>
    )
};
