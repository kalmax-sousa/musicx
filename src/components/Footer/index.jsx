import React from 'react';
import FooterBase from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://github.com/kalmax-sousa"> &copy; Kalmax dos Santos Sousa</a>

      <hr />
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>

    </FooterBase>
  );
}

export default Footer;
