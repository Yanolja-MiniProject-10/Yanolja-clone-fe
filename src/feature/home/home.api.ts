import instance from "../../api/instance";
import * as dayjs from "dayjs";
import { AccommodationResponse, FestivalResponse, RelatedProps } from "./home.types";

const startDate = dayjs().format("YYYY-MM-DD");
const endDate = dayjs().add(1, "day").format("YYYY-MM-DD");

const requiredParams = {
  page: 0,
  size: 20,
  startDate,
  endDate,
  guest: 2,
};

const regionRequiredParams = { ...requiredParams, size: 4 };

const rankingRequiredParams = { ...requiredParams, size: 6 };

const festivalRequiredParams = {
  page: 0,
  size: 10,
  eventStartDate: startDate,
};

export const getAllAccommodations = async () => {
  const response = await instance.get<AccommodationResponse>("/accommodations", { params: requiredParams });
  return response.data.data.content;
};

export const getRelatedAccommodations = async (relatedRequest: RelatedProps) => {
  const { category, region } = relatedRequest;
  const response = await instance.get<AccommodationResponse>(
    `/accommodations/related?category=${category}&region=${region}`,
    {
      params: requiredParams,
    },
  );
  return response.data.data.content;
};

export const getRegionAccommodations = async (region: string) => {
  const response = await instance.get<AccommodationResponse>(`/accommodations/region?region=${region}`, {
    params: regionRequiredParams,
  });
  return response.data.data.content;
};

export const getRankingAccommodations = async () => {
  const response = await instance.get<AccommodationResponse>("/accommodations/ranking", {
    params: rankingRequiredParams,
  });
  return response.data.data.content;
};

export const getFestivalInfo = async () => {
  const response = await instance.get<FestivalResponse>("/festival", { params: festivalRequiredParams });
  return response.data.data.content;
};
