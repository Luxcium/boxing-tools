import { paralellMapping } from './paralellMapping';

/* istanbul ignore next */

export async function paralellMapping_TEST_() {
  console.log(`at: paralellMapping_TEST_ from ${__filename}`);
  console.log(await Promise.all(paralellMapping([{ item: 10 }])));
  return void 0;
}
