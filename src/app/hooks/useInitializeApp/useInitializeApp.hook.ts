import * as React from "react";

import { apiRequest, RequestMethod, EndPoints } from "../../service";
import { API, graphqlOperation } from "aws-amplify";

import { useStoreContext } from "../.";
import { ActionType } from "../../store";
import { listCards } from "../../../graphql/queries";
import { ListCardsQuery } from "../../../API";

/**
 * Hook used to fetch all relevant data on initial load.
 */
export async function useInitializeApp() {
  const { dispatch } = useStoreContext();

  React.useEffect(() => {
    const initialize = async () => {
      const response: { data: ListCardsQuery } = (await API.graphql(
        graphqlOperation(listCards)
      )) as { data: ListCardsQuery };

      dispatch({
        type: ActionType.SET_CARDS,
        data: response.data
      });
    };

    initialize();
  }, []);
}
