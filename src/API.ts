/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCardInput = {
  id?: string | null,
  year: string,
  playerID: string,
  teamID: string,
  companyID: string,
};

export type ModelCardConditionInput = {
  year?: ModelStringInput | null,
  playerID?: ModelIDInput | null,
  teamID?: ModelIDInput | null,
  companyID?: ModelIDInput | null,
  and?: Array< ModelCardConditionInput | null > | null,
  or?: Array< ModelCardConditionInput | null > | null,
  not?: ModelCardConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateCardInput = {
  id: string,
  year?: string | null,
  playerID?: string | null,
  teamID?: string | null,
  companyID?: string | null,
};

export type DeleteCardInput = {
  id?: string | null,
};

export type CreatePlayerInput = {
  id?: string | null,
  firstName: string,
  lastName: string,
};

export type ModelPlayerConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  and?: Array< ModelPlayerConditionInput | null > | null,
  or?: Array< ModelPlayerConditionInput | null > | null,
  not?: ModelPlayerConditionInput | null,
};

export type UpdatePlayerInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
};

export type DeletePlayerInput = {
  id?: string | null,
};

export type CreateTeamInput = {
  id?: string | null,
  name: string,
  city: string,
};

export type ModelTeamConditionInput = {
  name?: ModelStringInput | null,
  city?: ModelStringInput | null,
  and?: Array< ModelTeamConditionInput | null > | null,
  or?: Array< ModelTeamConditionInput | null > | null,
  not?: ModelTeamConditionInput | null,
};

export type UpdateTeamInput = {
  id: string,
  name?: string | null,
  city?: string | null,
};

export type DeleteTeamInput = {
  id?: string | null,
};

export type CreateCompanyInput = {
  id?: string | null,
  name: string,
};

export type ModelCompanyConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelCompanyConditionInput | null > | null,
  or?: Array< ModelCompanyConditionInput | null > | null,
  not?: ModelCompanyConditionInput | null,
};

export type UpdateCompanyInput = {
  id: string,
  name?: string | null,
};

export type DeleteCompanyInput = {
  id?: string | null,
};

export type ModelCardFilterInput = {
  id?: ModelIDInput | null,
  year?: ModelStringInput | null,
  playerID?: ModelIDInput | null,
  teamID?: ModelIDInput | null,
  companyID?: ModelIDInput | null,
  and?: Array< ModelCardFilterInput | null > | null,
  or?: Array< ModelCardFilterInput | null > | null,
  not?: ModelCardFilterInput | null,
};

export type ModelPlayerFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  and?: Array< ModelPlayerFilterInput | null > | null,
  or?: Array< ModelPlayerFilterInput | null > | null,
  not?: ModelPlayerFilterInput | null,
};

export type ModelTeamFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  city?: ModelStringInput | null,
  and?: Array< ModelTeamFilterInput | null > | null,
  or?: Array< ModelTeamFilterInput | null > | null,
  not?: ModelTeamFilterInput | null,
};

export type ModelCompanyFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelCompanyFilterInput | null > | null,
  or?: Array< ModelCompanyFilterInput | null > | null,
  not?: ModelCompanyFilterInput | null,
};

export type CreateCardMutationVariables = {
  input: CreateCardInput,
  condition?: ModelCardConditionInput | null,
};

export type CreateCardMutation = {
  createCard:  {
    __typename: "Card",
    id: string,
    year: string,
    playerID: string,
    teamID: string,
    companyID: string,
    player:  {
      __typename: "Player",
      id: string,
      firstName: string,
      lastName: string,
    } | null,
    team:  {
      __typename: "Team",
      id: string,
      name: string,
      city: string,
    } | null,
    company:  {
      __typename: "Company",
      id: string,
      name: string,
    } | null,
  } | null,
};

export type UpdateCardMutationVariables = {
  input: UpdateCardInput,
  condition?: ModelCardConditionInput | null,
};

export type UpdateCardMutation = {
  updateCard:  {
    __typename: "Card",
    id: string,
    year: string,
    playerID: string,
    teamID: string,
    companyID: string,
    player:  {
      __typename: "Player",
      id: string,
      firstName: string,
      lastName: string,
    } | null,
    team:  {
      __typename: "Team",
      id: string,
      name: string,
      city: string,
    } | null,
    company:  {
      __typename: "Company",
      id: string,
      name: string,
    } | null,
  } | null,
};

