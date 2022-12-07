import {
  Collection,
  ErrLookupFn,
  LookupFn, TransformFn,
  ValidateFn
} from '../types';
import { fn_a1f9a } from './function/fn_a1f9a';

/** @public */
export   function* generateMapping<T, R>(
  collection: Collection<T>  ,
  transform: TransformFn<T, R> = async value => value as any as R,
  lookup: LookupFn<T, R> = v => void v,
  validate: ValidateFn<T, R> = async v => void v,
  errLookup: ErrLookupFn = v => void v
)   {
  let index = 0;
  for (const item of collection) {
    yield fn_a1f9a({
      item,
      index: index++,
      array: [...collection],
      transform,
      validate,
      errLookup,
      lookup,
    });
  }
}
