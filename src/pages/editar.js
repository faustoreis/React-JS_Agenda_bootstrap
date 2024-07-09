import { ContatosService } from '../shared/services/api/contatos/ContatosService';
import { Formulario } from './formulario';
import { Link, useNavigate, useParams } from 'react-router-dom';

export const Editar = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const salvar = (dados) => {
    ContatosService.updateById(id, dados).then((result) => {
      if (result instanceof Error) {
        alert(result.message);
      } else {
      }
      navigate('/');
    });
  };

  return (
    <div className="container">
      <h1>Editar Contato</h1>
      <div className="container-voltar">
        <Link to={`/`} className="btn-voltar">
          Voltar
        </Link>
      </div>
      <Formulario
        id={id}
        acao={'editar'}
        btnTexto={'Salvar'}
        btnAcao={salvar}
      />
    </div>
  );
};
