import * as React from "react";

import { apiRequest, RequestMethod, EndPoints } from "../../service";
import { useStoreContext } from "../.";
import { ActionType } from "../../store";
import { BaseBallCardType } from "../../types";

/**
 * Hook used to fetch all relevant data on initial load.
 */
export async function useInitializeApp() {
  const { dispatch } = useStoreContext();

  React.useEffect(() => {
    const initialize = async () => {
      const cards = await apiRequest<BaseBallCardType>({
        method: RequestMethod.GET,
        endpoint: EndPoints.BASE_BALL_CARDS
      });

      dispatch({
        type: ActionType.SET_CARDS,
        data: { cards }
      });
    };

    initialize();
  }, []);
}
