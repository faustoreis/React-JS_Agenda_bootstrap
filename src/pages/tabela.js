import { useEffect, useState } from 'react';
import { ContatosService } from '../shared/services/api/contatos/ContatosService';
import { Link } from 'react-router-dom';

export const Tabela = () => {
  const [nome, setNome] = useState('');
  const [rows, setRows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadData = () => {
    setIsLoading(true);

    ContatosService.getAll(nome).then((result) => {
      setIsLoading(false);

      if (result instanceof Error) {
        alert(result.message);
      } else {
        setRows(result.data);
      }
    });
  };

  useEffect(() => {
    loadData(nome);
  }, []);

  return (
    <div className="container container-md container-sm">
      <p className="h1">Contatos</p>
      <div class="row">
        <div class="col-md-2 col-sm-2">
          <label className="form-label">Pesquisar:</label>
        </div>
        <div class="col-md-8 col-sm-8">
          <input
            type="text"
            placeholder="Digite o nome"
            value={nome}
            onChange={(ev) => setNome(ev.target.value)}
            className="form-control col-md-2 col-sm-2"
          />
        </div>
        <div class="col-md-2 col-sm-2">
          <button
            onClick={() => loadData()}
            className="btn btn-primary col-md-12"
          >
            Pesquisar
          </button>
        </div>
      </div>
      <br />
      <div className="md-5">
        <Link to="\contato\add" className="btn btn-primary col-md-3">
          Adicionar
        </Link>
      </div>
      <div className="table-responsive">
        {isLoading ? (
          <h1>Aguarde...</h1>
        ) : (
          <table className="table ">
            <thead>
              <tr key="Cab">
                <th>Nome</th>
                <th>Sexo</th>
                <th className="d-none d-md-block">E-mail</th>
                <th colSpan={2}>Ação</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id}>
                  <td>{row.nome}</td>
                  <td>{row.sexo}</td>
                  <td className="d-none d-md-block">{row.email}</td>
                  <td>
                    <Link to={`/edit/${row.id}`} className="btn btn-secondary">
                      Editar
                    </Link>
                  </td>
                  <td className="col-excluir">
                    <Link to={`/delete/${row.id}`} className="btn btn-danger">
                      Excluir
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};
