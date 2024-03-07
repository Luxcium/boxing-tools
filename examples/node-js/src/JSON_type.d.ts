export {};
export declare type EmptyObject = `{ }`;
export declare type EmptyArray = `[ ]`;
export declare type Coma = `,`;
export declare type JsonString = `"${string}"`;
export declare type JsonNumber = `${number}`;
export declare type escape = '"' | '\\' | '/' | 'b' | 'f' | 'n' | 'r' | 't';
export declare type uHex = `u${Hex | digit}${Hex | digit}${Hex | digit}${Hex | digit}`;
export declare type uHEX = `u${HEX | digit}${HEX | digit}${HEX | digit}${HEX | digit}`;
export declare type hex = uHex | uHEX;
export declare type U1 = `u${Hex}`;
export declare type U2 = `${U1}${Hex}`;
export declare type U3 = `${U2}${Hex}`;
export declare type Hex = 'a' | 'b' | 'c' | 'd' | 'e' | 'f';
export declare type HEX = 'A' | 'B' | 'C' | 'D' | 'E' | 'F';
export declare type digit = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
