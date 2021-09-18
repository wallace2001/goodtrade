import React from 'react';
import { BsPlus } from 'react-icons/bs';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import { ImInstagram } from 'react-icons/im';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { BEST_TIPSTER, COUNTRIES, FOOTBALL, GAME, HEADERS, HEADER_GAME, MY_LEAGUES } from '../../../constants/constants';
import { getContext } from '../../context/context.global';
import { Box } from './Box';
import { GameScrollList } from './GameScrollList';
import styles from './index.module.scss';
import { TableGames } from './TableGames';

export const Main = () => {

    const {
        categorie,
    } = getContext();

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                }}>
                    <div className={styles.left}>
                        <Box
                            title="Minhas Ligas"
                            icon='/icons/myliga.svg'
                            item={MY_LEAGUES}
                            more={false}
                        />
                        <Box
                            title="Minhas Ligas"
                            icon='/icons/tipster.svg'
                            item={BEST_TIPSTER}
                            more={true}
                        />
                        <Box
                            title="Minhas Equipes"
                            icon='/icons/myliga.svg'
                            button={{
                                title: '+ Adicionar Nova Equipe',
                                type: 'button'
                            }}
                            more={false}
                        />
                        <button className={styles.calculator}>
                            <img src="/icons/calculator.svg" alt="Calculator" />
                            <p>Calculadoras de Apostas</p>
                        </button>
                        <Box
                            title="Minhas Equipes"
                            icon='/icons/countrie.svg'
                            item={COUNTRIES}
                            button={{
                                title: 'Pesquisar',
                                type: 'search'
                            }}
                            more={true}
                        />
                    </div>
                    <div className={styles.right}>
                        <header>
                            <div className={styles.headerGame}>
                                {HEADER_GAME.map((item, idx) => (
                                    <button key={idx}>
                                        <p key={item.name}>{item.name}</p>
                                        {item.name === 'Todos' && <div />}
                                    </button>
                                ))}
                                <label>
                                    <BsPlus color="var(--white)"/>
                                </label>
                            </div>
                            <div className={styles.date}>
                                <label>
                                    <MdKeyboardArrowLeft />
                                </label>
                                <p>28/08 Qua</p>
                                <label>
                                    <MdKeyboardArrowRight />
                                </label>
                            </div>
                            <div></div>
                        </header>
                        <main>
                            <GameScrollList
                                title="Partidas Ao Vivo"
                                item={GAME}
                            />
                            <div className={styles.games}>
                                <header>
                                    <img src="/images/background_title.svg" alt="header"/>
                                    <div>
                                        <p>{HEADERS.find(title => {
                                            return title.value === categorie;
                                        })?.name}</p>
                                    </div>
                                </header>
                                {HEADERS.map(link => (
                                    link.value === categorie &&
                                    link.link !== null &&
                                    link.link.map(item => (
                                        <TableGames
                                            item={item}
                                        />
                                    ))
                                ))}
                            </div>
                        </main>
                    </div>
                </div>
                <footer>
                    <p style={{
                        textAlign: 'center'
                    }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </footer>
            </div>
            <footer>
                <p>Ajuda: O serviço de resultados de futebol ao vivo em apostamelhor.com oferece golos ao vivo e resultados de mais de 1.500 ligas diferentes, taças e torneios (Premier League, e Liga dos Campeões), apresentando também os marcadores dos golos, resultados ao intervalo, cartões vermelhos, alertas de golos e outras informações de futebol em directo. Recebe notificações sonoras de jogos ao vivo de futebol, segue a tua selecção de jogos ao vivo e informações acerca de resultados finais de jogos em directo. Podes encontrar toda a informação detalhada de jogos ao vivo. Acompanha jogos em direto com relato ao vivo dos principais acontecimentos. Além do futebol, podes encontrar mais de 37 desportos no FlashScore.pt. Uma lista completa desses desportos e de todas as competições pode ser encontrada em Livescore. Os resultados dos jogos em direto de futebol são actualizados em tempo real, não é necessário actualizar a página. Em apostamelhor.com podes encontrar resultados de futebol da Liga Portugal, Liga Portugal 2, Liga 3, Campeonato de Portugal, Taça de Portugal, Taça da Liga, Super Taça, Primeira Liga Inglesa - Premier League, Livescores da Serie A, Futebol em Direto da Bundesliga, Liga Espanhola - LaLiga, e outras grandes ligas Europeias. Também podes encontrar resultados em directo e resultados finais para outras ligas Mundiais, MLS, México, Girabola de Angola, Moçambola de Moçambique, Campeonato de Cabo Verde, SuperLiga CLS da China, Liga-J do Japão, e muito mais!
                Liga Portugal no apostamelhor.com: 11.09.: Paços Ferreira - Braga, Santa Clara - Benfica, Sporting - FC Porto. 12.09.: Moreirense - Famalicão, Boavista - Portimonense, Gil Vicente - Vizela, Vitória SC - Belenenses. 13.09.: Marítimo - Arouca, Tondela - Estoril. Segue os resultados em direto da Liga Portugal, resultados, jogos agendados e classificações.</p>
            </footer>
            <div className={styles.footer}>
                    <p>Copyright © 2021-21 ApostaMelhor</p>
                    
                    <div>
                        <p>Contate-nos</p>
                        <p>Política de Privacidade</p>
                        <p>Termos e Condições</p>
                        <p>Franquia</p>
                        <p>FAQ</p>
                        <p>Anunciar</p>

                        <div>
                            <label>
                                <FaFacebookF color='var(--black)'/>
                            </label>
                            <label>
                                <ImInstagram color='var(--black)'/>
                            </label>
                            <label>
                                <FaTwitter color='var(--black)'/>
                            </label>
                            <label>
                                <FaYoutube color='var(--black)'/>
                            </label>
                        </div>
                    </div>
                </div>
        </div>
    )
}
