import styled from 'styled-components';


export const Conteiner = styled.section`
width: 100%;
background-color: var(--laranja);
height: max-content;
position: relative;
z-index: 8;
`;

export const Texto = styled.p`
font-family: 'ES Build', sans-serif;
font-size: 10em;
line-height: 1;
padding: 30vh 5vw;
box-sizing: border-box;
margin: 0;
width: 100%;
justify-content: space-around;
text-align: center;
color: var(--preto);
/* &:hover, &:focus {
    text-shadow: var(--preto) 10px -10px 20px,var(--preto) -10px -10px 20px,var(--preto) -10px 10px 20px,var(--preto) 10px 10px 20px;
    color: var(--laranja);
} */

@media (max-width: 800px) {
    font-size: 3em;  
    padding:140vh 0 5vh 0;
    
}
`;