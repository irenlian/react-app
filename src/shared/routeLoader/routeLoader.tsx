import React from 'react';
import { useTranslation } from 'react-i18next';

import * as Locale from '~/locales/localeKeys';

import { Container } from './routeLoader.styled';

const RouteLoader: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <h3>{t(Locale.general.loading)}</h3>
    </Container>
  );
};

export default RouteLoader;
