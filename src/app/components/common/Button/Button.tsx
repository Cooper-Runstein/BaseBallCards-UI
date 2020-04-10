import * as React from "react";

import styles from "./Button.module.scss";

export type ButtonProps = {};

export const Button: React.FunctionComponent<ButtonProps> = React.memo(
  ({ children }) => <button className={styles.container}>{children}</button>
);
