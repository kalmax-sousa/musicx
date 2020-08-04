import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import PageDefault from '../../components/PageDefault';
import FormField from '../../components/FormField';
import ButtonForm from '../../components/ButtonForm';
import Container from './styles';
import categoriesRepository from '../../repositories/categorias';

function EditCategory(route) {
  const history = useHistory();
  const { id } = route.match.params;

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [color, setColor] = useState('');

  const { clearForm } = useForm();

  useEffect(() => {
    categoriesRepository.getCategory(id)
      .then((categoria) => {
        setTitle(categoria.title);
        setDescription(categoria.description);
        setColor(categoria.color);
      });
  }, []);

  return (
    <PageDefault>
      <Container>
        <form onSubmit={function handleSubmit(info) {
          info.preventDefault();

          categoriesRepository.updateCategory(id, {
            title,
            description,
            color,
          })
            .then(() => {
              history.push('/cadastro/Categoria');
            });

          clearForm();
        }}
        >

          <FormField
            label="Nome da Categoria: "
            type="text"
            name="title"
            value={title}
            onChange={(info) => setTitle(info.target.value)}
          />

          <FormField
            as="textarea"
            label="Descrição: "
            type="textarea"
            name="description"
            value={description}
            onChange={(info) => setDescription(info.target.value)}
          />

          <FormField
            label="Cor: "
            type="color"
            name="color"
            value={color}
            onChange={(info) => setColor(info.target.value)}
          />
          <ButtonForm> Salvar </ButtonForm>

        </form>
      </Container>
    </PageDefault>

  );
}

export default EditCategory;
