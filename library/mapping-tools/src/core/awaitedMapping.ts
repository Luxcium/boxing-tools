import { isPromiseLike } from '../helpers/assertions';
import {
  Collection,
  ErrLookupFn,
  LookupFn,
  TransformFn,
  ValidateFn,
} from '../types';
import { fn_a1f9a } from './function/fn_a1f9a';

/** @public */
export async function awaitedMapping<R, T>(
  collection: Collection<T> | PromiseLike<Collection<T>>,
  transform: TransformFn<T, R> = async value => value as any as R,
  lookup: LookupFn<T, R> = v => void v,
  validate: ValidateFn<T, R> = async v => void v,
  errLookup: ErrLookupFn = v => void v
) {
  const values = isPromiseLike(collection) ? await collection : collection;
  const result = [...values].map((item, index, array) =>
    fn_a1f9a({
      item,
      index,
      array,
      transform,
      lookup,
      validate,
      errLookup,
    })
  );
  return Promise.all(result);
}
