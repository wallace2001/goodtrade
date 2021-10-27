// Contexto para puxar informações de APIS externas

import React, { createContext, ReactNode, useEffect, useState, useContext } from 'react';
import { API } from '../services/api';

interface CallApisContextProps {
    countries: CountriesProps[];
}

interface CallApisProviderProps {
    children: ReactNode
}

interface CountriesProps {
    country_id: number;
    country_name: string;
    country_logo: string;
}

export const CallApisContext = createContext({} as CallApisContextProps);

export const CallApisProvider = ({children} : CallApisProviderProps ) => {
    const [countries, setCountries] = useState<CountriesProps[]>([]);

    useEffect(() => {
        const fetchCountries = async() => {
            const { data } = await API.get('A_fu3_ex');
            setCountries(data);
        }

        fetchCountries();
    }, []);

    return (
        <CallApisContext.Provider value={{
            countries,
        }}>
            {children}
        </CallApisContext.Provider>
    );
}

export const getFetchApis = () => useContext(CallApisContext);