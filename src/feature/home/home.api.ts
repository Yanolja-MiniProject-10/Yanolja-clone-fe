import instance from "../../api/axios";
import * as dayjs from "dayjs";

const startDate = dayjs().format("YYYY-MM-DD");
const endDate = dayjs().add(1, "day").format("YYYY-MM-DD");

const requiredData = {
  page: 0,
  size: 10,
  startDate,
  endDate,
  guest: 2,
};

const regionRequiredData = { ...requiredData, size: 4 };

const rankingRequiredData = { ...requiredData, size: 6 };

export const getAllAccommodations = async () => {
  const response = await instance.get("/accommodations", { params: requiredData });
  return response.data.data.content;
};

// category:string, region:string 받기
const category = "HOTEL_RESORT";
const region = "SEOUL";
export const getRelatedAccommodations = async () => {
  const response = await instance.get(`/accommodations/related?category=${category}&region=${region}`, {
    params: requiredData,
  });
  return response.data.data.content;
};

//region:string 받기
export const getRegionAccommodations = async (region: string) => {
  const response = await instance.get(`/accommodations/region?region=${region}`, { params: regionRequiredData });
  return response.data.data.content;
};

export const getRankingAccommodations = async () => {
  const response = await instance.get("/accommodations/ranking", { params: rankingRequiredData });
  console.log("ranking", response);
  return response.data.data.content;
};
