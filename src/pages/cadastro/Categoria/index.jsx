import React, {useState} from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria(){
  const [categorias, setCategorias] = useState(['Teste']);

  const valoresIniciais = {
    name: 'CATEGORIA',
    descriptions: 'É  LINDA',
    color: '#fff',
  }
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor){
    setValues({
      ...values,
      [chave]: valor,
    })
  }
  
    return(
      <PageDefault>
        <h1>Cadastro de Categoria: {values.name}</h1>

        <form onSubmit={function handleSubmit(info){
          info.preventDefault();
          setCategorias([
            values
          ])
        }}>

        <div>
          <label>
            Nome da Categoria:
            <input
              type="text"
              name="name"
              onChange={(info) => {
                setValue(info.target.getAttribute('name'), info.target.value);
              }}
            />
          </label> 
        </div>

        <div>
        <label>
          Descrição:
            <textarea
              type="text"
              name="description"
              onChange={(info) => {
                setValue(info.target.getAttribute('name'), info.target.value);
              }}
            />
          </label>

        </div>

        <div>
        <label>
            Cor:
            <input
              type="color"
              name="color"
              onChange={(info) => {
                setValue(info.target.getAttribute('name'), info.target.value);
              }}
            />
          </label>
        </div>
        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return(
            <li key={`${categoria}${indice}`}>
              {categoria}
            </li>
          )
        })}
      </ul>
        
        <Link to="/">
           Ir para home   
        </Link>
      </PageDefault>
    )
}

export default CadastroCategoria;