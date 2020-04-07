import { camelCaseAllKeys } from "./camelCaseAllKeys.util";

describe("camelCaseAllKeys", () => {
  it("handles simple objects", () => {
    const obj = {
      "i-am-key": 2
    };

    const actual = camelCaseAllKeys(obj);
    expect(actual["iAmKey"]).toBe(2);
  });

  it("handles arrays", () => {
    const arr = [{ this_is_a_key: 4 }];

    const actual = camelCaseAllKeys(arr);
    expect(actual[0]["thisIsAKey"]).toBe(4);
  });

  it("handles complex objects", () => {
    const obj = {
      "funny_key-1": [{ iAmAKey: 3 }],
      hello: null
    };

    const actual = camelCaseAllKeys(obj);

    expect(actual["hello"]).toBe(null);
    expect(actual["funnyKey1"][0]["iAmAKey"]).toBe(3);
  });
});
