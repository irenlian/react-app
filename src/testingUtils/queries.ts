import type { Matcher } from '@testing-library/react';
import { queryHelpers, waitFor } from '@testing-library/react';

export const queryByAltText = (container: any, id: Matcher, ...rest: any) =>
  queryHelpers.queryByAttribute('alt', container, id, ...rest);

export const queryAllByAltText = (container: any, id: Matcher, ...rest: any) =>
  queryHelpers.queryAllByAttribute('alt', container, id, ...rest);

export const getByAltText = (container: any, id: Matcher, ...rest: any) => {
  const result = queryByAltText(container, id, ...rest);
  if (!result) {
    throw queryHelpers.getElementError(`Unable to find an element by alt"${id}"]`, container);
  }
  return result;
};

export const getAllByAltText = (container: any, id: Matcher, ...rest: any) => {
  const result: any = queryAllByAltText(container, id, ...rest);
  if (!result || result.length === 0) {
    throw queryHelpers.getElementError(`Unable to find an element by alt"${id}"]`, container);
  }
  return result;
};

export const findAllByAltText = async (container: any, id: Matcher, ...rest: any) => {
  return waitFor(() => getAllByAltText(container, id, ...rest));
};

export const customQueries = {
  queryByAltText,
  queryAllByAltText,
  getByAltText,
  getAllByAltText,
  findAllByAltText,
};
