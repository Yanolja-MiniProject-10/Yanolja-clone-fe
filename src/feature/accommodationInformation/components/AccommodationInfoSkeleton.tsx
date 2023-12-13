import * as style from "../styles/accommodationInfo";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const AccommodationInfoSkeleton = () => {
  return (
    <style.Wrapper style={{ zIndex: 0 }}>
      <style.SkeletonImgWrapper>
        <Skeleton height={560} />
      </style.SkeletonImgWrapper>
      <style.TextInfo>
        <Skeleton height={30} width={150} />
        <Skeleton width={300} height={25} />
        <style.DivideLine />
        <style.AccommodationStaticDescWrap>
          <style.StaticDesc>숙소 소개</style.StaticDesc>
          <Skeleton />
          <Skeleton />
          <Skeleton width={200} />
        </style.AccommodationStaticDescWrap>
        <style.DivideLine />
      </style.TextInfo>
    </style.Wrapper>
  );
};

export default AccommodationInfoSkeleton;
