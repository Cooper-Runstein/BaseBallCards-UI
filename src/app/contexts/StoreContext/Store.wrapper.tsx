import * as React from "react";
import { StoreContext } from "./Store.context";
import { initialState, reducer } from "../../store";

export type StoreWrapperProps = {};

export const StoreContextWrapper: React.FunctionComponent<StoreWrapperProps> = React.memo(
  ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    return (
      <StoreContext.Provider value={{ dispatch, state }}>
        {children}
      </StoreContext.Provider>
    );
  }
);
