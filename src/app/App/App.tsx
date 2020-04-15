import React from "react";

import Amplify from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react";
import aws_exports from "../../aws-exports";

import { StoreContextWrapper } from "../contexts";
import { useInitializeApp } from "../hooks/useInitializeApp";

import { CardsDisplay } from "../components/app/CardsDisplay/CardsDisplay";

import styles from "./App.module.scss";
Amplify.configure(aws_exports);

const ContextWrappers: React.FC = ({ children }) => {
  return <StoreContextWrapper>{children}</StoreContextWrapper>;
};

const StoreInitializer: React.FC = ({ children }) => {
  useInitializeApp();
  return <>{children}</>;
};

function BaseApp() {
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

export const App = withAuthenticator(BaseApp);
