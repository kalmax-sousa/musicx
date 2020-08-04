import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FiDelete, FiEdit } from 'react-icons/fi';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Loading from '../../../components/Loading';
import ButtonForm from '../../../components/ButtonForm';
import GoHome from '../../../components/GoHome';
import categoriesRepository from '../../../repositories/categorias';
import {
  Container, ContainerForm, ContainerTable, AreaButton,
  Name, Description, Color, Edit, ButtonDelete,
} from './styles';

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

  function clearCategory(id) {
    categoriesRepository.deleteCategory(id);

    setCategorias(categorias.filter((categoria) => categoria.id !== id));
  }

  return (
    <PageDefault>

      <Container>
        <ContainerForm>
          <h1>
            Cadastro de Categoria:
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
            <AreaButton>
              <ButtonForm> Cadastrar </ButtonForm>
              <GoHome />
            </AreaButton>

          </form>
        </ContainerForm>

        <ContainerTable>
          <h1>Lista de Categorias</h1>

          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Descriçao</th>
                <th>Cor</th>
              </tr>
            </thead>
            {categorias.length === 0 && (<Loading />)}
            <tbody>
              {categorias.map((categoria) => (
                <tr>
                  <Name>{categoria.title}</Name>
                  <Description>{categoria.description}</Description>
                  <Color>
                    <div style={{ backgroundColor: categoria.color || 'red' }} />
                  </Color>
                  <td><Edit to={`/editar/categoria/${categoria.id}`}><FiEdit /></Edit></td>
                  <td>
                    <ButtonDelete onClick={() => clearCategory(categoria.id)}>
                      <FiDelete />
                    </ButtonDelete>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </ContainerTable>
      </Container>

    </PageDefault>
  );
}

export default CadastroCategoria;
