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
`;

export const ItemIndice = styled.section`
padding: 1vh 0;
line-height: 1.5;
`;

export const Conteiner = styled.article`
width: 100%;
background: var(--branco);
padding: 20vh 27vw;
font-family: 'Interval';
font-size: 1em;
line-height: 1.2;
box-sizing:border-box;
`;