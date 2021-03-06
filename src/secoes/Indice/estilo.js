import styled from 'styled-components';

export const Epigrafe = styled.blockquote`
margin: 0; 
padding-bottom: 10vh;
text-align: center;
`;

export const SecaoIndice = styled.section`
display: flex;
flex-direction: row;
width: 100%;
padding-top: 5vh;
div {
    display: flex;
    flex-direction: column;
    width: 50%;
}
.titulos-index{
    p{
        padding-top:5vh;
    }
}
`;

export const ItemIndice = styled.section`
padding: 1vh 0;
line-height: 1.5;
`;

export const Conteiner = styled.article`
width: 100%;
background: var(--branco);
padding: 20vh 27vw;
font-family: 'Interval', monospace;
font-size: 1em;
line-height: 1.2;
box-sizing:border-box;
@media (max-width: 800px){
    padding: 15vh 15vw;
}
`;

export const EpigrafeMobile = styled.blockquote`
width: 100%;
text-align: center;
margin: 0;
padding-bottom: 10vh;
`;

export const SecaoIndiceMobile = styled.section`
.titulo{
    padding: 2vh 0;
}
.exposicoes{
    margin-top: 10vh;
}
`;

export const ItemIndiceMobile = styled.section`
line-height: 1.75;
div{
    padding: 1.25vh 0;
}
`;