import React from "react";

import { Box, Typography } from "@/components";
import { colors } from "@/constants/colors";
import { Pressable, StyleSheet } from "react-native";
import { formatDate } from "@/utils";
import { TaskCardProp } from "../models";

type TaskCardProps = TaskCardProp & {
  handleOnPressCard: () => void;
};

export const _TaskCard = ({
  content,
  date,
  title,
  handleOnPressCard
}: TaskCardProps) => {
  return (
    <Pressable onPress={handleOnPressCard}>
      <Box style={styles.container}>
        <Typography type="title" style={styles.label}>
          {title}
        </Typography>
        <Typography type="subtitle" style={styles.label}>
          Description:{" "}
        </Typography>
        <Typography type="default" style={styles.label}>
          {content}
        </Typography>
        <Typography type="subtitle" style={styles.label}>
          Limit Date:{" "}
        </Typography>
        <Typography type="default" style={styles.label}>
          {formatDate(new Date(date))}
        </Typography>
      </Box>
    </Pressable>
  );
};

export const TaskCard = React.memo(_TaskCard);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.hight,
    padding: 16,
    borderRadius: 16
  },
  label: {
    color: "white"
  }
});
