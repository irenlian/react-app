import React from 'react';
import { render } from '~/testingUtils/testUtils';
import Home from '../index';

describe('Home: Components', () => {
  it('renders properly', () => {
    const { getByText } = render(<Home />);

    expect(getByText('Dashboard')).toBeInTheDocument();
  });
});
