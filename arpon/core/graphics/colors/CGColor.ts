/*
export type Opaque<K, T> = T & { __TYPE__: K };
type HexCode = Opaque<string, "HexCode">

const createHexCode = (str: string): HexCode => {
  // implementation that forces string to be hexCode
  return str.toString() as HexCode // casting is needed.
}
const test = createHexCode("#333");
const isAssignableString: string = test; // yes anything that is HexCode is still technically a string.
const isAssignableHexCode: HexCode = "standard string" // error
*/

/* export type UIColor = {
  readonly value: number;
  readonly hexString: string;
};

export class UIColor implements UIColor {
  readonly value;
  readonly _hexString;

  constructor(value: number) {
    this.value = value;
    this._hexString = value.toString(16);
    // yourNumber = parseInt(hexString, 16);
  }

  public get hexString(): string {
    return this._hexString;
  }
} */

export default class CGColor {}
