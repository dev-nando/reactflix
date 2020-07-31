import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria(){
  
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000000',
  }

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);
  
  function setValue(chave, valor){
    setValues({
      ...values,
      [chave]: valor,
    })
  } 

  function handleChange(infosDoEvento){
    const { name, value } = infosDoEvento.target;
    setValue(
      name, 
      value
    );
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome }</h1>

      <form onSubmit={function handleSubmit(infosDoEvento){
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values
        ]);
        setValues(valoresIniciais)
      }}>
        
        <FormField 
          labelText="Nome da Categoria"
          type="text"
          as="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField 
          labelText="Descrição"
          type="textarea"
          as="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        {/* {<div>
          <label>
            Descrição:
            <textarea
              type="text"
              name="descricao"
              value={values.descricao}
              onChange={handleChange}
            />
          </label>
        </div>} */}

        <FormField 
          labelText="Cor"
          type="color"
          as="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />
        
        {/* {<div>
          <label>
            Cor:
            <input
              type="color"
              name="cor"
              value={values.cor}
              onChange={handleChange}
            />
          </label>
        </div>} */}

        <button>
          Cadastrar
        </button>

    </form>

    <ul>
      {categorias.map((categoria, indice) => {
        return(
          <li key={`${categoria}${indice}`}>
            {categoria.nome}
          </li>
        )
      })}
    </ul>

    <Link to="/">
      Ir para Home
    </Link>
    </PageDefault>
  )
  
}

export default CadastroCategoria;