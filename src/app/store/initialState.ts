import { BaseBallCardType } from "../types";
import { ListCardsQuery } from "../../API";

export type AppStateType = {
  cards: ListCardsQuery;
};

export const initialState: AppStateType = { cards: {} as ListCardsQuery };
