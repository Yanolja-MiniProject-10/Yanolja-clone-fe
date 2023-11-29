import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const HomeContainerSkeleton = () => {
  const generateSkeletonRow = (count: number, width: number, height: number) => {
    const skeletons = [];
    for (let i = 0; i < count; i++) {
      skeletons.push(<Skeleton key={i} width={width} height={height} />);
    }
    return skeletons;
  };
  const commonMargin = "2rem 0 4rem";

  return (
    <>
      <Skeleton width={160} height={20} />
      <div style={{ margin: commonMargin, display: "flex", gap: "15px", overflow: "hidden" }}>
        {generateSkeletonRow(4, 160, 230)}
      </div>

      <Skeleton width={160} height={20} />
      <div style={{ margin: commonMargin, display: "flex", gap: "15px", overflow: "hidden" }}>
        {generateSkeletonRow(4, 160, 230)}
      </div>

      <Skeleton width={160} height={20} />
      <div style={{ margin: commonMargin, display: "flex", flexDirection: "column", gap: "15px" }}>
        <div style={{ display: "flex", justifyContent: "space-around" }}>{generateSkeletonRow(4, 40, 30)}</div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>{generateSkeletonRow(4, 160, 190)}</div>
      </div>

      <Skeleton width={160} height={20} />
      <div
        style={{
          margin: commonMargin,
          padding: "0 3%",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "2rem",
        }}
      >
        {generateSkeletonRow(6, 200, 100)}
      </div>
    </>
  );
};

export default HomeContainerSkeleton;
