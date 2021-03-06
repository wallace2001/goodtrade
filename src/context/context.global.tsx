import { useRouter } from 'next/router';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { changeCategory } from '../store/action/categorie';

interface ContextProps{
    tools: string;
    language: string;
    scroll: number;
    categorie: string;
    darkMode: boolean;
    isOpenLoginAndRegister: string;
    viewerModalGame: boolean;
    changeLanguage: (value: string) => void;
    changeTools: (value: string) => void;
    changeCategories: (value: string) => void;
    changeDarkmode: () => void;
    changeViewerLoginAndRegister: (value: string) => void;
    changeViewerModalGame: () => void;
}

interface ProviderProps{
    children: ReactNode;
}

export const GlobalContext = createContext({} as ContextProps);

export const GlobalProvider = ({children}: ProviderProps) => {

    // Estados
    const [tools, setTools] = useState<string>('Ferramentas');
    const [scroll, setTamScroll] = useState<number>(0);
    const [language, setLanguage] = useState<string>('br');
    const [darkMode, setDarkMode] = useState<boolean>(false);
    const [viewerModalGame, setViewerModalGame] = useState<boolean>(false);
    const [isBigger80, setIsBigger80] = useState<boolean>(false);
    const [isOpenLoginAndRegister, setIsOpenLoginAndRegister] = useState<string>('');

    // Importando o dispatch para pode despachar eventos
    const dispatch = useDispatch();

    // Importando router para poder mudar de página ou outras funcionalidades
    const router = useRouter();

    // Buscando informações dos estados do redux
    const { categorie } = useSelector((state: RootStateOrAny) => state.categoryReducer);
    const { router: Router } = useSelector((state: RootStateOrAny) => state.routerReducer);

    // Função para verificar se o usuário desceu a tela mais de 80px
    const getTamScroll = () => {
        const $html = document.querySelector('html');
        if (isBigger80){
            if (scroll < 80){
                $html?.classList.remove('ecram');
                setIsBigger80(false);
            }
            return;
        } else {
            if (scroll > 80){
                $html?.classList.add('ecram');
                setIsBigger80(true);
            }
        }
    };

    // Função para alter a ferramenta
    const changeTools = (tool: string) => {
        setTools(tool);
    }

    // Função para alterar a lingua
    const changeLanguage = (value: string) => {
        setLanguage(value);
    }

    // Função para alterar a categoria
    const changeCategories = (categorie: string) => {
        dispatch(changeCategory(categorie));
    };

    // Função para trocar o modo dark
    const changeDarkmode = () => {
        setDarkMode(prevState => !prevState);
        const $html = document.querySelector('html');
        $html?.classList.toggle('dark-mode');
    };

    // Função para verificar se o usuário está fazendo o login ou registrando
    const changeViewerLoginAndRegister = (value: string) => {
        setIsOpenLoginAndRegister(value);
    };

    // Função para aparecer a modal de jogos
    const changeViewerModalGame = () => {
        setViewerModalGame(prevState => !prevState);
    }
    
    // Monitora sempre que a rolagem é acionada
    useEffect(() => {
        window.onscroll = () => setTamScroll(document.documentElement.scrollTop);
    }, []);

    // De acordo com a rolagem, mudar o valor de tamScroll
    useEffect(() => {
        getTamScroll();
    }, [scroll])

    // Monitora quando o router muda, para fazer a rota certa
    useEffect(() => {
        router.push(Router);
    }, [Router]);

    return(
        <GlobalContext.Provider value={{
            tools,
            language,
            scroll,
            categorie,
            darkMode,
            isOpenLoginAndRegister,
            viewerModalGame,
            changeLanguage,
            changeCategories,
            changeTools,
            changeDarkmode,
            changeViewerLoginAndRegister,
            changeViewerModalGame,
        }}>
            {children}
        </GlobalContext.Provider>
    );
}

export const getContext = () => useContext(GlobalContext);