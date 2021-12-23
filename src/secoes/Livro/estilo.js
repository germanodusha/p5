import styled from 'styled-components';

export const ConteinerFoto = styled.section`
width: 100vw;
height: max-content;
box-sizing: border-box;
background-color:var(--branco);

.seta{
    position: absolute;
    width: 10vw;
    height: auto;
}

`;

export const Foto = styled.img`
width:100vw;
height:100vh;
object-fit:cover;
cursor:pointer;
`;