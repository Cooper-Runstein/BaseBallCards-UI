import { produce } from "immer";
import { AppStateType } from "./initialState";
import { BaseBallCardType } from "../types";
import { ListCardsQuery } from "../../API";

export enum ActionType {
  SET_CARDS = "set_cards"
}

export type Action = {
  type: ActionType.SET_CARDS;
  data: ListCardsQuery;
};

export const reducer = (state: AppStateType, action: Action): AppStateType => {
  return produce(state, draft => {
    switch (action.type) {
      case ActionType.SET_CARDS: {
        draft.cards = action.data;
        return draft;
      }
      default:
        return draft;
    }
  });
};
