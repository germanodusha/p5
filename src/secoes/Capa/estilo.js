import styled from 'styled-components';

export const Titulo = styled.h1`
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
`;

export const Livro = styled.img`
height: 70vh;
position: absolute;
top: 20vh;
left: 30vw;
width: auto;
margin: auto !important;

`;