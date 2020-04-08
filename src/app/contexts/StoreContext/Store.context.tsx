import * as React from "react";

export type StoreContextType = {
  dispatch: any;
  state: any;
};

export const StoreContext = React.createContext({});
