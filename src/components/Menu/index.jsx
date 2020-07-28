import React from 'react';
import {Link} from 'react-router-dom'
import Logo from '../../assets/img/Logo.png';
import Headphones from '../../assets/img/headphones.svg';
import {FiPlus} from 'react-icons/fi';
import {Container, Button, LogoImage, Navegation} from './styles';

function Menu () {
    return (
        <Container>
            <Navegation>
                <Link to="/">
                    <LogoImage src={Logo} alt="Musicx logo"/>
                </Link>

                <img src={Headphones} alt="headphones"/>

                <Button as={Link} to="/cadastro/video"> <FiPlus /> Novo vídeo</Button>
            </Navegation>
        </Container>
    );
}

export default Menu;