import styled from 'styled-components';


export const Conteiner = styled.section`
width: 100%;
background-color: var(--laranja);
height: max-content;
position: relative;
z-index: 8;
`;

export const Texto = styled.p`
font-family: 'ES Build';
font-size: 10em;
line-height: 1;
padding: 30vh 5vw;
box-sizing: border-box;
margin: 0;
width: 100%;
justify-content: space-around;
text-align: center;
color: var(--preto);

@media (max-width: 800px) {
    font-size: 3em;
    padding: 120vh 1vw 0 1vw;
}
`;