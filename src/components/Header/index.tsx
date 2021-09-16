import React, { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { Select  } from 'antd';
import { FLAGS, TOOLS } from '../../../constants/constants';
import { getContext } from '../../context/context.global';
import { DrawerMobile } from './DrawerMobile';

import styles from './header.module.scss';

interface PropsHeader{
    haveBackground: boolean;
}

export const Header = ({haveBackground}: PropsHeader) => {
    const [isDrawerMobileVisible, setIsDrawerMobileVisible] = useState<boolean>(false);

    const {
        tools,
        changeTools
     } = getContext();

    const {
        changeLanguage,
        language,
    } = getContext();

    const handleChangeDrawerMobileVisible = () => {
        setIsDrawerMobileVisible(prevState => !prevState);
    };

    return (
        <div className={haveBackground ? styles.container : styles.containerNoBackground}>
            <div className={styles.content}>
                <div className={styles.left}>
                    <h4>ApostaMelhor</h4>
                    <Select
                        style={{
                            marginLeft: '1rem',
                            color: '#fff',
                        }}
                        dropdownStyle={{
                            backgroundColor: 'rgba(255,255,255,.5)',
                        }}
                        value={language}
                        onChange={changeLanguage}
                    >
                        {FLAGS.map((item, index) => {
                            console.log(`${item.icon}${item.value}.svg`);
                            return (
                                <Select.Option style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                    value={item.value} 
                                    key={index}
                                >
                                    <img 
                                        style={{
                                            marginRight: '0.5rem'
                                        }}
                                        src={`${item.icon}${item.value}.svg`} />
                                    {item.name}
                                </Select.Option>
                            );
                        })}
                    </Select>
                </div>
                <div className={styles.right}>
                    <Select
                        defaultValue={tools}
                        onChange={changeTools}
                        dropdownStyle={{
                            backgroundColor: 'rgba(255,255,255,.7)',
                        }}
                    >
                        {TOOLS.map(item => (
                            <Select.Option
                                key={item.value}
                                value={item.value}
                            >
                                {item.name}
                            </Select.Option>
                        ))}
                    </Select>
                    <button disabled={true}>Entrar</button>
                    <button>Login</button>
                </div>
            </div>
            <div className={styles.contentMobile}>
                <HiMenu
                    size={30}
                    style={{
                        cursor: 'pointer',
                    }}
                    onClick={handleChangeDrawerMobileVisible}
                />
                <h4>ApostaMelhor</h4>
            </div>
            <DrawerMobile
                isVisible={isDrawerMobileVisible}
                handleChangeDrawerMobileVisible={handleChangeDrawerMobileVisible}
            />
        </div>
    )
}
