import * as React from "react";
import { BaseBallCard } from "../BaseBallCard";
import { useStoreContext } from "../../../hooks";

import styles from "./CardsDisplay.module.scss";
import { Button, Card } from "../../common";

export type CardsDisplayProps = {};

export const CardsDisplay: React.FunctionComponent<CardsDisplayProps> = React.memo(
  () => {
    const { state } = useStoreContext();
    const { cards } = state;

    return (
      <div className={styles.container}>
        {cards.map(card => {
          return <BaseBallCard card={card} key={card.id} />;
        })}
        <Card>
          <Button>Add New Card</Button>
        </Card>
        <div></div>
      </div>
    );
  }
);
