import { Formulario } from './formulario';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ContatosService } from '../shared/services/api/contatos/ContatosService';

export const Excluir = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const deletar = (dados) => {
    ContatosService.deleteById(id).then((result) => {
      if (result instanceof Error) {
        alert(result.message);
      } else {
      }
      navigate('/');
    });
  };

  return (
    <div className="container">
      <h1>Excluir Contato</h1>
      <div className="container-voltar">
        <Link to={`/`} className="btn-voltar">
          Voltar
        </Link>
      </div>
      <Formulario
        id={id}
        acao={'delete'}
        btnTexto={'Excluir'}
        btnAcao={deletar}
      />
    </div>
  );
};
