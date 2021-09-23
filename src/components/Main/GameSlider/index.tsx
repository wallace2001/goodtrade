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

export const GameSlider = ({item}: PropsGameScroll) => {

  const {
    darkMode,
  } = getContext();

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  const itens = [
    {id: 1, title: 'item #1'},
    {id: 2, title: 'item #2'},
    {id: 3, title: 'item #3'},
    {id: 4, title: 'item #4'},
    {id: 5, title: 'item #5'}
  ];

  return (
    <div style={{
      width: '100%',
      height: '100%',
    }} className={styles.container}>
      <Carousel
        isRTL={false}
        pagination={false}
        itemsToShow={3}
        showArrows={false}
        breakPoints={breakPoints}
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
                  <div><img loading="lazy" src={item.team[1].icon} alt={item.team[1].name} /></div>
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
          );
        })}
      </Carousel>
    </div>
  )
}
