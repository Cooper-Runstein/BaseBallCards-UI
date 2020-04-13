export function transformObjectByKey<T>(
  object: { [key: string]: any },
  transformer: (value: any) => T
) {
  return Object.keys(object).reduce((acc, key) => {
    return { [key]: transformer(object[key] as any), ...acc } as T;
  }, {} as T);
}
