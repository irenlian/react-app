import React from 'react';
import { render } from '~/testingUtils/testUtils';

import withSuspense from '../withSuspense';

describe('Hocs: Components', () => {
  describe('withSuspense', () => {
    it('renders the given componet properly', () => {
      const { getByText } = render(withSuspense(() => <h1>yolo</h1>)({}));
      expect(getByText('yolo')).toBeInTheDocument();
    });
  });
});
