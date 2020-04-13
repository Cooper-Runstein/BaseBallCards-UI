import * as React from "react";
import classnames from "classnames";

import styles from "./Input.module.scss";

export type InputProps = {
  error: boolean;
  placeholder: string;
  onChange: (value: string) => void;
  value: string;
};

export const Input: React.FunctionComponent<InputProps> = React.memo(
  ({ error, placeholder, onChange, value }) => (
    <input
      className={classnames(styles.container, { [styles.error]: error })}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      value={value}
    />
  )
);
