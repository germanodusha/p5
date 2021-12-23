import styled from 'styled-components';

export const ConteinerCapa = styled.section`
background: var(--laranja);
z-index: 20;
height: 100vh;
position: relative;
`;

export const TituloPrincipal = styled.h1`
font-family: 'ES Build';
font-size: 10em;
font-weight: normal;
line-height: 1;
position:absolute;
width: 100%;
text-align: center;
bottom: -10vh;
`;

export const Titulo = styled.h2`
font-family: 'ES Build';
font-size: 10em;
font-weight: normal;
line-height: 1;
padding: 0;
margin: 0;
display: flex;
flex-direction: row;
width: 100%;
${(props) => props.temSpan
        ? 'justify-content: space-between;'
        : 'justify-content: space-around;'
    }
.cabecalho{
    padding: 2vh 3vw 0 3vw;
}
`;

export const Livro = styled.img`
height: 70vh;
position: absolute;
top: 20vh;
left: 30vw;
width: auto;
margin: auto !important;
`;