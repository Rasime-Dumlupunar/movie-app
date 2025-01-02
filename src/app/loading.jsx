import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loading = () => {
  return (
    <SkeletonTheme
      baseColor="#3838"
      highlightColor="#444"
      height={50}
      width="100%"
    >
      <p>
        <Skeleton customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)" />
      </p>
    </SkeletonTheme>
  );
};

export default Loading;
