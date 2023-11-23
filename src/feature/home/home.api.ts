import instance from "../../api/axios";

//기본적으로 넘겨주기
const pageableData = {
  page: 0,
  size: 10,
};
// const defaultData = {
//   인원: 2,
//   방: 1,
//   시작날짜: "오늘",
//   끝나는날짜: "+2",
// };

export const getAllAccommodations = async () => {
  const response = await instance.get("/accommodations", { params: pageableData });
  return response.data.data.content;
};

// category:string, region:string
export const getRelatedAccommodations = async () => {
  const response = await instance.get("/accommodations/related", { params: pageableData });
  return response.data.data.content;
};

// const params = {
//   pageable: {
//     page: 0,
//     size: 3,
//   },
//region:string
export const getRegionAccommodations = async ({ region }) => {
  const response = await instance.get(`/accommodations/region?page=0&size=3&region=${region}`);
  return response.data.data.content;
};

export const getRankingAccommodations = async () => {
  const response = await instance.get("/accommodations/ranking", { params: pageableData });
  console.log("response", response);
  return response.data.data.content;
};

//console.log("response", response.data.data.content);
