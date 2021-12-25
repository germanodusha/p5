import React, {
    createContext, useReducer, useContext, useEffect,
} from 'react';

/* estado inicial */
const estadoInicial = {
    livro: false,
};

/* contexto do estado + valor inicial */
const contextoPopUps = createContext(estadoInicial);
/* contexto do dispatcher -- função para modificar o estado */
const dispatchPopUps = createContext(undefined);

export const AcessoPopUps = ({ children }) => {
    const [popUps, setPopUps] = useReducer(
        (estado, novoValor) => ({ ...estado, ...novoValor }),
        estadoInicial,
    );

    useEffect(() => {
        console.log('atualizou popUps');
    }, [popUps]);

    return (
        <contextoPopUps.Provider value={popUps}>
            <dispatchPopUps.Provider value={setPopUps}>
                {children}
            </dispatchPopUps.Provider>
        </contextoPopUps.Provider>
    );
};

export const usePopUps = () => [
    useContext(contextoPopUps),
    useContext(dispatchPopUps),
];
