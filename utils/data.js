import axios from "axios";

export const getAlldoctors = async () => {
  const data = (await axios.get("URL")).data;
  return data;
};
