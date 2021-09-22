import React from 'react';
import { Progress } from 'antd';
import { FilteredNames } from '../../utils/Filter';
import styles from './index.module.scss';
import { light } from '../../../../constants/theme';
import { getContext } from '../../../context/context.global';

interface PropsGameScroll{
    title: string;
    item: {
        team: {
            name: string;
            goals: number;
            icon: string;
        }[];
        league: string;
        time: string;
        live: boolean;
    }[];
}

export const GameScrollList = ({ title: titleNo, item }: PropsGameScroll) => {
    const title = FilteredNames({title: titleNo});

    const {
        darkMode,
    } = getContext();

    return (
        <div className={styles.container}>
            <header>
                <h4 style={{
                    ...light.word
                }}>{title[0]} <strong style={{
                    ...light.word
                }}>{title[1]}</strong></h4>
                <a href="#">Ver mais</a>
            </header>
            <div className={styles.list}>
                {item.map((item, idx) => (
                    <div style={
                        darkMode ?
                        {...light.backgroundBoxGameScrollViewLight} :
                        {...light.backgroundBoxGameScrollViewDark}
                    } key={idx} className={styles.box}>
                        <div className={styles.inLive}>
                            {item.live && <p>Live</p>}
                        </div>
                        <div className={styles.teams}>
                            <div><img src={item.team[0].icon} alt={item.team[0].name} /></div>
                            <p style={{
                                color: 'var(--light-100)'}}>VS</p>
                            <div><img src={item.team[1].icon} alt={item.team[1].name} /></div>
                        </div>
                        <div className={styles.info}>
                            <strong style={{
                                color: 'var(--light-100)'
                            }}>{item.time}</strong>
                            <Progress
                                percent={50}
                                showInfo={false}
                                strokeColor="var(--red-800)"
                            />
                            <p style={{
                                color: 'var(--light-100)'
                            }}>{item.league}</p>

                            {item.team.map((team, idx) => (
                                <label key={idx}>
                                    <strong style={{
                                        color: 'var(--light-100)'
                                    }}>{team.name}</strong>
                                    <strong style={{
                                        color: 'var(--light-100)'
                                    }}>{team.goals}</strong>
                                </label>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
