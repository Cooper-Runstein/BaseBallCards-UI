import * as React from "react";
import { AppStateType, Action } from "../../store";

export type StoreContextType = {
  dispatch: React.Dispatch<Action>;
  state: AppStateType;
};

export const StoreContext = React.createContext({} as StoreContextType);
