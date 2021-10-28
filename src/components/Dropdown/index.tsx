import React, { useState, useEffect, useRef, PropsWithoutRef } from 'react';
import {MdKeyboardArrowUp} from 'react-icons/md';
import { useDispatch } from 'react-redux';

import { ChangeRouter } from '../../store/action/router';
import styles from './index.module.scss';

interface OptionsProps{
    name: string;
    value: string;
    icon: string;
    iconDark?: string;
    iconLight?: string;
    country_id?: number;
    country_logo?: string;
    country_name?: string;
}

interface DropdownProps{
    valueActualy: string;
    options: any[] | OptionsProps[];
    type: string;
    width: number | string;
    right?: number;
    justifyContent: string;
    colorTitle: string;
    colorArrow: string;
    widthContent?: string;
}

// Dropdown é um component de select
export const Dropdown = ({ options, valueActualy, type, width, justifyContent, right, colorTitle, colorArrow, widthContent }: DropdownProps) => {
    const [isOpenOptions, setOpenOptions] = useState<boolean>(false);
    const isTypeEqualFlags = type === 'flags';

    const dispatch = useDispatch();
    const ref = useRef(null) as any;

    // Mudar state para visualização do dropdown
    const handleChangeViewerOptions = () => {
        setOpenOptions(prevState => !prevState);
    };

        // Mudar state para visualização de outras telas
    const handleClickChangeTool = (value: string) => {
        dispatch(ChangeRouter(value));
    }

    // Verificar se o usuário clicou fora do dropdown
    const handleClickOutsideElement = (e: any) => {
        if (ref.current && !ref.current.contains(e.target)) {
            setOpenOptions(false);
          }
    }

    // Metodo para ficar escutando o click do usuário
    useEffect(() => {
        document.addEventListener("click", handleClickOutsideElement, true);
        return () => {
          document.removeEventListener("click", handleClickOutsideElement, true);
        };
    });

    return (
        <div ref={ref} className={styles.container}>
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
                    width: width === 'auto' ? 'auto' : width,
                    right,
                }}>
                    {options.map((item, idx) => {
                        return (
                            <button onClick={() => handleClickChangeTool(item.value)} style={{
                                justifyContent,
                                width: widthContent === 'auto' ? widthContent : '100%',
                                marginLeft: 0,
                            }} key={idx}>
                                {isTypeEqualFlags ? 
                                <img src={item.icon ? item.icon : item.country_logo} alt="" /> :
                                <img src={`/icons/dark/${item.icon}.svg`} alt="" />
                                }
                                <p>{item.name ? item.name : item.country_name}</p>
                            </button>
                        );
                    })}
                </div>
            }
        </div>
    )
}
