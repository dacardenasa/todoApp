import React from "react";

import uuid from "react-native-uuid";

import { Box } from "@/components";
import { TaskCardSkeleton } from "./TaskCardSkeleton";

type TaskCardGroupProps = {
  skeletonNumber: number;
};

const _TaskCardGroup = ({ skeletonNumber }: TaskCardGroupProps) => {
  const list = new Array(skeletonNumber).fill("_");
  return (
    <Box style={{ width: "100%", rowGap: 16 }}>
      {list.map((_) => (
        <TaskCardSkeleton key={uuid.v4().toString()} />
      ))}
    </Box>
  );
};

export const TaskCardGroup = React.memo(_TaskCardGroup);
