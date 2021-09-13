import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { animated, useTransition } from 'react-spring';

import styles from './drawer.module.scss';

interface PropsDrawerMobile{
    isVisible: boolean;
    handleChangeDrawerMobileVisible(): void;
}

export const DrawerMobile = ({ isVisible, handleChangeDrawerMobileVisible }: PropsDrawerMobile) => {
    const propsContainer = useTransition(isVisible, {
        from: {  opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        delay: 100,
    })
    return propsContainer(({ opacity }, item) => item ? (
        <animated.div style={{
            opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
        }} className={styles.container}>
            <div className={styles.headerIconClose}>
                <AiOutlineClose
                    size={30}
                    style={{
                        cursor: 'pointer',
                    }}
                    onClick={handleChangeDrawerMobileVisible}
                />
            </div>
            <div className={styles.content}>
                    {/* {HEADER.map((item, index) => {
                        return (
                            item.info === 'select' ? (
                                <select key={index}>
                                    {item.options?.map((subItem, index) => 
                                        <option
                                            key={index}
                                            value={subItem.value}
                                        >
                                        {subItem.name}
                                        </option>
                                    )}
                                </select>
                            ) : (
                                <button key={index} disabled={item.name === 'Login'}>
                                    {item.name}
                                </button>
                            )
                        );
                    })} */}
            </div>
        </animated.div>
    ) : (
        <animated.div style={{
            opacity: opacity.to({ range: [1.0, 0.0], output: [1, 0] })
        }}></animated.div>
    ))
}
