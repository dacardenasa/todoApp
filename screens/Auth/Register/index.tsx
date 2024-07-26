import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";

import {
  Box,
  Button,
  Container,
  TextButton,
  TextField,
  Typography
} from "@/components";
import { RegisterProps } from "@/interfaces";

type UserFormProps = {
  username: string;
  password: string;
};

export const Register = ({ navigation }: RegisterProps) => {
  const [form, setForm] = useState<UserFormProps>({
    username: "",
    password: ""
  });

  const handleChangeField = (field: keyof UserFormProps, value: string) => {
    setForm((prevValues) => ({ ...prevValues, [field]: value }));
  };

  return (
    <Container style={styles.container}>
      <Box style={styles.formBox}>
        <Typography type="title" style={styles.titleLabel}>
          Register Form
        </Typography>
        <TextField
          value={form.username}
          placeholder="Type your username"
          onChangeText={(value) => handleChangeField("username", value)}
        />
        <TextField
          value={form.password}
          placeholder="Type your password"
          onChangeText={(value) => handleChangeField("password", value)}
          secureTextEntry
        />
        <Button
          label="Create account"
          handleOnPress={() => console.info("Register")}
        />
        <TextButton
          label="back to Login"
          handleOnPress={() => navigation.navigate("Login")}
        />
      </Box>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#AF47D2"
  },
  formBox: {
    width: "100%",
    rowGap: 16
  },
  titleLabel: {
    color: "white",
    textAlign: "center"
  }
});
