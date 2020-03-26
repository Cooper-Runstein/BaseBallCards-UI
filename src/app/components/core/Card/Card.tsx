import * as React from "react";

export type CardProps = {};

export const Card: React.FC<CardProps> = React.memo(({ children }) => (
  <div>{children}</div>
));
