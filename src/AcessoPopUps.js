import React, {
    createContext, useReducer, useContext,
} from 'react';

/* estado inicial */
const estadoInicial = { livro: false };

/* contexto do estado + valor inicial */
const contextoPopUps = createContext(estadoInicial);
/* contexto do dispatcher -- função para modificar o estado */
const dispatchPopUps = createContext(undefined);

export const AcessoPopUps = ({ children }) => {
    const [abrirPopUps, setAbrirPopUps] = useReducer(
        (estado, novoValor) => ({ ...estado, ...novoValor }),
        estadoInicial,
    );

    return (
        <contextoPopUps.Provider value={abrirPopUps}>
            <dispatchPopUps.Provider value={setAbrirPopUps}>
                {children}
            </dispatchPopUps.Provider>
        </contextoPopUps.Provider>
    );
};

export const usePopUps = () => [
    useContext(contextoPopUps),
    useContext(dispatchPopUps),
];


/*
    import { useGlobal } from '../../AcessoGlobal';

    function GaleriaFilmes({ categoria }) {
    // eslint-disable-next-line no-unused-vars
    const [global, mudarGlobal] = useGlobal();

    const { filmes } = global.db; 
*/