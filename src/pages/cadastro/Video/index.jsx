import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import videosRepository from '../../../repositories/videos';
import categoriesRepository from '../../../repositories/categorias';
import ButtonForm from '../../../components/ButtonForm';
import GoHome from '../../../components/GoHome';
import { AreaButton, Container, ButtonLink } from './styles';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ title }) => title);
  const { handleChange, values } = useForm({
    title: '',
    url: '',
    categoriaId: '',
  });

  useEffect(() => {
    categoriesRepository
      .getAll()
      .then((categoriesFromServer) => {
        setCategorias(categoriesFromServer);
      });
  }, []);

  return (
    <PageDefault>
      <Container>

        <h1>Cadastro de Vídeo</h1>

        <form onSubmit={(event) => {
          event.preventDefault();

          const categoryFinded = categorias
            .find((categoria) => categoria.title === values.categoria);

          videosRepository.createVideo({
            title: values.title,
            url: values.url,
            categoriaId: categoryFinded.id,
          })
            .then(() => {
              console.log('Cadastrou com sucesso!');
              history.push('/');
            });
        }}
        >
          <FormField
            label="Título do Vídeo: "
            name="title"
            value={values.title}
            onChange={handleChange}
          />

          <FormField
            label="URL"
            name="url"
            value={values.url}
            onChange={handleChange}
          />

          <FormField
            label="Categoria"
            name="categoria"
            value={values.categoria}
            onChange={handleChange}
            suggestions={categoryTitles}
          />

          <AreaButton>
            <ButtonForm> Cadastrar </ButtonForm>
            <GoHome />
          </AreaButton>

          <ButtonLink to="/videos">Geranciar Vídeos</ButtonLink>

        </form>
      </Container>

    </PageDefault>
  );
}

export default CadastroVideo;
