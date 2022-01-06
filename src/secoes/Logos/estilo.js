import styled from "styled-components";

export const Conteiner = styled.section`
background-color: var(--branco);
display: flex;
flex-direction: column;
align-items: center;
justify-content: left;
box-sizing: border-box;
padding-bottom: 20vh;
width: 100vw;
font-size: .8em;
font-family: 'Inter', sans-serif;
color: var(--preto);

overflow-x: hidden;

.logos{
    justify-content: space-between;
}

@media (max-width:799px) {
    font-size: .5em;
}
`;

export const Linha = styled.div`
display: flex;
flex-direction: row;
width:70vw;
align-items: center;
padding-bottom: 3vh;
img {
    height: 10vh;
}
@media (max-width:799px) {
    width: 80vw;
    img {
        height: 6vh;
    }
}
.logo-lei{
    width: 8vw;
    height: auto;

}
`;

export const Coluna = styled.div`
display: flex;
flex-direction: column;
align-items: left;
justify-content: center;
text-align: left;
gap: 2vh;
width: 100%;
`;

export const Imagens = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: left;
height: 8vh;
gap: 2vw;
max-width: 100%;

img{
    height: 100%;
}
.logo-secretaria {
    height: 8vh;
    width: auto;
}
.agropeu {
    height: 150%;
}
.fora{
    height: 130%;
}
.logo-rona{
    height: 70%;
}


@media (max-width: 799px){
    height: 5vh;
    .logo-secretaria{
        width: 100%;
        height: auto;
        max-width: 400px;
    }
}
`;

export const Labels = styled.div`
display: flex;
flex-direction: column;
width: 100%;
align-items: left;
justify-content: center;
p {
    text-align: left;
    line-height: 1.5;
}
`;

