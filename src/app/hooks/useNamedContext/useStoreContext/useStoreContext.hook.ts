import * as React from "react";
import { StoreContext } from "../../../contexts";

export function useStoreContext() {
  try {
    const x = React.useContext(StoreContext);
    console.log({ x });
    return x;
  } catch (e) {
    throw new Error("Stote Context Must be Nested in a StateContext.Provider");
  }
}
