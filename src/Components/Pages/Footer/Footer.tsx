import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../Assets/Logo.svg';
import { Container } from './style';

const Footer = () => {
  return (
    <Container>
      <Link to="/">
        <Logo className="logo" />
      </Link>
      <p>Alguns direitos reservados.</p>
    </Container>
  );
};

export default Footer;
