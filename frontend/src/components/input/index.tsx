import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';

import { Container, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

// É preciso mudar o nome da variável para uma com a inicial maiúscula para que o react entenda que se trata de um
// componente que pode ser utilizado no formato de tag
const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  // Usado para acessar o componente diretamente. É possível acessar o elemento na DOM.
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  /**
   * Dessa forma, a function é recriada a cada renderização do componente. O ideal é utilizar o useCallback
   */
  /* function handleInputBlur() {
    setIsFocused(false);
  } */

  /**
   * A função só é recriada se algum item do array do segundo parâmetro for alterado
   */
  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    /* if (inputRef.current?.value) {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    } */

    setIsFilled(!!inputRef.current?.value);
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container isErrored={!!error} isFilled={isFilled} isFocused={isFocused}>
      {Icon && <Icon size={20} />}
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />
      {error && (
        <Error title={error}>
          <FiAlertCircle color="#c53030" />
        </Error>
      )}
    </Container>
  );
};

export default Input;
