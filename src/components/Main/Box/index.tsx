import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { light } from '../../../../constants/theme';
import { getContext } from '../../../context/context.global';
import { FilteredNames } from '../../../utils/Filter';
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

    const {
        darkMode,
    } = getContext();

    return (
        <div style={
            darkMode ?
            {...light.backgroundBoxGameDetailsLight} :
            {...light.backgroundBoxGameDetailsDark}
        } className={styles.container}>
            <header>
                <img loading="lazy" src={icon} alt={title} />
                <h2 style={{
                    ...light.word,
                }}>{titleFiltered[0]} <strong style={{
                    fontWeight: 'bold',
                }}>{titleFiltered[1]}</strong></h2>
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
                            <button key={idx} className={styles.buttonTable} disabled={true} style={{
                                justifyContent: 'space-between',
                                paddingTop: '0.2rem'
                            }}>
                                <div>
                                    <h2 style={{
                                        color: 'var(--black)',
                                    }}>{idx + 1}</h2>
                                    <h4 style={{
                                        marginLeft: '0.4rem',
                                        color: 'var(--light)',
                                    }}>{value && value[0]} <strong>{value && value[1]}</strong></h4>
                                </div>
                                <h3 style={{color: 'var(--green-100)', fontSize: 17}}>{item.percentPlayers}</h3>
                            </button>
                            :
                            <button key={idx} className={styles.buttonTable} style={{
                                // paddingTop: '1.1rem',
                            }}>
                                <h4 style={{
                                    color: 'var(--light)'
                                }}>{value && value[0]} <strong style={{
                                    ...light.word,
                                }}>{value && value[1]}</strong></h4>
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
                        {item?.map((item, idx) => {
                            const value = FilteredNames(item);
                            return (
                                <button key={idx} className={styles.buttonTable} style={{
                                    paddingTop: '0.6rem'
                                }}>
                                    <h4 style={{
                                        color: 'var(--light)',
                                    }}>{ value && value[0]} <strong style={{
                                        ...light.word,
                                    }}>{value && value[1]}</strong></h4>
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
