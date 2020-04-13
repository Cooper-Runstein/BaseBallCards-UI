import * as React from "react";
import { isNull } from "util";

export type InputSetConfig = {
  [key: string]: {
    validator: ((input: any) => boolean) | null;
  };
};

export type Errors = {
  [key: string]: boolean;
};

export type Values = {
  [key: string]: string;
};

export type Callbacks = {
  [key: string]: (value: string) => void;
};

export function useInputSet(config: InputSetConfig) {
  const [values, setValues] = React.useState({} as Values);
  const [errors, setErrors] = React.useState({} as Errors);

  const setValueAtKey = (key: string) => (value: string) =>
    setValues({ ...values, [key]: value });

  const setAllValuesToEmpty = () => {
    const computedValues = Object.keys(config).reduce((acc, key) => {
      return { [key]: "", ...acc };
    }, {} as Values);

    setValues(computedValues);
  };

  /**
   * Sets all initial values to ""
   */
  React.useEffect(setAllValuesToEmpty, []);

  return {
    callbacks: Object.keys(config).reduce((acc, key) => {
      return {
        [key]: value => {
          const { validator } = config[key];
          if (!isNull(validator) && !validator(value)) {
            setErrors({
              ...errors,
              [key]: true
            });
          } else {
            if (errors[key]) setErrors({ ...errors, [key]: false });
            setValueAtKey(key)(value);
          }
        },
        ...acc
      };
    }, {} as Callbacks),
    errors,
    reset: setAllValuesToEmpty,
    values
  };
}
