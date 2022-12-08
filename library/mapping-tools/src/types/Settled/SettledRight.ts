/**
 * The type SettledRight<T> extends PromiseFulfilledResult<T> adding
 * isometric parameters with PromiseRejectedResult and adding
 * Cardinal and Ordinal indexes.
 * @public
 */

export type SettledRight<T> = PromiseFulfilledResult<T> & {
  status: 'fulfilled';
  value: T;
  reason?: undefined;
  fulfilled: T;
  rejected: null;
  transformStep: number;
  currentRejection: null;
  index: number;
};
