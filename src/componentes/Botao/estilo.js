import styled from 'styled-components';

export const EstiloBotao = styled.button`
    width: max-content;
    height: max-content;
    padding: 5px 10px;
    margin: 0;
    box-sizing: border-box;
    
    font-family: 'Inter';
    font-size: 1.3em;
    
    background: var(--laranja);
    color: var(--preto);

    border: 2px solid var(--preto);
    border-radius: 5vh;

    z-index: 30;

    ${(props) => { 
        if (props.pos) {
            let estilo = 'position: fixed;';
            if (props.pos.x === 'direita' && props.pos.y === 'inferior') estilo += 'right: 5vw; bottom: 5vh;';
            if (props.pos.x === 'esquerda' && props.pos.y === 'inferior') estilo += 'left: 5vw; bottom: 5vh;';
            if (props.pos.y === 'superior' && props.pos.x === 'esquerda') estilo += 'top: 40vh; left: 0; transform: rotate(-90deg);';
            if (props.pos.y === 'superior' && props.pos.x === 'direita') estilo += 'top: 40vh; right: 0; transform: rotate(-90deg);';
            return estilo;
        }
    }
    }

    &:hover, &:focus {
    background: var(--preto);
    color: var(--laranja);
    box-shadow: 0 0 20px 15px var(--preto);
    /* o border-radius deixa uma marca laranja na borda do botão. se tirar, ela some */
    /* border-radius:0;*/ 
    }
`;