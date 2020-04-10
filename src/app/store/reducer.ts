import { produce } from "immer";
import { AppStateType } from "./initialState";
import { BaseBallCardType } from "../types";

export enum ActionType {
  SET_CARDS = "set_cards"
}

type ActionSetCardsData = { cards: BaseBallCardType[] };

export type Action = {
  type: ActionType.SET_CARDS;
  data: ActionSetCardsData;
};

export const reducer = (state: AppStateType, action: Action): AppStateType => {
  return produce(state, draft => {
    switch (action.type) {
      case ActionType.SET_CARDS: {
        draft.cards = action.data.cards;
        return draft;
      }
      default:
        return draft;
    }
  });
};
