import styled from 'styled-components';

export const Texto = styled.p`
font-family: 'ES Build';
font-size: 10em;
line-height: 1;
padding: 10vh 5vw;
box-sizing: border-box;
margin: 0;
width: 100%;
justify-content: space-around;
text-align: center;
color: var(--preto);
&:hover, &:focus {
    text-shadow: var(--preto) 10px -10px 20px,var(--preto) -10px -10px 20px,var(--preto) -10px 10px 20px,var(--preto) 10px 10px 20px;
    color: var(--laranja);
}
`;