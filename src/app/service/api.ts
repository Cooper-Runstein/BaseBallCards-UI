import { apiToStore } from "./serializers";

const url = "http://127.0.0.1:8000";

export enum EndPoints {
  BASE_BALL_CARDS = "baseballcards"
}

export enum RequestMethod {
  DELETE = "DELETE",
  GET = "GET",
  PATCH = "PATCH",
  POST = "POST"
}

type ApiRequestType = {
  endpoint: EndPoints;
  method: RequestMethod;
  body?: any;
};

export const apiRequest = async ({
  endpoint,
  method,
  body
}: ApiRequestType) => {
  try {
    const result = await fetch(`${url}/${endpoint}/?format=json`, {
      method,
      body
    });

    const json = await result.json();
    return apiToStore(json);
  } catch (e) {
    console.warn(
      `Error in Request: url: ${endpoint} - method: ${method} - body: ${body} `
    );

    throw e;
  }
};
