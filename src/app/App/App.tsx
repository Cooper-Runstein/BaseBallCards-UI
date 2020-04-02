import React from "react";

import { BaseBallCardType } from "../types";
import { BaseBallCard } from "../components/app";

import styles from "./App.module.scss";
import { apiRequest, RequestMethod, EndPoints } from "../service";

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
  },
  "124": {
    id: "124",
    player: {
      firstName: "Mookie",
      lastName: "Betts"
    },
    team: {
      id: "BOS",
      name: "Red Sox",
      city: "Boston"
    },
    card: {
      year: 2019,
      company: {
        name: "Topps"
      }
    }
  }
};

const initializeApp = async () => {
  const result = await apiRequest({
    method: RequestMethod.GET,
    endpoint: EndPoints.BASE_BALL_CARDS
  });

  console.log({ result });
};

export function App() {
  React.useEffect(() => {
    initializeApp();
  });

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
