import React from 'react';
import { Progress } from 'antd';
import { FilteredNames } from '../../../utils/Filter';
import styles from './index.module.scss';
import { light } from '../../../../constants/theme';
import { getContext } from '../../../context/context.global';
import {GameSlider} from '../GameSlider';

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
                }}>{title && title[0]} <strong style={{
                    ...light.word
                }}>{ title && title[1]}</strong></h4>
                <a href="#">Ver mais</a>
            </header>
            <div className={styles.list}>
                <GameSlider item={item} />
            </div>
        </div>
    )
}
