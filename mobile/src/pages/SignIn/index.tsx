import React from 'react';
import { Image } from 'react-native';

import { Container } from './styles';

// Não é preciso especificar o tamanho. Ele será automaticamente resolvido de acordo com a densidade de pixels do dispositivo
import logoImg from '../../assets/logo.png';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logoImg} />
    </Container>
  );
};

export default SignIn;
