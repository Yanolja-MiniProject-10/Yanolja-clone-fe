import instance from "../../api/axios";

const pageableData = {
  page: 0,
  size: 10,
};

export const getAllAccommodations = async () => {
  const response = await instance.get("/accommodations", { params: pageableData });
  return response.data.data.content;
};

// category:string (HOTEL_RESORT)
export const getRelatedAccommodations = async () => {
  const response = await instance.get("/accommodations/related", { params: pageableData });
  return response.data.data.content;
};

// const params = {
//   pageable: {
//     page: 0,
//     size: 3,
//   },
//   region: "SEOUL",
// };
//region:string
export const getRegionAccommodations = async () => {
  const response = await instance.get("/accommodations/region?page=0&size=3&region=SEOUL");
  return response.data.data.content;
};

export const getRankingAccommodations = async () => {
  const response = await instance.get("/accommodations/ranking", { params: pageableData });
  console.log("response", response);
  return response.data.data.content;
};

//console.log("response", response.data.data.content);
