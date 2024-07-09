import { Formulario } from './formulario';
import { Link, useNavigate } from 'react-router-dom';
import { ContatosService } from '../shared/services/api/contatos/ContatosService';
import './adicionar.css';
export const Adicionar = () => {
  const navigate = useNavigate();

  const salvar = (dados) => {
    ContatosService.create(dados).then((result) => {
      if (result instanceof Error) {
        alert(result.message);
      } else {
      }
      navigate('/');
    });
  };

  return (
    <div className="container">
      <h1>Adicionar Contato</h1>
      <div className="container-voltar">
        <Link to={`/`} className="btn-voltar">
          Voltar
        </Link>
      </div>
      <Formulario
        id={0}
        acao={'adicionar'}
        btnTexto={'Salvar'}
        btnAcao={salvar}
      />
    </div>
  );
};
