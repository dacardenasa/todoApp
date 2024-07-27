import React, { useState } from "react";

export const useForm = <T extends object>(state: T) => {
  const [form, setForm] = useState<T>(state);

  const handleChangeField = (field: keyof T, value: string) => {
    setForm((prevVal) => ({ ...prevVal, [field]: value }));
  };

  return {
    form,
    ...form,
    handleChangeField
  };
};
