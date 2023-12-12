import * as style from "../styles/bottomBar";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const BottomBarSkeleton = () => {
  return (
    <style.Wrapper>
      <style.SkeletonTextWrapper>
        <Skeleton height={15} width={160} />
        <Skeleton height={20} width={100} />
        <Skeleton height={30} width={200} />
      </style.SkeletonTextWrapper>
    </style.Wrapper>
  );
};

export default BottomBarSkeleton;
