import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import { ContatosService } from '../shared/services/api/contatos/ContatosService';
import './formulario.css';
export const Formulario = ({ id, acao, btnTexto, btnAcao }) => {
  const { register, handleSubmit, setValue } = useForm();
  const [desativarCampos, setDesativarCampos] = useState(false);

  const onSubmit = (data) => {
    btnAcao(data);
  };

  useEffect(() => {
    if (acao != 'adicionar') {
      ContatosService.getById(Number(id)).then((result) => {
        if (result instanceof Error) {
          alert(result.message);
          Navigate('/');
        } else {
          setValue('nome', result.nome);
          setValue('sexo', result.sexo);
          setValue('email', result.email);
          if (acao === 'delete') {
            setDesativarCampos(true);
          }
        }
      });
    }
  }, [id]);

  return (
    <div className="container-form">
      <div className="field-nome">
        <label>Nome:</label>
        <br />
        <input
          placeholder="Digite o Nome:"
          {...register('nome')}
          disabled={desativarCampos}
          className="input-data-nome"
        />
      </div>
      <div className="field-sexo">
        <label>Sexo:</label>
        <br />
        <select
          {...register('sexo')}
          disabled={desativarCampos}
          className="input-data-sexo"
        >
          <option value="M">Masculino</option>
          <option value="F">Feminino</option>
        </select>
      </div>
      <div className="field-email">
        <label>E-mail:</label>
        <br />
        <input
          placeholder="Digite o e-mail:"
          {...register('email')}
          disabled={desativarCampos}
          className="input-data-email"
        />
      </div>
      <div className="container-btn">
        <button
          type="submit"
          onClick={() => handleSubmit(onSubmit)()}
          className="btn-acao"
        >
          {btnTexto}
        </button>
      </div>
    </div>
  );
};
