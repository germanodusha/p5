import styled from 'styled-components';

export const ConteinerFoto = styled.section`
background: var(--branco);
position: fixed;
width: 100vw;
height: 100vh;
top:0;
z-index: 1000;

.seta{
    position: absolute;
    width: 3vw;
    height: auto;
    top: 47vh;
}

.esquerda{
    left: 5vw;
}

.direita{
    right: 5vw;
}
`;

export const BotaoFechar = styled.img`
    position: fixed;
    right: 5vw;
    top: 5vh;
    width: 3vw;
    height: auto;
`;

export const Foto = styled.img`
width:100%;
height:100vh;
object-fit:contain;
`;