import camelCase from "lodash/camelCase";

/**
 * Takes an object and return the same object with each key camelCased.
 * If the input is not an array or object, returns input.
 */
export function camelCaseAllKeys(obj: any): any {
  if (obj instanceof Array) {
    return obj.map(val => camelCaseAllKeys(val));
  }
  if (typeof obj === "object" && obj !== null) {
    const newObj: any = {};
    Object.keys(obj).forEach(key => {
      newObj[camelCase(key)] = camelCaseAllKeys(obj[key]);
    });
    return newObj;
  }
  return obj;
}
