import React, { useState } from 'react';
import {MdKeyboardArrowUp} from 'react-icons/md';
import styles from './index.module.scss';

interface OptionsProps{
    name: string;
    value: string;
    icon: string;
    iconDark?: string;
    iconLight?: string;
}

interface DropdownProps{
    valueActualy: string;
    options: OptionsProps[];
    type: string;
    width: number;
    left?: number;
    justifyContent: string;
    colorTitle: string;
    colorArrow: string;
}

export const Dropdown = ({ options, valueActualy, type, width, justifyContent, left, colorTitle, colorArrow }: DropdownProps) => {
    const [isOpenOptions, setOpenOptions] = useState<boolean>(false);
    const isTypeEqualFlags = type === 'flags';

    const handleChangeViewerOptions = () => {
        setOpenOptions(prevState => !prevState);
    };
    return (
        <div className={styles.container}>
            <label onClick={handleChangeViewerOptions} >
                {isTypeEqualFlags && <img src="/flags/br.svg" alt="" />}
                <p style={{
                    color: colorTitle,
                }}>{valueActualy}</p>
                <MdKeyboardArrowUp 
                    size={25} 
                    color={colorArrow}
                    style={{
                        marginTop: '0.15rem'
                    }}
                />
            </label>
            {isOpenOptions &&             
                <div className={styles.content} style={{
                    width: `${width}px`,
                    left,
                }}>
                    {options.map((item, idx) => {
                        return (
                            <div style={{
                                justifyContent,
                            }} key={idx}>
                                {isTypeEqualFlags ? 
                                <img src={item.icon} alt="" /> :
                                <img src={`/icons/dark/${item.icon}.svg`} alt="" />
                                }
                                <p>{item.name}</p>
                            </div>
                        );
                    })}
                </div>
            }
        </div>
    )
}
