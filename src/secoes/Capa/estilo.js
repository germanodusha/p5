import styled from 'styled-components';

export const ConteinerCapa = styled.section`
background: var(--laranja);
z-index: 20;
height: 100vh;
position: relative;
@media (max-width:799px){
    position:absolute;
    height:auto;
}
`;

export const ConteinerLivro = styled.div`
position: absolute;
top: 58vh;
right: 2vw;
width: 20vw;
height: 30vh;
display: flex;
justify-content: right;

@media (max-width:799px){
    top:7vh;
    position:relative;
    width:80%;
    height:70vh;
    margin-bottom:2rem;
}
`;

export const TituloPrincipal = styled.h1`
font-family: 'ES Build';
font-size: 10em;
font-weight: normal;
line-height: 1;
position:absolute;
top: 75vh;
width: 100%;
text-align: center;
@media (max-width:799px){
    font-size:6em;
    text-align: center;  
    position:relative;
    margin-top:40%;
}
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
@media (max-width:799px){  
    position:relative;
    font-size:5em;
    text-align:center;
}
`;

export const Livro = styled.img`
width: auto;
@media (max-width:799px){
    width:100%;
    
}
// margin: auto !important;
`;