import * as React from "react";
import { BaseBallCard } from "../BaseBallCard";
import { useStoreContext } from "../../../hooks";

export type CardsDisplayProps = {};

export const CardsDisplay: React.FunctionComponent<CardsDisplayProps> = React.memo(
  () => {
    const { state } = useStoreContext();
    const { cards } = state;

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row"
        }}
      >
        {cards.map(card => {
          return <BaseBallCard card={card} key={card.id} />;
        })}
      </div>
    );
  }
);
