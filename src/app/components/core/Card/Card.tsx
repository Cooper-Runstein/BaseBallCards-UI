import * as React from "react";

import styles from "./Card.module.scss";

export type CardProps = {};

export const Card: React.FC<CardProps> = React.memo(({ children }) => (
  <div className={styles.container}>{children}</div>
));
