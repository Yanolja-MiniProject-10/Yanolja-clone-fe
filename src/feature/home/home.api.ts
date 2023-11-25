import instance from "../../api/axios";
import * as dayjs from "dayjs";
import { RelatedProps } from "./home.types";

const startDate = dayjs().format("YYYY-MM-DD");
const endDate = dayjs().add(1, "day").format("YYYY-MM-DD");

const requiredParams = {
  page: 0,
  size: 10,
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
  const response = await instance.get("/accommodations", { params: requiredParams });
  return response.data.data.content;
};

// {category,region}:RelatedProps 받기
// const category = "HOTEL_RESORT";
// const region = "SEOUL";
export const getRelatedAccommodations = async (relatedRequest: RelatedProps) => {
  const { category, region } = relatedRequest;
  const response = await instance.get(`/accommodations/related?category=${category}&region=${region}`, {
    params: requiredParams,
  });
  return response.data.data.content;
};

//region:string 받기
export const getRegionAccommodations = async (region: string) => {
  const response = await instance.get(`/accommodations/region?region=${region}`, { params: regionRequiredParams });
  return response.data.data.content;
};

export const getRankingAccommodations = async () => {
  const response = await instance.get("/accommodations/ranking", { params: rankingRequiredParams });
  return response.data.data.content;
};

export const getFestivalInfo = async () => {
  const response = await instance.get("/accommodations/festival", { params: festivalRequiredParams });
  console.log("festival", response);
  return response.data.data.content;
};
