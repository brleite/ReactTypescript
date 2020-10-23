import styled from 'styled-components';
import {shade} from 'polished';

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;

  margin-top: 80px;
  max-width: 450px;
  line-height: 56px;
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;

  display: flex; // Alinha os itens horizontalmente

  input {
    flex:1; // Faz com que o input ocupe todo o espaço disponível menos o tamanho do button
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #04d361;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #FFF;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover { // Equivalente a button:hover fora da seção do button. O & corresponde ao elemento atual em questão
      background: ${shade(0.2, '#04d361')}
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  /**
  Aplica o CSS sempre que um a for precedido por outro a. É últi quando se tem uma lista de elementos e se deseja
  aplicar o estilo somente do segundo em diante.
   */

  /* a + a {
    margin-top: 16px;
  } */

  a {
    background: #FFF;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;

    transition: transform 0.2s;

    /**
    Aplica o CSS sempre que um a for precedido por outro elemento do tipo do atual. É útil quando se tem uma lista de
    elementos e se deseja aplicar o estilo somente do segundo em diante.
   */
    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin-left: 16px;

      strong {
        font-size: 20px;
        color: #3D3D4D;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;

/* h1 {
} */
