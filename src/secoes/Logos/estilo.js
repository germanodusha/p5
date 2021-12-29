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
font-family: 'Inter';
color: var(--preto);

.logos{
    justify-content: space-between;
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
`;

export const Coluna = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: left;
gap: 2vh;
`;

export const Imagens = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: left;
height: 8vh;
gap: 2vw;
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

