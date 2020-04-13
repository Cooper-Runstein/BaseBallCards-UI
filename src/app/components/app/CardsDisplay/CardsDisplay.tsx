import * as React from "react";

import { pick } from "ramda";

import { BaseBallCard } from "../BaseBallCard";
import { useStoreContext, useInputSet, InputSetConfig } from "../../../hooks";
import { Button, Card, Input } from "../../common";
import { transformObjectByKey } from "../../../utils";

import styles from "./CardsDisplay.module.scss";

const inputs: {
  [key: string]: {
    placeholder: string;
    validator: null | ((value: string) => boolean);
  };
} = {
  firstName: {
    placeholder: "First Name",
    validator: null
  },
  lastName: {
    placeholder: "Last Name",
    validator: null
  },
  year: {
    placeholder: "Year",
    validator: (y: string) => !!parseInt(y) || y === ""
  },
  companyName: {
    placeholder: "Company Name",
    validator: null
  }
};

export type CardsDisplayProps = {};

export const CardsDisplay: React.FunctionComponent<CardsDisplayProps> = React.memo(
  () => {
    const { state } = useStoreContext();
    const { cards } = state;

    const { callbacks, errors, reset, values } = useInputSet(
      transformObjectByKey<InputSetConfig>(inputs, pick(["validator"]))
    );

    const submit = () => {
      reset();
    };

    return (
      <div className={styles.container}>
        {cards.map(card => {
          return <BaseBallCard card={card} key={card.id} />;
        })}
        <Card className={styles.newCard}>
          {Object.keys(inputs).map(key => {
            return (
              <Input
                error={errors[key]}
                key={key}
                onChange={callbacks[key]}
                placeholder={inputs[key].placeholder}
                value={values[key]}
              />
            );
          })}
          <Button onClick={submit}>Add New Card</Button>
        </Card>
        <div></div>
      </div>
    );
  }
);
