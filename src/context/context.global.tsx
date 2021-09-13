import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface ContextProps{
    tools: string;
    language: string;
    tamWidth: number;
    changeLanguage: (value: string) => void;
    changeTools: (value: string) => void;
}
interface ProviderProps{
    children: ReactNode;
}

export const Context = createContext({} as ContextProps);

export const Provider = ({children}: ProviderProps) => {
    const [tools, setTools] = useState<string>('ferramentas');
    const [tamWidth, setTamWidth] = useState<number>(0);
    const [language, setLanguage] = useState<string>('br');

    const changeTools = (tool: string) => {
        setTools(tool);
    }

    const changeLanguage = (value: string) => {
        setLanguage(value);
    }

    useEffect(() => {
        document.body.onresize = () => {
          setTamWidth(document.body.clientWidth);
        }
      }, []);

    return(
        <Context.Provider value={{
            tools,
            language,
            tamWidth,
            changeLanguage,
            changeTools,
        }}>
            {children}
        </Context.Provider>
    );
}

export const getContext = () => useContext(Context);