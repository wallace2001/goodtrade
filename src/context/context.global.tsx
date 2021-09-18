import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { changeCategory } from '../store/action/categorie';

interface ContextProps{
    tools: string;
    language: string;
    ecram: PropsEcram;
    categorie: string;
    changeLanguage: (value: string) => void;
    changeTools: (value: string) => void;
    changeCategories: (value: string) => void;
}

interface PropsEcram{
    width: number;
    height: number;
    scroll: number,
}

interface ProviderProps{
    children: ReactNode;
}

export const GlobalContext = createContext({} as ContextProps);

export const GlobalProvider = ({children}: ProviderProps) => {
    const [tools, setTools] = useState<string>('ferramentas');
    const [ecram, setTamEcram] = useState<PropsEcram>({
        width: 0,
        height: 0,
        scroll: 0,
    });
    const [language, setLanguage] = useState<string>('br');

    const dispatch = useDispatch();
    const { categorie } = useSelector((state: RootStateOrAny) => state.categoryReducer);

    const changeTools = (tool: string) => {
        setTools(tool);
    }

    const changeLanguage = (value: string) => {
        setLanguage(value);
    }

    const changeCategories = (categorie: string) => {
        dispatch(changeCategory(categorie));
    };

    useEffect(() => {
        window.onscroll = () => setTamEcram({
            ...ecram,
            scroll: document.documentElement.scrollTop,
        });
    }, []);

    useEffect(() => {
        document.body.onresize = () => {
          setTamEcram({
              ...ecram,
              width: document.body.clientWidth,
              height: document.body.clientHeight,
          });
        }
      }, []);

    return(
        <GlobalContext.Provider value={{
            tools,
            language,
            ecram,
            categorie,
            changeLanguage,
            changeCategories,
            changeTools,
        }}>
            {children}
        </GlobalContext.Provider>
    );
}

export const getContext = () => useContext(GlobalContext);