import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface ContainerProps {
  type?: 'success' | 'error' | 'info';
  hasDescription: boolean;
}

const toastTypeVariations = {
  info: css`
    background: #ebf8ff;
    color: #3172b7;
  `,
  success: css`
    background: #e6fffa;
    color: #2e656a;
  `,
  error: css`
    background: #fddede;
    color: #c53030;
  `,
};

export const Container = styled(animated.div)<ContainerProps>`
  width: 300px;

  // Útil quando se tem um position absolute dentro dele
  position: relative;

  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  display: flex;

  & + div {
    margin-top: 8px;
  }

  background: #ebf8ff;
  color: #3172b7;

  /**
   * Muitas condicionais. Faremos de outro jeito.
   */
  /* ${props =>
    props.type === 'success' &&
    css`
      background: #e6fffa;
      color: #2e656a;
    `}

  ${props =>
    props.type === 'error' &&
    css`
      background: #fddede;
      color: #c53030;
    `} */

  ${props => toastTypeVariations[props.type || 'info']}

  // Ícone que está diretamente dentro do toast. Não pega o ícone dentro do button.
  > svg {
    margin: 4px 12px 0px 0px;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 16px;
    top: 19px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  }

  ${props =>
    !props.hasDescription &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}
`;
