import { NowResponse } from "@now/node";
import {
  fetchFeatures,
  attributeSpreader,
  normalizeKeys,
  matchCountryCode,
  getIso3Code
} from "../../util/data";
import { endpoints } from "../../util/endpoints";
import { queryRecovered } from "../../util/query";

export default async (_, response: NowResponse) => {
  response.json(
    (await fetchFeatures(endpoints.cases, queryRecovered()))
      .map(attributeSpreader)
      .map(normalizeKeys)
      .map(matchCountryCode)
      .map(getIso3Code)
  );
};
