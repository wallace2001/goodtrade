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
    changeLanguage: (value: string) => void;
    changeTools: (value: string) => void;
    changeCategories: (value: string) => void;
    changeDarkmode: () => void;
    changeViewerLoginAndRegister: (value: string) => void;
}

interface ProviderProps{
    children: ReactNode;
}

export const GlobalContext = createContext({} as ContextProps);

export const GlobalProvider = ({children}: ProviderProps) => {
    const [tools, setTools] = useState<string>('Ferramentas');
    const [scroll, setTamScroll] = useState<number>(0);
    const [language, setLanguage] = useState<string>('br');
    const [darkMode, setDarkMode] = useState<boolean>(false);
    const [isBigger80, setIsBigger80] = useState<boolean>(false);
    const [isOpenLoginAndRegister, setIsOpenLoginAndRegister] = useState<string>('');

    const dispatch = useDispatch();
    const router = useRouter();

    const { categorie } = useSelector((state: RootStateOrAny) => state.categoryReducer);
    const { router: Router } = useSelector((state: RootStateOrAny) => state.routerReducer);

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

    const changeTools = (tool: string) => {
        setTools(tool);
    }

    const changeLanguage = (value: string) => {
        setLanguage(value);
    }

    const changeCategories = (categorie: string) => {
        dispatch(changeCategory(categorie));
    };

    const changeDarkmode = () => {
        setDarkMode(prevState => !prevState);
        const $html = document.querySelector('html');
        $html?.classList.toggle('dark-mode');
    };

    const changeViewerLoginAndRegister = (value: string) => {
        setIsOpenLoginAndRegister(value);
    };
    
    useEffect(() => {
        window.onscroll = () => setTamScroll(document.documentElement.scrollTop);
    }, []);

    useEffect(() => {
        getTamScroll();
    }, [scroll])

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
            changeLanguage,
            changeCategories,
            changeTools,
            changeDarkmode,
            changeViewerLoginAndRegister,
        }}>
            {children}
        </GlobalContext.Provider>
    );
}

export const getContext = () => useContext(GlobalContext);