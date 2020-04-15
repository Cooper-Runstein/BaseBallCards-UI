import * as React from "react";
import { StoreContext } from "../../../contexts";

export function useStoreContext() {
  try {
    return React.useContext(StoreContext);
  } catch (e) {
    throw new Error("Stote Context Must be Nested in a StateContext.Provider");
  }
}
