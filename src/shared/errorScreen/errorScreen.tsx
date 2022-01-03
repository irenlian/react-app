import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

type Props = {
  onReload?: () => void;
};

const ErrorScreen: React.FC<Props> = ({ onReload }) => {
  const { t } = useTranslation();

  return (
    <Container>
      <h2>Error</h2>
      <button type="button" onClick={onReload}>
        Reload
      </button>
    </Container>
  );
};

export default ErrorScreen;

const Container = styled.div`
  display: grid;
  gap: 20px;
  grid-auto-rows: min-content;
  justify-items: center;
  align-content: center;
  height: 90vh;
  padding: 20px;
`;
