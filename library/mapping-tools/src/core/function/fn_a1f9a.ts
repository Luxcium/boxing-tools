import { assertions } from '../../helpers';
import { getTransformStep } from '../../helpers/tools';
import { MapperOptions } from '../../types';
import { fulfillementBlock } from './fulfillementBlock';
import { makeRejection } from './makeRejection';
const {
  isPromiseFulfilledResult,
  isPromiseRejectedResult,
  isPromiseSettledResult,
} = assertions;

/** @internal */
export async function fn_a1f9a<T, R>({
  item,
  index,
  array,
  transform = async value => value as any as R,
  lookup = (value, index, array) => void [value, index, array],
  validate = async (value, index, array) => void [value, index, array],
  errLookup = (value, index, currentRejection) =>
    void [value, index, currentRejection],
}: MapperOptions<T, R>) {
  const transformStep = getTransformStep(item);

  try {
    if (!isPromiseSettledResult(item) || isPromiseFulfilledResult(item)) {
      return await fulfillementBlock<T, R>(
        item,
        index,
        array,
        transformStep,
        transform,
        lookup,
        validate
      );
    }
    if (isPromiseRejectedResult(item)) {
      const { reason } = item;
      errLookup(reason, index, false);
      return makeRejection({ reason, index, currentRejection: false });
    }
    /* istanbul ignore next */
    throw new TypeError(
      `NEVER: item (${item}) is not assignable to type 'never'`
    );
  } catch (reason) {
    errLookup(reason, index, true);
    return makeRejection({ reason, index, currentRejection: true });
  }
}

/* istanbul ignore next */
export async function fn_a1f9a_TEST_() {
  console.log(`at: fn_a1f9a_TEST_ from ${__filename}`);

  console.log(
    await fn_a1f9a({
      item: 10,
      index: 0,
      array: [10],
      transform: async item => item,
      lookup: item => console.log(item),
      validate: async value => {
        if (value === 10) throw value;
      },
      errLookup: async reason => void reason,
    })
  );

  console.log(
    await fn_a1f9a({
      item: 10,
      index: 0,
      array: [10],
      transform: async item => item * 10,
    })
  );

  return void 0;
}

// fn_a1f9a_TEST_();
