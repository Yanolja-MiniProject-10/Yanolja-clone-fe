import instance from "./axios";

const pageable = {
  page: 0,
  size: 1,
  sort: ["string"],
};

export const getAllAccommodations = async () => {
  const response = await instance.get("/accommodations");
  console.log("response", response);
  return response;
};

//, { params: pageable }

// export const getRelatedAccommodations = async () => {
//   const response = await instance.get("/accommodations");
//   console.log("response", response);
//   // return response.data.chats;
// };

export const getRegionAccommodations = async () => {
  const response = await instance.get("/accommodations");
  console.log("response", response);
  // return response.data.chats;
};

export const getRankingAccommodations = async () => {
  const response = await instance.get("/accommodations");
  console.log("response", response);
  // return response.data.chats;
};
