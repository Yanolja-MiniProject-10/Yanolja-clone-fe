import { useQuery } from "@tanstack/react-query";
import { Wrapper } from "../styles/accommodationRoomList";
import AccommodationRoomItem from "./AccommodationRoomItem";
import { useParams } from "react-router-dom";
import instance from "../../../api/instance";
import * as style from "../styles/accommodationRoomItem";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const AccommodationRoomList = () => {
  const { id } = useParams();

  {
    /* 추후 분리 */
  }
  const { status, data, error } = useQuery({
    queryKey: ["getAccommodationInfoData"],
    queryFn: async () => {
      const startDate = "2023-11-21";
      const endDate = "2023-11-22";
      const guest = 2;

      const { data } = await instance.get(`/accommodations/${id}`, {
        params: {
          startDate,
          endDate,
          guest,
          accommodationId: id,
        },
      });
      return data;
    },
  });

  if (status === "pending") {
    return (
      <Wrapper>
        {[...Array(4)].map((_, index) => (
          <style.Box key={index}>
            <style.RoomImgWrapper>
              <Skeleton width={300} height={150} />
            </style.RoomImgWrapper>
            <style.SkeletonRoomInfo>
              <style.SkeletonRoomTopWrapper>
                <Skeleton height={30} width={180} />
                <Skeleton width={280} height={20} />
              </style.SkeletonRoomTopWrapper>
              <Skeleton height={25} width={170} />
            </style.SkeletonRoomInfo>
          </style.Box>
        ))}
      </Wrapper>
    );
  } else if (status === "error") {
    console.log(error.message, ": 알 수 없는 오류입니다.");
  }

  return (
    <Wrapper>
      {data.data.roomOptions.map(room => (
        <AccommodationRoomItem
          key={room.id}
          id={room.id}
          accommodationId={id}
          name={room.name}
          img={room.roomOptionImage.mainImageUrls[0]}
          checkIn={room.checkInTime}
          checkOut={room.checkOutTime}
          price={room.price}
        />
      ))}
    </Wrapper>
  );
};

export default AccommodationRoomList;
