/* eslint-disable no-console */
import React from 'react';
import { render, fireEvent } from '~/testingUtils/testUtils';

import ErrorBoundary from '../errorBoundary';

const TestComponent: React.FC<{ shouldThrow?: boolean }> = ({ shouldThrow = false }) => {
  if (shouldThrow) {
    throw new Error('unexpected error');
  } else {
    return <div>Test Component content</div>;
  }
};

describe('ErrorBoundary', () => {
  beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  test('renders that there was a problem', () => {
    const { getByText, rerender } = render(
      <ErrorBoundary>
        <TestComponent />
      </ErrorBoundary>,
    );

    rerender(
      <ErrorBoundary>
        <TestComponent shouldThrow />
      </ErrorBoundary>,
    );

    expect(getByText('Reload')).toBeVisible();
    expect(console.error).toHaveBeenCalledTimes(2);
  });

  test('recovers to initial state when Reload is clicked', () => {
    const { queryByText, getByText, rerender } = render(
      <ErrorBoundary>
        <TestComponent shouldThrow />
      </ErrorBoundary>,
    );

    expect(console.error).toHaveBeenCalledTimes(2);
    jest.clearAllMocks();

    rerender(
      <ErrorBoundary>
        <TestComponent />
      </ErrorBoundary>,
    );

    fireEvent.click(getByText('Reload'));

    expect(console.error).not.toHaveBeenCalled();
    expect(queryByText(/something went wrong/i)).not.toBeInTheDocument();
    expect(getByText(/Test Component content/i)).toBeVisible();
  });
});
