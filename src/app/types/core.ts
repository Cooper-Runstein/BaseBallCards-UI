export type BaseBallCardType = {
  id: string;
  player: PlayerType;
  team: TeamType;
  card: CardType;
};

type PlayerType = {
  firstName: string;
  lastName: string;
};

type TeamType = {
  id: string;
  name: string;
  city: string;
};

type CardType = {
  year: number;
  company: {
    name: string;
  };
};
