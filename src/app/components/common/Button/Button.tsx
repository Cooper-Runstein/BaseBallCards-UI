import * as React from "react";

import styles from "./Button.module.scss";

export type ButtonProps = { onClick: () => void };

export const Button: React.FunctionComponent<ButtonProps> = React.memo(
  ({ children, onClick }) => (
    <button className={styles.container} onClick={onClick}>
      {children}
    </button>
  )
);
