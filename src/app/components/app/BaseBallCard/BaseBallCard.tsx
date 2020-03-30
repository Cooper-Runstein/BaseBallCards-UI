import { Card } from "../../core";

import * as React from "react";
import { BaseBallCardType } from "../../../types";

export type BaseBallCardProps = { card: BaseBallCardType };

export const BaseBallCard: React.FunctionComponent<BaseBallCardProps> = React.memo(
  ({ card }) => (
    <Card>
      <div>{card.player.firstName}</div>
    </Card>
  )
);
