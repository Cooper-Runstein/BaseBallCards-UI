import * as React from "react";
import { StoreContext } from "./Store.context";

export type StoreWrapperProps = {};

const initialState = {};

export const StoreContextWrapper: React.FunctionComponent<StoreWrapperProps> = React.memo(
  ({ children }) => {
    const [state, dispatch] = React.useReducer(x => x, initialState);
    return (
      <StoreContext.Provider value={{ dispatch, state }}>
        {children}
      </StoreContext.Provider>
    );
  }
);
