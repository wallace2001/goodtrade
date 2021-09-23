import { Progress } from 'antd';
import React, { useState } from 'react';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { light } from '../../../../constants/theme';
import { getContext } from '../../../context/context.global';
import { FilteredNames } from '../../utils/Filter';
import styles from './index.module.scss';

interface TableGamesProps{
    item: {
        id: string;
        title: string;
        icon: string;
        game: {
            team: {
                name: string; goals: number; icon: string;
            }[];
            league: string;
            time: number | string;
            live: boolean;
        }[];
    } | null;
}

const TableGames = ({item}: TableGamesProps) => {
    const [showMore, setShowMore] = useState<boolean>(false);
    const title = FilteredNames({title: item?.title});

    const {
        darkMode,
    } = getContext();

    const handleChangeShowMore = () => {
        setShowMore(prevState => !prevState);
    };

    if (item === null){
        return null;
    }

    return (
        <div className={styles.container}>
            <button onClick={handleChangeShowMore}>
                <div>
                    <img loading="lazy" src={item.icon} />
                    <p style={{
                        ...light.word
                    }}>{title && title[0]} <strong style={{
                        ...light.word,
                    }}>{title && title[1]}</strong></p>
                </div>

                <a>Classificações ao vivo</a>

                <div></div>
                <div></div>

                <label>
                    {showMore ? (
                        <RiArrowUpSLine
                            color="var(--light)"
                            size={25}
                            cursor='pointer'
                        />
                    ) : (
                        <RiArrowDownSLine
                            color="var(--light)"
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
                {item.game.map((item, idx) => (
                    <div key={idx} className={styles.game}>
                        <img loading="lazy" className={styles.star} style={{
                            width: '20px',
                            height: '20px'
                        }} src={darkMode ? "/icons/light/star.svg" : "/icons/dark/star.svg"} />
                        <div className={styles.live}>
                            <p>Live</p>
                        </div>
                        <div className={styles.gameNamesTeams}>
                            <div>
                                <p style={{
                                    marginRight: '0.3rem',
                                    color: 'var(--light-100)',
                                }}>{item.team[0]?.name}</p>
                                <img loading="lazy" src={item.team[0]?.icon} alt="" />
                            </div>
                            <div className={styles.status}>
                                <p>{item.team[0]?.goals}</p>
                                <p style={{
                                    margin: '0 0.5rem',
                                    marginBottom: '0.5rem'
                                }}> - </p>
                                <p>{item.team[1]?.goals}</p>
                            </div>
                            <div>
                                <img loading="lazy" src={item.team[1]?.icon} alt="" />
                                <p  style={{
                                    marginLeft: '0.3rem',
                                    color: 'var(--light-100)',
                                }}>{item.team[1]?.name}</p>
                            </div>
                            <Progress
                                type="circle"
                                strokeColor={ item.time <= 50 ? {
                                    '100%': 'var(--yellow-300)',
                                } : {
                                    '100%': 'var(--green-100)'
                                }}
                                style={{
                                    marginLeft: '1rem',
                                    zIndex: 0,
                                }}
                                width={40}
                                percent={50}
                                format={percent => `${percent}"`}
                            />
                        </div>
                            <div className={styles.buttonsGame}>
                                <label>
                                    <img loading="lazy" src="/icons/monitor.svg" alt="" />
                                </label>
                                <label>
                                    <img loading="lazy" src="/icons/fone.svg" alt="" />
                                </label>
                                <label>
                                    <img loading="lazy" src="/icons/camisa.svg" alt="" />
                                </label>
                            </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default React.memo(TableGames);
