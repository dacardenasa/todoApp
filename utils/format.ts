export const formatDate = (date: Date) => {
  const dateInstance = new Date(date);
  return `${dateInstance.getDay() + 1}/${
    dateInstance.getMonth() + 1
  }/${dateInstance.getFullYear()}`;
};
