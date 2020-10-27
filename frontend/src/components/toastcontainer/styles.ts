import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 30px;

  // Tudo que ultrapassar os limites do container não será exibido
  overflow: hidden;
`;
