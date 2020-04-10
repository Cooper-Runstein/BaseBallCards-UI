import { BaseBallCardType } from "../types";

export type AppStateType = {
  cards: BaseBallCardType[];
};

export const initialState: AppStateType = { cards: [] };
