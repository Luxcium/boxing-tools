import { OnlySideEffect, Settled } from '.';

/** @public */

/*

Mapper<T = any, U = unknown, A = T> = ;
= Mapper<T, Promise<U>, T | Settled<T>>;

 */
export interface TransformFn<T, U> {
  (value: T, index?: number, array?: readonly (T | Settled<T>)[]): Promise<U>;
}
/** @public */
export interface LookupFn<U> {
  (value: U, index: number): OnlySideEffect;
}
/** @public */
export interface ValidateFn<U> {
  (value: U, index: number): Promise<OnlySideEffect>;
}
/** @public  */
export interface ErrLookupFn {
  /**
   * @param  reason - The reason provided by the catch clause
   * inside the mapping routine.
   * @param index - The zero based index provided by map or
   * similarly an index provided by the mapping routine.
   * @param currentRejection - Flag that indicates if the exception
   * was hapening on the curent iteration of the mapping routine or
   * if it was part of a previously raised exception that was already
   * part of the item currently being mapped from the ptovided collection.
   * @returns Do not return any value is trigered syncrounously.
   */
  (reason: any, index: number, currentRejection: boolean): OnlySideEffect;
}

/** @public */
export interface MapperOptions<T, U> {
  item: T | Settled<T>;
  index: number;
  array?: (T | Settled<T>)[];
  transform: TransformFn<T, U>;
  lookup?: LookupFn<U>;
  validate?: ValidateFn<U>;
  errLookup?: ErrLookupFn;
}
