import styled from 'styled-components';
import Botao from '../../componentes/Botao';

export const Conteiner = styled.nav`
/* 
* Estilo temporário para visualizar a construção inicial. Uma vez posicionados, não precisamos mais de um conteiner estilizado.
* Ainda assim, é bom usarmos a tag <nav> de conteiner por questões semânticas.
 */
width: 100vw;
display: flex;
flex-direction: row;
justify-content: space-around;
position: fixed;
top: 5vh;
position: absolute;
`;

export const NavCentral = styled.nav`
position: fixed;
bottom: 5vh;
width: 100vw;

display: flex;
flex-direction: row;
justify-content: center;

gap: 1vw;
z-index: 10;

@media(max-width:800px){
    .livro{
        display: none;
    }
    .ensaios{
        display: none;
    }
}
`;

