import React from 'react';
import Logo from '../../assets/img/Logo.png';
import Headphones from '../../assets/img/headphones.svg';
import {Container, Button, LogoTag, Navegation} from './styles';

function Menu () {
    return (
        <Container>
            <Navegation>
                <a href="/">
                    <LogoTag src={Logo} alt="Musicx logo"/>
                </a>

                <img src={Headphones} alt="headphones"/>

                <Button as="a" className="buttonLink" href="/">Novo vídeo</Button>
            </Navegation>
        </Container>
    );
}

export default Menu;