import * as style from "../styles/accommodationRoomList";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const AccommodationRoomListSkeleton = () => {
  return (
    <style.Wrapper style={{ zIndex: 0 }}>
      {[...Array(4)].map((_, index) => (
        <style.SkeletonBox key={index}>
          <style.SkeletonRoomImgWrapper>
            <Skeleton width={270} height={180} style={{ borderRadius: "10px" }} />
          </style.SkeletonRoomImgWrapper>
          <style.RoomInfo>
            <style.SkeletonRoomTopWrapper>
              <Skeleton height={30} width={180} />
              <Skeleton width={240} height={20} />
            </style.SkeletonRoomTopWrapper>
            <Skeleton height={25} width={170} />
            <Skeleton height={15} width={100} />
          </style.RoomInfo>
        </style.SkeletonBox>
      ))}
    </style.Wrapper>
  );
};

export default AccommodationRoomListSkeleton;
