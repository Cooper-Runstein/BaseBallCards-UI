import * as React from "react";
import { AppStateType } from "../../store";

export type StoreContextType = {
  dispatch: any;
  state: AppStateType;
};

export const StoreContext = React.createContext({} as AppStateType);