export type DeleteCardMutationVariables = {
  input: DeleteCardInput,
  condition?: ModelCardConditionInput | null,
};

export type DeleteCardMutation = {
  deleteCard:  {
    __typename: "Card",
    id: string,
    year: string,
    playerID: string,
    teamID: string,
    companyID: string,
    player:  {
      __typename: "Player",
      id: string,
      firstName: string,
      lastName: string,
    } | null,
    team:  {
      __typename: "Team",
      id: string,
      name: string,
      city: string,
    } | null,
    company:  {
      __typename: "Company",
      id: string,
      name: string,
    } | null,
  } | null,
};

export type CreatePlayerMutationVariables = {
  input: CreatePlayerInput,
  condition?: ModelPlayerConditionInput | null,
};

export type CreatePlayerMutation = {
  createPlayer:  {
    __typename: "Player",
    id: string,
    firstName: string,
    lastName: string,
  } | null,
};

export type UpdatePlayerMutationVariables = {
  input: UpdatePlayerInput,
  condition?: ModelPlayerConditionInput | null,
};

export type UpdatePlayerMutation = {
  updatePlayer:  {
    __typename: "Player",
    id: string,
    firstName: string,
    lastName: string,
  } | null,
};

export type DeletePlayerMutationVariables = {
  input: DeletePlayerInput,
  condition?: ModelPlayerConditionInput | null,
};

export type DeletePlayerMutation = {
  deletePlayer:  {
    __typename: "Player",
    id: string,
    firstName: string,
    lastName: string,
  } | null,
};

export type CreateTeamMutationVariables = {
  input: CreateTeamInput,
  condition?: ModelTeamConditionInput | null,
};

export type CreateTeamMutation = {
  createTeam:  {
    __typename: "Team",
    id: string,
    name: string,
    city: string,
  } | null,
};

export type UpdateTeamMutationVariables = {
  input: UpdateTeamInput,
  condition?: ModelTeamConditionInput | null,
};

export type UpdateTeamMutation = {
  updateTeam:  {
    __typename: "Team",
    id: string,
    name: string,
    city: string,
  } | null,
};

export type DeleteTeamMutationVariables = {
  input: DeleteTeamInput,
  condition?: ModelTeamConditionInput | null,
};

export type DeleteTeamMutation = {
  deleteTeam:  {
    __typename: "Team",
    id: string,
    name: string,
    city: string,
  } | null,
};

export type CreateCompanyMutationVariables = {
  input: CreateCompanyInput,
  condition?: ModelCompanyConditionInput | null,
};

export type CreateCompanyMutation = {
  createCompany:  {
    __typename: "Company",
    id: string,
    name: string,
  } | null,
};

export type UpdateCompanyMutationVariables = {
  input: UpdateCompanyInput,
  condition?: ModelCompanyConditionInput | null,
};

export type UpdateCompanyMutation = {
  updateCompany:  {
    __typename: "Company",
    id: string,
    name: string,
  } | null,
};

export type DeleteCompanyMutationVariables = {
  input: DeleteCompanyInput,
  condition?: ModelCompanyConditionInput | null,
};

export type DeleteCompanyMutation = {
  deleteCompany:  {
    __typename: "Company",
    id: string,
    name: string,
  } | null,
};

export type GetCardQueryVariables = {
  id: string,
};

export type GetCardQuery = {
  getCard:  {
    __typename: "Card",
    id: string,
    year: string,
    playerID: string,
    teamID: string,
    companyID: string,
    player:  {
      __typename: "Player",
      id: string,
      firstName: string,
      lastName: string,
    } | null,
    team:  {
      __typename: "Team",
      id: string,
      name: string,
      city: string,
    } | null,
    company:  {
      __typename: "Company",
      id: string,
      name: string,
    } | null,
  } | null,
};

