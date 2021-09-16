import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { FilteredNames } from '../../utils/Filter';
import styles from './index.module.scss';

interface PropsBox{
    icon: any;
    title: string;
    item?: {
        title: string;
        percentPlayers?: string;
    }[],
    button?:{
        title: string;
        type: string;
    };
    more: boolean; 
}

export const Box = ({ icon, title, item, button, more }: PropsBox) => {
    const titleFiltered = title.split(' ');

    return (
        <div className={styles.container}>
            <header>
                <img src={icon} alt={title} />
                <h2>{titleFiltered[0]} <strong>{titleFiltered[1]}</strong></h2>
            </header>
            <main>
                {button && item === undefined ? (
                    <button className={styles.buttonAddTeam}>
                        {`${button.title.split(' ')[0]} ${button.title.split(' ')[1]} `}
                        <strong>{`${button.title.split(' ')[2]} ${button.title.split(' ')[3]}`}</strong>
                    </button>
                ) : !button && item !== undefined && (
                    item?.map((item, idx) => {
                        const value = FilteredNames(item);
                        return (
                            item.percentPlayers ?
                            <button className={styles.buttonTable} disabled={true} style={{
                                justifyContent: 'space-between'
                            }}>
                                <div>
                                    <h2>{idx + 1}</h2>
                                    <h4 style={{
                                        marginLeft: '0.4rem',
                                        color: 'var(--white)',
                                    }}>{value[0]} <strong>{value[1]}</strong></h4>
                                </div>
                                <h3 style={{color: 'var(--green-100)'}}>{item.percentPlayers}</h3>
                            </button>
                            :
                            <button className={styles.buttonTable}>
                                <h4 style={{
                                    color: 'var(--white)'
                                }}>{value[0]} <strong>{value[1]}</strong></h4>
                            </button>
                        );
                    })
                )}
                {button && item && (
                    <>
                        <div className={styles.inputSearch}>
                            <input
                                type={button.type}
                                placeholder={button.title}
                            />
                            <BiSearch
                                cursor="pointer"
                                color='var(--gray-100)'
                                size={23}
                            />
                        </div>
                        {item?.map((item) => {
                            const value = FilteredNames(item);
                            return (
                                <button className={styles.buttonTable}>
                                    <h4 style={{
                                        color: 'var(--white)',
                                    }}>{value[0]} <strong>{value[1]}</strong></h4>
                                </button>
                            );
                        })}
                    </>
                )}
                {more && <h4 className={styles.viewMore}>Ver mais paises...</h4>}
            </main>
        </div>
    )
}
