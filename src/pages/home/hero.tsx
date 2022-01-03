import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import * as Locale from '~/locales/localeKeys';

const HeroDiv = styled.div``;

const Hero = () => {
  const { t } = useTranslation();
  return (
    <HeroDiv>
      <h1>{t(Locale.hero.title)}</h1>
    </HeroDiv>
  );
};

export default Hero;
