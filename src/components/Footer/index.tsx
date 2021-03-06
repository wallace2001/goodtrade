import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import { ImInstagram } from 'react-icons/im';
import { light } from '../../../constants/theme';
import styles from './index.module.scss';

export const Footer = () => {
    return (
        <div className={styles.container}>
            <footer>
                <p style={{
                    textAlign: 'center',
                    ...light.word,
                }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </footer>
            <div className={styles.content}>
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
        </div>
    )
}
