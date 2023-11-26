import instance from "../../api/instance";

const accommodationDateData = {
  startDate: "2023-11-24",
  endDate: "2023-11-25",
  guest: 2,
};

export const getAllAccommodations = async () => {
  const response = await instance.get("/accommodations", { params: accommodationDateData });
  return response.data.data.content;
};
