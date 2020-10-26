import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

// É preciso mudar o nome da variável para uma com a inicial maiúscula para que o react entenda que se trata de um
// componente que pode ser utilizado no formato de tag
const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  // Usado para acessar o componente diretamente. É possível acessar o elemento na DOM.
  const inputRef = useRef(null);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input defaultValue={defaultValue} ref={inputRef} {...rest} />
    </Container>
  );
};

export default Input;
