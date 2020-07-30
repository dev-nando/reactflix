import React from 'react';
import Logo from '../../assets/img/LogoFerFlix.png';
import './Menu.css';
//import ButtonLink from './components/ButtonLink';
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="AluraFlix logo"/>
            </a>
            <Button as="a" className="ButtonLink" href="/cadastro/Video">
                Novo Video
            </Button>
        </nav>
    );
}

export default Menu; 