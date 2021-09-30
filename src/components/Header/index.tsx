import React, { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { Select  } from 'antd';
import { FLAGS, TOOLS } from '../../../constants/constants';
import { getContext } from '../../context/context.global';
import { DrawerMobile } from './DrawerMobile';

import styles from './header.module.scss';
import { light } from '../../../constants/theme';
import { BiSearch } from 'react-icons/bi';

interface PropsHeader{
    haveBackground: boolean;
}

export const Header = ({haveBackground}: PropsHeader) => {
    const [isDrawerMobileVisible, setIsDrawerMobileVisible] = useState<boolean>(false);

    const {
        tools,
        scroll,
        darkMode,
        changeTools,
        changeDarkmode,
        changeViewerLoginAndRegister,
     } = getContext();

    const isEcramBigger80 = scroll >= 80;

    const {
        changeLanguage,
        language,
    } = getContext();

    const handleChangeDrawerMobileVisible = () => {
        setIsDrawerMobileVisible(prevState => !prevState);
    };

    const backgroundStyles = {
        backgroundColor: isEcramBigger80 ?
        'var(--background-header)' :
        'transparent'
    };

    return (
        <div
            style={{...backgroundStyles, position: 'sticky', top: 0, zIndex: 999}}
            className={styles.containera}>
            <div className={styles.content}>
                <div className={styles.left}>
                    <h4 style={
                        isEcramBigger80 ?
                        {...light.wordRevert} :
                        {...light.word}
                    }>ApostaMelhor</h4>
                    <Select
                        style={{
                            marginLeft: '1rem',
                            ...light.word
                        }}
                        dropdownStyle={{
                            backgroundColor: 'rgba(255,255,255,.5)',
                        }}
                        value={language}
                        onChange={changeLanguage}
                    >
                        {FLAGS.map((item, index) => {
                            return (
                                <Select.Option style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                    value={item.value} 
                                    key={index}
                                >
                                    <img
                                        loading="lazy"
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
                        style={{
                            ...light.word,
                        }}
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
                    <button
                        style={
                            isEcramBigger80 ?
                            {...light.buttonLoginEcramBigger} :
                            {...light.buttonLogin}
                        }
                        onClick={() => 
                            changeViewerLoginAndRegister('Login')
                        }
                    >Entrar</button>
                    <button
                        style={
                            isEcramBigger80 ?
                            {...light.buttonCreateEcramBigger} :
                            {...light.buttonCreate}
                        }
                        onClick={() => 
                            changeViewerLoginAndRegister('Register')
                        }
                    >Cadastrar</button>
                </div>
            </div>
            <div className={styles.contentMobile}>
                <h4>ApostaMelhor</h4>
                
                <div>
                    <BiSearch size={23} />
                    <img loading="lazy" src='/icons/dark/gear.svg' />
                    <img loading="lazy" onClick={changeDarkmode} src={darkMode ? '/icons/light/dark.svg' : '/icons/dark/light.svg'} />
                    <div>
                        <HiMenu
                            size={30}
                            style={{
                                cursor: 'pointer',
                            }}
                            onClick={handleChangeDrawerMobileVisible}
                        />
                    </div>
                </div>

            </div>
            <DrawerMobile
                isVisible={isDrawerMobileVisible}
                handleChangeDrawerMobileVisible={handleChangeDrawerMobileVisible}
            />
        </div>
    )
}
