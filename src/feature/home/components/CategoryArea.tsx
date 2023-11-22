import React, { useEffect } from "react";
import { getAllAccommodations } from "../../../api/accommodation";
import { useAllAccommodations } from "../../../hooks/queries/accommodation";

const CategoryArea = () => {
  // useEffect(() => {
  //   getAllAccommodations();
  // }, []);

  // const fetchData = async () => {
  //   const data = await getAllAccommodations();
  //   console.log("data", data);
  // };
  // fetchData();
  //const data = getAllAccommodations();
  // const data = useAllAccommodations();
  //console.log("data", data);

  return <div>CategoryArea</div>;
};

export default CategoryArea;
