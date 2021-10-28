import { Progress } from 'antd';
import React, { useState } from 'react';
import { BiBaseball } from 'react-icons/bi';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { GiSpikedBat } from 'react-icons/gi';

import { DrawerCustom } from '../../Drawer';
import { BUTTONS_GAME } from '../../../../constants/constants';
import { getContext } from '../../../context/context.global';
import { MaskTime } from '../../../utils/mask';
import styles from './index.module.scss';

interface BoxGameProps{
    type: string;
    team: {
        name: string; goals?: number; score: number[] | string[]; icon: string;
    }[];
    league: string;
    time: number | string;
    live: boolean;
}

export const BoxGame = ({team, league, time, live, type}: BoxGameProps) => {
    const [expandGame, setEpandGame] = useState<boolean>(false);

    const {
        darkMode,
        changeViewerModalGame,
    } = getContext();

    const seconds = time as number;
    //typeGame verifica se o tipo escolhido ou é futebol ou basket
    const typeGame = type === 'futbol' || type === 'basket';
    const isBaseball = type === 'basebol';
    if (!isNaN(seconds)){
        MaskTime(seconds)
    }

    const changeVisibilityStatus = () => {
        setEpandGame(prevState => !prevState);
    }

    return (
        <div className={styles.container}>
            <div onClick={changeViewerModalGame} className={styles.game}>
                <div className={styles.wrapper}>
                    <img loading="lazy" className={styles.star} style={{
                        width: '20px',
                        height: '20px',
                    }} src={darkMode ? "/icons/light/star.svg" : "/icons/dark/star.svg"} />
                            <div className={styles.live}>
                                <p>Live</p>
                            </div>
                            <div className={styles.gameNamesTeams}>
                                {!typeGame ? (
                                <div className={styles.contentGameTeams} style={
                                    !typeGame ? {
                                        flexDirection: 'column',
                                    } : {
                                        flexDirection: 'row'
                                    }
                                }>
                                    {!typeGame &&
                                        <div
                                            style={{
                                                flexDirection: 'row',
                                            }}
                                            className={styles.cardTeam}>
                                            {isBaseball && <BiBaseball size={21} />}
                                            <img loading="lazy" src={team[0]?.icon} alt="" />
                                            <p style={{ color: 'var(--light-100)'}}>{team[0]?.name}</p>
                                        </div>
                                    }
                                    {typeGame &&                            
                                        <div className={styles.status}>
                                            <p>{team[0]?.goals}</p>
                                            <p style={{
                                                margin: '0 0.5rem',
                                                marginBottom: '0.5rem'
                                            }}> - </p>
                                            <p>{team[1]?.goals}</p>
                                        </div>
                                    }
                                    {!typeGame &&
                                        <div style={{
                                            flexDirection: 'row',
                                        }} className={styles.cardTeam}>
                                            {isBaseball && <GiSpikedBat size={21}  />}
                                            <img loading="lazy" src={team[1]?.icon} alt="" />
                                            <p style={{ color: 'var(--light-100)'}}>{team[1]?.name}</p>
                                        </div>
                                    }
                                </div>
                                ) : (
                                    <>
                                        <div>
                                            <p style={{
                                                marginRight: '0.3rem',
                                                color: 'var(--light-100)',
                                            }}>{team[0]?.name}</p>
                                            <img loading="lazy" src={team[0]?.icon} alt="" />
                                        </div>
                                        <div className={styles.status}>
                                            <p>{team[0]?.goals}</p>
                                            <p style={{
                                                margin: '0 0.5rem',
                                                marginBottom: '0.5rem'
                                            }}> - </p>
                                            <p>{team[1]?.goals}</p>
                                        </div>
                                        <div>
                                            <img loading="lazy" src={team[1]?.icon} alt="" />
                                            <p  style={{
                                                marginLeft: '0.3rem',
                                                color: 'var(--light-100)',
                                            }}>{team[1]?.name}</p>
                                        </div>
                                    </>
                                )}
                                {!typeGame &&                            
                                    <div style={{
                                        
                                    }} className={styles.results}>
                                        <div>
                                            {team[0].score.map((num, idx) => (
                                                <p key={idx}>{num}</p>
                                            ))}
                                        </div>
                                        <div>
                                            {team[1].score.map((num, idx) => (
                                                <p key={idx}>{num}</p>
                                            ))}
                                        </div>
                                    </div>
                                }
                                <Progress
                                    type="circle"
                                    strokeColor={ time <= 50 ? {
                                        '100%': 'var(--yellow-300)',
                                    } : {
                                        '100%': 'var(--green-100)'
                                    }}
                                    style={{
                                        marginLeft: '1rem',
                                        zIndex: 0,
                                        flex: 1,
                                    }}
                                    width={50}
                                    percent={50}
                                    format={percent => typeGame ? `${percent}"` : `${MaskTime(seconds)} 3st Q.`}
                                />
                            </div>
                    <div className={styles.buttonsGame}>
                        {BUTTONS_GAME.map(item => (
                            <label key={item.id}>
                                <img src={item.icon} />
                            </label>
                        ))}
                    </div>
                    <div
                        className={styles.buttonsDown}
                        onClick={changeVisibilityStatus}
                    >
                        <MdKeyboardArrowDown
                            color='var(--light)'
                        />
                    </div>
                </div>
                {expandGame && (
                    <div className={styles.spaceDown}>
                            {BUTTONS_GAME.map(item => (
                                <label key={item.id}>
                                    <img src={item.icon} />
                                </label>
                            ))}
                    </div>
                )}
            </div>
        </div>
    )
}
