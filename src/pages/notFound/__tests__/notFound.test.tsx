import React from 'react';
import { render } from '~/testingUtils/testUtils';

import NotFound from '../index';

describe('Not Found: Component', () => {
  it('renders properly', () => {
    const { getByText } = render(<NotFound />);

    expect(getByText('404')).toBeInTheDocument();
  });
});
