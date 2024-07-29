import React from "react";
import { Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { Box } from "@/components";
import { colors } from "@/constants/colors";

type HeaderRightBoxProps = {
  handleGoCreate: () => void;
  toggleModal: () => void;
};

const _HeaderRightBox = ({
  handleGoCreate,
  toggleModal,
}: HeaderRightBoxProps) => {
  return (
    <Box style={{ flexDirection: "row", columnGap: 16 }}>
      <Pressable onPress={handleGoCreate}>
        <FontAwesome name="plus-square" size={32} color={colors.low} />
      </Pressable>
      <Pressable onPress={toggleModal}>
        <FontAwesome name="power-off" size={32} color={colors.low} />
      </Pressable>
    </Box>
  );
};

export const HeaderRightBox = React.memo(_HeaderRightBox);
