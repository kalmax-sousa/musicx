import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import Logo from '../../assets/img/Logo.png';
import Headphones from '../../assets/img/headphones.svg';
import {
  Container, Button, LogoImage, Navegation,
} from './styles';

function Menu() {
  const location = useLocation();
  const linkButtonVideo = location.pathname === '/cadastro/video';
  const linkButton = linkButtonVideo ? '/cadastro/Categoria' : '/cadastro/video';

  return (
    <Container>
      <Navegation>
        <Link to="/">
          <LogoImage src={Logo} alt="Musicx logo" />
        </Link>

        <img src={Headphones} alt="headphones" />

        <Button as={Link} to={linkButton}>
          <FiPlus />
          {linkButtonVideo ? 'Nova Categoria' : 'Novo Vídeo'}
        </Button>
      </Navegation>
    </Container>
  );
}

export default Menu;
