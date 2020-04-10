import * as React from "react";
import cn from "classnames";

import styles from "./Card.module.scss";

export type CardProps = {
  className: string;
};

export const Card: React.FC<CardProps> = React.memo(
  ({ className, children }) => (
    <div className={cn(styles.container, className)}>{children}</div>
  )
);
