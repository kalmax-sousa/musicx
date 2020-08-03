import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Loading from '../../../components/Loading';
import ButtonForm from '../../../components/ButtonForm';
import GoHome from '../../../components/GoHome';
import categoriesRepository from '../../../repositories/categorias';

function CadastroCategoria() {
  const history = useHistory();
  const valoresIniciais = {
    title: '',
    description: '',
    color: '',
  };

  const { values, handleChange, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://musicx-app.herokuapp.com/categorias';
    fetch(URL)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([...resposta]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {' '}
        {values.title}
      </h1>

      <form onSubmit={function handleSubmit(info) {
        info.preventDefault();

        setCategorias([
          ...categorias,
          values,
        ]);

        categoriesRepository.createCategory({
          title: values.title,
          description: values.description,
          color: values.color,
        })
          .then(() => {
            history.push('/');
          });

        clearForm();
      }}
      >

        <FormField
          label="Nome da Categoria: "
          type="text"
          name="title"
          value={values.title}
          onChange={handleChange}
        />

        <FormField
          as="textarea"
          label="Descrição: "
          type="textarea"
          name="description"
          value={values.description}
          onChange={handleChange}
        />

        <FormField
          label="Cor: "
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />

        <ButtonForm> Cadastrar </ButtonForm>
        <GoHome />

      </form>

      {categorias.length === 0 && (<Loading />)}

      <ul>
        {categorias.map((categoria, indice) => (
          <li key={`${categoria + indice}`}>
            {categoria.title}
          </li>
        ))}
      </ul>

    </PageDefault>
  );
}

export default CadastroCategoria;
