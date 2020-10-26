import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

// Tipagem composta de outras tipagens. COmo não será nada extendido da ButtonHTMLAttribute, pode-se utilizar o type
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Container type="button" {...rest}>
    {children}
  </Container>
);

export default Button;
