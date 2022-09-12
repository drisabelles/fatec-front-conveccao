import { Button } from '../../components/Button/button';
import Header from '../../components/Header';
import * as S from './styles'

type CadastroEstacaoProps = {
  children: React.ReactNode;
}

const CadastroEstacao = ({ children }: CadastroEstacaoProps) => {
  return (
  <S.Container>
    <Header></Header>

    <main>

      <div>
        <form className="wrap">
          <fieldset>
            <label htmlFor="nome">Nome da Estação: </label>
            <input type="text" id="name"></input>
          </fieldset>
          <fieldset>
            <label htmlFor="nome">Data da Instalação: </label>
            <input type="text" id="name"></input>
          </fieldset>
          <fieldset>
            <label htmlFor="nome">Latitude: </label>
            <input type="text" id="name"></input>
          </fieldset>
          <fieldset>
            <label htmlFor="nome">Longitude: </label>
            <input type="text" id="name"></input>
          </fieldset>
          <fieldset>
            <label htmlFor="nome">Altitude: </label>
            <input type="text" id="name"></input>
          </fieldset>
        </form>
      </div>


    </main>
    <Button />
  </S.Container>
  )
}

export default CadastroEstacao;