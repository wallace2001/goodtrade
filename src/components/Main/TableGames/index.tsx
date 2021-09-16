import { Progress } from 'antd';
import React, { useState } from 'react';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import styles from './index.module.scss';

interface TableGamesProps{
    item: {
        title: string;
        icon: string;
        game: {
            team: {
                name: string; goals: number; icon: string;
            }[];
            league: string;
            time: number;
            live: boolean;
        }[];
    };
}

export const TableGames = ({item}: TableGamesProps) => {
    const [showMore, setShowMore] = useState<boolean>(false);

    const handleChangeShowMore = () => {
        setShowMore(prevState => !prevState);
    };

    return (
        <div className={styles.container}>
            <button onClick={handleChangeShowMore}>
                <div>
                    <img src={item.icon} />
                    <p>{item.title}</p>
                </div>

                <a>Classificações ao vivo</a>

                <div></div>
                <div></div>

                <label>
                    {showMore ? (
                        <RiArrowUpSLine
                            color="var(--white)"
                            size={25}
                            cursor='pointer'
                        />
                    ) : (
                        <RiArrowDownSLine
                            color="var(--white)"
                            size={25}
                            cursor='pointer'
                        />
                    )}
                </label>
            </button>
            <div
                className={styles.content}
                style={
                !showMore ? {display: 'none'} :
                {display: 'flex'}
            }>
                {item.game.map(item => (
                    <div className={styles.game}>
                        <img className={styles.star} style={{
                            width: '20px',
                            height: '20px'
                        }} src="/icons/star.svg" />
                        <div className={styles.live}>
                            <p>Live</p>
                        </div>
                        <div className={styles.gameNamesTeams}>
                            <p style={{
                                marginRight: '0.3rem',
                            }}>{item.team[0]?.name}</p>
                            <img src={item.team[0]?.icon} alt="" />
                            <p style={{
                                margin: '0 1rem'
                            }}>{`${item.team[0]?.goals} - ${item.team[1]?.goals}`}</p>
                            <img src={item.team[1]?.icon} alt="" />
                            <p  style={{
                                marginLeft: '0.3rem',
                            }}>{item.team[1]?.name}</p>
                            <Progress
                                type="circle"
                                strokeColor={ item.time <= 50 ? {
                                    '100%': 'var(--yellow-300)',
                                } : {
                                    '100%': 'var(--green-100)'
                                }}
                                style={{
                                    marginLeft: '1rem',
                                    color: '#fff'
                                }}
                                width={50}
                                percent={item.time}
                                format={percent => `${percent}"`}
                            />
                        </div>
                            <div className={styles.buttonsGame}>
                                <label>
                                    <img src="/icons/monitor.svg" alt="" />
                                </label>
                                <label>
                                    <img src="/icons/fone.svg" alt="" />
                                </label>
                                <label>
                                    <img src="/icons/camisa.svg" alt="" />
                                </label>
                            </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
