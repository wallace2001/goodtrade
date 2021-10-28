import React, { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { Select  } from 'antd';
import { FLAGS, TOOLS } from '../../../constants/constants';
import { getContext } from '../../context/context.global';
import { DrawerMobile } from './DrawerMobile';

import styles from './header.module.scss';
import { light } from '../../../constants/theme';
import { BiSearch } from 'react-icons/bi';
import { Dropdown } from '../Dropdown';
import { getFetchApis } from '../../context/callaAisPublics';

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

    const { countries } = getFetchApis();

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
                    <div style={{
                        marginLeft: '2rem',
                    }}>
                        <Dropdown
                            valueActualy={language}
                            options={countries}
                            type='flags'
                            width={'auto'}
                            colorTitle='var(--light_select)'
                            colorArrow='var(--light_select-arrow)'
                            justifyContent='flex-start'
                        />
                    </div>
                </div>
                <div className={styles.right} style={{
                    marginRight: '1rem'
                }}>

                        <Dropdown
                            valueActualy={tools}
                            options={TOOLS}
                            type='tools'
                            width={300}
                            colorTitle='var(--light_select)'
                            colorArrow='var(--light_select-arrow)'
                            justifyContent='flex-start'
                        />
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
