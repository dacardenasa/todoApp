import React, { useState } from "react";

export const useForm = <T extends object>(state: T) => {
  const [form, setForm] = useState<T>(state);

  const handleChangeField = (field: keyof T, value: unknown) => {
    setForm((prevVal) => ({ ...prevVal, [field]: value }));
  };

  const handleResetValues = () => {
    setForm(state);
  }

  return {
    form,
    ...form,
    handleChangeField,
    handleResetValues
  };
};
