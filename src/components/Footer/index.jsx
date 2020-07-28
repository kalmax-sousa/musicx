import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
        <a href="https://github.com/kalmax-sousa" > &copy; Kalmax dos Santos Sousa</a>

        <hr />
        <p>
          Orgulhosamente criado durante a
          {' '}
          <a href="https://www.alura.com.br/">
            Imersão React da Alura
          </a>
        </p>
        <a href="https://www.alura.com.br/">
          <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
        </a>
    </FooterBase>
  );
}

export default Footer;
