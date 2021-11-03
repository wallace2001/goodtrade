import React from 'react';
import { BsPlus } from 'react-icons/bs';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import { ImInstagram } from 'react-icons/im';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { BEST_TIPSTER, COUNTRIES, GAMESLIDEFOODBALL, HEADERS, HEADER_GAME, MY_LEAGUES } from '../../../constants/constants';
import { light } from '../../../constants/theme';
import { getContext } from '../../context/context.global';
import { DrawerCustom } from '../Drawer';
import { Box } from './Box';
import { GameScrollList } from './GameScrollList';
import styles from './index.module.scss';
import TableGames from './TableGames';

export const Main = () => {

    // Buscando valores da contextAPI
    const {
        categorie,
        darkMode,
        viewerModalGame,
    } = getContext();

    return (
        <div className={styles.container}>
            <div style={
                !darkMode ?
                {background: 'rgba(5,98,130, .6)',
                backgroundColor: 'linear-gradient(0deg, rgba(5,98,130,.5) 0%, rgba(24,148,235,0.5) 100%)'} :
                {
                    backgroundColor: '',
                }
            } className={styles.content}>
                <div className={styles.contentBlur}>
                    <div className={styles.box}>
                        {/* Todos os elementos que ficam do lado esquerdo depois do segundo Header */}
                        <div
                            className={styles.left}
                            style={
                                viewerModalGame ?
                                {display: 'none'} :
                                {}
                            }
                        >
                            <Box
                                title="Minhas Ligas"
                                icon='/icons/myliga.svg'
                                item={MY_LEAGUES}
                                more={false}
                            />
                            <Box
                                title="Melhores Tipster"
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
                                <img loading="lazy" src="/icons/calculator.svg" alt="Calculator" />
                                <p>Calculadoras de Apostas</p>
                            </button>
                            <Box
                                title="Escolher País"
                                icon='/icons/countrie.svg'
                                item={COUNTRIES}
                                button={{
                                    title: 'Pesquisar',
                                    type: 'search'
                                }}
                                more={true}
                            />
                        </div>
                        {/* Todos os elementos que ficam do lado direito depois do segundo Header */}
                        <div className={styles.right} style={
                            viewerModalGame ?
                            {flex: 1} :
                            {}
                        }>
                            {/* Filtro de opções */}
                            <header>
                                <div className={styles.header}>
                                    <div style={
                                        darkMode ?
                                        {...light.backgroundBoxGameDetailsLight} : 
                                        {...light.backgroundBoxGameDetailsDark}
                                    } className={styles.headerGame}>
                                        {HEADER_GAME.map((item, idx) => {
                                            return(
                                            <button key={idx}>
                                                {
                                                    true && (
                                                        <>
                                                            <p style={{
                                                                ...light.word,
                                                            }} key={item.name}>{item.name}</p>
                                                            {item.name === 'Todos' && <div />}
                                                        </>
                                                    )
                                                }
                                            </button>
                                        )})}
                                        <div 
                                            className={styles.boxDots}
                                            style={darkMode ? {background: 'transparent'} : {}}
                                        >
                                            {darkMode ? <img loading="lazy" src="/icons/light/settings_light.svg" /> : <img loading="lazy" src="/icons/dark/settings_dark.svg" />}
                                        </div>
                                    </div>
                                    <div style={
                                        darkMode ?
                                        {...light.backgroundBoxGameDetailsLight} : 
                                        {...light.backgroundBoxGameDetailsDark}
                                    } className={styles.date}>
                                        <label>
                                            <MdKeyboardArrowLeft
                                                color={'var(--light)'}
                                                size={25}
                                            />
                                        </label>
                                        <p style={{
                                            ...light.word,
                                        }}>28/08 Qua</p>
                                        <label>
                                            <MdKeyboardArrowRight
                                                color={'var(--light)'}
                                                size={25}
                                            />
                                        </label>
                                    </div>
                                    <div></div>
                                </div>
                            </header>
                            {/* Onde ficam as partidas */}
                            <main style={
                                    darkMode ? 
                                    {...light.backgroundBoxGameDetailsLight} : 
                                    {...light.backgroundBoxGameDetailsDark}
                            }>
                                <GameScrollList
                                    title="Partidas Ao Vivo"
                                    item={GAMESLIDEFOODBALL}
                                />
                                <div className={styles.games}>
                                    <header>
                                        <img
                                            loading="lazy"
                                            src={darkMode ? "/images/light/background_title.svg" : "/images/dark/background_title.svg"}
                                            alt="header"
                                        />
                                        <div style={
                                            darkMode ?
                                            {...light.imageBackgroundTitleGameLight} :
                                            {...light.imageBackgroundTitleGameDark}
                                        }>
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
                                                key={item.id}
                                                item={item as any}
                                            />
                                        ))
                                    ))}
                                </div>
                            </main>
                        </div>
                        {/* Aqui vai ser a parte do drawer que vai abrir pela direita */}
                        <div style={
                            viewerModalGame ? 
                            {display: 'flex', flex: 1} :
                            {display: 'none'}
                        }>
                            <DrawerCustom
                                visibility={viewerModalGame}
                            />
                        </div>
                    </div>
                    <footer>
                        <p style={{
                            textAlign: 'center',
                            ...light.word,
                        }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </footer>
                </div>
            </div>
            {/* A partir daqui começa o footer */}
            <footer
                style={{
                    backgroundColor: 'var(--background-footer-1)'
                }}
            >
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
                                <FaFacebookF color='var(--background-footer-2)'/>
                            </label>
                            <label>
                                <ImInstagram color='var(--background-footer-2)'/>
                            </label>
                            <label>
                                <FaTwitter color='var(--background-footer-2)'/>
                            </label>
                            <label>
                                <FaYoutube color='var(--background-footer-2)'/>
                            </label>
                        </div>
                    </div>
                </div>
                <div className={styles.footerMobile}>
                    <div>
                        <div>
                            <p>Contate-nos</p>
                            <p>Franquia</p>
                            <p>FAQ</p>
                        </div>
                        <div>
                        <p>Política de Privacidade</p>
                            <p>Termos e Condições</p>
                            <p>Anunciar</p>
                        </div>
                    </div>
                    <div>
                        <label>
                            <FaFacebookF color='var(--background-footer-2)'/>
                        </label>
                        <label>
                            <ImInstagram color='var(--background-footer-2)'/>
                        </label>
                        <label>
                            <FaTwitter color='var(--background-footer-2)'/>
                        </label>
                        <label>
                            <FaYoutube color='var(--background-footer-2)'/>
                        </label>
                    </div>
                    <p>Copyright © 2021-21 ApostaMelhor</p>
                </div>
        </div>
    )
}
