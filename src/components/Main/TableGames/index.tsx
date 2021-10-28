import { Progress } from 'antd';
import React, { useState } from 'react';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { BUTTONS_GAME } from '../../../../constants/constants';
import { light } from '../../../../constants/theme';
import { getContext } from '../../../context/context.global';
import { FilteredNames } from '../../../utils/Filter';
import { MaskTime } from '../../../utils/mask';
import { BoxGame } from '../BoxGame';
import styles from './index.module.scss';

interface GamesProps{
    id: string;
    title: string;
    icon: string;
    type: string;
    game: {
        team: {
            name: string; goals?: number; score: number[] | string[]; icon: string;
        }[];
        league: string;
        time: number | string;
        live: boolean;
    }[];
}

interface TableGamesProps{
    item: GamesProps | null;
}

const TableGames = ({item: itemGame}: TableGamesProps) => {
    const [showMore, setShowMore] = useState<boolean>(false);
    const title = FilteredNames({title: itemGame?.title});

    const {
        categorie
    } = getContext();

    const handleChangeShowMore = () => {
        setShowMore(prevState => !prevState);
    };

    if (itemGame === null){
        return null;
    }

    return (
        <div className={styles.container}>
            <button onClick={handleChangeShowMore}>
                <div>
                    <img loading="lazy" src={itemGame.icon} />
                    <p style={{
                        ...light.word
                    }}>{title && title[0]} <strong style={{
                        ...light.word,
                    }}>{title && title[1]}</strong></p>
                </div>

                <a>Jogos ao vivo</a>

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
                {itemGame.game.map((item) => (
                    <BoxGame {...item} type={itemGame.type} />
                ))}
            </div>
        </div>
    )
}

export default React.memo(TableGames);
