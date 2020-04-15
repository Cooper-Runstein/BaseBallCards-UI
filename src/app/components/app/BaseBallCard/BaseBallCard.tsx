import { Card } from "../../common";

import * as React from "react";
import { BaseBallCardType } from "../../../types";

import styles from "./BaseBallCard.module.scss";

export type BaseBallCardProps = { card: any };

export const BaseBallCard: React.FunctionComponent<BaseBallCardProps> = React.memo(
  ({ card }) => {
    return (
      <Card className={styles.container}>
        <img
          src="https://via.placeholder.com/143x200"
          alt={card.player.firstName}
        />
        <div className={styles.info}>
          <div className={styles.name}>
            {card.player.firstName} {card.player.lastName}
          </div>
          <div className={styles.card}>
            {card.company.name} {card.year}
          </div>
          <div className={styles.team}>{card.team.name}</div>
        </div>
      </Card>
    );
  }
);
