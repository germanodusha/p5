import styled from 'styled-components';

export const ConteinerFoto = styled.section`
background: var(--branco);
position: fixed;
width: 100vw;
height: 100vh;
top:0;
z-index: 1000;
.seta{
    position: absolute;
    width: 3vw;
    height: auto;
    top: 47vh;
        cursor: pointer;
}

`;
export const ConteinerDireita = styled.div`
position: absolute;
right: 10vw;
.seta{
    visibility: visible;
    position: absolute;    
    
}
.hover{
    position: absolute;
    visibility: hidden;

}
&:hover,&:focus{
    .seta{
    visibility: hidden;
    }
    .hover{
        visibility: visible;
    }

}
`;
export const ConteinerEsquerda = styled.div`
position: absolute;
.esquerda{
    left: 5vw;
}

.seta{
    visibility: visible;
    position: absolute;    
    
}
.hover{
    position: absolute;
    visibility: hidden;

}
&:hover,&:focus{
    .seta{
    visibility: hidden;
    }
    .hover{
        visibility: visible;
    }

}
`;

export const BotaoFechar = styled.button`
    display: flex;
    position: fixed;
    right: 5vw;
    top: 5vh;
    background-color: transparent;
    border:none;
    .preto{
        visibility: visible;
        position: relative;
        width: 3vw;
        height: auto;
    }
    .transp{
        position: absolute;
        visibility: hidden;
        width: 3vw;
        height: auto;
    }
    &:hover,&:focus{
        .preto{
        visibility: hidden;
        }
        .transp{
            visibility: visible;
        }
        cursor: pointer;

    }

`;

export const Foto = styled.img`
width:100%;
height:100vh;
object-fit:cover;
`;