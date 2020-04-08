import { produce } from "immer";
import { AppStateType } from "./initialState";

export type Action = {
  type: string;
  data: any;
};

export const reducer = (state: AppStateType, action: Action) => {
  return produce(state, (draft: any) => {
    return draft;
  });
};
