export type BaseBallCardType = {
  id: string;
  player: PlayerType;
  team: TeamType;
} & CardType;

type PlayerType = {
  firstName: string;
  lastName: string;
};

type TeamType = {
  name: string;
};

type CardType = {
  year: number;
  company: {
    name: string;
  };
};
