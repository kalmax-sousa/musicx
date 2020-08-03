import React from 'react';
import PageDefault from '../../components/PageDefault';
import Elements from './styles';
import record from '../../assets/img/record.svg';
import GoHome from '../../components/GoHome';

function Page404() {
  return (
    <PageDefault>
      <Elements>

        <h2>O endereço pesquisado não se refere a nenhuma página em nosso sistema</h2>
        <h3>
          Continue aproveitando nosso conteúdo!
        </h3>

        <GoHome />

        <img src={record} alt="Disco de Vinil" />

      </Elements>
    </PageDefault>
  );
}

export default Page404;
