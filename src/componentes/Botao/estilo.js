import styled from 'styled-components';

export const EstiloBotao = styled.button`
    width: max-content;
    height: max-content;
    padding: 5px 10px;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    font-size: 1.3em;

    color: var(--preto);

    border: 2px solid var(--preto);
    border-radius: 5vh;

    transition: background-color 1s, .5s;

    z-index: 30;

    ${(props) => {
        let estilo = ''
        if (props.pos) {
            estilo += 'position: fixed;';
            if (props.pos.x === 'direita' && props.pos.y === 'inferior') estilo += 'right: 5vw; bottom: 5vh;';
            if (props.pos.x === 'esquerda' && props.pos.y === 'inferior') estilo += 'left: 5vw; bottom: 5vh;';
            if (props.pos.y === 'superior' && props.pos.x === 'esquerda') estilo += 'top: 40vh; left: 0; transform: rotate(-90deg);';
            if (props.pos.y === 'superior' && props.pos.x === 'direita') estilo += 'top: 40vh; right: 0; transform: rotate(-90deg);';
        }
        if (props.taBranco) {
            estilo += 'background: var(--branco);';
        } else {
            estilo += 'background: var(--laranja);';
        }
        return estilo;
    }
    }
    @media (max-width:799px){
        width: max-content;
        height: max-content;
        ${(props) => {
        let estilo = ''
        if (props.pos) {
            estilo += 'position: absolute;';
            if (props.pos.x === 'direita' && props.pos.y === 'inferior') estilo += 'right: 10vw; top: 5vh;';
            if (props.pos.x === 'esquerda' && props.pos.y === 'inferior') estilo += 'left: 10vw; top: 5vh;';
            if (props.pos.y === 'superior' && props.pos.x === 'esquerda') estilo += 'top: 50vh; left: -10vw; transform: rotate(-90deg);';
            if (props.pos.y === 'superior' && props.pos.x === 'direita') estilo += 'top: 50vh; right: -10vw; transform: rotate(-90deg);';
        }
        if (props.taBranco) {
            estilo += 'background: var(--branco);';
        } else {
            estilo += 'background: var(--laranja);';
        }
        return estilo;
    }
    }

    }

    &:hover, &:focus {
    background: var(--preto);
    ${(props) => {
        if (props.taBranco) {
            return 'color: var(--branco);';
        } else {
            return 'color: var(--laranja);';
        }
    }}
    box-shadow: 0 0 20px 15px var(--preto);
    /* o border-radius deixa uma marca laranja na borda do botão. se tirar, ela some */
    /* border-radius: 0;  */
    }
`;