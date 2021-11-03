import React from 'react';
import styles from './index.module.scss';
import Carousel from 'react-elastic-carousel';
import { getContext } from '../../../context/context.global';
import { light } from '../../../../constants/theme';
import { Progress } from 'antd';

interface PropsGameScroll{
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

// GameSlider é a parte dos jogos de partidas ao vivo, onde no mobile ele vai deslizar para o lado
export const GameSlider = ({item}: PropsGameScroll) => {

  // Buscando estados do contextAPI
  const {
    darkMode,
  } = getContext();

  // Breakpoints dependendo do tamanho da tela do usuário, ele vai diminuindo a quantidade de jogos ao vivo que aparece na tela
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
    { width: 1900, itemsToShow: 5 },
  ];

  return (
    <div style={{
      width: '100%',
      height: '100%',
    }} className={styles.container}>
      <div className={styles.content}>
        {item.map((item, index) => {
            return (
              <div style={
                darkMode ?
                {...light.backgroundBoxGameScrollViewLight} :
                {...light.backgroundBoxGameScrollViewDark}
            } key={index} className={styles.box}>
                <div className={styles.inLive}>
                    {item.live && <p>Live</p>}
                </div>
                <div className={styles.teams}>
                    <div><img loading="lazy" src={item.team[0].icon} alt={item.team[0].name} /></div>
                    <p style={{
                        color: 'var(--light-100)'}}>VS</p>
                    <div><img loading='lazy' src={item.team[1].icon} alt={item.team[1].name} /></div>
                </div>
                <div className={styles.info}>
                    <strong style={{
                        color: 'var(--light-100)',
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
            );
          })}
      </div>

      <div className={styles.contentMobile}>
        <Carousel
          isRTL={false}
          pagination={false}
          itemsToShow={3}
          showArrows={false}
          breakPoints={breakPoints}
          className={styles.carousel}
        >
          {item.map((item, index) => {
            return (
              <div style={
                darkMode ?
                {...light.backgroundBoxGameScrollViewLight} :
                {...light.backgroundBoxGameScrollViewDark}
            } key={index} className={styles.box}>
                <div className={styles.inLive}>
                    {item.live && <p>Live</p>}
                </div>
                <div className={styles.teams}>
                    <div><img loading="lazy" src={item.team[0].icon} alt={item.team[0].name} /></div>
                    <p style={{
                        color: 'var(--light-100)'}}>VS</p>
                    <div><img loading='lazy' src={item.team[1].icon} alt={item.team[1].name} /></div>
                </div>
                <div className={styles.info}>
                    <strong style={{
                        color: 'var(--light-100)',
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
            );
          })}
        </Carousel>
      </div>
    </div>
  )
}
