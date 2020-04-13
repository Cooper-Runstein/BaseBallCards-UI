import { transformObjectByKey } from "./transformObjectByKey.util";

describe("transformObjectByKey", () => {
  it("transforms basic objects", () => {
    const obj = {
      key1: {
        subKey1: 5
      },
      key2: {
        subKey1: 6
      }
    };

    const actual = transformObjectByKey<{
      [key: string]: { [subKey: string]: number };
    }>(obj, value => value.subKey1);

    expect(actual.key1).toBe(5);
    expect(actual.key2).toBe(6);
  });
});
