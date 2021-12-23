
import styled from 'styled-components';

export const Conteiner = styled.section`
display: flex;
flex-direction: row;
font-family: 'Interval';
font-size: 1em;
line-height: 1.5;
padding: 15vh 15vw;
background-color: var(--branco);
gap: 5vw;
position: relative;
`;

export const MenuIndice = styled.nav`
-webkit-position: sticky;
position: sticky;
top: 5vh;
display: flex;
flex-direction: column;
`;

export const ItemMenuIndice = styled.button`
width: 15vw;
background-color: transparent;
border: none;
font: inherit;
margin-bottom: 3vh;
text-align: left;
cursor: pointer;
position:relative;
.marcador{
    display:${(props) => props.ativo ? 'flex' : 'none'};
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    justify-content:left;
    align-items:center;
    img{
        height: 100%;
        max-width: 100%;
    }
}
`;

export const Artigo = styled.article`
padding-right: 10vw;
p{
    padding-bottom: 1em;
}
`;