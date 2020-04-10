import React from "react";

import { BaseBallCardType } from "../types";
import { StoreContextWrapper } from "../contexts";

import styles from "./App.module.scss";
import { useInitializeApp } from "../hooks/useInitializeApp";
import { CardsDisplay } from "../components/app/CardsDisplay/CardsDisplay";

const cards: { [id: string]: BaseBallCardType } = {
  "123": {
    id: "123",
    player: {
      firstName: "Derek",
      lastName: "Jeter"
    },
    team: {
      name: "New York Yankees"
    },
    year: 2011,
    company: {
      name: "Topps"
    }
  },
  "124": {
    id: "124",
    player: {
      firstName: "Mookie",
      lastName: "Betts"
    },
    team: {
      name: "Boston Red Sox"
    },

    year: 2019,
    company: {
      name: "Topps"
    }
  }
};

const initializeApp = async () => {};

const ContextWrappers: React.FC = ({ children }) => {
  return <StoreContextWrapper>{children}</StoreContextWrapper>;
};

const StoreInitializer: React.FC = ({ children }) => {
  useInitializeApp();
  return <>{children}</>;
};

export function App() {
  return (
    <ContextWrappers>
      <StoreInitializer>
        <div className={styles.container}>
          <header className={styles.header}>
            <h2>Baseball Card App</h2>
          </header>
          <CardsDisplay />
        </div>
      </StoreInitializer>
    </ContextWrappers>
  );
}
