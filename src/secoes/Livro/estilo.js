import styled from 'styled-components';

export const ConteinerLivro = styled.section`
width: 100vw;
height: 200vh;
box-sizing: border-box;
background-color:var(--laranja);
position:relative;
z-index: 6;
`;

export const ConteinerFoto = styled.section`
-webkit-position: sticky;
position: sticky;
top: 0;
width: 100vw;
height: 100vh;
box-sizing: border-box;
display: flex;
align-items: center;
justify-content: center;
overflow:hidden;
`;

export const Foto = styled.img`
${({ rolagem }) => {
        if (rolagem < 0) {
            return `width: 50%; filter: blur(5px);`
        } else if (rolagem > 0 && rolagem < 50) {
            return `width: ${50 + rolagem}%; filter: blur(${5 - rolagem / 10}px);`
        } if (rolagem > 50) {
            return `width: 100%;`
        } else {
            return 'width: 100%;'
        }
    }}
height: auto;
object-fit:cover;
cursor:pointer;
`;