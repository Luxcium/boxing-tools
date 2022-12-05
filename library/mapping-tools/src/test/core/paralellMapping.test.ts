import { paralellMapping } from '../../core/paralellMapping';

describe('Sanity check Level 1', () => {
  it('Should pass the smoke test paralellMapping_TEST_', async () => {
    expect(await Promise.all(paralellMapping([{ item: 10 }]))).toStrictEqual([
      {
        currentRejection: null,
        index: 0,
        transformStep: 1,
        rejected: null,
        status: 'fulfilled',
        value: { item: 10 },
      },
    ]);
  });
});
describe('paralellMapping', () => {
  it('Should survive when throwing', async () => {
    const result = paralellMapping([{ size: 10 }], async obj => {
      if (obj.size === 10) throw ['test'];
    });
    const expected = {
      currentRejection: true,
      fulfilled: null,
      index: 0,
      reason: ['test'],
      status: 'rejected',
      transformStep: 0,
    };
    result.map(async item => expect(await item).toStrictEqual(expected));
  });
});
