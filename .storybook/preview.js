import React from 'react';
import styled from 'styled-components';
import { addDecorator } from '@storybook/react';

import { createi18n } from '../src/i18n';

const Margin = styled.div`
  margin: 20px;
`;

createi18n('en');

addDecorator(storyFn => <Margin>{storyFn()}</Margin>);
