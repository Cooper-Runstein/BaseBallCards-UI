import React from "react";

import { BaseBallCardType } from "../types";
import { BaseBallCard } from "../components/app";

import styles from "./App.module.scss";

const cards: { [id: string]: BaseBallCardType } = {
  "123": {
    id: "123",
    player: {
      firstName: "Derek",
      lastName: "Jeter"
    },
    team: {
      id: "NYY",
      name: "Yankees",
      city: "New York"
    },
    card: {
      year: 2011,
      company: {
        name: "Topps"
      }
    }
  }
};

export function App() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2>Baseball Card App</h2>
      </header>
      <div
        style={{
          display: "flex",
          flexDirection: "row"
        }}
      >
        {Object.values(cards).map(card => {
          return <BaseBallCard card={card} />;
        })}
      </div>
    </div>
  );
}
