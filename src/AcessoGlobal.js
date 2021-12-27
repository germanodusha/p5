import React, {
    createContext, useReducer, useContext, useEffect,
} from 'react';
import database from './database';

/* estado inicial */
const estadoInicial = {
    ptBr: true,
    db: database.ptBr,
    taBranco: false,
};

/* contexto do estado + valor inicial */
const contextoGlobal = createContext(estadoInicial);
/* contexto do dispatcher -- função para modificar o estado */
const dispatchGlobal = createContext(undefined);

export const AcessoGlobal = ({ children }) => {
    const [global, mudarGlobal] = useReducer(
        (estado, novoValor) => ({ ...estado, ...novoValor }),
        estadoInicial,
    );

    useEffect(() => {
        const thisDb = global.ptBr ? database.ptBr : database.en;
        mudarGlobal({ db: thisDb });
        console.log('atualizou língua');
    }, [global.ptBr]);

    return (
        <contextoGlobal.Provider value={global}>
            <dispatchGlobal.Provider value={mudarGlobal}>
                {children}
            </dispatchGlobal.Provider>
        </contextoGlobal.Provider>
    );
};

export const useGlobal = () => [
    useContext(contextoGlobal),
    useContext(dispatchGlobal),
];


/*
    import { useGlobal } from '../../AcessoGlobal';

    const [global, mudarGlobal] = useGlobal();

    const { filmes } = global.db; 
*/