export type ListCardsQueryVariables = {
  filter?: ModelCardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCardsQuery = {
  listCards:  {
    __typename: "ModelCardConnection",
    items:  Array< {
      __typename: "Card",
      id: string,
      year: string,
      playerID: string,
      teamID: string,
      companyID: string,
      player:  {
        __typename: "Player",
        id: string,
        firstName: string,
        lastName: string,
      } | null,
      team:  {
        __typename: "Team",
        id: string,
        name: string,
        city: string,
      } | null,
      company:  {
        __typename: "Company",
        id: string,
        name: string,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetPlayerQueryVariables = {
  id: string,
};

export type GetPlayerQuery = {
  getPlayer:  {
    __typename: "Player",
    id: string,
    firstName: string,
    lastName: string,
  } | null,
};

export type ListPlayersQueryVariables = {
  filter?: ModelPlayerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlayersQuery = {
  listPlayers:  {
    __typename: "ModelPlayerConnection",
    items:  Array< {
      __typename: "Player",
      id: string,
      firstName: string,
      lastName: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetTeamQueryVariables = {
  id: string,
};

export type GetTeamQuery = {
  getTeam:  {
    __typename: "Team",
    id: string,
    name: string,
    city: string,
  } | null,
};

export type ListTeamsQueryVariables = {
  filter?: ModelTeamFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTeamsQuery = {
  listTeams:  {
    __typename: "ModelTeamConnection",
    items:  Array< {
      __typename: "Team",
      id: string,
      name: string,
      city: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetCompanyQueryVariables = {
  id: string,
};

export type GetCompanyQuery = {
  getCompany:  {
    __typename: "Company",
    id: string,
    name: string,
  } | null,
};

export type ListCompanysQueryVariables = {
  filter?: ModelCompanyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCompanysQuery = {
  listCompanys:  {
    __typename: "ModelCompanyConnection",
    items:  Array< {
      __typename: "Company",
      id: string,
      name: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateCardSubscription = {
  onCreateCard:  {
    __typename: "Card",
    id: string,
    year: string,
    playerID: string,
    teamID: string,
    companyID: string,
    player:  {
      __typename: "Player",
      id: string,
      firstName: string,
      lastName: string,
    } | null,
    team:  {
      __typename: "Team",
      id: string,
      name: string,
      city: string,
    } | null,
    company:  {
      __typename: "Company",
      id: string,
      name: string,
    } | null,
  } | null,
};

export type OnUpdateCardSubscription = {
  onUpdateCard:  {
    __typename: "Card",
    id: string,
    year: string,
    playerID: string,
    teamID: string,
    companyID: string,
    player:  {
      __typename: "Player",
      id: string,
      firstName: string,
      lastName: string,
    } | null,
    team:  {
      __typename: "Team",
      id: string,
      name: string,
      city: string,
    } | null,
    company:  {
      __typename: "Company",
      id: string,
      name: string,
    } | null,
  } | null,
};

export type OnDeleteCardSubscription = {
  onDeleteCard:  {
    __typename: "Card",
    id: string,
    year: string,
    playerID: string,
    teamID: string,
    companyID: string,
    player:  {
      __typename: "Player",
      id: string,
      firstName: string,
      lastName: string,
    } | null,
    team:  {
      __typename: "Team",
      id: string,
      name: string,
      city: string,
    } | null,
    company:  {
      __typename: "Company",
      id: string,
      name: string,
    } | null,
  } | null,
};

export type OnCreatePlayerSubscription = {
  onCreatePlayer:  {
    __typename: "Player",
    id: string,
    firstName: string,
    lastName: string,
  } | null,
};

export type OnUpdatePlayerSubscription = {
  onUpdatePlayer:  {
    __typename: "Player",
    id: string,
    firstName: string,
    lastName: string,
  } | null,
};

export type OnDeletePlayerSubscription = {
  onDeletePlayer:  {
    __typename: "Player",
    id: string,
    firstName: string,
    lastName: string,
  } | null,
};

export type OnCreateTeamSubscription = {
  onCreateTeam:  {
    __typename: "Team",
    id: string,
    name: string,
    city: string,
  } | null,
};

export type OnUpdateTeamSubscription = {
  onUpdateTeam:  {
    __typename: "Team",
    id: string,
    name: string,
    city: string,
  } | null,
};

export type OnDeleteTeamSubscription = {
  onDeleteTeam:  {
    __typename: "Team",
    id: string,
    name: string,
    city: string,
  } | null,
};

export type OnCreateCompanySubscription = {
  onCreateCompany:  {
    __typename: "Company",
    id: string,
    name: string,
  } | null,
};

export type OnUpdateCompanySubscription = {
  onUpdateCompany:  {
    __typename: "Company",
    id: string,
    name: string,
  } | null,
};

export type OnDeleteCompanySubscription = {
  onDeleteCompany:  {
    __typename: "Company",
    id: string,
    name: string,
  } | null,
};
