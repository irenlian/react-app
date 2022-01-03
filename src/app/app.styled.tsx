import styled from 'styled-components';

export const Container = styled.div<{ direction: 'row' | 'column' }>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  max-height: 100vh;
`;

export const MainContainer = styled.div`
  overflow-y: auto;
  flex: 1;
  position: relative;
`;
