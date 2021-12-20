import styled from 'styled-components';

export const EstiloBotao = styled.button`
    width: max-content;
    height: max-content;
    padding: 7px 10px;
    margin: 0;
    box-sizing: border-box;
    
    font-family: 'Inter';
    font-size: 1.3em;
    
    background: var(--laranja);
    color: var(--preto);

    border: 2px solid var(--preto);
    border-radius: 5vh;

    &:hover, &:focus {
    background: var(--preto);
    color: var(--laranja);
    box-shadow: 0 0 30px 20px var(--preto);
    /* o border-radius deixa uma marca laranja na borda do botão. se tirar, ela some */
    /* border-radius:0;*/ 
    }
`;