import React from 'react';
import { Foto, ConteinerFoto } from './estilo';
import { Foto1 } from '../../imagens/livro'
import { usePopUps } from '../../AcessoPopUps';
import { useGlobal } from '../../AcessoGlobal';

  function Livro({rolagem}) {
    const [popUps, setPopUps] = usePopUps();
    const [global, mudarGlobal] = useGlobal();
  
  return (
    <ConteinerFoto id="livro">
      <Foto
        src={Foto1}
        onClick={
          () => {
          setPopUps({ livro: true });
          }
        }
        taBranco={global.taBranco}
        rolagem={rolagem}
      />
    </ConteinerFoto>
  );
}

export default Livro;
