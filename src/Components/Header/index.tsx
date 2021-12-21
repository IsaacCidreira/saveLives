import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './style';
import { ReactComponent as Logo } from '../../Assets/Logo.svg';

const Header = () => {
  return (
    <Container>
      <nav>
        <Link to="/">
          <Logo className="logo" />
        </Link>
        <Link className="contato" to="/contato">
          <h1>CONTATO</h1>
        </Link>
      </nav>
    </Container>
  );
};

export default Header;
