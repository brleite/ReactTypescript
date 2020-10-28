import React from 'react';
import { Image } from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';

// Não é preciso especificar o tamanho. Ele será automaticamente resolvido de acordo com a densidade de pixels do dispositivo
import logoImg from '../../assets/logo.png';

import { Container, Title } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logoImg} />

      <Title>Faça seu logon</Title>

      <Input name="email" icon="mail" placeholder="E-mail" />
      <Input name="password" icon="lock" placeholder="Senha" />

      <Button
        onPress={() => {
          console.log('Deu');
        }}
      >
        Entrar
      </Button>
    </Container>
  );
};

export default SignIn;
