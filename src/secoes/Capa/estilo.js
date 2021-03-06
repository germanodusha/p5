import styled from 'styled-components';

export const ConteinerCapa = styled.section`
background: var(--laranja);
z-index: 20;
height: 100vh;
position: relative;
width: 100%;

@media (max-width:799px){
    height:100vh;
    position:absolute;
}
.line{
    white-space: nowrap;
    overflow: hidden;
    text-align: center;

}

.fadein {
opacity:0;

animation: fadein 2s linear .5s 1 forwards;

@keyframes fadein {
  from { opacity: 0; }
  to   { opacity: 1; }
}
}

/* .typing-animation{
    animation:blinkCursor 500ms steps(40) infinite normal, typing 4s steps(40, end)  1s normal both;
}

@keyframes typing{
    from{
        width:0;
    }
    to{
        width:50%;
    }
}
@keyframes blinkCursor{
    from{
        border-right-color:#222;
    }
    to{
        border-right-color:transparent;
    }
} */

`;

export const ConteinerLivro = styled.div`
position: absolute;
top: 58vh;
right: 2vw;
width: max-content;
height: 30vh;
display: flex;
flex-direction: row;
box-sizing: border-box;
justify-content: right;
-webkit-justify-content: right;

@media (max-width:799px){
    top:7vh;
    position:relative;
    width:60%;
    height:50vh;
}
`;

export const Livro = styled.img`
height: 100%;
object-fit: contain;
@media (max-width:799px){
    width:100%;
    height: auto;
}
`;

export const TituloPrincipal = styled.h1`
font-family: 'ES Build', sans-serif;
font-size: 10em;
font-weight: normal;
line-height: 1;
position:absolute;
top: 75vh;
width: max-content;
margin:0 auto;

@media (max-width:799px){
    font-size:6em;
    text-align: center;  
    position:relative;
    margin-top:40%;
}
`;
export const TituloArquivo = styled.h2`
font-family: 'ES Build';
font-size: 10em;
font-weight: normal;
line-height: 1;
position:absolute;
top:25vh;
width:max-content;
`
export const Titulo = styled.h2`
font-family: 'ES Build', sans-serif;
font-size: 10em;
font-weight: normal;
line-height: 1;
padding: 0;
margin: 0;
width:max-content;
display: flex;
width:100vw;
justify-content:space-between;

${(props) => props.temSpan
        ? 'justify-content: space-between;'
        : 'justify-content: space-around;'
    }
.cabecalho{
    padding: 2vh 3vw 0 3vw;
}
@media (max-width:799px){  
    position:relative;
    font-size:4em;
    text-align:center;
    .titulo-principal{
        padding-bottom:20vh;
    }
}
`;

