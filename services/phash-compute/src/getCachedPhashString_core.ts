import { RedisClientType } from 'redis';
import type {
  DebugFlag,
  ImageFilePathWithExpectedStats,
  ImageFileWithPHashString,
} from './types';

import { mixBases, mixExpected } from '@luxcium/object-with-expectations';
import { getBigStrPHashFromFile } from './getBigStrPHashFromFile';
import { pHashGetLookUp } from './pHashGetLookUp';
import { redisSetK } from './redisSetK';
// import { WithPHashString } from './types/ImageFileWithPHashString';
/**
 *
 * @param R
 * @param debug
 * @returns The same object T passed in to wich will be added the newly
 * calculated or lokedUp pHashString and if available the redis key
 *
 * In order to use this utility service you must pass a R redis client and an optional debug flag
 * The debug flag is of type  "debug" or verbose" / null or false.
 *
 * You will have a computer with caching system to get the fom an object containinng a compatibleImagefilePath string key
 * @remarks
 */
export function getCachedPhashString_core(
  R: RedisClientType | null = null,
  debug: DebugFlag = null
) {
  return async <T extends ImageFilePathWithExpectedStats>(
    imageFilePath: T
  ): Promise<T & ImageFileWithPHashString> => {
    const { compatibleImagefilePath } = imageFilePath;
    const pathObj = {
      path: compatibleImagefilePath,
    };

    // Without RedisClient no need to look into the cache
    if (!R) {
      const bigStr = await getBigStrPHashFromFile(pathObj.path);
      const pHashString = bigStr;
      const pHashMethod = 'direct';
      const lookup = { pHashString, pHashMethod };

      return {
        ...mixBases<any, any, any, any>(imageFilePath, lookup), //
        ...mixExpected<any, any>(imageFilePath, lookup),
      };
      // return { ...joinPhashExpected(imageFilePath,  {pHashString, pHashMethod}) };
    }

    // Lookup if available from inside the cache
    const lookUP = await pHashGetLookUp(R, pathObj.path);
    const { pHashString } = lookUP;

    // if LookUP is positive (not false and not emptystring)
    if (pHashString !== false && pHashString !== '') {
      !!debug && console.warn(`lookUP:`, lookUP);

      // Then return from cache
      return {
        ...mixBases<any, any, any, any>(imageFilePath, lookUP), //
        ...mixExpected<any, any>(imageFilePath, lookUP),
      };
    } else {
      // Else calculate the value
      const bigStr = await getBigStrPHashFromFile(pathObj.path);

      // If the calculated string is not an empty string
      if (bigStr !== '') {
        // And if we can set it into the cache
        if (await redisSetK(R, pathObj.path, bigStr)) {
          !!debug && console.warn(`computed: ${bigStr}`);

          // Return the newly calculated value
          const pHashString = bigStr;
          const pHashMethod = 'cached';
          const lookup = { pHashString, pHashMethod };

          return {
            ...mixBases<any, any, any, any>(imageFilePath, lookup), //
            ...mixExpected<any, any>(imageFilePath, lookup),
          };
        }
      }
      !!debug &&
        console.error(
          `Error (can't compute phashString): '<empty string>'`,
          pathObj
        );

      // Return the newly calculated value

      const pHashString = bigStr;
      const pHashMethod = null;
      const lookup = { pHashString, pHashMethod };

      return {
        ...mixBases<any, any, any, any>(imageFilePath, lookup), //
        ...mixExpected<any, any>(imageFilePath, lookup),
      };
    }
  };
}

// function joinPhashString<
//   T extends Omit<any, 'expected'>,
//   U extends Omit<any, 'expected'>
// >(imageFilePath: T, lookup: U) {
//   return {
//     ...mixBases<any, any, T, typeof lookup>(imageFilePath, lookup),
//   };
// }

//  function joinPhashExpected<
//   T extends { expected: object },
//   U extends { expected: object }
// >(
//   imageFilePath: T,
//   lookup: U
//   // pHashString: string,
//   // pHashMethod: string | null
// ) {
//   const bases = joinPhashString(imageFilePath, lookup);

//   return {
//     ...bases, //  ...mixBases
//     ...mixExpected(imageFilePath, lookup),
//   };
// }

/*
     const bases = joinPhashString(imageFilePath, bigStr, 'direct');
      return { ...bases, ...joinPhashExpected(imageFilePath) };
 */
