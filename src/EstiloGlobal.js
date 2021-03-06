import { createGlobalStyle } from 'styled-components'
import { esBuild, inter, interval, intervalSlanted, intervalBold, intervalBoldSlanted } from './fontes';

const EstiloGlobal = createGlobalStyle`
/* FONTES */
@font-face {
    font-family: 'ES Build';
    src: url(${esBuild}) format('truetype');
}
@font-face {
  font-family: 'Inter';
  src: url(${inter}) format('truetype');
}
@font-face {
  font-family: 'Interval';
  src: url(${interval});
}
@font-face {
  font-family: 'Interval Bold';
  src: url(${intervalBold});
}
@font-face {
  font-family: 'Interval Slanted';
  src: url(${intervalSlanted});
}
@font-face {
  font-family: 'Interval Bold Slanted';
  src: url(${intervalBoldSlanted});
}

/* CORES */
:root{
  --laranja: #ff6c00;
  --preto: #000;
  --branco: rgba(255,255,255,1);
  --transp: rgba(255,255,255,0); 
}

::-moz-selection { /* Code for Firefox */
  background: var(--laranja);
}

::selection {
  background: var(--laranja);
}

body {
  background-color: var(--laranja);
  box-sizing: border-box;
  font-family: 'ES Build', sans-serif;
  margin: 0;
  padding: 0;
  width: 100vw;
  overflow-x: hidden;
}

html{
  scroll-behavior: smooth;
}

div, section, article, p, h1, h2, h3, h4, h5, h6 {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

button,a{
  cursor:pointer;
  text-decoration: none;
  color: inherit;
}
.centerColumn{
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}
.centerRow{
  display:flex;
  justify-content: center;
  align-items: center;
}
.underline{
    text-decoration: underline;
    text-underline-position: under;
}
.no-scroll{
  overflow: hidden;
}


`;

export default EstiloGlobal;