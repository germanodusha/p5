// /* eslint-disable react/jsx-indent */
// /* eslint-disable indent */

// import React, {
//     createContext, useReducer, useContext, useEffect,
// } from 'react';
// import database from './db';
// import databaseEn from './db-en';

// /* estado inicial */
// const estadoInicial = {
//     ptBr: true,
//     db: database,
// };

// /* contexto do estado + valor inicial */
// const contextoGlobal = createContext(estadoInicial);
// /* contexto do dispatcher -- função para modificar o estado */
// const dispatchGlobal = createContext(undefined);

// export const AcessoGlobal = ({ children }) => {
//     const [global, mudarGlobal] = useReducer(
//         (estado, novoValor) => ({ ...estado, ...novoValor }),
//         estadoInicial,
//     );

//     useEffect(() => {
//         const thisDb = global.ptBr ? database : databaseEn;
//         mudarGlobal({ db: thisDb });
//         console.log('atualizou state');
//     }, [global.ptBr]);

//     return (
//         <contextoGlobal.Provider value={global}>
//             <dispatchGlobal.Provider value={mudarGlobal}>
//                 {children}
//             </dispatchGlobal.Provider>
//         </contextoGlobal.Provider>
//     );
// };

// export const useGlobal = () => [
//     useContext(contextoGlobal),
//     useContext(dispatchGlobal),
// ];


/*
    import { useGlobal } from '../../AcessoGlobal';

    function GaleriaFilmes({ categoria }) {
    // eslint-disable-next-line no-unused-vars
    const [global, mudarGlobal] = useGlobal();

    const { filmes } = global.db; 
*/