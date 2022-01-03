/* eslint-disable react/jsx-props-no-spreading */
import React, { Suspense } from 'react';
import LazyLoading from '~/shared/routeLoader';

const withSuspense = (Component: React.FunctionComponent<any>) => {
  return (props: any) => (
    <Suspense fallback={<LazyLoading />}>
      <Component {...props} />
    </Suspense>
  );
};

export default withSuspense;
