import dayjs from "dayjs";
import instance from "../../api/instance";
import {
  AccommodationResponse,
  RelatedResponse,
  FestivalResponse,
  RegionList,
  RegionListResponse,
  RelatedProps,
} from "./home.types";

const dayJS: dayjs.Dayjs = dayjs();

const startDate = dayJS.format("YYYY-MM-DD");
const endDate = dayJS.add(1, "day").format("YYYY-MM-DD");

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
  try {
    const { category, region } = relatedRequest;
    const response: RelatedResponse = await instance.get<AccommodationResponse>(
      `/accommodations/related?category=${category}&region=${region}`,
      {
        params: requiredParams,
      },
    );
    return response.data.data.content;
  } catch (error) {
    alert("잘못된 접근입니다. 다시 시도해 주세요.");
    console.error(error);
  }
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

export const getRegionList = async () => {
  const response: RegionListResponse = await instance.get<RegionList>("/regions");
  return response.data.data.regions;
};
