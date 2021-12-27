import React from 'react';
import { Foto, ConteinerFoto, ConteinerLivro } from './estilo';
import { Foto1 } from '../../imagens/livro'
import { usePopUps } from '../../AcessoPopUps';
import { useGlobal } from '../../AcessoGlobal';

  function Livro({rolagem}) {
    const [popUps, setPopUps] = usePopUps();
    const [global, mudarGlobal] = useGlobal();
  
    return (
    <ConteinerLivro id="livro">
    <ConteinerFoto >
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
        </ConteinerLivro>
  );
}

export default Livro;
