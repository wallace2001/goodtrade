import React, { useState } from 'react';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { light } from '../../../../constants/theme';
import { FilteredNames } from '../../../utils/Filter';
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

// TableGames é a parte onde vai aparecer as ligas e os jogos da liga de acordo com o esporte selecionado
const TableGames = ({item: itemGame}: TableGamesProps) => {
    // Estados desse components
    const [showMore, setShowMore] = useState<boolean>(false);
    const title = FilteredNames({title: itemGame?.title});

    // Função para mudar o valor de ver mais da tabela do jogo
    const handleChangeShowMore = () => {
        setShowMore(prevState => !prevState);
    };

    // Se o itemGame for nulo, se não existir dados, retornar nada
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
